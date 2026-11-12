// Vocabolario del gioco (da tools/vocabolario.txt).
// File generato da tools/build_data.py: non modificarlo a mano.
const WORDS = [
 {
  "h": "你好",
  "p": "ni3hao3",
  "it": "ciao",
  "c": "saluti",
  "parts": [
   {
    "h": "你",
    "m": "tu",
    "k": "s"
   },
   {
    "h": "好",
    "m": "bene, buono",
    "k": "s"
   }
  ],
  "n": "Letteralmente «tu bene»."
 },
 {
  "h": "谢谢",
  "p": "xie4xie5",
  "it": "grazie",
  "c": "saluti",
  "parts": [
   {
    "h": "谢",
    "m": "ringraziare",
    "k": "s"
   },
   {
    "h": "谢",
    "m": "ringraziare",
    "k": "s"
   }
  ],
  "n": "Raddoppiamento: il carattere si ripete e la seconda sillaba è in tono neutro."
 },
 {
  "h": "再见",
  "p": "zai4jian4",
  "it": "arrivederci",
  "c": "saluti",
  "parts": [
   {
    "h": "再",
    "m": "ancora, di nuovo",
    "k": "s"
   },
   {
    "h": "见",
    "m": "vedere, incontrare",
    "k": "s"
   }
  ],
  "n": "Letteralmente «rivedersi»."
 },
 {
  "h": "对不起",
  "p": "dui4bu5qi3",
  "it": "scusa, mi dispiace",
  "c": "saluti",
  "parts": [
   {
    "h": "对",
    "m": "giusto, di fronte a",
    "k": "s"
   },
   {
    "h": "不",
    "m": "non",
    "k": "s"
   },
   {
    "h": "起",
    "m": "alzarsi, reggere",
    "k": "n"
   }
  ],
  "n": "Letteralmente «non poter stare di fronte a (qualcuno)»."
 },
 {
  "h": "请问",
  "p": "qing3wen4",
  "it": "scusi, posso chiedere...?",
  "c": "saluti",
  "parts": [
   {
    "h": "请",
    "m": "per favore, invitare",
    "k": "s"
   },
   {
    "h": "问",
    "m": "chiedere",
    "k": "s"
   }
  ],
  "n": "Letteralmente «per favore, chiedere»."
 },
 {
  "h": "欢迎",
  "p": "huan1ying2",
  "it": "benvenuto",
  "c": "saluti",
  "parts": [
   {
    "h": "欢",
    "m": "gioioso",
    "k": "n"
   },
   {
    "h": "迎",
    "m": "accogliere",
    "k": "n"
   }
  ],
  "n": "Letteralmente «accogliere con gioia»."
 },
 {
  "h": "朋友",
  "p": "peng2you5",
  "it": "amico",
  "c": "persone",
  "parts": [
   {
    "h": "朋",
    "m": "amico",
    "k": "n"
   },
   {
    "h": "友",
    "m": "amico",
    "k": "n"
   }
  ],
  "n": "I due caratteri vogliono entrambi dire «amico»."
 },
 {
  "h": "学生",
  "p": "xue2sheng5",
  "it": "studente",
  "c": "persone",
  "parts": [
   {
    "h": "学",
    "m": "studiare",
    "k": "s"
   },
   {
    "h": "生",
    "m": "persona (come in 医生)",
    "k": "n"
   }
  ],
  "n": "Letteralmente «persona che studia»."
 },
 {
  "h": "老师",
  "p": "lao3shi1",
  "it": "insegnante",
  "c": "persone",
  "parts": [
   {
    "h": "老",
    "m": "vecchio",
    "k": "s"
   },
   {
    "h": "师",
    "m": "maestro",
    "k": "n"
   }
  ],
  "n": "老 qui non vuol dire «vecchio»: è un prefisso di rispetto. Letteralmente «rispettabile maestro»."
 },
 {
  "h": "医生",
  "p": "yi1sheng1",
  "it": "medico",
  "c": "persone",
  "parts": [
   {
    "h": "医",
    "m": "medicina",
    "k": "n"
   },
   {
    "h": "生",
    "m": "persona (come in 学生)",
    "k": "n"
   }
  ],
  "n": "Letteralmente «persona della medicina»."
 },
 {
  "h": "同学",
  "p": "tong2xue2",
  "it": "compagno di classe",
  "c": "persone",
  "parts": [
   {
    "h": "同",
    "m": "stesso, insieme",
    "k": "n"
   },
   {
    "h": "学",
    "m": "studiare",
    "k": "s"
   }
  ],
  "n": "Letteralmente «studiare insieme»."
 },
 {
  "h": "小姐",
  "p": "xiao3jie3",
  "it": "signorina",
  "c": "persone",
  "parts": [
   {
    "h": "小",
    "m": "piccolo",
    "k": "s"
   },
   {
    "h": "姐",
    "m": "sorella maggiore",
    "k": "s"
   }
  ],
  "n": "Letteralmente «giovane sorella maggiore»."
 },
 {
  "h": "警察",
  "p": "jing3cha2",
  "it": "poliziotto",
  "c": "persone",
  "parts": [
   {
    "h": "警",
    "m": "vigilare, avvertire",
    "k": "n"
   },
   {
    "h": "察",
    "m": "osservare",
    "k": "n"
   }
  ],
  "n": "Letteralmente «vigilare e osservare»."
 },
 {
  "h": "司机",
  "p": "si1ji1",
  "it": "autista",
  "c": "persone",
  "parts": [
   {
    "h": "司",
    "m": "gestire",
    "k": "n"
   },
   {
    "h": "机",
    "m": "macchina",
    "k": "n"
   }
  ],
  "n": "Letteralmente «chi gestisce la macchina»."
 },
 {
  "h": "孩子",
  "p": "hai2zi5",
  "it": "bambino",
  "c": "persone",
  "parts": [
   {
    "h": "孩",
    "m": "bambino",
    "k": "n"
   },
   {
    "h": "子",
    "m": "è un suffisso dei sostantivi",
    "k": "x"
   }
  ],
  "n": "Parola formata da «bambino» più il suffisso 子."
 },
 {
  "h": "大家",
  "p": "da4jia1",
  "it": "tutti",
  "c": "persone",
  "parts": [
   {
    "h": "大",
    "m": "grande",
    "k": "s"
   },
   {
    "h": "家",
    "m": "famiglia, casa",
    "k": "s"
   }
  ],
  "n": "Letteralmente «la grande famiglia»."
 },
 {
  "h": "名字",
  "p": "ming2zi5",
  "it": "nome",
  "c": "persone",
  "parts": [
   {
    "h": "名",
    "m": "nome",
    "k": "n"
   },
   {
    "h": "字",
    "m": "carattere scritto, lettera",
    "k": "s"
   }
  ],
  "n": "Letteralmente «nome + carattere scritto»."
 },
 {
  "h": "我们",
  "p": "wo3men5",
  "it": "noi",
  "c": "pronomi",
  "parts": [
   {
    "h": "我",
    "m": "io",
    "k": "s"
   },
   {
    "h": "们",
    "m": "è il segno del plurale per le persone",
    "k": "x"
   }
  ],
  "n": "«io» + segno del plurale = «noi»."
 },
 {
  "h": "你们",
  "p": "ni3men5",
  "it": "voi",
  "c": "pronomi",
  "parts": [
   {
    "h": "你",
    "m": "tu",
    "k": "s"
   },
   {
    "h": "们",
    "m": "è il segno del plurale per le persone",
    "k": "x"
   }
  ],
  "n": "«tu» + segno del plurale = «voi»."
 },
 {
  "h": "他们",
  "p": "ta1men5",
  "it": "loro",
  "c": "pronomi",
  "parts": [
   {
    "h": "他",
    "m": "lui",
    "k": "s"
   },
   {
    "h": "们",
    "m": "è il segno del plurale per le persone",
    "k": "x"
   }
  ],
  "n": "«lui» + segno del plurale = «loro»."
 },
 {
  "h": "什么",
  "p": "shen2me5",
  "it": "che cosa",
  "c": "domande",
  "parts": [
   {
    "h": "什",
    "m": "compare solo dentro 什么",
    "k": "x"
   },
   {
    "h": "么",
    "m": "compare solo in parole come 什么 e 怎么",
    "k": "x"
   }
  ],
  "n": "Parola indivisibile: i due caratteri vanno sempre insieme."
 },
 {
  "h": "怎么",
  "p": "zen3me5",
  "it": "come",
  "c": "domande",
  "parts": [
   {
    "h": "怎",
    "m": "come",
    "k": "n"
   },
   {
    "h": "么",
    "m": "compare solo in parole come 什么 e 怎么",
    "k": "x"
   }
  ],
  "n": "Parola che si usa sempre per intero."
 },
 {
  "h": "多少",
  "p": "duo1shao3",
  "it": "quanto, quanti",
  "c": "domande",
  "parts": [
   {
    "h": "多",
    "m": "molto",
    "k": "s"
   },
   {
    "h": "少",
    "m": "poco",
    "k": "s"
   }
  ],
  "n": "Letteralmente «molto + poco»: si chiede quanto è."
 },
 {
  "h": "爸爸",
  "p": "ba4ba5",
  "it": "papà",
  "c": "famiglia",
  "parts": [
   {
    "h": "爸",
    "m": "papà",
    "k": "s"
   },
   {
    "h": "爸",
    "m": "papà",
    "k": "s"
   }
  ],
  "n": "Raddoppiamento: il carattere si ripete e la seconda sillaba è in tono neutro."
 },
 {
  "h": "妈妈",
  "p": "ma1ma5",
  "it": "mamma",
  "c": "famiglia",
  "parts": [
   {
    "h": "妈",
    "m": "mamma",
    "k": "s"
   },
   {
    "h": "妈",
    "m": "mamma",
    "k": "s"
   }
  ],
  "n": "Raddoppiamento: il carattere si ripete e la seconda sillaba è in tono neutro."
 },
 {
  "h": "哥哥",
  "p": "ge1ge5",
  "it": "fratello maggiore",
  "c": "famiglia",
  "parts": [
   {
    "h": "哥",
    "m": "fratello maggiore",
    "k": "s"
   },
   {
    "h": "哥",
    "m": "fratello maggiore",
    "k": "s"
   }
  ],
  "n": "Raddoppiamento: il carattere si ripete e la seconda sillaba è in tono neutro."
 },
 {
  "h": "姐姐",
  "p": "jie3jie5",
  "it": "sorella maggiore",
  "c": "famiglia",
  "parts": [
   {
    "h": "姐",
    "m": "sorella maggiore",
    "k": "s"
   },
   {
    "h": "姐",
    "m": "sorella maggiore",
    "k": "s"
   }
  ],
  "n": "Raddoppiamento: il carattere si ripete e la seconda sillaba è in tono neutro."
 },
 {
  "h": "弟弟",
  "p": "di4di5",
  "it": "fratello minore",
  "c": "famiglia",
  "parts": [
   {
    "h": "弟",
    "m": "fratello minore",
    "k": "s"
   },
   {
    "h": "弟",
    "m": "fratello minore",
    "k": "s"
   }
  ],
  "n": "Raddoppiamento: il carattere si ripete e la seconda sillaba è in tono neutro."
 },
 {
  "h": "妹妹",
  "p": "mei4mei5",
  "it": "sorella minore",
  "c": "famiglia",
  "parts": [
   {
    "h": "妹",
    "m": "sorella minore",
    "k": "s"
   },
   {
    "h": "妹",
    "m": "sorella minore",
    "k": "s"
   }
  ],
  "n": "Raddoppiamento: il carattere si ripete e la seconda sillaba è in tono neutro."
 },
 {
  "h": "儿子",
  "p": "er2zi5",
  "it": "figlio",
  "c": "famiglia",
  "parts": [
   {
    "h": "儿",
    "m": "figlio, bambino",
    "k": "n"
   },
   {
    "h": "子",
    "m": "è un suffisso dei sostantivi",
    "k": "x"
   }
  ],
  "n": "Parola formata da «figlio» più il suffisso 子."
 },
 {
  "h": "太太",
  "p": "tai4tai5",
  "it": "signora, moglie",
  "c": "famiglia",
  "parts": [
   {
    "h": "太",
    "m": "molto, estremo",
    "k": "s"
   },
   {
    "h": "太",
    "m": "molto, estremo",
    "k": "s"
   }
  ],
  "n": "Raddoppiamento: insieme non vogliono dire «molto molto» ma «signora, moglie»."
 },
 {
  "h": "这里",
  "p": "zhe4li3",
  "it": "qui",
  "c": "luoghi",
  "parts": [
   {
    "h": "这",
    "m": "questo",
    "k": "s"
   },
   {
    "h": "里",
    "m": "dentro, luogo",
    "k": "n"
   }
  ],
  "n": "Letteralmente «questo luogo»."
 },
 {
  "h": "那里",
  "p": "na4li3",
  "it": "là",
  "c": "luoghi",
  "parts": [
   {
    "h": "那",
    "m": "quello",
    "k": "s"
   },
   {
    "h": "里",
    "m": "dentro, luogo",
    "k": "n"
   }
  ],
  "n": "Letteralmente «quel luogo»."
 },
 {
  "h": "前面",
  "p": "qian2mian5",
  "it": "davanti",
  "c": "luoghi",
  "parts": [
   {
    "h": "前",
    "m": "davanti",
    "k": "s"
   },
   {
    "h": "面",
    "m": "qui è un suffisso di posizione (lato)",
    "k": "x"
   }
  ],
  "n": "Letteralmente «lato davanti»."
 },
 {
  "h": "后面",
  "p": "hou4mian5",
  "it": "dietro",
  "c": "luoghi",
  "parts": [
   {
    "h": "后",
    "m": "dietro",
    "k": "s"
   },
   {
    "h": "面",
    "m": "qui è un suffisso di posizione (lato)",
    "k": "x"
   }
  ],
  "n": "Letteralmente «lato dietro»."
 },
 {
  "h": "里面",
  "p": "li3mian5",
  "it": "dentro",
  "c": "luoghi",
  "parts": [
   {
    "h": "里",
    "m": "dentro, luogo",
    "k": "n"
   },
   {
    "h": "面",
    "m": "qui è un suffisso di posizione (lato)",
    "k": "x"
   }
  ],
  "n": "Letteralmente «lato interno»."
 },
 {
  "h": "中国",
  "p": "zhong1guo2",
  "it": "Cina",
  "c": "luoghi",
  "parts": [
   {
    "h": "中",
    "m": "centro, mezzo",
    "k": "n"
   },
   {
    "h": "国",
    "m": "paese",
    "k": "n"
   }
  ],
  "n": "Letteralmente «paese di mezzo»."
 },
 {
  "h": "北京",
  "p": "bei3jing1",
  "it": "Pechino",
  "c": "luoghi",
  "parts": [
   {
    "h": "北",
    "m": "nord",
    "k": "s"
   },
   {
    "h": "京",
    "m": "capitale",
    "k": "n"
   }
  ],
  "n": "Letteralmente «capitale del nord»."
 },
 {
  "h": "上海",
  "p": "shang4hai3",
  "it": "Shanghai",
  "c": "luoghi",
  "parts": [
   {
    "h": "上",
    "m": "sopra, su",
    "k": "s"
   },
   {
    "h": "海",
    "m": "mare",
    "k": "s"
   }
  ],
  "n": "Letteralmente «sul mare»."
 },
 {
  "h": "意大利",
  "p": "yi4da4li4",
  "it": "Italia",
  "c": "luoghi",
  "parts": [
   {
    "h": "意",
    "m": "di solito vuol dire «idea, intenzione»",
    "k": "f"
   },
   {
    "h": "大",
    "m": "di solito vuol dire «grande»",
    "k": "f"
   },
   {
    "h": "利",
    "m": "di solito vuol dire «vantaggio»",
    "k": "f"
   }
  ],
  "n": "Trascrizione del suono del nome «Italia»: i caratteri sono scelti per come suonano, non per il significato."
 },
 {
  "h": "学校",
  "p": "xue2xiao4",
  "it": "scuola",
  "c": "luoghi",
  "parts": [
   {
    "h": "学",
    "m": "studiare",
    "k": "s"
   },
   {
    "h": "校",
    "m": "scuola",
    "k": "n"
   }
  ],
  "n": "Letteralmente «luogo dove si studia»."
 },
 {
  "h": "大学",
  "p": "da4xue2",
  "it": "università",
  "c": "luoghi",
  "parts": [
   {
    "h": "大",
    "m": "grande",
    "k": "s"
   },
   {
    "h": "学",
    "m": "studiare",
    "k": "s"
   }
  ],
  "n": "Letteralmente «grande scuola»."
 },
 {
  "h": "医院",
  "p": "yi1yuan4",
  "it": "ospedale",
  "c": "luoghi",
  "parts": [
   {
    "h": "医",
    "m": "medicina",
    "k": "n"
   },
   {
    "h": "院",
    "m": "istituto, edificio",
    "k": "n"
   }
  ],
  "n": "Letteralmente «istituto di medicina»."
 },
 {
  "h": "饭店",
  "p": "fan4dian4",
  "it": "ristorante, albergo",
  "c": "luoghi",
  "parts": [
   {
    "h": "饭",
    "m": "riso cotto, pasto",
    "k": "s"
   },
   {
    "h": "店",
    "m": "negozio",
    "k": "s"
   }
  ],
  "n": "Letteralmente «negozio di cibo»."
 },
 {
  "h": "银行",
  "p": "yin2hang2",
  "it": "banca",
  "c": "luoghi",
  "parts": [
   {
    "h": "银",
    "m": "argento",
    "k": "s"
   },
   {
    "h": "行",
    "m": "azienda, istituto",
    "k": "n"
   }
  ],
  "n": "Letteralmente «istituto d'argento». Qui 行 si legge háng, non xíng."
 },
 {
  "h": "超市",
  "p": "chao1shi4",
  "it": "supermercato",
  "c": "luoghi",
  "parts": [
   {
    "h": "超",
    "m": "oltre, super",
    "k": "n"
   },
   {
    "h": "市",
    "m": "mercato, città",
    "k": "n"
   }
  ],
  "n": "Letteralmente «super mercato»."
 },
 {
  "h": "公园",
  "p": "gong1yuan2",
  "it": "parco",
  "c": "luoghi",
  "parts": [
   {
    "h": "公",
    "m": "pubblico",
    "k": "n"
   },
   {
    "h": "园",
    "m": "giardino",
    "k": "n"
   }
  ],
  "n": "Letteralmente «giardino pubblico»."
 },
 {
  "h": "书店",
  "p": "shu1dian4",
  "it": "libreria",
  "c": "luoghi",
  "parts": [
   {
    "h": "书",
    "m": "libro",
    "k": "s"
   },
   {
    "h": "店",
    "m": "negozio",
    "k": "s"
   }
  ],
  "n": "Letteralmente «negozio di libri»."
 },
 {
  "h": "房间",
  "p": "fang2jian1",
  "it": "stanza",
  "c": "luoghi",
  "parts": [
   {
    "h": "房",
    "m": "casa, stanza",
    "k": "n"
   },
   {
    "h": "间",
    "m": "spazio, stanza",
    "k": "n"
   }
  ],
  "n": "I due caratteri richiamano entrambi l'idea di «stanza»."
 },
 {
  "h": "火车",
  "p": "huo3che1",
  "it": "treno",
  "c": "trasporti",
  "parts": [
   {
    "h": "火",
    "m": "fuoco",
    "k": "s"
   },
   {
    "h": "车",
    "m": "veicolo",
    "k": "s"
   }
  ],
  "n": "Letteralmente «veicolo a fuoco» (dai primi treni a vapore)."
 },
 {
  "h": "飞机",
  "p": "fei1ji1",
  "it": "aereo",
  "c": "trasporti",
  "parts": [
   {
    "h": "飞",
    "m": "volare",
    "k": "s"
   },
   {
    "h": "机",
    "m": "macchina",
    "k": "n"
   }
  ],
  "n": "Letteralmente «macchina volante»."
 },
 {
  "h": "汉语",
  "p": "han4yu3",
  "it": "lingua cinese",
  "c": "lingue",
  "parts": [
   {
    "h": "汉",
    "m": "Han (l'etnia cinese maggioritaria)",
    "k": "n"
   },
   {
    "h": "语",
    "m": "lingua",
    "k": "n"
   }
  ],
  "n": "Letteralmente «lingua Han»."
 },
 {
  "h": "中文",
  "p": "zhong1wen2",
  "it": "cinese (lingua)",
  "c": "lingue",
  "parts": [
   {
    "h": "中",
    "m": "Cina, centro",
    "k": "n"
   },
   {
    "h": "文",
    "m": "scrittura, lingua",
    "k": "n"
   }
  ],
  "n": "Letteralmente «lingua e scrittura della Cina»."
 },
 {
  "h": "英语",
  "p": "ying1yu3",
  "it": "inglese (lingua)",
  "c": "lingue",
  "parts": [
   {
    "h": "英",
    "m": "Inghilterra",
    "k": "n"
   },
   {
    "h": "语",
    "m": "lingua",
    "k": "n"
   }
  ],
  "n": "Letteralmente «lingua d'Inghilterra»."
 },
 {
  "h": "电话",
  "p": "dian4hua4",
  "it": "telefono",
  "c": "oggetti",
  "parts": [
   {
    "h": "电",
    "m": "elettricità",
    "k": "s"
   },
   {
    "h": "话",
    "m": "parola, discorso",
    "k": "s"
   }
  ],
  "n": "Letteralmente «parola elettrica»."
 },
 {
  "h": "电脑",
  "p": "dian4nao3",
  "it": "computer",
  "c": "oggetti",
  "parts": [
   {
    "h": "电",
    "m": "elettricità",
    "k": "s"
   },
   {
    "h": "脑",
    "m": "cervello",
    "k": "n"
   }
  ],
  "n": "Letteralmente «cervello elettrico»."
 },
 {
  "h": "电视",
  "p": "dian4shi4",
  "it": "televisione",
  "c": "oggetti",
  "parts": [
   {
    "h": "电",
    "m": "elettricità",
    "k": "s"
   },
   {
    "h": "视",
    "m": "vista, guardare",
    "k": "n"
   }
  ],
  "n": "Letteralmente «visione elettrica»."
 },
 {
  "h": "电影",
  "p": "dian4ying3",
  "it": "film",
  "c": "oggetti",
  "parts": [
   {
    "h": "电",
    "m": "elettricità",
    "k": "s"
   },
   {
    "h": "影",
    "m": "ombra, immagine",
    "k": "n"
   }
  ],
  "n": "Letteralmente «ombra elettrica»."
 },
 {
  "h": "手机",
  "p": "shou3ji1",
  "it": "cellulare",
  "c": "oggetti",
  "parts": [
   {
    "h": "手",
    "m": "mano",
    "k": "s"
   },
   {
    "h": "机",
    "m": "macchina",
    "k": "n"
   }
  ],
  "n": "Letteralmente «macchina da mano»."
 },
 {
  "h": "杯子",
  "p": "bei1zi5",
  "it": "bicchiere, tazza",
  "c": "oggetti",
  "parts": [
   {
    "h": "杯",
    "m": "tazza, bicchiere",
    "k": "n"
   },
   {
    "h": "子",
    "m": "è un suffisso dei sostantivi",
    "k": "x"
   }
  ],
  "n": "Parola formata da «bicchiere» più il suffisso 子."
 },
 {
  "h": "东西",
  "p": "dong1xi5",
  "it": "cosa, oggetto",
  "c": "oggetti",
  "parts": [
   {
    "h": "东",
    "m": "est",
    "k": "s"
   },
   {
    "h": "西",
    "m": "ovest",
    "k": "s"
   }
  ],
  "n": "Letteralmente «est e ovest». Con 西 in tono neutro vuol dire «cosa»; con il tono 1 (dōngxī) vuol dire proprio «est e ovest»."
 },
 {
  "h": "衣服",
  "p": "yi1fu5",
  "it": "vestiti",
  "c": "oggetti",
  "parts": [
   {
    "h": "衣",
    "m": "vestito",
    "k": "n"
   },
   {
    "h": "服",
    "m": "abito, indossare",
    "k": "n"
   }
  ],
  "n": "I due caratteri richiamano entrambi gli abiti."
 },
 {
  "h": "椅子",
  "p": "yi3zi5",
  "it": "sedia",
  "c": "oggetti",
  "parts": [
   {
    "h": "椅",
    "m": "sedia",
    "k": "n"
   },
   {
    "h": "子",
    "m": "è un suffisso dei sostantivi",
    "k": "x"
   }
  ],
  "n": "Parola formata da «sedia» più il suffisso 子."
 },
 {
  "h": "桌子",
  "p": "zhuo1zi5",
  "it": "tavolo",
  "c": "oggetti",
  "parts": [
   {
    "h": "桌",
    "m": "tavolo",
    "k": "n"
   },
   {
    "h": "子",
    "m": "è un suffisso dei sostantivi",
    "k": "x"
   }
  ],
  "n": "Parola formata da «tavolo» più il suffisso 子."
 },
 {
  "h": "窗户",
  "p": "chuang1hu5",
  "it": "finestra",
  "c": "oggetti",
  "parts": [
   {
    "h": "窗",
    "m": "finestra",
    "k": "n"
   },
   {
    "h": "户",
    "m": "porta, casa",
    "k": "n"
   }
  ],
  "n": "Letteralmente «finestra + porta»."
 },
 {
  "h": "照片",
  "p": "zhao4pian4",
  "it": "foto",
  "c": "oggetti",
  "parts": [
   {
    "h": "照",
    "m": "illuminare, fotografare",
    "k": "s"
   },
   {
    "h": "片",
    "m": "pezzo piatto, immagine",
    "k": "n"
   }
  ],
  "n": "Letteralmente «fotografare + immagine»."
 },
 {
  "h": "床",
  "p": "chuang2",
  "it": "letto",
  "c": "oggetti",
  "parts": [
   {
    "h": "床",
    "m": "letto",
    "k": "s"
   }
  ]
 },
 {
  "h": "钱",
  "p": "qian2",
  "it": "soldi",
  "c": "oggetti",
  "parts": [
   {
    "h": "钱",
    "m": "soldi, denaro",
    "k": "s"
   }
  ]
 },
 {
  "h": "今天",
  "p": "jin1tian1",
  "it": "oggi",
  "c": "tempo",
  "parts": [
   {
    "h": "今",
    "m": "oggi, adesso",
    "k": "n"
   },
   {
    "h": "天",
    "m": "giorno, cielo",
    "k": "s"
   }
  ],
  "n": "Letteralmente «questo giorno»."
 },
 {
  "h": "明天",
  "p": "ming2tian1",
  "it": "domani",
  "c": "tempo",
  "parts": [
   {
    "h": "明",
    "m": "luminoso (qui: prossimo)",
    "k": "n"
   },
   {
    "h": "天",
    "m": "giorno, cielo",
    "k": "s"
   }
  ],
  "n": "Letteralmente «il giorno prossimo»."
 },
 {
  "h": "昨天",
  "p": "zuo2tian1",
  "it": "ieri",
  "c": "tempo",
  "parts": [
   {
    "h": "昨",
    "m": "ieri",
    "k": "n"
   },
   {
    "h": "天",
    "m": "giorno, cielo",
    "k": "s"
   }
  ],
  "n": "Letteralmente «il giorno scorso»."
 },
 {
  "h": "现在",
  "p": "xian4zai4",
  "it": "adesso",
  "c": "tempo",
  "parts": [
   {
    "h": "现",
    "m": "attuale, presente",
    "k": "n"
   },
   {
    "h": "在",
    "m": "essere in, trovarsi",
    "k": "s"
   }
  ],
  "n": "Letteralmente «essere nel presente»."
 },
 {
  "h": "时候",
  "p": "shi2hou5",
  "it": "momento, tempo",
  "c": "tempo",
  "parts": [
   {
    "h": "时",
    "m": "tempo",
    "k": "n"
   },
   {
    "h": "候",
    "m": "aspettare, periodo",
    "k": "n"
   }
  ],
  "n": "Spesso vuol dire «quando»: 吃饭的时候 = «quando si mangia»."
 },
 {
  "h": "晚上",
  "p": "wan3shang5",
  "it": "sera",
  "c": "tempo",
  "parts": [
   {
    "h": "晚",
    "m": "tardi",
    "k": "s"
   },
   {
    "h": "上",
    "m": "qui è un suffisso di tempo",
    "k": "x"
   }
  ],
  "n": "Letteralmente «tardi»: 上 qui perde il suo significato di «sopra»."
 },
 {
  "h": "上午",
  "p": "shang4wu3",
  "it": "mattina",
  "c": "tempo",
  "parts": [
   {
    "h": "上",
    "m": "sopra, prima",
    "k": "s"
   },
   {
    "h": "午",
    "m": "mezzogiorno",
    "k": "n"
   }
  ],
  "n": "Letteralmente «prima di mezzogiorno»."
 },
 {
  "h": "下午",
  "p": "xia4wu3",
  "it": "pomeriggio",
  "c": "tempo",
  "parts": [
   {
    "h": "下",
    "m": "sotto, dopo",
    "k": "s"
   },
   {
    "h": "午",
    "m": "mezzogiorno",
    "k": "n"
   }
  ],
  "n": "Letteralmente «dopo mezzogiorno»."
 },
 {
  "h": "中午",
  "p": "zhong1wu3",
  "it": "mezzogiorno",
  "c": "tempo",
  "parts": [
   {
    "h": "中",
    "m": "centro, mezzo",
    "k": "n"
   },
   {
    "h": "午",
    "m": "mezzogiorno",
    "k": "n"
   }
  ]
 },
 {
  "h": "星期",
  "p": "xing1qi1",
  "it": "settimana",
  "c": "tempo",
  "parts": [
   {
    "h": "星",
    "m": "stella",
    "k": "n"
   },
   {
    "h": "期",
    "m": "periodo",
    "k": "n"
   }
  ],
  "n": "Letteralmente «periodo delle stelle»."
 },
 {
  "h": "今年",
  "p": "jin1nian2",
  "it": "quest'anno",
  "c": "tempo",
  "parts": [
   {
    "h": "今",
    "m": "oggi, questo",
    "k": "n"
   },
   {
    "h": "年",
    "m": "anno",
    "k": "s"
   }
  ],
  "n": "Letteralmente «anno presente»."
 },
 {
  "h": "去年",
  "p": "qu4nian2",
  "it": "anno scorso",
  "c": "tempo",
  "parts": [
   {
    "h": "去",
    "m": "andare (qui: scorso)",
    "k": "s"
   },
   {
    "h": "年",
    "m": "anno",
    "k": "s"
   }
  ],
  "n": "Letteralmente «l'anno andato»."
 },
 {
  "h": "生日",
  "p": "sheng1ri4",
  "it": "compleanno",
  "c": "tempo",
  "parts": [
   {
    "h": "生",
    "m": "nascere",
    "k": "s"
   },
   {
    "h": "日",
    "m": "giorno, sole",
    "k": "n"
   }
  ],
  "n": "Letteralmente «giorno di nascita»."
 },
 {
  "h": "年",
  "p": "nian2",
  "it": "anno",
  "c": "tempo",
  "parts": [
   {
    "h": "年",
    "m": "anno",
    "k": "s"
   }
  ]
 },
 {
  "h": "天",
  "p": "tian1",
  "it": "cielo, giorno",
  "c": "tempo",
  "parts": [
   {
    "h": "天",
    "m": "cielo, giorno",
    "k": "s"
   }
  ]
 },
 {
  "h": "零",
  "p": "ling2",
  "it": "zero",
  "c": "numeri",
  "parts": [
   {
    "h": "零",
    "m": "zero",
    "k": "s"
   }
  ]
 },
 {
  "h": "千",
  "p": "qian1",
  "it": "mille",
  "c": "numeri",
  "parts": [
   {
    "h": "千",
    "m": "mille",
    "k": "s"
   }
  ]
 },
 {
  "h": "天气",
  "p": "tian1qi4",
  "it": "tempo (meteo)",
  "c": "natura",
  "parts": [
   {
    "h": "天",
    "m": "cielo",
    "k": "s"
   },
   {
    "h": "气",
    "m": "aria, vapore",
    "k": "n"
   }
  ],
  "n": "Letteralmente «aria del cielo»."
 },
 {
  "h": "下雨",
  "p": "xia4yu3",
  "it": "piovere",
  "c": "natura",
  "parts": [
   {
    "h": "下",
    "m": "cadere, scendere",
    "k": "s"
   },
   {
    "h": "雨",
    "m": "pioggia",
    "k": "s"
   }
  ],
  "n": "Letteralmente «cade pioggia»."
 },
 {
  "h": "太阳",
  "p": "tai4yang2",
  "it": "sole",
  "c": "natura",
  "parts": [
   {
    "h": "太",
    "m": "molto, grande",
    "k": "s"
   },
   {
    "h": "阳",
    "m": "sole (yang)",
    "k": "n"
   }
  ],
  "n": "Letteralmente «grande sole»."
 },
 {
  "h": "月亮",
  "p": "yue4liang5",
  "it": "luna",
  "c": "natura",
  "parts": [
   {
    "h": "月",
    "m": "luna, mese",
    "k": "s"
   },
   {
    "h": "亮",
    "m": "luminoso",
    "k": "s"
   }
  ],
  "n": "Letteralmente «luna luminosa»."
 },
 {
  "h": "山",
  "p": "shan1",
  "it": "montagna",
  "c": "natura",
  "parts": [
   {
    "h": "山",
    "m": "montagna",
    "k": "s"
   }
  ]
 },
 {
  "h": "风",
  "p": "feng1",
  "it": "vento",
  "c": "natura",
  "parts": [
   {
    "h": "风",
    "m": "vento",
    "k": "s"
   }
  ]
 },
 {
  "h": "水",
  "p": "shui3",
  "it": "acqua",
  "c": "natura",
  "parts": [
   {
    "h": "水",
    "m": "acqua",
    "k": "s"
   }
  ]
 },
 {
  "h": "熊猫",
  "p": "xiong2mao1",
  "it": "panda",
  "c": "animali",
  "parts": [
   {
    "h": "熊",
    "m": "orso",
    "k": "s"
   },
   {
    "h": "猫",
    "m": "gatto",
    "k": "s"
   }
  ],
  "n": "Letteralmente «orso-gatto»."
 },
 {
  "h": "小狗",
  "p": "xiao3gou3",
  "it": "cagnolino",
  "c": "animali",
  "parts": [
   {
    "h": "小",
    "m": "piccolo",
    "k": "s"
   },
   {
    "h": "狗",
    "m": "cane",
    "k": "s"
   }
  ],
  "n": "Letteralmente «piccolo cane»."
 },
 {
  "h": "小猫",
  "p": "xiao3mao1",
  "it": "gattino",
  "c": "animali",
  "parts": [
   {
    "h": "小",
    "m": "piccolo",
    "k": "s"
   },
   {
    "h": "猫",
    "m": "gatto",
    "k": "s"
   }
  ],
  "n": "Letteralmente «piccolo gatto»."
 },
 {
  "h": "老虎",
  "p": "lao3hu3",
  "it": "tigre",
  "c": "animali",
  "parts": [
   {
    "h": "老",
    "m": "vecchio",
    "k": "s"
   },
   {
    "h": "虎",
    "m": "tigre",
    "k": "n"
   }
  ],
  "n": "老 qui non vuol dire «vecchio»: è un prefisso che si mette davanti ad alcuni animali."
 },
 {
  "h": "喜欢",
  "p": "xi3huan5",
  "it": "piacere, amare",
  "c": "verbi",
  "parts": [
   {
    "h": "喜",
    "m": "gioia, piacere",
    "k": "n"
   },
   {
    "h": "欢",
    "m": "gioia",
    "k": "n"
   }
  ],
  "n": "I due caratteri richiamano entrambi la gioia: «provare gioia per qualcosa»."
 },
 {
  "h": "高兴",
  "p": "gao1xing4",
  "it": "contento",
  "c": "aggettivi",
  "parts": [
   {
    "h": "高",
    "m": "alto",
    "k": "s"
   },
   {
    "h": "兴",
    "m": "entusiasmo, gioia",
    "k": "n"
   }
  ],
  "n": "Letteralmente «alto umore»."
 },
 {
  "h": "好吃",
  "p": "hao3chi1",
  "it": "buono (da mangiare)",
  "c": "aggettivi",
  "parts": [
   {
    "h": "好",
    "m": "buono",
    "k": "s"
   },
   {
    "h": "吃",
    "m": "mangiare",
    "k": "s"
   }
  ],
  "n": "Letteralmente «buono da mangiare»."
 },
 {
  "h": "好看",
  "p": "hao3kan4",
  "it": "bello (da vedere)",
  "c": "aggettivi",
  "parts": [
   {
    "h": "好",
    "m": "buono",
    "k": "s"
   },
   {
    "h": "看",
    "m": "guardare",
    "k": "s"
   }
  ],
  "n": "Letteralmente «bello da guardare»."
 },
 {
  "h": "便宜",
  "p": "pian2yi5",
  "it": "economico",
  "c": "aggettivi",
  "parts": [
   {
    "h": "便",
    "m": "conveniente",
    "k": "n"
   },
   {
    "h": "宜",
    "m": "adatto",
    "k": "n"
   }
  ],
  "n": "Qui 便 si legge pián (in altre parole, come 方便, si legge biàn)."
 },
 {
  "h": "快乐",
  "p": "kuai4le4",
  "it": "felice",
  "c": "aggettivi",
  "parts": [
   {
    "h": "快",
    "m": "veloce (qui: lieto)",
    "k": "s"
   },
   {
    "h": "乐",
    "m": "felice, allegro",
    "k": "n"
   }
  ],
  "n": "Qui 乐 si legge lè; in 音乐 si legge yuè."
 },
 {
  "h": "很多",
  "p": "hen3duo1",
  "it": "molto, molti",
  "c": "aggettivi",
  "parts": [
   {
    "h": "很",
    "m": "molto",
    "k": "s"
   },
   {
    "h": "多",
    "m": "molti, tanti",
    "k": "s"
   }
  ],
  "n": "Letteralmente «molto + tanti»."
 },
 {
  "h": "冷",
  "p": "leng3",
  "it": "freddo",
  "c": "aggettivi",
  "parts": [
   {
    "h": "冷",
    "m": "freddo",
    "k": "s"
   }
  ]
 },
 {
  "h": "忙",
  "p": "mang2",
  "it": "occupato",
  "c": "aggettivi",
  "parts": [
   {
    "h": "忙",
    "m": "occupato",
    "k": "s"
   }
  ]
 },
 {
  "h": "快",
  "p": "kuai4",
  "it": "veloce",
  "c": "aggettivi",
  "parts": [
   {
    "h": "快",
    "m": "veloce",
    "k": "s"
   }
  ]
 },
 {
  "h": "长",
  "p": "chang2",
  "it": "lungo",
  "c": "aggettivi",
  "parts": [
   {
    "h": "长",
    "m": "lungo",
    "k": "s"
   }
  ],
  "n": "长 ha due letture: cháng «lungo» e zhǎng «crescere»."
 },
 {
  "h": "远",
  "p": "yuan3",
  "it": "lontano",
  "c": "aggettivi",
  "parts": [
   {
    "h": "远",
    "m": "lontano",
    "k": "s"
   }
  ]
 },
 {
  "h": "少",
  "p": "shao3",
  "it": "poco",
  "c": "aggettivi",
  "parts": [
   {
    "h": "少",
    "m": "poco",
    "k": "s"
   }
  ],
  "n": "Con il tono 4 (shào) vuol dire «giovane»."
 },
 {
  "h": "米饭",
  "p": "mi3fan4",
  "it": "riso cotto",
  "c": "cibo",
  "parts": [
   {
    "h": "米",
    "m": "riso (crudo)",
    "k": "s"
   },
   {
    "h": "饭",
    "m": "cibo cotto, pasto",
    "k": "s"
   }
  ],
  "n": "Letteralmente «riso + pasto»."
 },
 {
  "h": "面条",
  "p": "mian4tiao2",
  "it": "spaghetti cinesi",
  "c": "cibo",
  "parts": [
   {
    "h": "面",
    "m": "farina, pasta",
    "k": "s"
   },
   {
    "h": "条",
    "m": "striscia",
    "k": "n"
   }
  ],
  "n": "Letteralmente «pasta in strisce»."
 },
 {
  "h": "苹果",
  "p": "ping2guo3",
  "it": "mela",
  "c": "cibo",
  "parts": [
   {
    "h": "苹",
    "m": "compare quasi solo dentro 苹果",
    "k": "x"
   },
   {
    "h": "果",
    "m": "frutto",
    "k": "n"
   }
  ],
  "n": "Parola formata da 苹 (che esiste quasi solo qui) più «frutto»."
 },
 {
  "h": "水果",
  "p": "shui3guo3",
  "it": "frutta",
  "c": "cibo",
  "parts": [
   {
    "h": "水",
    "m": "acqua",
    "k": "s"
   },
   {
    "h": "果",
    "m": "frutto",
    "k": "n"
   }
  ],
  "n": "Letteralmente «acqua + frutto»."
 },
 {
  "h": "牛奶",
  "p": "niu2nai3",
  "it": "latte",
  "c": "cibo",
  "parts": [
   {
    "h": "牛",
    "m": "mucca",
    "k": "s"
   },
   {
    "h": "奶",
    "m": "latte",
    "k": "s"
   }
  ],
  "n": "Letteralmente «latte di mucca»."
 },
 {
  "h": "鸡蛋",
  "p": "ji1dan4",
  "it": "uovo",
  "c": "cibo",
  "parts": [
   {
    "h": "鸡",
    "m": "pollo, gallina",
    "k": "s"
   },
   {
    "h": "蛋",
    "m": "uovo",
    "k": "s"
   }
  ],
  "n": "Letteralmente «uovo di gallina»."
 },
 {
  "h": "面包",
  "p": "mian4bao1",
  "it": "pane",
  "c": "cibo",
  "parts": [
   {
    "h": "面",
    "m": "farina",
    "k": "s"
   },
   {
    "h": "包",
    "m": "involtino, pacchetto",
    "k": "s"
   }
  ],
  "n": "Letteralmente «farina + involtino»."
 },
 {
  "h": "咖啡",
  "p": "ka1fei1",
  "it": "caffè",
  "c": "cibo",
  "parts": [
   {
    "h": "咖",
    "m": "esiste solo per scrivere il suono di «coffee»",
    "k": "x"
   },
   {
    "h": "啡",
    "m": "esiste solo per scrivere il suono di «coffee»",
    "k": "x"
   }
  ],
  "n": "Trascrizione del suono della parola inglese «coffee»."
 },
 {
  "h": "啤酒",
  "p": "pi2jiu3",
  "it": "birra",
  "c": "cibo",
  "parts": [
   {
    "h": "啤",
    "m": "esiste solo per scrivere il suono di «beer»",
    "k": "x"
   },
   {
    "h": "酒",
    "m": "alcolici, vino",
    "k": "s"
   }
  ],
  "n": "啤 riproduce il suono di «beer», 酒 indica le bevande alcoliche."
 },
 {
  "h": "蔬菜",
  "p": "shu1cai4",
  "it": "verdura",
  "c": "cibo",
  "parts": [
   {
    "h": "蔬",
    "m": "verdura",
    "k": "n"
   },
   {
    "h": "菜",
    "m": "verdura, piatto cucinato",
    "k": "s"
   }
  ],
  "n": "I due caratteri richiamano entrambi la verdura."
 },
 {
  "h": "牛肉",
  "p": "niu2rou4",
  "it": "manzo",
  "c": "cibo",
  "parts": [
   {
    "h": "牛",
    "m": "mucca",
    "k": "s"
   },
   {
    "h": "肉",
    "m": "carne",
    "k": "s"
   }
  ],
  "n": "Letteralmente «carne di mucca»."
 },
 {
  "h": "鸡肉",
  "p": "ji1rou4",
  "it": "pollo",
  "c": "cibo",
  "parts": [
   {
    "h": "鸡",
    "m": "pollo, gallina",
    "k": "s"
   },
   {
    "h": "肉",
    "m": "carne",
    "k": "s"
   }
  ],
  "n": "Letteralmente «carne di pollo»."
 },
 {
  "h": "猪肉",
  "p": "zhu1rou4",
  "it": "maiale",
  "c": "cibo",
  "parts": [
   {
    "h": "猪",
    "m": "maiale",
    "k": "s"
   },
   {
    "h": "肉",
    "m": "carne",
    "k": "s"
   }
  ],
  "n": "Letteralmente «carne di maiale»."
 },
 {
  "h": "豆腐",
  "p": "dou4fu5",
  "it": "tofu",
  "c": "cibo",
  "parts": [
   {
    "h": "豆",
    "m": "fagiolo, soia",
    "k": "s"
   },
   {
    "h": "腐",
    "m": "cagliato, rappreso",
    "k": "n"
   }
  ],
  "n": "Letteralmente «fagiolo rappreso»."
 },
 {
  "h": "饺子",
  "p": "jiao3zi5",
  "it": "ravioli cinesi",
  "c": "cibo",
  "parts": [
   {
    "h": "饺",
    "m": "raviolo",
    "k": "n"
   },
   {
    "h": "子",
    "m": "è un suffisso dei sostantivi",
    "k": "x"
   }
  ],
  "n": "Parola formata da 饺 («raviolo») più il suffisso 子."
 },
 {
  "h": "包子",
  "p": "bao1zi5",
  "it": "panino al vapore",
  "c": "cibo",
  "parts": [
   {
    "h": "包",
    "m": "involtino, pacchetto",
    "k": "s"
   },
   {
    "h": "子",
    "m": "è un suffisso dei sostantivi",
    "k": "x"
   }
  ],
  "n": "Parola formata da «involtino» più il suffisso 子."
 },
 {
  "h": "火锅",
  "p": "huo3guo1",
  "it": "hot pot",
  "c": "cibo",
  "parts": [
   {
    "h": "火",
    "m": "fuoco",
    "k": "s"
   },
   {
    "h": "锅",
    "m": "pentola",
    "k": "s"
   }
  ],
  "n": "Letteralmente «pentola di fuoco»."
 },
 {
  "h": "吃饭",
  "p": "chi1fan4",
  "it": "mangiare",
  "c": "verbi",
  "parts": [
   {
    "h": "吃",
    "m": "mangiare",
    "k": "s"
   },
   {
    "h": "饭",
    "m": "riso cotto, pasto",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «mangiare riso», cioè «fare un pasto»."
 },
 {
  "h": "喝水",
  "p": "he1shui3",
  "it": "bere acqua",
  "c": "verbi",
  "parts": [
   {
    "h": "喝",
    "m": "bere",
    "k": "s"
   },
   {
    "h": "水",
    "m": "acqua",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «bere acqua»."
 },
 {
  "h": "看书",
  "p": "kan4shu1",
  "it": "leggere",
  "c": "verbi",
  "parts": [
   {
    "h": "看",
    "m": "guardare",
    "k": "s"
   },
   {
    "h": "书",
    "m": "libro",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «guardare libri», cioè «leggere»."
 },
 {
  "h": "说话",
  "p": "shuo1hua4",
  "it": "parlare",
  "c": "verbi",
  "parts": [
   {
    "h": "说",
    "m": "dire, parlare",
    "k": "s"
   },
   {
    "h": "话",
    "m": "parola, discorso",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «dire parole»."
 },
 {
  "h": "睡觉",
  "p": "shui4jiao4",
  "it": "dormire",
  "c": "verbi",
  "parts": [
   {
    "h": "睡",
    "m": "dormire",
    "k": "s"
   },
   {
    "h": "觉",
    "m": "sonno",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «dormire il sonno». Qui 觉 si legge jiào; in 觉得 si legge jué."
 },
 {
  "h": "起床",
  "p": "qi3chuang2",
  "it": "alzarsi",
  "c": "verbi",
  "parts": [
   {
    "h": "起",
    "m": "alzarsi",
    "k": "n"
   },
   {
    "h": "床",
    "m": "letto",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «alzarsi dal letto»."
 },
 {
  "h": "上班",
  "p": "shang4ban1",
  "it": "andare al lavoro",
  "c": "verbi",
  "parts": [
   {
    "h": "上",
    "m": "salire, andare",
    "k": "s"
   },
   {
    "h": "班",
    "m": "turno di lavoro, classe",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «salire al turno di lavoro»."
 },
 {
  "h": "下班",
  "p": "xia4ban1",
  "it": "finire il lavoro",
  "c": "verbi",
  "parts": [
   {
    "h": "下",
    "m": "scendere, uscire",
    "k": "s"
   },
   {
    "h": "班",
    "m": "turno di lavoro, classe",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «scendere dal turno di lavoro»."
 },
 {
  "h": "开车",
  "p": "kai1che1",
  "it": "guidare",
  "c": "verbi",
  "parts": [
   {
    "h": "开",
    "m": "aprire, far partire",
    "k": "s"
   },
   {
    "h": "车",
    "m": "veicolo",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «far partire un veicolo», cioè «guidare»."
 },
 {
  "h": "回家",
  "p": "hui2jia1",
  "it": "tornare a casa",
  "c": "verbi",
  "parts": [
   {
    "h": "回",
    "m": "tornare",
    "k": "s"
   },
   {
    "h": "家",
    "m": "casa, famiglia",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «tornare a casa»."
 },
 {
  "h": "上课",
  "p": "shang4ke4",
  "it": "andare a lezione",
  "c": "verbi",
  "parts": [
   {
    "h": "上",
    "m": "salire, andare",
    "k": "s"
   },
   {
    "h": "课",
    "m": "lezione",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «salire alla lezione»."
 },
 {
  "h": "下课",
  "p": "xia4ke4",
  "it": "finire la lezione",
  "c": "verbi",
  "parts": [
   {
    "h": "下",
    "m": "scendere, uscire",
    "k": "s"
   },
   {
    "h": "课",
    "m": "lezione",
    "k": "s"
   }
  ],
  "n": "Verbo + oggetto: «scendere dalla lezione»."
 },
 {
  "h": "学习",
  "p": "xue2xi2",
  "it": "studiare",
  "c": "verbi",
  "parts": [
   {
    "h": "学",
    "m": "studiare",
    "k": "s"
   },
   {
    "h": "习",
    "m": "esercitarsi, ripassare",
    "k": "n"
   }
  ],
  "n": "I due caratteri richiamano entrambi lo studio: «imparare + esercitarsi»."
 },
 {
  "h": "工作",
  "p": "gong1zuo4",
  "it": "lavoro, lavorare",
  "c": "verbi",
  "parts": [
   {
    "h": "工",
    "m": "lavoro",
    "k": "n"
   },
   {
    "h": "作",
    "m": "fare",
    "k": "n"
   }
  ],
  "n": "Letteralmente «lavoro + fare»."
 },
 {
  "h": "认识",
  "p": "ren4shi5",
  "it": "conoscere (una persona)",
  "c": "verbi",
  "parts": [
   {
    "h": "认",
    "m": "riconoscere",
    "k": "n"
   },
   {
    "h": "识",
    "m": "conoscere",
    "k": "n"
   }
  ],
  "n": "Letteralmente «riconoscere + conoscere»."
 },
 {
  "h": "知道",
  "p": "zhi1dao4",
  "it": "sapere",
  "c": "verbi",
  "parts": [
   {
    "h": "知",
    "m": "sapere",
    "k": "n"
   },
   {
    "h": "道",
    "m": "via, strada",
    "k": "s"
   }
  ],
  "n": "Letteralmente «sapere + la via»."
 },
 {
  "h": "帮助",
  "p": "bang1zhu4",
  "it": "aiutare",
  "c": "verbi",
  "parts": [
   {
    "h": "帮",
    "m": "aiutare",
    "k": "s"
   },
   {
    "h": "助",
    "m": "aiutare",
    "k": "n"
   }
  ],
  "n": "I due caratteri vogliono entrambi dire «aiutare»."
 },
 {
  "h": "希望",
  "p": "xi1wang4",
  "it": "sperare",
  "c": "verbi",
  "parts": [
   {
    "h": "希",
    "m": "sperare",
    "k": "n"
   },
   {
    "h": "望",
    "m": "guardare lontano, sperare",
    "k": "n"
   }
  ],
  "n": "I due caratteri richiamano entrambi la speranza."
 },
 {
  "h": "觉得",
  "p": "jue2de5",
  "it": "pensare, ritenere",
  "c": "verbi",
  "parts": [
   {
    "h": "觉",
    "m": "sentire",
    "k": "n"
   },
   {
    "h": "得",
    "m": "qui è solo la seconda sillaba, leggera, della parola",
    "k": "x"
   }
  ],
  "n": "Qui 觉 si legge jué; in 睡觉 si legge jiào."
 },
 {
  "h": "开始",
  "p": "kai1shi3",
  "it": "iniziare",
  "c": "verbi",
  "parts": [
   {
    "h": "开",
    "m": "aprire",
    "k": "s"
   },
   {
    "h": "始",
    "m": "inizio",
    "k": "n"
   }
  ],
  "n": "Letteralmente «aprire + inizio»."
 },
 {
  "h": "准备",
  "p": "zhun3bei4",
  "it": "preparare",
  "c": "verbi",
  "parts": [
   {
    "h": "准",
    "m": "pronto, preciso",
    "k": "n"
   },
   {
    "h": "备",
    "m": "preparare",
    "k": "n"
   }
  ],
  "n": "I due caratteri richiamano entrambi l'essere pronti."
 },
 {
  "h": "休息",
  "p": "xiu1xi5",
  "it": "riposare",
  "c": "verbi",
  "parts": [
   {
    "h": "休",
    "m": "riposare",
    "k": "n"
   },
   {
    "h": "息",
    "m": "riposo, fermarsi",
    "k": "n"
   }
  ],
  "n": "I due caratteri richiamano entrambi il riposo."
 },
 {
  "h": "离开",
  "p": "li2kai1",
  "it": "lasciare, partire",
  "c": "verbi",
  "parts": [
   {
    "h": "离",
    "m": "separarsi, lasciare",
    "k": "s"
   },
   {
    "h": "开",
    "m": "aprire, partire",
    "k": "s"
   }
  ],
  "n": "Letteralmente «separarsi + partire»."
 },
 {
  "h": "参加",
  "p": "can1jia1",
  "it": "partecipare",
  "c": "verbi",
  "parts": [
   {
    "h": "参",
    "m": "partecipare",
    "k": "n"
   },
   {
    "h": "加",
    "m": "aggiungere",
    "k": "s"
   }
  ],
  "n": "Letteralmente «partecipare + aggiungersi»."
 },
 {
  "h": "想",
  "p": "xiang3",
  "it": "volere, pensare",
  "c": "verbi",
  "parts": [
   {
    "h": "想",
    "m": "pensare, volere",
    "k": "s"
   }
  ]
 },
 {
  "h": "听",
  "p": "ting1",
  "it": "ascoltare",
  "c": "verbi",
  "parts": [
   {
    "h": "听",
    "m": "ascoltare",
    "k": "s"
   }
  ]
 },
 {
  "h": "说",
  "p": "shuo1",
  "it": "dire, parlare",
  "c": "verbi",
  "parts": [
   {
    "h": "说",
    "m": "dire, parlare",
    "k": "s"
   }
  ]
 },
 {
  "h": "考试",
  "p": "kao3shi4",
  "it": "esame",
  "c": "scuola",
  "parts": [
   {
    "h": "考",
    "m": "fare un esame",
    "k": "s"
   },
   {
    "h": "试",
    "m": "provare, mettere alla prova",
    "k": "s"
   }
  ],
  "n": "I due caratteri richiamano entrambi la prova: «esaminare + mettere alla prova»."
 },
 {
  "h": "问题",
  "p": "wen4ti2",
  "it": "domanda, problema",
  "c": "scuola",
  "parts": [
   {
    "h": "问",
    "m": "chiedere",
    "k": "s"
   },
   {
    "h": "题",
    "m": "quesito, argomento",
    "k": "n"
   }
  ],
  "n": "Letteralmente «chiedere + quesito»."
 },
 {
  "h": "作业",
  "p": "zuo4ye4",
  "it": "compiti",
  "c": "scuola",
  "parts": [
   {
    "h": "作",
    "m": "fare",
    "k": "n"
   },
   {
    "h": "业",
    "m": "lavoro, attività",
    "k": "n"
   }
  ],
  "n": "Letteralmente «lavoro da fare»."
 },
 {
  "h": "音乐",
  "p": "yin1yue4",
  "it": "musica",
  "c": "tempo libero",
  "parts": [
   {
    "h": "音",
    "m": "suono",
    "k": "n"
   },
   {
    "h": "乐",
    "m": "musica",
    "k": "n"
   }
  ],
  "n": "Letteralmente «suono + musica». Qui 乐 si legge yuè; in 快乐 si legge lè."
 },
 {
  "h": "运动",
  "p": "yun4dong4",
  "it": "sport",
  "c": "tempo libero",
  "parts": [
   {
    "h": "运",
    "m": "muovere, trasportare",
    "k": "n"
   },
   {
    "h": "动",
    "m": "muoversi",
    "k": "s"
   }
  ],
  "n": "I due caratteri richiamano entrambi il movimento."
 },
 {
  "h": "游戏",
  "p": "you2xi4",
  "it": "gioco",
  "c": "tempo libero",
  "parts": [
   {
    "h": "游",
    "m": "giocare, girovagare",
    "k": "n"
   },
   {
    "h": "戏",
    "m": "gioco, spettacolo",
    "k": "n"
   }
  ],
  "n": "I due caratteri richiamano entrambi il gioco."
 },
 {
  "h": "足球",
  "p": "zu2qiu2",
  "it": "calcio",
  "c": "tempo libero",
  "parts": [
   {
    "h": "足",
    "m": "piede",
    "k": "n"
   },
   {
    "h": "球",
    "m": "palla",
    "k": "s"
   }
  ],
  "n": "Letteralmente «palla al piede»."
 },
 {
  "h": "篮球",
  "p": "lan2qiu2",
  "it": "pallacanestro",
  "c": "tempo libero",
  "parts": [
   {
    "h": "篮",
    "m": "cesto",
    "k": "n"
   },
   {
    "h": "球",
    "m": "palla",
    "k": "s"
   }
  ],
  "n": "Letteralmente «palla da cesto»."
 },
 {
  "h": "红色",
  "p": "hong2se4",
  "it": "rosso",
  "c": "colori",
  "parts": [
   {
    "h": "红",
    "m": "rosso",
    "k": "s"
   },
   {
    "h": "色",
    "m": "colore",
    "k": "s"
   }
  ],
  "n": "Letteralmente «colore rosso»."
 },
 {
  "h": "白色",
  "p": "bai2se4",
  "it": "bianco",
  "c": "colori",
  "parts": [
   {
    "h": "白",
    "m": "bianco",
    "k": "s"
   },
   {
    "h": "色",
    "m": "colore",
    "k": "s"
   }
  ],
  "n": "Letteralmente «colore bianco»."
 },
 {
  "h": "黑色",
  "p": "hei1se4",
  "it": "nero",
  "c": "colori",
  "parts": [
   {
    "h": "黑",
    "m": "nero",
    "k": "s"
   },
   {
    "h": "色",
    "m": "colore",
    "k": "s"
   }
  ],
  "n": "Letteralmente «colore nero»."
 },
 {
  "h": "蓝色",
  "p": "lan2se4",
  "it": "blu",
  "c": "colori",
  "parts": [
   {
    "h": "蓝",
    "m": "blu",
    "k": "s"
   },
   {
    "h": "色",
    "m": "colore",
    "k": "s"
   }
  ],
  "n": "Letteralmente «colore blu»."
 },
 {
  "h": "黄色",
  "p": "huang2se4",
  "it": "giallo",
  "c": "colori",
  "parts": [
   {
    "h": "黄",
    "m": "giallo",
    "k": "s"
   },
   {
    "h": "色",
    "m": "colore",
    "k": "s"
   }
  ],
  "n": "Letteralmente «colore giallo»."
 }
];

if (typeof module !== 'undefined') module.exports = WORDS;
