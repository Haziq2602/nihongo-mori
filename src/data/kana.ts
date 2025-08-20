
export interface Kana {
  kana: string;
  romaji: string;
  type: 'hiragana' | 'katakana';
  mnemonic: string;
  example: {
    word: string;
    reading: string;
    meaning: string;
  };
  audio: string;
  stroke: string;
}

export interface Vocabulary {
    word: string;
    reading: string;
    meaning:string;
    audio: string;
}

export interface KanaLesson {
  name: string;
  slug: string;
  kana: Kana[];
  vocabulary: Vocabulary[];
}

export const hiraganaLessons: KanaLesson[] = [
  {
    name: 'Vowels',
    slug: 'vowels',
    kana: [
      { kana: 'あ', romaji: 'a', type: 'hiragana', mnemonic: 'An "apple" with a leaf.', example: { word: 'あい', reading: 'ai', meaning: 'love' }, audio: '/audio/a.mp3', stroke: '/strokes/a.svg' },
      { kana: 'い', romaji: 'i', type: 'hiragana', mnemonic: 'Two "eels" swimming side-by-side.', example: { word: 'いえ', reading: 'ie', meaning: 'house' }, audio: '/audio/i.mp3', stroke: '/strokes/i.svg' },
      { kana: 'う', romaji: 'u', type: 'hiragana', mnemonic: 'A person with a broken "umbrella".', example: { word: 'うえ', reading: 'ue', meaning: 'up/above' }, audio: '/audio/u.mp3', stroke: '/strokes/u.svg' },
      { kana: 'え', romaji: 'e', type: 'hiragana', mnemonic: 'An "energetic" ninja running.', example: { word: 'えいが', reading: 'eiga', meaning: 'movie' }, audio: '/audio/e.mp3', stroke: '/strokes/e.svg' },
      { kana: 'お', romaji: 'o', type: 'hiragana', mnemonic: 'A UFO ("oh!") with an antenna.', example: { word: 'おんがく', reading: 'ongaku', meaning: 'music' }, audio: '/audio/o.mp3', stroke: '/strokes/o.svg' },
    ],
    vocabulary: [
        { word: 'あい', reading: 'ai', meaning: 'Love', audio: '/audio/ai.mp3' },
        { word: 'いえ', reading: 'ie', meaning: 'House', audio: '/audio/ie.mp3' },
        { word: 'うえ', reading: 'ue', meaning: 'Up / Above', audio: '/audio/ue.mp3' },
        { word: 'あお', reading: 'ao', meaning: 'Blue', audio: '/audio/ao.mp3' },
        { word: 'いいえ', reading: 'iie', meaning: 'No', audio: '/audio/iie.mp3' },
    ]
  },
  {
    name: 'K-row',
    slug: 'k-row',
    kana: [
      { kana: 'か', romaji: 'ka', type: 'hiragana', mnemonic: 'A "car" driving away.', example: { word: 'かみ', reading: 'kami', meaning: 'paper' }, audio: '/audio/ka.mp3', stroke: '/strokes/ka.svg' },
      { kana: 'き', romaji: 'ki', type: 'hiragana', mnemonic: 'A "key" in a lock.', example: { word: 'きもの', reading: 'kimono', meaning: 'kimono' }, audio: '/audio/ki.mp3', stroke: '/strokes/ki.svg' },
      { kana: 'く', romaji: 'ku', type: 'hiragana', mnemonic: 'A "cuckoo" bird\'s beak.', example: { word: 'くるま', reading: 'kuruma', meaning: 'car' }, audio: '/audio/ku.mp3', stroke: '/strokes/ku.svg' },
      { kana: 'け', romaji: 'ke', type: 'hiragana', mnemonic: 'A "keg" of beer.', example: { word: 'けしき', reading: 'keshiki', meaning: 'scenery' }, audio: '/audio/ke.mp3', stroke: '/strokes/ke.svg' },
      { kana: 'こ', romaji: 'ko', type: 'hiragana', mnemonic: 'Two "koalas" hugging.', example: { word: 'こえ', reading: 'koe', meaning: 'voice' }, audio: '/audio/ko.mp3', stroke: '/strokes/ko.svg' },
      { kana: 'が', romaji: 'ga', type: 'hiragana', mnemonic: 'A "guard" (か) with a shield.', example: { word: 'がくせい', reading: 'gakusei', meaning: 'student' }, audio: '/audio/ga.mp3', stroke: '/strokes/ga.svg' },
      { kana: 'ぎ', romaji: 'gi', type: 'hiragana', mnemonic: 'A "gift" (き) with a ribbon.', example: { word: 'かぎ', reading: 'kagi', meaning: 'key' }, audio: '/audio/gi.mp3', stroke: '/strokes/gi.svg' },
      { kana: 'ぐ', romaji: 'gu', type: 'hiragana', mnemonic: '"Good" (く) job!', example: { word: 'でぐち', reading: 'deguchi', meaning: 'exit' }, audio: '/audio/gu.mp3', stroke: '/strokes/gu.svg' },
      { kana: 'げ', romaji: 'ge', type: 'hiragana', mnemonic: '"Get" (け) a prize.', example: { word: 'げんかん', reading: 'genkan', meaning: 'entrance' }, audio: '/audio/ge.mp3', stroke: '/strokes/ge.svg' },
      { kana: 'ご', romaji: 'go', type: 'hiragana', mnemonic: '"Go" (こ) for it!', example: { word: 'しごと', reading: 'shigoto', meaning: 'work' }, audio: '/audio/go.mp3', stroke: '/strokes/go.svg' },
    ],
    vocabulary: [
        { word: 'かお', reading: 'kao', meaning: 'Face', audio: '/audio/kao.mp3' },
        { word: 'きく', reading: 'kiku', meaning: 'To listen', audio: '/audio/kiku.mp3' },
        { word: 'えき', reading: 'eki', meaning: 'Station', audio: '/audio/eki.mp3' },
        { word: 'いけ', reading: 'ike', meaning: 'Pond', audio: '/audio/ike.mp3' },
        { word: 'あかい', reading: 'akai', meaning: 'Red', audio: '/audio/akai.mp3' },
        { word: 'かぎ', reading: 'kagi', meaning: 'Key', audio: '/audio/kagi.mp3' },
        { word: 'ぎんこう', reading: 'ginkou', meaning: 'Bank', audio: '/audio/ginkou.mp3' },
        { word: 'かぐ', reading: 'kagu', meaning: 'Furniture', audio: '/audio/kagu.mp3' },
        { word: 'げんき', reading: 'genki', meaning: 'Healthy / Energetic', audio: '/audio/genki.mp3' },
        { word: 'ごはん', reading: 'gohan', meaning: 'Rice / Meal', audio: '/audio/gohan.mp3' },
    ]
  },
  {
    name: 'S-row',
    slug: 's-row',
    kana: [
        { kana: 'さ', romaji: 'sa', type: 'hiragana', mnemonic: 'A "saw" cutting wood.', example: { word: 'さとう', reading: 'satou', meaning: 'sugar' }, audio: '/audio/sa.mp3', stroke: '/strokes/sa.svg' },
        { kana: 'し', romaji: 'shi', type: 'hiragana', mnemonic: 'A fishing hook for the "sea".', example: { word: 'しお', reading: 'shio', meaning: 'salt' }, audio: '/audio/shi.mp3', stroke: '/strokes/shi.svg' },
        { kana: 'す', romaji: 'su', type: 'hiragana', mnemonic: 'A curly straw to "sue" someone with.', example: { word: 'すし', reading: 'sushi', meaning: 'sushi' }, audio: '/audio/su.mp3', stroke: '/strokes/su.svg' },
        { kana: 'せ', romaji: 'se', type: 'hiragana', mnemonic: 'A mouth "saying" something.', example: { word: 'せんせい', reading: 'sensei', meaning: 'teacher' }, audio: '/audio/se.mp3', stroke: '/strokes/se.svg' },
        { kana: 'そ', romaji: 'so', type: 'hiragana', mnemonic: 'A zigzag stitch, "sew"ing something up.', example: { word: 'そば', reading: 'soba', meaning: 'soba noodles' }, audio: '/audio/so.mp3', stroke: '/strokes/so.svg' },
        { kana: 'ざ', romaji: 'za', type: 'hiragana', mnemonic: 'A "czar" (さ) with a crown.', example: { word: 'ざぶとん', reading: 'zabuton', meaning: 'floor cushion' }, audio: '/audio/za.mp3', stroke: '/strokes/za.svg' },
        { kana: 'じ', romaji: 'ji', type: 'hiragana', mnemonic: 'A "jeep" (し) driving.', example: { word: 'じしょ', reading: 'jisho', meaning: 'dictionary' }, audio: '/audio/ji.mp3', stroke: '/strokes/ji.svg' },
        { kana: 'ず', romaji: 'zu', type: 'hiragana', mnemonic: 'A "zoo" (す) with a fence.', example: { word: 'みず', reading: 'mizu', meaning: 'water' }, audio: '/audio/zu.mp3', stroke: '/strokes/zu.svg' },
        { kana: 'ぜ', romaji: 'ze', type: 'hiragana', mnemonic: '"Zen" (せ) meditation.', example: { word: 'かぜ', reading: 'kaze', meaning: 'wind' }, audio: '/audio/ze.mp3', stroke: '/strokes/ze.svg' },
        { kana: 'ぞ', romaji: 'zo', type: 'hiragana', mnemonic: 'A "zone" (そ) for construction.', example: { word: 'かぞく', reading: 'kazoku', meaning: 'family' }, audio: '/audio/zo.mp3', stroke: '/strokes/zo.svg' },
    ],
    vocabulary: [
        { word: 'あさ', reading: 'asa', meaning: 'Morning', audio: '/audio/asa.mp3' },
        { word: 'すし', reading: 'sushi', meaning: 'Sushi', audio: '/audio/sushi.mp3' },
        { word: 'せかい', reading: 'sekai', meaning: 'World', audio: '/audio/sekai.mp3' },
        { word: 'いす', reading: 'isu', meaning: 'Chair', audio: '/audio/isu.mp3' },
        { word: 'うそ', reading: 'uso', meaning: 'Lie', audio: '/audio/uso.mp3' },
        { word: 'かぞく', reading: 'kazoku', meaning: 'Family', audio: '/audio/kazoku.mp3' },
        { word: 'じかん', reading: 'jikan', meaning: 'Time', audio: '/audio/jikan.mp3' },
        { word: 'みず', reading: 'mizu', meaning: 'Water', audio: '/audio/mizu.mp3' },
        { word: 'かぜ', reading: 'kaze', meaning: 'Wind', audio: '/audio/kaze.mp3' },
    ]
  },
  {
    name: 'T-row',
    slug: 't-row',
    kana: [
        { kana: 'た', romaji: 'ta', type: 'hiragana', mnemonic: 'Looks like "ta".', example: { word: 'たまご', reading: 'tamago', meaning: 'egg' }, audio: '/audio/ta.mp3', stroke: '/strokes/ta.svg' },
        { kana: 'ち', romaji: 'chi', type: 'hiragana', mnemonic: 'A "cheerleader" cheering.', example: { word: 'ちかてつ', reading: 'chikatetsu', meaning: 'subway' }, audio: '/audio/chi.mp3', stroke: '/strokes/chi.svg' },
        { kana: 'つ', romaji: 'tsu', type: 'hiragana', mnemonic: 'A "tsunami" wave.', example: { word: 'つくえ', reading: 'tsukue', meaning: 'desk' }, audio: '/audio/tsu.mp3', stroke: '/strokes/tsu.svg' },
        { kana: 'て', romaji: 'te', type: 'hiragana', mnemonic: 'A "table" with one leg.', example: { word: 'てら', reading: 'tera', meaning: 'temple' }, audio: '/audio/te.mp3', stroke: '/strokes/te.svg' },
        { kana: 'と', romaji: 'to', type: 'hiragana', mnemonic: 'A "toe" with a nail.', example: { word: 'ともだち', reading: 'tomodachi', meaning: 'friend' }, audio: '/audio/to.mp3', stroke: '/strokes/to.svg' },
        { kana: 'だ', romaji: 'da', type: 'hiragana', mnemonic: '"Ta-da!" (た) with sparkles.', example: { word: 'だいがく', reading: 'daigaku', meaning: 'university' }, audio: '/audio/da.mp3', stroke: '/strokes/da.svg' },
        { kana: 'ぢ', romaji: 'ji', type: 'hiragana', mnemonic: 'A "jeep" (ち) with a flat tire.', example: { word: 'はなぢ', reading: 'hanaji', meaning: 'nosebleed' }, audio: '/audio/ji.mp3', stroke: '/strokes/ji.svg' },
        { kana: 'づ', romaji: 'zu', type: 'hiragana', mnemonic: 'A "tsunami" (つ) in a "zoo".', example: { word: 'つづく', reading: 'tsuzuku', meaning: 'to continue' }, audio: '/audio/zu.mp3', stroke: '/strokes/zu.svg' },
        { kana: 'で', romaji: 'de', type: 'hiragana', mnemonic: '"Deck" (て) the halls.', example: { word: 'でんしゃ', reading: 'densha', meaning: 'train' }, audio: '/audio/de.mp3', stroke: '/strokes/de.svg' },
        { kana: 'ど', romaji: 'do', type: 'hiragana', mnemonic: 'A "door" (と) with a knob.', example: { word: 'どうぶつ', reading: 'doubutsu', meaning: 'animal' }, audio: '/audio/do.mp3', stroke: '/strokes/do.svg' },
    ],
    vocabulary: [
        { word: 'たかい', reading: 'takai', meaning: 'High / Expensive', audio: '/audio/takai.mp3' },
        { word: 'ちず', reading: 'chizu', meaning: 'Map', audio: '/audio/chizu.mp3' },
        { word: 'つくえ', reading: 'tsukue', meaning: 'Desk', audio: '/audio/tsukue.mp3' },
        { word: 'て', reading: 'te', meaning: 'Hand', audio: '/audio/te.mp3' },
        { word: 'とけい', reading: 'tokei', meaning: 'Clock / Watch', audio: '/audio/tokei.mp3' },
        { word: 'くだもの', reading: 'kudamono', meaning: 'Fruit', audio: '/audio/kudamono.mp3' },
        { word: 'でんわ', reading: 'denwa', meaning: 'Telephone', audio: '/audio/denwa.mp3' },
        { word: 'だれ', reading: 'dare', meaning: 'Who', audio: '/audio/dare.mp3' },
    ],
  },
  {
      name: 'N-row',
      slug: 'n-row',
      kana: [
          { kana: 'な', romaji: 'na', type: 'hiragana', mnemonic: 'A "knot" in a rope.', example: { word: 'なつ', reading: 'natsu', meaning: 'summer' }, audio: '/audio/na.mp3', stroke: '/strokes/na.svg' },
          { kana: 'に', romaji: 'ni', type: 'hiragana', mnemonic: 'A "needle" and thread.', example: { word: 'にわ', reading: 'niwa', meaning: 'garden' }, audio: '/audio/ni.mp3', stroke: '/strokes/ni.svg' },
          { kana: 'ぬ', romaji: 'nu', type: 'hiragana', mnemonic: 'A bowl of "noodles".', example: { word: 'いぬ', reading: 'inu', meaning: 'dog' }, audio: '/audio/nu.mp3', stroke: '/strokes/nu.svg' },
          { kana: 'ね', romaji: 'ne', type: 'hiragana', mnemonic: 'A "snail" in its shell.', example: { word: 'ねこ', reading: 'neko', meaning: 'cat' }, audio: '/audio/ne.mp3', stroke: '/strokes/ne.svg' },
          { kana: 'の', romaji: 'no', type: 'hiragana', mnemonic: 'A "no" sign.', example: { word: 'もの', reading: 'mono', meaning: 'thing' }, audio: '/audio/no.mp3', stroke: '/strokes/no.svg' },
      ],
      vocabulary: [
          { word: 'なな', reading: 'nana', meaning: 'Seven', audio: '/audio/nana.mp3' },
          { word: 'にく', reading: 'niku', meaning: 'Meat', audio: '/audio/niku.mp3' },
          { word: 'いぬ', reading: 'inu', meaning: 'Dog', audio: '/audio/inu.mp3' },
          { word: 'ねこ', reading: 'neko', meaning: 'Cat', audio: '/audio/neko.mp3' },
          { word: 'きのう', reading: 'kinou', meaning: 'Yesterday', audio: '/audio/kinou.mp3' },
          { word: 'あなた', reading: 'anata', meaning: 'You', audio: '/audio/anata.mp3' },
      ],
  },
  {
      name: 'H-row',
      slug: 'h-row',
      kana: [
          { kana: 'は', romaji: 'ha', type: 'hiragana', mnemonic: 'A person laughing "ha ha".', example: { word: 'はる', reading: 'haru', meaning: 'spring' }, audio: '/audio/ha.mp3', stroke: '/strokes/ha.svg' },
          { kana: 'ひ', romaji: 'hi', type: 'hiragana', mnemonic: 'A smiling face, "hee hee".', example: { word: 'ひる', reading: 'hiru', meaning: 'daytime' }, audio: '/audio/hi.mp3', stroke: '/strokes/hi.svg' },
          { kana: 'ふ', romaji: 'fu', type: 'hiragana', mnemonic: 'Mount "Fuji".', example: { word: 'ふゆ', reading: 'fuyu', meaning: 'winter' }, audio: '/audio/fu.mp3', stroke: '/strokes/fu.svg' },
          { kana: 'へ', romaji: 'he', type: 'hiragana', mnemonic: 'A pointy hill, heading to "heaven".', example: { word: 'へや', reading: 'heya', meaning: 'room' }, audio: '/audio/he.mp3', stroke: '/strokes/he.svg' },
          { kana: 'ほ', romaji: 'ho', type: 'hiragana', mnemonic: 'A "horse" with a saddle.', example: { word: 'ほん', reading: 'hon', meaning: 'book' }, audio: '/audio/ho.mp3', stroke: '/strokes/ho.svg' },
          { kana: 'ば', romaji: 'ba', type: 'hiragana', mnemonic: 'A "bat" (は) and ball.', example: { word: 'ことば', reading: 'kotoba', meaning: 'word/language' }, audio: '/audio/ba.mp3', stroke: '/strokes/ba.svg' },
          { kana: 'び', romaji: 'bi', type: 'hiragana', mnemonic: 'A "bee" (ひ) buzzing.', example: { word: 'くちびる', reading: 'kuchibiru', meaning: 'lips' }, audio: '/audio/bi.mp3', stroke: '/strokes/bi.svg' },
          { kana: 'ぶ', romaji: 'bu', type: 'hiragana', mnemonic: 'A "boot" (ふ).', example: { word: 'ぜんぶ', reading: 'zenbu', meaning: 'all' }, audio: '/audio/bu.mp3', stroke: '/strokes/bu.svg' },
          { kana: 'べ', romaji: 'be', type: 'hiragana', mnemonic: 'A "bed" (へ).', example: { word: 'たべる', reading: 'taberu', meaning: 'to eat' }, audio: '/audio/be.mp3', stroke: '/strokes/be.svg' },
          { kana: 'ぼ', romaji: 'bo', type: 'hiragana', mnemonic: 'A "boat" (ほ).', example: { word: 'ぼうし', reading: 'boushi', meaning: 'hat' }, audio: '/audio/bo.mp3', stroke: '/strokes/bo.svg' },
          { kana: 'ぱ', romaji: 'pa', type: 'hiragana', mnemonic: '"Pop" (は) corn.', example: { word: 'しんぱい', reading: 'shinpai', meaning: 'worry' }, audio: '/audio/pa.mp3', stroke: '/strokes/pa.svg' },
          { kana: 'ぴ', romaji: 'pi', type: 'hiragana', mnemonic: 'A "pea" (ひ).', example: { word: 'えんぴつ', reading: 'enpitsu', meaning: 'pencil' }, audio: '/audio/pi.mp3', stroke: '/strokes/pi.svg' },
          { kana: 'ぷ', romaji: 'pu', type: 'hiragana', mnemonic: '"Pudding" (ふ).', example: { word: 'さんぽ', reading: 'sanpo', meaning: 'a walk' }, audio: '/audio/pu.mp3', stroke: '/strokes/pu.svg' },
          { kana: 'ぺ', romaji: 'pe', type: 'hiragana', mnemonic: 'A "pen" (へ).', example: { word: 'ぺらぺら', reading: 'perapera', meaning: 'fluent' }, audio: '/audio/pe.mp3', stroke: '/strokes/pe.svg' },
          { kana: 'ぽ', romaji: 'po', type: 'hiragana', mnemonic: '"Post" (ほ) office.', example: { word: 'しっぽ', reading: 'shippo', meaning: 'tail' }, audio: '/audio/po.mp3', stroke: '/strokes/po.svg' },
      ],
      vocabulary: [
          { word: 'はな', reading: 'hana', meaning: 'Flower / Nose', audio: '/audio/hana.mp3' },
          { word: 'ひと', reading: 'hito', meaning: 'Person', audio: '/audio/hito.mp3' },
          { word: 'ふね', reading: 'fune', meaning: 'Ship', audio: '/audio/fune.mp3' },
          { word: 'へや', reading: 'heya', meaning: 'Room', audio: '/audio/heya.mp3' },
          { word: 'ほしい', reading: 'hoshii', meaning: 'Want', audio: '/audio/hoshii.mp3' },
          { word: 'パン', reading: 'pan', meaning: 'Bread', audio: '/audio/pan.mp3' },
          { word: 'えんぴつ', reading: 'enpitsu', meaning: 'Pencil', audio: '/audio/enpitsu.mp3' },
      ],
  },
  {
      name: 'M-row',
      slug: 'm-row',
      kana: [
          { kana: 'ま', romaji: 'ma', type: 'hiragana', mnemonic: 'Your "mom" is watching you.', example: { word: 'まいにち', reading: 'mainichi', meaning: 'every day' }, audio: '/audio/ma.mp3', stroke: '/strokes/ma.svg' },
          { kana: 'み', romaji: 'mi', type: 'hiragana', mnemonic: 'The number 21, "me" in two decades.', example: { word: 'みせ', reading: 'mise', meaning: 'shop' }, audio: '/audio/mi.mp3', stroke: '/strokes/mi.svg' },
          { kana: 'む', romaji: 'mu', type: 'hiragana', mnemonic: 'A cow saying "moo".', example: { word: 'むらさき', reading: 'murasaki', meaning: 'purple' }, audio: '/audio/mu.mp3', stroke: '/strokes/mu.svg' },
          { kana: 'め', romaji: 'me', type: 'hiragana', mnemonic: 'A "messy" knot.', example: { word: 'あめ', reading: 'ame', meaning: 'candy/rain' }, audio: '/audio/me.mp3', stroke: '/strokes/me.svg' },
          { kana: 'も', romaji: 'mo', type: 'hiragana', mnemonic: 'A fish hook to catch "more" fish.', example: { word: 'もも', reading: 'momo', meaning: 'peach' }, audio: '/audio/mo.mp3', stroke: '/strokes/mo.svg' },
      ],
      vocabulary: [
          { word: 'みみ', reading: 'mimi', meaning: 'Ear', audio: '/audio/mimi.mp3' },
          { word: 'むし', reading: 'mushi', meaning: 'Insect', audio: '/audio/mushi.mp3' },
          { word: 'め', reading: 'me', meaning: 'Eye', audio: '/audio/me.mp3' },
          { word: 'もも', reading: 'momo', meaning: 'Peach', audio: '/audio/momo.mp3' },
          { word: 'あまい', reading: 'amai', meaning: 'Sweet', audio: '/audio/amai.mp3' },
      ],
  },
  {
      name: 'Y-row',
      slug: 'y-row',
      kana: [
          { kana: 'や', romaji: 'ya', type: 'hiragana', mnemonic: 'A "yak" with large horns.', example: { word: 'やさい', reading: 'yasai', meaning: 'vegetable' }, audio: '/audio/ya.mp3', stroke: '/strokes/ya.svg' },
          { kana: 'ゆ', romaji: 'yu', type: 'hiragana', mnemonic: 'A "unique" fish.', example: { word: 'ゆめ', reading: 'yume', meaning: 'dream' }, audio: '/audio/yu.mp3', stroke: '/strokes/yu.svg' },
          { kana: 'よ', romaji: 'yo', type: 'hiragana', mnemonic: 'A "yo-yo".', example: { word: 'よむ', reading: 'yomu', meaning: 'to read' }, audio: '/audio/yo.mp3', stroke: '/strokes/yo.svg' },
      ],
      vocabulary: [
          { word: 'やま', reading: 'yama', meaning: 'Mountain', audio: '/audio/yama.mp3' },
          { word: 'ゆき', reading: 'yuki', meaning: 'Snow', audio: '/audio/yuki.mp3' },
          { word: 'よる', reading: 'yoru', meaning: 'Night', audio: '/audio/yoru.mp3' },
          { word: 'やすい', reading: 'yasui', meaning: 'Cheap', audio: '/audio/yasui.mp3' },
      ],
  },
  {
      name: 'R-row',
      slug: 'r-row',
      kana: [
          { kana: 'ら', romaji: 'ra', type: 'hiragana', mnemonic: 'A rapper saying "ra ra ra".', example: { word: 'さくら', reading: 'sakura', meaning: 'cherry blossom' }, audio: '/audio/ra.mp3', stroke: '/strokes/ra.svg' },
          { kana: 'り', romaji: 'ri', type: 'hiragana', mnemonic: 'A "river" flowing.', example: { word: 'とり', reading: 'tori', meaning: 'bird' }, audio: '/audio/ri.mp3', stroke: '/strokes/ri.svg' },
          { kana: 'る', romaji: 'ru', type: 'hiragana', mnemonic: 'A "loop" in a road.', example: { word: 'はる', reading: 'haru', meaning: 'spring' }, audio: '/audio/ru.mp3', stroke: '/strokes/ru.svg' },
          { kana: 'れ', romaji: 're', type: 'hiragana', mnemonic: 'A person kneeling to "pray".', example: { word: 'きれい', reading: 'kirei', meaning: 'beautiful/clean' }, audio: '/audio/re.mp3', stroke: '/strokes/re.svg' },
          { kana: 'ろ', romaji: 'ro', type: 'hiragana', mnemonic: 'A "road" with no turns.', example: { word: 'しろ', reading: 'shiro', meaning: 'white' }, audio: '/audio/ro.mp3', stroke: '/strokes/ro.svg' },
      ],
      vocabulary: [
          { word: 'さくら', reading: 'sakura', meaning: 'Cherry Blossom', audio: '/audio/sakura.mp3' },
          { word: 'とり', reading: 'tori', meaning: 'Bird', audio: '/audio/tori.mp3' },
          { word: 'はる', reading: 'haru', meaning: 'Spring', audio: '/audio/haru.mp3' },
          { word: 'しろい', reading: 'shiroi', meaning: 'White', audio: '/audio/shiroi.mp3' },
          { word: 'くすり', reading: 'kusuri', meaning: 'Medicine', audio: '/audio/kusuri.mp3' },
      ],
  },
  {
      name: 'W-row & N',
      slug: 'w-n-row',
      kana: [
          { kana: 'わ', romaji: 'wa', type: 'hiragana', mnemonic: 'A "swan" with a long neck.', example: { word: 'わたし', reading: 'watashi', meaning: 'I/me' }, audio: '/audio/wa.mp3', stroke: '/strokes/wa.svg' },
          { kana: 'を', romaji: 'wo', type: 'hiragana', mnemonic: 'Someone saying "whoa!".', example: { word: 'ほんをよむ', reading: 'hon wo yomu', meaning: 'to read a book' }, audio: '/audio/wo.mp3', stroke: '/strokes/wo.svg' },
          { kana: 'ん', romaji: 'n', type: 'hiragana', mnemonic: 'A lower-case "n".', example: { word: 'でんわ', reading: 'denwa', meaning: 'telephone' }, audio: '/audio/n.mp3', stroke: '/strokes/n.svg' },
      ],
      vocabulary: [
          { word: 'わたし', reading: 'watashi', meaning: 'I / Me', audio: '/audio/watashi.mp3' },
          { word: 'ほん', reading: 'hon', meaning: 'Book', audio: '/audio/hon.mp3' },
          { word: 'にほん', reading: 'nihon', meaning: 'Japan', audio: '/audio/nihon.mp3' },
          { word: 'えん', reading: 'en', meaning: 'Yen (currency)', audio: '/audio/en.mp3' },
      ],
  },
];

export const katakanaLessons: KanaLesson[] = [
    {
        name: 'Vowels',
        slug: 'vowels',
        kana: [
            { kana: 'ア', romaji: 'a', type: 'katakana', mnemonic: 'Looks like a part of a capital "A".', example: { word: 'アジア', reading: 'ajia', meaning: 'Asia' }, audio: '/audio/a.mp3', stroke: '/strokes/a.svg' },
            { kana: 'イ', romaji: 'i', type: 'katakana', mnemonic: 'An "eagle" flying.', example: { word: 'インド', reading: 'indo', meaning: 'India' }, audio: '/audio/i.mp3', stroke: '/strokes/i.svg' },
            { kana: 'ウ', romaji: 'u', type: 'katakana', mnemonic: 'A roof of a house, seen from "under".', example: { word: 'ウイスキー', reading: 'uisukii', meaning: 'whiskey' }, audio: '/audio/u.mp3', stroke: '/strokes/u.svg' },
            { kana: 'エ', romaji: 'e', type: 'katakana', mnemonic: 'An "elevator" with three levels.', example: { word: 'エネルギー', reading: 'enerugii', meaning: 'energy' }, audio: '/audio/e.mp3', stroke: '/strokes/e.svg' },
            { kana: 'オ', romaji: 'o', type: 'katakana', mnemonic: 'An "opera" singer with open mouth.', example: { word: 'オイル', reading: 'oiru', meaning: 'oil' }, audio: '/audio/o.mp3', stroke: '/strokes/o.svg' },
        ],
        vocabulary: [
            { word: 'アイス', reading: 'aisu', meaning: 'Ice / Ice cream', audio: '/audio/aisu.mp3' },
            { word: 'エアコン', reading: 'eakon', meaning: 'Air conditioner', audio: '/audio/eakon.mp3' },
            { word: 'オレンジ', reading: 'orenji', meaning: 'Orange', audio: '/audio/orenji.mp3' },
        ],
    },
    {
        name: 'K-row',
        slug: 'k-row',
        kana: [
            { kana: 'カ', romaji: 'ka', type: 'katakana', mnemonic: 'Same as hiragana か, but sharp, like a "karate" chop.', example: { word: 'カラオケ', reading: 'karaoke', meaning: 'karaoke' }, audio: '/audio/ka.mp3', stroke: '/strokes/ka.svg' },
            { kana: 'キ', romaji: 'ki', type: 'katakana', mnemonic: 'A sharp "key", but with an extra line.', example: { word: 'ケーキ', reading: 'keeki', meaning: 'cake' }, audio: '/audio/ki.mp3', stroke: '/strokes/ki.svg' },
            { kana: 'ク', romaji: 'ku', type: 'katakana', mnemonic: 'A corner of a "cube".', example: { word: 'クッキー', reading: 'kukkii', meaning: 'cookie' }, audio: '/audio/ku.mp3', stroke: '/strokes/ku.svg' },
            { kana: 'ケ', romaji: 'ke', type: 'katakana', mnemonic: 'A sharp "K" on its side.', example: { word: 'ケース', reading: 'keesu', meaning: 'case' }, audio: '/audio/ke.mp3', stroke: '/strokes/ke.svg' },
            { kana: 'コ', romaji: 'ko', type: 'katakana', mnemonic: 'A corner of a box for "coffee".', example: { word: 'コート', reading: 'kooto', meaning: 'coat' }, audio: '/audio/ko.mp3', stroke: '/strokes/ko.svg' },
            { kana: 'ガ', romaji: 'ga', type: 'katakana', mnemonic: '"Gas" (カ) station.', example: { word: 'ガラス', reading: 'garasu', meaning: 'glass' }, audio: '/audio/ga.mp3', stroke: '/strokes/ga.svg' },
            { kana: 'ギ', romaji: 'gi', type: 'katakana', mnemonic: 'A "guitar" (キ).', example: { word: 'ギター', reading: 'gitaa', meaning: 'guitar' }, audio: '/audio/gi.mp3', stroke: '/strokes/gi.svg' },
            { kana: 'グ', romaji: 'gu', type: 'katakana', mnemonic: '"Goo" (ク).', example: { word: 'グループ', reading: 'guruupu', meaning: 'group' }, audio: '/audio/gu.mp3', stroke: '/strokes/gu.svg' },
            { kana: 'ゲ', romaji: 'ge', type: 'katakana', mnemonic: '"Game" (ケ).', example: { word: 'ゲーム', reading: 'geemu', meaning: 'game' }, audio: '/audio/ge.mp3', stroke: '/strokes/ge.svg' },
            { kana: 'ゴ', romaji: 'go', type: 'katakana', mnemonic: '"Gorilla" (コ).', example: { word: 'ゴルフ', reading: 'gorufu', meaning: 'golf' }, audio: '/audio/go.mp3', stroke: '/strokes/go.svg' },
        ],
        vocabulary: [
            { word: 'カメラ', reading: 'kamera', meaning: 'Camera', audio: '/audio/kamera.mp3' },
            { word: 'ケーキ', reading: 'keeki', meaning: 'Cake', audio: '/audio/keeki.mp3' },
            { word: 'コーヒー', reading: 'koohii', meaning: 'Coffee', audio: '/audio/koohii.mp3' },
            { word: 'ギター', reading: 'gitaa', meaning: 'Guitar', audio: '/audio/gitaa.mp3' },
            { word: 'ゲーム', reading: 'geemu', meaning: 'Game', audio: '/audio/geemu.mp3' },
        ],
    },
    {
      name: 'S-row',
      slug: 's-row',
      kana: [
          { kana: 'サ', romaji: 'sa', type: 'katakana', mnemonic: 'Three "sardines" on a plate.', example: { word: 'サイズ', reading: 'saizu', meaning: 'size' }, audio: '/audio/sa.mp3', stroke: '/strokes/sa.svg' },
          { kana: 'シ', romaji: 'shi', type: 'katakana', mnemonic: 'Two drops of water, from a "sheet".', example: { word: 'シャワー', reading: 'shawaa', meaning: 'shower' }, audio: '/audio/shi.mp3', stroke: '/strokes/shi.svg' },
          { kana: 'ス', romaji: 'su', type: 'katakana', mnemonic: 'A sharp, stylish "suit".', example: { word: 'スーツケース', reading: 'suutsukesu', meaning: 'suitcase' }, audio: '/audio/su.mp3', stroke: '/strokes/su.svg' },
          { kana: 'セ', romaji: 'se', type: 'katakana', mnemonic: 'Looks like hiragana せ, but more angular, for a "set".', example: { word: 'セーター', reading: 'seetaa', meaning: 'sweater' }, audio: '/audio/se.mp3', stroke: '/strokes/se.svg' },
          { kana: 'ソ', romaji: 'so', type: 'katakana', mnemonic: 'One needle for "sewing".', example: { word: 'ソファ', reading: 'sofa', meaning: 'sofa' }, audio: '/audio/so.mp3', stroke: '/strokes/so.svg' },
          { kana: 'ザ', romaji: 'za', type: 'katakana', mnemonic: 'A "pizza" (サ) slice.', example: { word: 'デザイン', reading: 'dezain', meaning: 'design' }, audio: '/audio/za.mp3', stroke: '/strokes/za.svg' },
          { kana: 'ジ', romaji: 'ji', type: 'katakana', mnemonic: 'A "jeans" (シ) pocket.', example: { word: 'ジーンズ', reading: 'jiinzu', meaning: 'jeans' }, audio: '/audio/ji.mp3', stroke: '/strokes/ji.svg' },
          { kana: 'ズ', romaji: 'zu', type: 'katakana', mnemonic: 'A "zoo" (ス) with sharp corners.', example: { word: 'チーズ', reading: 'chiizu', meaning: 'cheese' }, audio: '/audio/zu.mp3', stroke: '/strokes/zu.svg' },
          { kana: 'ゼ', romaji: 'ze', type: 'katakana', mnemonic: '"Zero" (セ).', example: { word: 'ゼロ', reading: 'zero', meaning: 'zero' }, audio: '/audio/ze.mp3', stroke: '/strokes/ze.svg' },
          { kana: 'ゾ', romaji: 'zo', type: 'katakana', mnemonic: 'A "zombie" (ソ).', example: { word: 'ゾーン', reading: 'zoon', meaning: 'zone' }, audio: '/audio/zo.mp3', stroke: '/strokes/zo.svg' },
      ],
      vocabulary: [
          { word: 'サッカー', reading: 'sakkaa', meaning: 'Soccer', audio: '/audio/sakkaa.mp3' },
          { word: 'シャツ', reading: 'shatsu', meaning: 'Shirt', audio: '/audio/shatsu.mp3' },
          { word: 'スープ', reading: 'suupu', meaning: 'Soup', audio: '/audio/suupu.mp3' },
          { word: 'ソース', reading: 'soosu', meaning: 'Sauce', audio: '/audio/soosu.mp3' },
          { word: 'サイズ', reading: 'saizu', meaning: 'Size', audio: '/audio/saizu.mp3' },
          { word: 'ジーンズ', reading: 'jiinzu', meaning: 'Jeans', audio: '/audio/jiinzu.mp3' },
      ]
    },
    {
        name: 'T-row',
        slug: 't-row',
        kana: [
            { kana: 'タ', romaji: 'ta', type: 'katakana', mnemonic: 'A "taco".', example: { word: 'タイプ', reading: 'taipu', meaning: 'type' }, audio: '/audio/ta.mp3', stroke: '/strokes/ta.svg' },
            { kana: 'チ', romaji: 'chi', type: 'katakana', mnemonic: 'A "cheese" wedge.', example: { word: 'チケット', reading: 'chiketto', meaning: 'ticket' }, audio: '/audio/chi.mp3', stroke: '/strokes/chi.svg' },
            { kana: 'ツ', romaji: 'tsu', type: 'katakana', mnemonic: 'A wave from a "tsunami".', example: { word: 'ツアー', reading: 'tsuaa', meaning: 'tour' }, audio: '/audio/tsu.mp3', stroke: '/strokes/tsu.svg' },
            { kana: 'テ', romaji: 'te', type: 'katakana', mnemonic: 'A "telephone" pole.', example: { word: 'テスト', reading: 'tesuto', meaning: 'test' }, audio: '/audio/te.mp3', stroke: '/strokes/te.svg' },
            { kana: 'ト', romaji: 'to', type: 'katakana', mnemonic: 'A "totem" pole.', example: { word: 'トイレ', reading: 'toire', meaning: 'toilet' }, audio: '/audio/to.mp3', stroke: '/strokes/to.svg' },
            { kana: 'ダ', romaji: 'da', type: 'katakana', mnemonic: '"Dance" (タ).', example: { word: 'ドア', reading: 'doa', meaning: 'door' }, audio: '/audio/da.mp3', stroke: '/strokes/da.svg' },
            { kana: 'ヂ', romaji: 'ji', type: 'katakana', mnemonic: '"Jeep" (チ) again, but sharp.', example: { word: 'ラヂオ', reading: 'rajio', meaning: 'radio (old spelling)' }, audio: '/audio/ji.mp3', stroke: '/strokes/ji.svg' },
            { kana: 'ヅ', romaji: 'zu', type: 'katakana', mnemonic: '"Zoo" (ツ) with sharp waves.', example: { word: 'アイヅ', reading: 'aizu', meaning: 'Aizu (place name)' }, audio: '/audio/zu.mp3', stroke: '/strokes/zu.svg' },
            { kana: 'デ', romaji: 'de', type: 'katakana', mnemonic: '"Desk" (テ).', example: { word: 'データ', reading: 'deeta', meaning: 'data' }, audio: '/audio/de.mp3', stroke: '/strokes/de.svg' },
            { kana: 'ド', romaji: 'do', type: 'katakana', mnemonic: '"Door" (ト).', example: { word: 'ドライブ', reading: 'doraibu', meaning: 'drive' }, audio: '/audio/do.mp3', stroke: '/strokes/do.svg' },
        ],
        vocabulary: [
            { word: 'タクシー', reading: 'takushii', meaning: 'Taxi', audio: '/audio/takushii.mp3' },
            { word: 'チーズ', reading: 'chiizu', meaning: 'Cheese', audio: '/audio/chiizu.mp3' },
            { word: 'テスト', reading: 'tesuto', meaning: 'Test', audio: '/audio/tesuto.mp3' },
            { word: 'トマト', reading: 'tomato', meaning: 'Tomato', audio: '/audio/tomato.mp3' },
            { word: 'ドア', reading: 'doa', meaning: 'Door', audio: '/audio/doa.mp3' },
        ],
    },
    {
        name: 'N-row',
        slug: 'n-row',
        kana: [
            { kana: 'ナ', romaji: 'na', type: 'katakana', mnemonic: 'A "knife".', example: { word: 'ナイフ', reading: 'naifu', meaning: 'knife' }, audio: '/audio/na.mp3', stroke: '/strokes/na.svg' },
            { kana: 'ニ', romaji: 'ni', type: 'katakana', mnemonic: 'Two "needles".', example: { word: 'ニュース', reading: 'nyuusu', meaning: 'news' }, audio: '/audio/ni.mp3', stroke: '/strokes/ni.svg' },
            { kana: 'ヌ', romaji: 'nu', type: 'katakana', mnemonic: 'A pair of "chopsticks" picking up noodles.', example: { word: 'ヌードル', reading: 'nuudoru', meaning: 'noodle' }, audio: '/audio/nu.mp3', stroke: '/strokes/nu.svg' },
            { kana: 'ネ', romaji: 'ne', type: 'katakana', mnemonic: 'A bird in a "nest".', example: { word: 'インターネット', reading: 'intaanetto', meaning: 'internet' }, audio: '/audio/ne.mp3', stroke: '/strokes/ne.svg' },
            { kana: 'ノ', romaji: 'no', type: 'katakana', mnemonic: 'A long "nose".', example: { word: 'ノート', reading: 'nooto', meaning: 'notebook' }, audio: '/audio/no.mp3', stroke: '/strokes/no.svg' },
        ],
        vocabulary: [
            { word: 'ナイフ', reading: 'naifu', meaning: 'Knife', audio: '/audio/naifu.mp3' },
            { word: 'ネクタイ', reading: 'nekutai', meaning: 'Necktie', audio: '/audio/nekutai.mp3' },
            { word: 'ノート', reading: 'nooto', meaning: 'Notebook', audio: '/audio/nooto.mp3' },
            { word: 'ニュース', reading: 'nyuusu', meaning: 'News', audio: '/audio/nyuusu.mp3' },
        ],
    },
    {
        name: 'H-row',
        slug: 'h-row',
        kana: [
            { kana: 'ハ', romaji: 'ha', type: 'katakana', mnemonic: 'A pointy "hat".', example: { word: 'ハワイ', reading: 'hawai', meaning: 'Hawaii' }, audio: '/audio/ha.mp3', stroke: '/strokes/ha.svg' },
            { kana: 'ヒ', romaji: 'hi', type: 'katakana', mnemonic: 'A "heel".', example: { word: 'ヒーロー', reading: 'hiiroo', meaning: 'hero' }, audio: '/audio/hi.mp3', stroke: '/strokes/hi.svg' },
            { kana: 'フ', romaji: 'fu', type: 'katakana', mnemonic: 'A sharp hook for "food".', example: { word: 'ファイル', reading: 'fairu', meaning: 'file' }, audio: '/audio/fu.mp3', stroke: '/strokes/fu.svg' },
            { kana: 'ヘ', romaji: 'he', type: 'katakana', mnemonic: 'Looks exactly like hiragana へ, for "heaven".', example: { word: 'ヘリコプター', reading: 'herikoputaa', meaning: 'helicopter' }, audio: '/audio/he.mp3', stroke: '/strokes/he.svg' },
            { kana: 'ホ', romaji: 'ho', type: 'katakana', mnemonic: 'A "hotel" sign.', example: { word: 'ホテル', reading: 'hoteru', meaning: 'hotel' }, audio: '/audio/ho.mp3', stroke: '/strokes/ho.svg' },
            { kana: 'バ', romaji: 'ba', type: 'katakana', mnemonic: 'A "bus" (ハ).', example: { word: 'バター', reading: 'bataa', meaning: 'butter' }, audio: '/audio/ba.mp3', stroke: '/strokes/ba.svg' },
            { kana: 'ビ', romaji: 'bi', type: 'katakana', mnemonic: '"Beer" (ヒ).', example: { word: 'ビジネス', reading: 'bijinesu', meaning: 'business' }, audio: '/audio/bi.mp3', stroke: '/strokes/bi.svg' },
            { kana: 'ブ', romaji: 'bu', type: 'katakana', mnemonic: '"Book" (フ).', example: { word: 'ブルー', reading: 'buruu', meaning: 'blue' }, audio: '/audio/bu.mp3', stroke: '/strokes/bu.svg' },
            { kana: 'ベ', romaji: 'be', type: 'katakana', mnemonic: '"Bed" (ヘ).', example: { word: 'ベッド', reading: 'beddo', meaning: 'bed' }, audio: '/audio/be.mp3', stroke: '/strokes/be.svg' },
            { kana: 'ボ', romaji: 'bo', type: 'katakana', mnemonic: '"Boat" (ホ).', example: { word: 'ボールペン', reading: 'boorupen', meaning: 'ballpoint pen' }, audio: '/audio/bo.mp3', stroke: '/strokes/bo.svg' },
            { kana: 'パ', romaji: 'pa', type: 'katakana', mnemonic: '"Party" (ハ) hat.', example: { word: 'パン', reading: 'pan', meaning: 'bread' }, audio: '/audio/pa.mp3', stroke: '/strokes/pa.svg' },
            { kana: 'ピ', romaji: 'pi', type: 'katakana', mnemonic: '"Pizza" (ヒ) slice.', example: { word: 'ピンク', reading: 'pinku', meaning: 'pink' }, audio: '/audio/pi.mp3', stroke: '/strokes/pi.svg' },
            { kana: 'プ', romaji: 'pu', type: 'katakana', mnemonic: '"Pool" (フ).', example: { word: 'プリンター', reading: 'purintaa', meaning: 'printer' }, audio: '/audio/pu.mp3', stroke: '/strokes/pu.svg' },
            { kana: 'ペ', romaji: 'pe', type: 'katakana', mnemonic: '"Pen" (ヘ).', example: { word: 'ペット', reading: 'petto', meaning: 'pet' }, audio: '/audio/pe.mp3', stroke: '/strokes/pe.svg' },
            { kana: 'ポ', romaji: 'po', type: 'katakana', mnemonic: '"Post" (ホ) office.', example: { word: 'ポケット', reading: 'poketto', meaning: 'pocket' }, audio: '/audio/po.mp3', stroke: '/strokes/po.svg' },
        ],
        vocabulary: [
            { word: 'パン', reading: 'pan', meaning: 'Bread', audio: '/audio/pan.mp3' },
            { word: 'ホテル', reading: 'hoteru', meaning: 'Hotel', audio: '/audio/hoteru.mp3' },
            { word: 'バス', reading: 'basu', meaning: 'Bus', audio: '/audio/basu.mp3' },
            { word: 'ビール', reading: 'biiru', meaning: 'Beer', audio: '/audio/biiru.mp3' },
            { word: 'ペット', reading: 'petto', meaning: 'Pet', audio: '/audio/petto.mp3' },
        ],
    },
    {
        name: 'M-row',
        slug: 'm-row',
        kana: [
            { kana: 'マ', romaji: 'ma', type: 'katakana', mnemonic: 'A "magician\'s" sharp cape.', example: { word: 'マイク', reading: 'maiku', meaning: 'microphone' }, audio: '/audio/ma.mp3', stroke: '/strokes/ma.svg' },
            { kana: 'ミ', romaji: 'mi', type: 'katakana', mnemonic: 'Three "missiles".', example: { word: 'メニュー', reading: 'menyuu', meaning: 'menu' }, audio: '/audio/mi.mp3', stroke: '/strokes/mi.svg' },
            { kana: 'ム', romaji: 'mu', type: 'katakana', mnemonic: 'A sharp, angular "moo" from a cow.', example: { word: 'チーム', reading: 'chiimu', meaning: 'team' }, audio: '/audio/mu.mp3', stroke: '/strokes/mu.svg' },
            { kana: 'メ', romaji: 'me', type: 'katakana', mnemonic: 'An "X" marking a treasure map, sent by "mail".', example: { word: 'メール', reading: 'meeru', meaning: 'mail' }, audio: '/audio/me.mp3', stroke: '/strokes/me.svg' },
            { kana: 'モ', romaji: 'mo', type: 'katakana', mnemonic: 'Looks like hiragana も, but sharper, for "mobile".', example: { word: 'モデル', reading: 'moderu', meaning: 'model' }, audio: '/audio/mo.mp3', stroke: '/strokes/mo.svg' },
        ],
        vocabulary: [
            { word: 'マッチ', reading: 'matchi', meaning: 'Match', audio: '/audio/matchi.mp3' },
            { word: 'ミルク', reading: 'miruku', meaning: 'Milk', audio: '/audio/miruku.mp3' },
            { word: 'メニュー', reading: 'menyuu', meaning: 'Menu', audio: '/audio/menyuu.mp3' },
            { word: 'メモ', reading: 'memo', meaning: 'Memo', audio: '/audio/memo.mp3' },
        ],
    },
    {
        name: 'Y-row',
        slug: 'y-row',
        kana: [
            { kana: 'ヤ', romaji: 'ya', type: 'katakana', mnemonic: 'Looks like hiragana や, but sharper, like a "yacht".', example: { word: 'タイヤ', reading: 'taiya', meaning: 'tire' }, audio: '/audio/ya.mp3', stroke: '/strokes/ya.svg' },
            { kana: 'ユ', romaji: 'yu', type: 'katakana', mnemonic: 'A "uniform".', example: { word: 'ユーチューブ', reading: 'yuuchuubu', meaning: 'YouTube' }, audio: '/audio/yu.mp3', stroke: '/strokes/yu.svg' },
            { kana: 'ヨ', romaji: 'yo', type: 'katakana', mnemonic: 'A "yolk" in a broken egg.', example: { word: 'ヨーグルト', reading: 'yooguruto', meaning: 'yogurt' }, audio: '/audio/yo.mp3', stroke: '/strokes/yo.svg' },
        ],
        vocabulary: [
            { word: 'ヨット', reading: 'yotto', meaning: 'Yacht', audio: '/audio/yotto.mp3' },
            { word: 'ヨーロッパ', reading: 'yooroppa', meaning: 'Europe', audio: '/audio/yooroppa.mp3' },
            { word: 'ユーモア', reading: 'yuumoa', meaning: 'Humor', audio: '/audio/yuumoa.mp3' },
        ],
    },
    {
        name: 'R-row',
        slug: 'r-row',
        kana: [
            { kana: 'ラ', romaji: 'ra', type: 'katakana', mnemonic: 'A "radio".', example: { word: 'ラーメン', reading: 'raamen', meaning: 'ramen' }, audio: '/audio/ra.mp3', stroke: '/strokes/ra.svg' },
            { kana: 'リ', romaji: 'ri', type: 'katakana', mnemonic: 'Looks like hiragana り, for "ribbon".', example: { word: 'リーダー', reading: 'riidaa', meaning: 'leader' }, audio: '/audio/ri.mp3', stroke: '/strokes/ri.svg' },
            { kana: 'ル', romaji: 'ru', type: 'katakana', mnemonic: 'A pair of "ruby" earrings.', example: { word: 'ホテル', reading: 'hoteru', meaning: 'hotel' }, audio: '/audio/ru.mp3', stroke: '/strokes/ru.svg' },
            { kana: 'レ', romaji: 're', type: 'katakana', mnemonic: 'A "razor".', example: { word: 'レストラン', reading: 'resutoran', meaning: 'restaurant' }, audio: '/audio/re.mp3', stroke: '/strokes/re.svg' },
            { kana: 'ロ', romaji: 'ro', type: 'katakana', mnemonic: 'A square "road".', example: { word: 'ロボット', reading: 'robotto', meaning: 'robot' }, audio: '/audio/ro.mp3', stroke: '/strokes/ro.svg' },
        ],
        vocabulary: [
            { word: 'ラジオ', reading: 'rajio', meaning: 'Radio', audio: '/audio/rajio.mp3' },
            { word: 'レストラン', reading: 'resutoran', meaning: 'Restaurant', audio: '/audio/resutoran.mp3' },
            { word: 'ルール', reading: 'ruuru', meaning: 'Rule', audio: '/audio/ruuru.mp3' },
            { word: 'レポート', reading: 'repooto', meaning: 'Report', audio: '/audio/repooto.mp3' },
        ],
    },
    {
        name: 'W-row & N',
        slug: 'w-n-row',
        kana: [
            { kana: 'ワ', romaji: 'wa', type: 'katakana', mnemonic: 'A glass of "wine".', example: { word: 'ワイン', reading: 'wain', meaning: 'wine' }, audio: '/audio/wa.mp3', stroke: '/strokes/wa.svg' },
            { kana: 'ヲ', romaji: 'wo', type: 'katakana', mnemonic: 'A wolf howling "wooo!".', example: { word: 'ヲタク', reading: 'wotaku', meaning: 'otaku (geek)' }, audio: '/audio/wo.mp3', stroke: '/strokes/wo.svg' },
            { kana: 'ン', romaji: 'n', type: 'katakana', mnemonic: 'A single drop of "ink".', example: { word: 'レストラン', reading: 'resutoran', meaning: 'restaurant' }, audio: '/audio/n.mp3', stroke: '/strokes/n.svg' },
        ],
        vocabulary: [
            { word: 'ワイン', reading: 'wain', meaning: 'Wine', audio: '/audio/wain.mp3' },
            { word: 'ペン', reading: 'pen', meaning: 'Pen', audio: '/audio/pen.mp3' },
            { word: 'ロマンチック', reading: 'romanchikku', meaning: 'Romantic', audio: '/audio/romanchikku.mp3' },
        ],
    },
];

export const allKana = [...hiraganaLessons, ...katakanaLessons].flatMap(lesson => lesson.kana);
