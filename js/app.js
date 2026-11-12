// Interfaccia del gioco: tutto ciò che tocca il DOM, localStorage e la sintesi vocale.
// Le regole (colori, validazione, statistiche) stanno in engine.js.

(() => {
  'use strict';

  const { MAX_TRIES } = Engine;
  const SYLLABLE_SET = new Set(SYLLABLES);

  const REVEAL_STEP_MS = 230; // pausa tra una casella e l'altra durante la rivelazione
  const REVEAL_TAIL_MS = 450; // durata dell'ultima casella
  const HANZI_HINT_AFTER = 3; // dopo quanti tentativi sbagliati compaiono i caratteri

  const MODES = {
    facile: { label: 'Facile', note: 'Solo lettere, senza toni.' },
    toni: { label: 'Con toni', note: 'Aggiungi il tono (1-5) a ogni sillaba: ni3hao3' },
  };

  const TONE_KEYS = [
    ['1', 'ā'],
    ['2', 'á'],
    ['3', 'ǎ'],
    ['4', 'à'],
    ['5', '·'],
  ];

  const STATE_LABEL = {
    correct: 'giusta',
    present: 'al posto sbagliato',
    absent: 'assente',
  };

  const REJECTION = {
    corta: (game) => `Completa tutte le ${game.target.text.length} caselle`,
    lettere: () => 'In questa modalità servono solo lettere',
    sillabe: () => 'Non è pinyin valido: controlla le sillabe',
    toni: () => 'Dopo ogni sillaba serve un tono da 1 a 5',
  };

  // ---------------------------------------------------------------- salvataggio

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // navigazione privata o archivio pieno: il gioco funziona lo stesso
      }
    },
  };

  function sanitizeStats(raw) {
    const ok =
      raw &&
      Array.isArray(raw.distribution) &&
      raw.distribution.length === MAX_TRIES &&
      ['played', 'won', 'streak', 'best'].every((k) => Number.isInteger(raw[k]));
    return ok ? raw : Engine.emptyStats();
  }

  const settings = { mode: 'facile', theme: null, ...store.get('cp.settings', {}) };
  if (!MODES[settings.mode]) settings.mode = 'facile';

  const savedStats = store.get('cp.stats', {});
  const stats = { facile: sanitizeStats(savedStats.facile), toni: sanitizeStats(savedStats.toni) };

  const savedSeen = store.get('cp.seen', {});
  const seen = {
    facile: Array.isArray(savedSeen.facile) ? savedSeen.facile : [],
    toni: Array.isArray(savedSeen.toni) ? savedSeen.toni : [],
  };

  // ---------------------------------------------------------------- stato

  const games = {}; // una partita per modalità: cambiando modalità non si perde il lavoro
  let busy = false; // vero mentre le caselle si girano

  function newGame(mode) {
    const pick = Engine.pickWord(WORDS, seen[mode]);
    seen[mode] = pick.seen;
    store.set('cp.seen', seen);
    return {
      mode,
      word: pick.word,
      target: Engine.buildTarget(pick.word.p, mode),
      rows: [], // { text, result }
      current: '',
      status: 'playing', // 'playing' | 'won' | 'lost'
      keyStates: {},
      hanziShown: false,
    };
  }

  function game() {
    if (!games[settings.mode]) games[settings.mode] = newGame(settings.mode);
    return games[settings.mode];
  }

  // ---------------------------------------------------------------- DOM

  const $ = (id) => document.getElementById(id);
  const boardEl = $('board');
  const keyboardEl = $('keyboard');
  const resultEl = $('result');
  const toastEl = $('toast');

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  let toastTimer;
  function toast(message) {
    toastEl.replaceChildren(el('span', '', message));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.replaceChildren(), 2200);
  }

  // ---------------------------------------------------------------- disegno

  function renderMode() {
    document.querySelectorAll('.mode button').forEach((button) => {
      button.setAttribute('aria-checked', String(button.dataset.mode === settings.mode));
    });
    $('mode-note').textContent = MODES[settings.mode].note;
  }

  function renderClue() {
    const g = game();
    const syllables = g.target.ends.length;
    const letters = Engine.syllablesOf(g.word.p).reduce((sum, s) => sum + s.letters.length, 0);
    $('clue-meaning').textContent = g.word.it;
    $('clue-facts').textContent =
      `${g.word.c}: ${syllables} ${syllables === 1 ? 'sillaba' : 'sillabe'}, ${letters} lettere`;

    const hanzi = $('clue-hanzi');
    const show = g.hanziShown || g.status !== 'playing';
    hanzi.textContent = show ? g.word.h : '？'.repeat([...g.word.h].length);
    hanzi.classList.toggle('shown', show);
    hanzi.setAttribute('aria-label', show ? `Caratteri: ${g.word.h}` : 'Caratteri nascosti');
    $('btn-hanzi').hidden = show;
    $('btn-giveup').hidden = g.status !== 'playing';
  }

  function renderBoard({ revealRow, popRow, popIndex } = {}) {
    const g = game();
    boardEl.style.setProperty('--n', g.target.text.length);
    boardEl.style.setProperty('--g', g.target.ends.length);
    boardEl.replaceChildren();

    for (let r = 0; r < MAX_TRIES; r++) {
      const row = el('div', 'row');
      row.setAttribute('role', 'row');
      const submitted = g.rows[r];
      const isCurrent = r === g.rows.length && g.status === 'playing';
      const text = submitted ? submitted.text : isCurrent ? g.current : '';

      let start = 0;
      for (const end of g.target.ends) {
        const group = el('div', 'syl');
        for (let i = start; i <= end; i++) {
          const tile = el('div', 'tile', text[i] || '');
          tile.setAttribute('role', 'gridcell');

          if (text[i]) tile.dataset.filled = '';
          if (submitted) {
            tile.dataset.state = submitted.result[i];
            if (r === revealRow) {
              tile.classList.add('reveal');
              tile.style.setProperty('--i', i);
            }
          }
          if (r === popRow && i === popIndex) tile.classList.add('pop');

          const state = submitted ? `, ${STATE_LABEL[submitted.result[i]]}` : '';
          tile.setAttribute('aria-label', text[i] ? `${text[i]}${state}` : 'vuota');
          group.append(tile);
        }
        start = end + 1;
        row.append(group);
      }
      boardEl.append(row);
    }
  }

  function keyButton(label, key, extraClass = '') {
    const button = el('button', `key ${extraClass}`.trim(), label);
    button.type = 'button';
    button.dataset.key = key;
    return button;
  }

  function renderKeyboard() {
    const g = game();
    keyboardEl.replaceChildren();
    keyboardEl.hidden = g.status !== 'playing'; // a partita finita al suo posto c'è il risultato
    if (keyboardEl.hidden) return;

    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    rows.forEach((letters, index) => {
      const row = el('div', 'key-row');
      if (index === 2) row.append(keyButton('Invio', 'Enter', 'wide'));
      for (const letter of letters) {
        const button = keyButton(letter, letter);
        if (letter === 'v') button.disabled = true; // nel pinyin di questo gioco la v non si usa
        if (g.keyStates[letter]) button.dataset.state = g.keyStates[letter];
        row.append(button);
      }
      if (index === 2) {
        const back = keyButton('⌫', 'Backspace', 'wide');
        back.setAttribute('aria-label', 'Cancella');
        row.append(back);
      }
      keyboardEl.append(row);
    });

    if (g.mode === 'toni') {
      const row = el('div', 'key-row');
      for (const [digit, mark] of TONE_KEYS) {
        const button = keyButton('', digit, 'tone');
        button.append(el('span', '', digit), el('small', '', mark));
        button.setAttribute('aria-label', `Tono ${digit}`);
        if (g.keyStates[digit]) button.dataset.state = g.keyStates[digit];
        row.append(button);
      }
      keyboardEl.append(row);
    }
  }

  function resultLine(g) {
    const tries = g.rows.length;
    if (g.status === 'won') return `Indovinata in ${tries} ${tries === 1 ? 'tentativo' : 'tentativi'}`;
    if (g.status === 'gaveup') return 'Ti sei arreso: ecco la soluzione';
    return 'Tentativi finiti: questa era la parola';
  }

  /** Il blocco "Com'è fatta": un riquadro per carattere, con pinyin e significato. */
  function buildAnatomy(word) {
    const info = Engine.describeWord(word);
    const box = el('div', 'anatomy');
    box.append(el('h3', '', "Com'è fatta"), el('p', 'anatomy-intro', info.intro));

    const list = el('ul', 'parts');
    for (const part of info.parts) {
      const item = el('li', 'part');
      const char = el('span', 'part-char', part.h);
      char.lang = 'zh-Hans';
      const text = el('span', 'part-text');
      text.append(el('strong', '', part.lead), ` ${part.rest}`);
      item.append(char, el('span', 'part-py', part.pinyin), text);
      list.append(item);
    }
    box.append(list);
    if (info.note) box.append(el('p', 'anatomy-note', info.note));
    return box;
  }

  function renderResult() {
    const g = game();
    if (g.status === 'playing') {
      resultEl.hidden = true;
      resultEl.replaceChildren();
      return;
    }

    const chars = [...g.word.h];
    const seal = el('div', `seal n${chars.length}`);
    seal.setAttribute('aria-hidden', 'true');
    seal.lang = 'zh-Hans';
    chars.forEach((c) => seal.append(el('span', '', c)));

    const text = el('div', 'result-text');
    text.append(
      el('p', 'result-pinyin', Engine.withToneMarks(g.word.p)),
      el('p', 'result-meaning', g.word.it),
      el('p', 'result-line', resultLine(g)),
    );

    const actions = el('div', 'result-actions');
    const again = el('button', 'primary', 'Nuova parola');
    again.type = 'button';
    again.id = 'btn-again';
    actions.append(again);
    if (speechAvailable) {
      const listen = el('button', 'ghost-btn', 'Ascolta');
      listen.type = 'button';
      listen.id = 'btn-listen';
      actions.append(listen);
    }

    resultEl.replaceChildren(seal, text, buildAnatomy(g.word), actions);
    resultEl.hidden = false;
  }

  function render(options) {
    renderMode();
    renderClue();
    renderBoard(options);
    renderKeyboard();
    renderResult();
  }

  // ---------------------------------------------------------------- partita

  function handleKey(key) {
    const g = game();
    if (busy || g.status !== 'playing') return;

    if (key === 'Enter') return submit();
    if (key === 'Backspace') {
      g.current = g.current.slice(0, -1);
      return renderBoard();
    }

    const isLetter = /^[a-z]$/.test(key) && key !== 'v';
    const isTone = g.mode === 'toni' && /^[1-5]$/.test(key);
    if (!isLetter && !isTone) return;
    if (g.current.length >= g.target.text.length) return;

    g.current += key;
    renderBoard({ popRow: g.rows.length, popIndex: g.current.length - 1 });
  }

  function submit() {
    const g = game();
    const check = Engine.validateGuess(g.current, g.mode, SYLLABLE_SET, g.target.text.length);

    if (!check.ok) {
      const row = boardEl.children[g.rows.length];
      row.classList.add('shake');
      row.addEventListener('animationend', () => row.classList.remove('shake'), { once: true });
      toast(REJECTION[check.reason](g));
      return;
    }

    const result = Engine.evaluate(g.current, g.target.text);
    const guess = g.current;
    g.rows.push({ text: guess, result });
    g.current = '';
    const won = result.every((state) => state === 'correct');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wait = reduceMotion ? 0 : (guess.length - 1) * REVEAL_STEP_MS + REVEAL_TAIL_MS;

    busy = true;
    renderBoard({ revealRow: g.rows.length - 1 });

    setTimeout(() => {
      busy = false;
      g.keyStates = Engine.updateKeyStates(g.keyStates, guess, result);

      if (won || g.rows.length >= MAX_TRIES) {
        finish(g, won);
      } else if (g.rows.length >= HANZI_HINT_AFTER && !g.hanziShown) {
        g.hanziShown = true;
        toast('Indizio: ecco i caratteri');
      }
      render();
      scrollToResult();
    }, wait);
  }

  function finish(g, won, gaveUp = false) {
    g.status = won ? 'won' : gaveUp ? 'gaveup' : 'lost';
    stats[g.mode] = Engine.recordResult(stats[g.mode], won, g.rows.length);
    store.set('cp.stats', stats);
  }

  function scrollToResult() {
    if (resultEl.hidden) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    resultEl.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  // La resa chiede una seconda pressione, per non arrendersi toccando per sbaglio.
  const GIVE_UP_LABEL = 'Mi arrendo';
  let giveUpTimer;

  function disarmGiveUp() {
    clearTimeout(giveUpTimer);
    const button = $('btn-giveup');
    button.textContent = GIVE_UP_LABEL;
    button.classList.remove('armed');
  }

  function onGiveUp() {
    const g = game();
    if (busy || g.status !== 'playing') return;

    const button = $('btn-giveup');
    if (!button.classList.contains('armed')) {
      button.textContent = 'Conferma resa';
      button.classList.add('armed');
      giveUpTimer = setTimeout(disarmGiveUp, 4000);
      return;
    }

    disarmGiveUp();
    g.current = '';
    finish(g, false, true); // conta come partita persa
    render();
    scrollToResult();
  }

  function startNewGame() {
    disarmGiveUp();
    games[settings.mode] = newGame(settings.mode);
    render();
  }

  function setMode(mode) {
    if (busy || !MODES[mode] || mode === settings.mode) return;
    disarmGiveUp();
    settings.mode = mode;
    store.set('cp.settings', settings);
    render();
  }

  // ---------------------------------------------------------------- voce

  const speechAvailable = 'speechSynthesis' in window && typeof SpeechSynthesisUtterance !== 'undefined';

  function speak() {
    if (!speechAvailable) return;
    const voices = speechSynthesis.getVoices();
    const chinese = voices.find((v) => v.lang && v.lang.replace('_', '-').toLowerCase().startsWith('zh'));
    if (voices.length > 0 && !chinese) {
      toast('Sul tuo dispositivo non c\'è una voce cinese');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(game().word.h);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.8;
    if (chinese) utterance.voice = chinese;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }

  // ---------------------------------------------------------------- finestre

  function openDialog(id) {
    const dialog = $(id);
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    dialog.scrollTop = 0; // il focus iniziale sul pulsante in fondo la farebbe aprire già scrollata
  }

  function renderStats() {
    const body = $('stats-body');
    body.replaceChildren();

    for (const mode of Object.keys(MODES)) {
      const s = stats[mode];
      const section = el('section', 'stats-mode');
      section.append(el('h3', '', MODES[mode].label));

      const grid = el('dl', 'stats-grid');
      const winRate = s.played ? Math.round((s.won / s.played) * 100) : 0;
      [
        ['Partite', s.played],
        ['Vinte', `${winRate}%`],
        ['Serie', s.streak],
        ['Record', s.best],
      ].forEach(([label, value]) => {
        const cell = el('div');
        cell.append(el('dt', '', label), el('dd', '', String(value)));
        grid.append(cell);
      });
      section.append(grid);

      const max = Math.max(1, ...s.distribution);
      const dist = el('ul', 'dist');
      dist.setAttribute('aria-label', 'Vittorie per numero di tentativi');
      s.distribution.forEach((count, index) => {
        const item = el('li');
        const bar = el('span', count > 0 ? 'bar has' : 'bar', String(count));
        bar.style.setProperty('--w', `${Math.max(8, (count / max) * 100)}%`);
        item.append(el('span', '', String(index + 1)), bar);
        dist.append(item);
      });
      section.append(dist);
      body.append(section);
    }
  }

  // ---------------------------------------------------------------- tema

  function applyTheme(theme) {
    if (theme) document.documentElement.dataset.theme = theme;
    else delete document.documentElement.dataset.theme;
  }

  function toggleTheme() {
    const current =
      document.documentElement.dataset.theme ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    settings.theme = current === 'dark' ? 'light' : 'dark';
    applyTheme(settings.theme);
    store.set('cp.settings', settings);
  }

  // ---------------------------------------------------------------- eventi

  keyboardEl.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-key]');
    if (button) handleKey(button.dataset.key);
  });

  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return;
    if (document.querySelector('dialog[open]')) return;
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (key === 'Enter' && event.target.closest('button, a')) return; // ci pensa il pulsante in focus
    if (key === 'Enter' || key === 'Backspace' || /^[a-z1-5]$/.test(key)) {
      event.preventDefault();
      handleKey(key);
    }
  });

  // Dopo un clic del mouse o un tocco il pulsante perde il focus, così Invio e le lettere
  // continuano ad andare alla griglia. Con la tastiera il focus resta (serve per navigare).
  document.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (button && event.detail > 0 && !button.closest('dialog')) button.blur();
  });

  document.querySelector('.mode').addEventListener('click', (event) => {
    const button = event.target.closest('button[data-mode]');
    if (button) setMode(button.dataset.mode);
  });

  resultEl.addEventListener('click', (event) => {
    if (event.target.closest('#btn-again')) startNewGame();
    if (event.target.closest('#btn-listen')) speak();
  });

  $('btn-help').addEventListener('click', () => openDialog('dlg-help'));
  $('btn-stats').addEventListener('click', () => {
    renderStats();
    openDialog('dlg-stats');
  });
  $('btn-theme').addEventListener('click', toggleTheme);
  $('btn-hanzi').addEventListener('click', () => {
    game().hanziShown = true;
    renderClue();
  });
  $('btn-speak').addEventListener('click', speak);
  $('btn-giveup').addEventListener('click', onGiveUp);

  // clic sullo sfondo = chiudi
  document.querySelectorAll('dialog').forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  // ---------------------------------------------------------------- avvio

  applyTheme(settings.theme);
  $('btn-speak').hidden = !speechAvailable;
  render();
})();
