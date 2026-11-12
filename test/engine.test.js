const test = require('node:test');
const assert = require('node:assert/strict');

const Engine = require('../js/engine.js');
const WORDS = require('../js/words.js');
const SYLLABLES = require('../js/syllables.js');

const syllableSet = new Set(SYLLABLES);

test('evaluate: tentativo esatto', () => {
  assert.deepEqual(Engine.evaluate('nihao', 'nihao'), Array(5).fill('correct'));
});

test('evaluate: nessuna lettera in comune', () => {
  assert.deepEqual(Engine.evaluate('xxxx', 'nihao'.slice(0, 4)), Array(4).fill('absent'));
});

test('evaluate: le lettere doppie non diventano gialle più volte del dovuto', () => {
  // bersaglio abbey, tentativo babes: le due b hanno una sola "b libera" dopo la b esatta
  assert.deepEqual(Engine.evaluate('babes', 'abbey'), ['present', 'present', 'correct', 'correct', 'absent']);
});

test('evaluate: lettera ripetuta nel tentativo ma una sola nel bersaglio', () => {
  // bersaglio mama, tentativo aaaa: solo le due "a" esatte restano verdi
  assert.deepEqual(Engine.evaluate('aaaa', 'mama'), ['absent', 'correct', 'absent', 'correct']);
});

test('evaluate: la casella esatta ha la precedenza sulla gialla', () => {
  // bersaglio xyza ha una sola "a", in ultima posizione: solo quella è verde, le altre "a" restano grigie
  assert.deepEqual(Engine.evaluate('aaaa', 'xyza'), ['absent', 'absent', 'absent', 'correct']);
  // se la "a" esatta non c'è, la prima "a" del tentativo prende il giallo
  assert.deepEqual(Engine.evaluate('aabb', 'xyza'), ['present', 'absent', 'absent', 'absent']);
});

test('evaluate: i toni sono caselle come le altre', () => {
  assert.deepEqual(Engine.evaluate('ni3men5', 'ni3hao3'), [
    'correct', 'correct', 'correct', 'absent', 'absent', 'absent', 'absent',
  ]);
  // il tono 3 è giusto ma nel posto sbagliato (nel bersaglio sta in fondo): giallo
  const risultato = Engine.evaluate('wo3men5', 'ni2hao3');
  assert.equal(risultato[2], 'present');
  assert.equal(risultato[6], 'absent');
});

test('evaluate: lunghezze diverse sono un errore', () => {
  assert.throws(() => Engine.evaluate('ni', 'nihao'));
});

test('buildTarget: modalità facile e con toni', () => {
  assert.deepEqual(Engine.buildTarget('ni3hao3', 'facile'), { text: 'nihao', ends: [1, 4] });
  assert.deepEqual(Engine.buildTarget('ni3hao3', 'toni'), { text: 'ni3hao3', ends: [2, 6] });
  assert.deepEqual(Engine.buildTarget('shui3', 'facile'), { text: 'shui', ends: [3] });
});

test('withToneMarks: posizione del segno del tono', () => {
  const casi = {
    'ni3hao3': 'nǐ hǎo',
    'xue2sheng5': 'xué sheng',
    'shui3': 'shuǐ',
    'niu2nai3': 'niú nǎi',
    'hou4mian5': 'hòu mian',
    'ma1ma5': 'mā ma',
    'yue4liang5': 'yuè liang',
    'zhong1guo2': 'zhōng guó',
    'jie3jie5': 'jiě jie',
    'er2zi5': 'ér zi',
    'dui4bu5qi3': 'duì bu qǐ',
    'zhi1dao4': 'zhī dào',
    'you2xi4': 'yóu xì',
  };
  for (const [numbered, expected] of Object.entries(casi)) {
    assert.equal(Engine.withToneMarks(numbered), expected, numbered);
  }
});

test('canSplitIntoSyllables: casi ambigui e non validi', () => {
  assert.ok(Engine.canSplitIntoSyllables('xian', syllableSet)); // xian, ma anche xi + an
  assert.ok(Engine.canSplitIntoSyllables('nihao', syllableSet));
  assert.ok(Engine.canSplitIntoSyllables('shuijiao', syllableSet));
  assert.ok(!Engine.canSplitIntoSyllables('xyzab', syllableSet));
  assert.ok(Engine.canSplitIntoSyllables('niha', syllableSet)); // ni + ha, "ha" è una sillaba vera
  assert.ok(!Engine.canSplitIntoSyllables('nixa', syllableSet));
});

test('validateGuess: modalità facile', () => {
  const v = (guess, length) => Engine.validateGuess(guess, 'facile', syllableSet, length);
  assert.deepEqual(v('nihao', 5), { ok: true });
  assert.deepEqual(v('nih', 5), { ok: false, reason: 'corta' });
  assert.deepEqual(v('ni3ha', 5), { ok: false, reason: 'lettere' });
  assert.deepEqual(v('xyzab', 5), { ok: false, reason: 'sillabe' });
});

test('validateGuess: modalità con toni', () => {
  const v = (guess, length) => Engine.validateGuess(guess, 'toni', syllableSet, length);
  assert.deepEqual(v('ni3hao3', 7), { ok: true });
  assert.deepEqual(v('wo3men5', 7), { ok: true });
  assert.deepEqual(v('nihao33', 7), { ok: false, reason: 'toni' });
  assert.deepEqual(v('ni3hao0', 7), { ok: false, reason: 'toni' });
  assert.deepEqual(v('nx3hao3', 7), { ok: false, reason: 'sillabe' });
  assert.deepEqual(v('ni3hao', 7), { ok: false, reason: 'corta' });
});

test('ogni parola del vocabolario si può indovinare in entrambe le modalità', () => {
  for (const word of WORDS) {
    for (const mode of ['facile', 'toni']) {
      const { text } = Engine.buildTarget(word.p, mode);
      assert.deepEqual(
        Engine.validateGuess(text, mode, syllableSet, text.length),
        { ok: true },
        `${word.h} (${word.p}) in modalità ${mode}`,
      );
    }
  }
});

test('vocabolario: forma dei dati', () => {
  const visti = new Set();
  for (const word of WORDS) {
    assert.ok(!visti.has(word.h), `duplicato ${word.h}`);
    visti.add(word.h);
    const syllables = Engine.syllablesOf(word.p);
    assert.equal(syllables.length, [...word.h].length, `${word.h}: caratteri e sillabe`);
    const letters = syllables.reduce((n, s) => n + s.letters.length, 0);
    assert.ok(letters >= 4 && letters <= 8, `${word.h}: ${letters} lettere`);
    assert.ok(word.it && word.c, `${word.h}: significato e categoria`);
  }
});

test('updateKeyStates: vince il colore migliore', () => {
  let keys = Engine.updateKeyStates({}, 'ab', ['present', 'absent']);
  assert.deepEqual(keys, { a: 'present', b: 'absent' });
  keys = Engine.updateKeyStates(keys, 'aa', ['correct', 'absent']);
  assert.equal(keys.a, 'correct'); // non torna a "absent"
  keys = Engine.updateKeyStates(keys, 'bb', ['present', 'present']);
  assert.equal(keys.b, 'present');
});

test('pickWord: nessuna ripetizione finché ci sono parole nuove, poi ricomincia', () => {
  const words = [{ h: 'A' }, { h: 'B' }, { h: 'C' }];
  let seen = [];
  const scelte = [];
  for (let i = 0; i < 3; i++) {
    const pick = Engine.pickWord(words, seen);
    scelte.push(pick.word.h);
    seen = pick.seen;
  }
  assert.deepEqual([...scelte].sort(), ['A', 'B', 'C']);
  const next = Engine.pickWord(words, seen);
  assert.deepEqual(next.seen, [next.word.h]); // giro nuovo
});

test('recordResult: vittorie, serie e distribuzione', () => {
  let stats = Engine.emptyStats();
  stats = Engine.recordResult(stats, true, 3);
  stats = Engine.recordResult(stats, true, 1);
  assert.deepEqual(stats, { played: 2, won: 2, streak: 2, best: 2, distribution: [1, 0, 1, 0, 0, 0] });
  stats = Engine.recordResult(stats, false, 6);
  assert.equal(stats.streak, 0);
  assert.equal(stats.best, 2);
  assert.equal(stats.played, 3);
});

test('describePart: le quattro situazioni', () => {
  assert.deepEqual(Engine.describePart({ h: '电', m: 'elettricità', k: 's' }), {
    lead: 'Da solo è una parola:',
    rest: '«elettricità».',
  });
  assert.deepEqual(Engine.describePart({ h: '校', m: 'scuola', k: 'n' }), {
    lead: 'Da solo non si usa come parola,',
    rest: 'ma significa «scuola».',
  });
  assert.deepEqual(Engine.describePart({ h: '子', m: 'è un suffisso dei sostantivi', k: 'x' }), {
    lead: 'Da solo non ha significato:',
    rest: 'è un suffisso dei sostantivi.',
  });
  assert.deepEqual(Engine.describePart({ h: '大', m: 'di solito vuol dire «grande»', k: 'f' }), {
    lead: 'Qui conta solo il suono,',
    rest: 'non il significato (di solito vuol dire «grande»).',
  });
  assert.throws(() => Engine.describePart({ h: '?', m: 'x', k: 'q' }));
});

test('describeWord: parola di due caratteri', () => {
  const word = WORDS.find((w) => w.h === '电话');
  const info = Engine.describeWord(word);
  assert.equal(info.intro, 'Due caratteri, una sillaba per carattere.');
  assert.equal(info.parts.length, 2);
  assert.deepEqual(info.parts[0], {
    h: '电',
    pinyin: 'diàn',
    lead: 'Da solo è una parola:',
    rest: '«elettricità».',
  });
  assert.equal(info.parts[1].pinyin, 'huà');
  assert.equal(info.note, 'Letteralmente «parola elettrica».');
});

test('describeWord: un carattere senza significato proprio viene detto esplicitamente', () => {
  const info = Engine.describeWord(WORDS.find((w) => w.h === '椅子'));
  assert.equal(info.parts[0].lead, 'Da solo non si usa come parola,');
  assert.equal(info.parts[1].lead, 'Da solo non ha significato:');
  assert.equal(info.parts[1].pinyin, 'zi'); // tono neutro: nessun segno
});

test('describeWord: parola di un solo carattere e parola di tre', () => {
  assert.equal(Engine.describeWord(WORDS.find((w) => w.h === '水')).intro, 'Un solo carattere.');
  assert.equal(
    Engine.describeWord(WORDS.find((w) => w.h === '意大利')).intro,
    'Tre caratteri, una sillaba per carattere.',
  );
});

test('vocabolario: ogni carattere ha la sua descrizione, nell\'ordine giusto', () => {
  const stati = new Set(['s', 'n', 'x', 'f']);
  for (const word of WORDS) {
    const chars = [...word.h];
    assert.equal(word.parts.length, chars.length, `${word.h}: numero di parti`);
    word.parts.forEach((part, i) => {
      assert.equal(part.h, chars[i], `${word.h}: carattere ${i + 1}`);
      assert.ok(stati.has(part.k), `${word.h}: stato ${part.k}`);
      assert.ok(part.m && part.m.trim(), `${word.h}: significato di ${part.h}`);
      assert.ok(!part.m.endsWith('.'), `${word.h}: il significato di ${part.h} non deve finire con un punto`);
    });
    if (word.n) assert.ok(word.n.endsWith('.'), `${word.h}: la nota deve finire con un punto`);
    const info = Engine.describeWord(word); // non deve lanciare errori
    assert.equal(info.parts.length, chars.length);
  }
});
