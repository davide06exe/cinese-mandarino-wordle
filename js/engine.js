// Motore del gioco: nessun accesso a DOM o a localStorage, così si può testare con Node.
//
// Un "bersaglio" è una stringa di caselle (tile):
//   modalità "facile"  -> solo lettere        "nihao"    (2 sillabe)
//   modalità "toni"    -> lettere + toni      "ni3hao3"  (il numero del tono è una casella)
// Il tentativo è una stringa della stessa lunghezza. Le regole dei colori sono quelle
// del Wordle classico, applicate carattere per carattere.

const Engine = (() => {
  'use strict';

  const MAX_TRIES = 6;
  const MAX_SYLLABLE_LENGTH = 6; // "chuang", "shuang", "zhuang"
  const SYLLABLE_WITH_TONE = /[a-z]+[1-5]/g;

  const TONE_MARKS = {
    a: 'āáǎà',
    e: 'ēéěè',
    i: 'īíǐì',
    o: 'ōóǒò',
    u: 'ūúǔù',
  };

  // ---------------------------------------------------------------- parole

  /** "ni3hao3" -> [{ letters: "ni", tone: 3 }, { letters: "hao", tone: 3 }] */
  function syllablesOf(numbered) {
    const pieces = numbered.match(SYLLABLE_WITH_TONE) || [];
    return pieces.map((piece) => ({
      letters: piece.slice(0, -1),
      tone: Number(piece.slice(-1)),
    }));
  }

  /** Costruisce il bersaglio per una modalità. `ends` = indice dell'ultima casella di ogni sillaba. */
  function buildTarget(numbered, mode) {
    const syllables = syllablesOf(numbered);
    let text = '';
    const ends = [];
    for (const { letters, tone } of syllables) {
      text += letters;
      if (mode === 'toni') text += tone;
      ends.push(text.length - 1);
    }
    return { text, ends };
  }

  /** Aggiunge il segno del tono sulla vocale giusta: ("hao", 3) -> "hǎo". */
  function markSyllable(letters, tone) {
    if (tone < 1 || tone > 4) return letters; // tono neutro: nessun segno
    let at = letters.indexOf('a');
    if (at < 0) at = letters.indexOf('e');
    if (at < 0 && letters.includes('ou')) at = letters.indexOf('o');
    if (at < 0) {
      // altrimenti l'ultima vocale (shui -> shuǐ, niu -> niú)
      for (let i = letters.length - 1; i >= 0; i--) {
        if ('aeiou'.includes(letters[i])) {
          at = i;
          break;
        }
      }
    }
    if (at < 0) return letters;
    return letters.slice(0, at) + TONE_MARKS[letters[at]][tone - 1] + letters.slice(at + 1);
  }

  /** "ni3hao3" -> "nǐ hǎo" */
  function withToneMarks(numbered) {
    return syllablesOf(numbered)
      .map(({ letters, tone }) => markSyllable(letters, tone))
      .join(' ');
  }

  // ---------------------------------------------------------------- tentativi

  /**
   * Colora un tentativo. Due passaggi, come nel Wordle originale:
   *  1) segna le caselle esatte e conta le lettere del bersaglio rimaste "libere";
   *  2) le altre sono "present" solo finché restano lettere libere, altrimenti "absent".
   * Il secondo passaggio evita di colorare di giallo più caselle di quante lettere ci siano.
   */
  function evaluate(guess, target) {
    if (guess.length !== target.length) {
      throw new Error(`Lunghezze diverse: ${guess.length} e ${target.length}`);
    }
    const result = new Array(target.length).fill('absent');
    const free = {};

    for (let i = 0; i < target.length; i++) {
      if (guess[i] === target[i]) result[i] = 'correct';
      else free[target[i]] = (free[target[i]] || 0) + 1;
    }
    for (let i = 0; i < target.length; i++) {
      if (result[i] === 'correct') continue;
      if (free[guess[i]] > 0) {
        result[i] = 'present';
        free[guess[i]]--;
      }
    }
    return result;
  }

  /** Vero se `text` si può spezzare in sillabe pinyin valide (programmazione dinamica). */
  function canSplitIntoSyllables(text, syllableSet) {
    const reachable = new Array(text.length + 1).fill(false);
    reachable[0] = true;
    for (let end = 1; end <= text.length; end++) {
      for (let size = 1; size <= Math.min(MAX_SYLLABLE_LENGTH, end); size++) {
        if (reachable[end - size] && syllableSet.has(text.slice(end - size, end))) {
          reachable[end] = true;
          break;
        }
      }
    }
    return reachable[text.length];
  }

  /**
   * Controlla un tentativo completo. Restituisce { ok: true } oppure { ok: false, reason }
   * con reason in: "corta" | "lettere" | "sillabe" | "toni".
   */
  function validateGuess(guess, mode, syllableSet, expectedLength) {
    if (guess.length !== expectedLength) return { ok: false, reason: 'corta' };

    if (mode === 'facile') {
      if (!/^[a-z]+$/.test(guess)) return { ok: false, reason: 'lettere' };
      return canSplitIntoSyllables(guess, syllableSet) ? { ok: true } : { ok: false, reason: 'sillabe' };
    }

    // modalità "toni": ogni sillaba è lettere + cifra 1-5
    const pieces = guess.match(SYLLABLE_WITH_TONE) || [];
    if (pieces.join('') !== guess) return { ok: false, reason: 'toni' };
    for (const piece of pieces) {
      if (!syllableSet.has(piece.slice(0, -1))) return { ok: false, reason: 'sillabe' };
    }
    return { ok: true };
  }

  const STATE_RANK = { absent: 1, present: 2, correct: 3 };

  /** Aggiorna lo stato dei tasti: vince sempre il colore "migliore" già visto. */
  function updateKeyStates(keyStates, guess, result) {
    const next = { ...keyStates };
    for (let i = 0; i < guess.length; i++) {
      const key = guess[i];
      if (!next[key] || STATE_RANK[result[i]] > STATE_RANK[next[key]]) next[key] = result[i];
    }
    return next;
  }

  // ---------------------------------------------------------------- scelta della parola

  /**
   * Sceglie una parola non ancora vista. Quando le ha viste tutte, ricomincia il giro.
   * `seen` contiene i caratteri cinesi (non gli indici, che cambierebbero se il vocabolario cambia).
   */
  function pickWord(words, seen, random = Math.random) {
    let pool = words.filter((word) => !seen.includes(word.h));
    let history = seen;
    if (pool.length === 0) {
      pool = words;
      history = [];
    }
    const word = pool[Math.floor(random() * pool.length)];
    return { word, seen: [...history, word.h] };
  }

  // ---------------------------------------------------------------- statistiche

  function emptyStats() {
    return { played: 0, won: 0, streak: 0, best: 0, distribution: new Array(MAX_TRIES).fill(0) };
  }

  /** Restituisce nuove statistiche dopo una partita. `tries` = numero di tentativi usati. */
  function recordResult(stats, won, tries) {
    const next = { ...stats, distribution: [...stats.distribution] };
    next.played += 1;
    if (won) {
      next.won += 1;
      next.streak += 1;
      next.best = Math.max(next.best, next.streak);
      next.distribution[tries - 1] += 1;
    } else {
      next.streak = 0;
    }
    return next;
  }

  return {
    MAX_TRIES,
    syllablesOf,
    buildTarget,
    markSyllable,
    withToneMarks,
    evaluate,
    canSplitIntoSyllables,
    validateGuess,
    updateKeyStates,
    pickWord,
    emptyStats,
    recordResult,
  };
})();

if (typeof module !== 'undefined') module.exports = Engine;
