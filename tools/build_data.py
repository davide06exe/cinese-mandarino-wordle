#!/usr/bin/env python3
"""Genera js/words.js e js/syllables.js a partire da tools/vocabolario.txt.

Cosa controlla (e cosa fa fallire lo script):
  * il formato di ogni riga e la forma del pinyin (sillabe + numero del tono 1-5);
  * il numero di caratteri = numero di sillabe;
  * da 4 a 8 lettere di pinyin, massimo 3 sillabe, niente ü;
  * le parole duplicate;
  * che ogni sillaba esista davvero nel pinyin standard;
  * la colonna "parti": una per carattere, nello stesso ordine, con uno stato valido.

Cosa segnala soltanto (WARNING): le differenze tra i toni scritti a mano e quelli
calcolati dalla libreria pypinyin, da controllare a occhio.

Uso:  pip install pypinyin   e poi   python3 tools/build_data.py
"""

import json
import re
import sys
from pathlib import Path

from pypinyin import Style, pinyin

RADICE = Path(__file__).resolve().parent.parent
SORGENTE = RADICE / "tools" / "vocabolario.txt"
OUT_PAROLE = RADICE / "js" / "words.js"
OUT_SILLABE = RADICE / "js" / "syllables.js"

MIN_LETTERE, MAX_LETTERE, MAX_SILLABE = 4, 8, 3
SILLABA_NUMERATA = re.compile(r"[a-z]+[1-5]")

# Stato di un carattere dentro la parola:
#   s = da solo è una parola
#   n = da solo non si usa, ma ha un significato che ritrovi in altre parole
#   x = da solo non ha significato (suffisso, sillaba che esiste solo in quella parola)
#   f = qui conta solo il suono (trascrizione di un nome straniero)
STATI = {"s", "n", "x", "f"}

# Parole in cui pypinyin sceglie una lettura diversa dal dizionario scolastico.
# Qui la lettura scelta a mano è quella giusta; le elenchiamo per non avere falsi allarmi.
ECCEZIONI_PYPINYIN = {
    "长": "chang2",  # qui "lungo" (cháng); pypinyin sceglie zhǎng ("crescere")
    "照片": "zhao4pian4",  # zhàopiàn; pypinyin propone la variante colloquiale piān
}


def sillabe_valide():
    """Tutte le sillabe senza tono che compaiono nelle letture dei caratteri comuni."""
    trovate = set()
    for codice in range(0x4E00, 0x9FFF + 1):
        for lettura in pinyin(chr(codice), style=Style.NORMAL, heteronym=True)[0]:
            trovate.add(lettura)
    # Teniamo solo le sillabe scritte con lettere a-z (niente ü/ê, niente m/n/ng isolate).
    sillabe = {s for s in trovate if re.fullmatch(r"[a-z]+", s) and s not in {"m", "n", "ng", "hm", "hng"}}
    return sorted(sillabe)


def tono_atteso(parola):
    """Pinyin numerato calcolato da pypinyin.

    pypinyin non conosce i toni neutri "da dizionario" (per lui 爸爸 è ba4ba4), quindi
    si usa solo per controllare lettere e toni pieni: dove noi scriviamo 5 il tono
    non viene confrontato (vedi differenze()).
    """
    sillabe = pinyin(parola, style=Style.TONE3, neutral_tone_with_five=True)
    return "".join(s[0] for s in sillabe)


def differenze(scritto, atteso):
    """True se le due versioni differiscono, ignorando i toni che noi segniamo neutri."""
    mie = SILLABA_NUMERATA.findall(scritto)
    sue = SILLABA_NUMERATA.findall(atteso)
    if len(mie) != len(sue):
        return True
    for a, b in zip(mie, sue):
        if a[:-1] != b[:-1]:
            return True
        if a[-1] != "5" and a != b:
            return True
    return False


def leggi_parti(caratteri, testo):
    """Legge la colonna "parti": `电=elettricità/s;话=parola, discorso/s`.

    Una voce per carattere, nello stesso ordine: carattere=significato/stato.
    Restituisce (parti, errori).
    """
    elementi = [e.strip() for e in testo.split(";")]
    if len(elementi) != len(caratteri):
        return [], [f"{len(elementi)} parti per {len(caratteri)} caratteri"]

    parti, errori = [], []
    for carattere, elemento in zip(caratteri, elementi):
        resto, barra, stato = elemento.rpartition("/")
        stato = stato.strip()
        simbolo, uguale, significato = resto.partition("=")
        simbolo, significato = simbolo.strip(), significato.strip()
        if not barra or stato not in STATI:
            errori.append(f"{carattere}: serve uno stato tra {sorted(STATI)} dopo l'ultima '/' ({elemento!r})")
        elif simbolo != carattere:
            errori.append(f"{carattere}: la parte comincia con {simbolo!r}, non con il carattere atteso")
        elif not uguale or not significato:
            errori.append(f"{carattere}: manca il significato dopo '='")
        else:
            parti.append({"h": carattere, "m": significato, "k": stato})
    return parti, errori


def leggi_vocabolario(sillabe):
    errori, avvisi, parole, viste = [], [], [], set()
    insieme_sillabe = set(sillabe)

    for numero, riga in enumerate(SORGENTE.read_text(encoding="utf-8").splitlines(), start=1):
        riga = riga.strip()
        if not riga or riga.startswith("#"):
            continue
        campi = [c.strip() for c in riga.split("|")]
        if len(campi) not in (5, 6) or not all(campi[:5]):
            errori.append(f"riga {numero}: servono 5 campi (più la nota facoltativa) separati da '|' -> {riga!r}")
            continue
        caratteri, pinyin_num, italiano, categoria, testo_parti = campi[:5]
        nota = campi[5] if len(campi) == 6 else ""

        pezzi = SILLABA_NUMERATA.findall(pinyin_num)
        if "".join(pezzi) != pinyin_num:
            errori.append(f"riga {numero}: pinyin non valido {pinyin_num!r} (es. ni3hao3)")
            continue
        senza_toni = [p[:-1] for p in pezzi]
        lettere = sum(len(s) for s in senza_toni)

        if len(caratteri) != len(pezzi):
            errori.append(f"riga {numero}: {caratteri} ha {len(caratteri)} caratteri ma {len(pezzi)} sillabe")
        if len(pezzi) > MAX_SILLABE:
            errori.append(f"riga {numero}: {caratteri} ha più di {MAX_SILLABE} sillabe")
        if not MIN_LETTERE <= lettere <= MAX_LETTERE:
            errori.append(f"riga {numero}: {caratteri} ({pinyin_num}) ha {lettere} lettere, servono {MIN_LETTERE}-{MAX_LETTERE}")
        for s in senza_toni:
            if s not in insieme_sillabe:
                errori.append(f"riga {numero}: la sillaba {s!r} di {caratteri} non esiste nel pinyin")
        if caratteri in viste:
            errori.append(f"riga {numero}: parola duplicata {caratteri}")
        viste.add(caratteri)

        atteso = ECCEZIONI_PYPINYIN.get(caratteri, tono_atteso(caratteri))
        if differenze(pinyin_num, atteso):
            avvisi.append(f"{caratteri}: scritto {pinyin_num}, pypinyin dice {atteso}")
        if pinyin_num.endswith("5") and len(pezzi) == 1:
            avvisi.append(f"{caratteri}: una parola di una sillaba non dovrebbe avere il tono neutro")

        parti, errori_parti = leggi_parti(caratteri, testo_parti)
        errori.extend(f"riga {numero}: {e}" for e in errori_parti)

        parola = {"h": caratteri, "p": pinyin_num, "it": italiano, "c": categoria, "parts": parti}
        if nota:
            parola["n"] = nota
        parole.append(parola)

    return parole, errori, avvisi


def scrivi_js(percorso, commento, nome, dati):
    corpo = json.dumps(dati, ensure_ascii=False, indent=1)
    percorso.write_text(
        f"// {commento}\n// File generato da tools/build_data.py: non modificarlo a mano.\n"
        f"const {nome} = {corpo};\n\n"
        f"if (typeof module !== 'undefined') module.exports = {nome};\n",
        encoding="utf-8",
    )


def main():
    sillabe = sillabe_valide()
    parole, errori, avvisi = leggi_vocabolario(sillabe)

    for avviso in avvisi:
        print("WARNING", avviso)
    if errori:
        print()
        for errore in errori:
            print("ERRORE", errore)
        sys.exit(1)

    scrivi_js(OUT_PAROLE, "Vocabolario del gioco (da tools/vocabolario.txt).", "WORDS", parole)
    scrivi_js(OUT_SILLABE, "Sillabe pinyin valide, senza tono.", "SYLLABLES", sillabe)

    categorie = sorted({p["c"] for p in parole})
    print(f"OK: {len(parole)} parole in {len(categorie)} categorie, {len(sillabe)} sillabe valide.")


if __name__ == "__main__":
    main()
