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

export interface KanaLesson {
  name: string;
  slug: string;
  kana: Kana[];
}

export const hiraganaLessons: KanaLesson[] = [
  {
    name: 'Vowels',
    slug: 'vowels',
    kana: [
      { kana: 'あ', romaji: 'a', type: 'hiragana', mnemonic: 'An "apple" with a leaf.', example: { word: 'あか', reading: 'aka', meaning: 'red' }, audio: '/audio/a.mp3', stroke: '/strokes/a.svg' },
      { kana: 'い', romaji: 'i', type: 'hiragana', mnemonic: 'Two "eels" swimming side-by-side.', example: { word: 'いぬ', reading: 'inu', meaning: 'dog' }, audio: '/audio/i.mp3', stroke: '/strokes/i.svg' },
      { kana: 'う', romaji: 'u', type: 'hiragana', mnemonic: 'A person with a broken "umbrella".', example: { word: 'うし', reading: 'ushi', meaning: 'cow' }, audio: '/audio/u.mp3', stroke: '/strokes/u.svg' },
      { kana: 'え', romaji: 'e', type: 'hiragana', mnemonic: 'An "energetic" ninja running.', example: { word: 'えき', reading: 'eki', meaning: 'station' }, audio: '/audio/e.mp3', stroke: '/strokes/e.svg' },
      { kana: 'お', romaji: 'o', type: 'hiragana', mnemonic: 'A UFO ("oh!") with an antenna.', example: { word: 'おちゃ', reading: 'ocha', meaning: 'tea' }, audio: '/audio/o.mp3', stroke: '/strokes/o.svg' },
    ],
  },
  {
    name: 'K-row',
    slug: 'k-row',
    kana: [
      { kana: 'か', romaji: 'ka', type: 'hiragana', mnemonic: 'A "car" driving away.', example: { word: 'かさ', reading: 'kasa', meaning: 'umbrella' }, audio: '/audio/ka.mp3', stroke: '/strokes/ka.svg' },
      { kana: 'き', romaji: 'ki', type: 'hiragana', mnemonic: 'A "key" in a lock.', example: { word: 'きつね', reading: 'kitsune', meaning: 'fox' }, audio: '/audio/ki.mp3', stroke: '/strokes/ki.svg' },
      { kana: 'く', romaji: 'ku', type: 'hiragana', mnemonic: 'A "cuckoo" bird\'s beak.', example: { word: 'くつ', reading: 'kutsu', meaning: 'shoes' }, audio: '/audio/ku.mp3', stroke: '/strokes/ku.svg' },
      { kana: 'け', romaji: 'ke', type: 'hiragana', mnemonic: 'A "keg" of beer.', example: { word: 'けむし', reading: 'kemushi', meaning: 'caterpillar' }, audio: '/audio/ke.mp3', stroke: '/strokes/ke.svg' },
      { kana: 'こ', romaji: 'ko', type: 'hiragana', mnemonic: 'Two "koalas" hugging.', example: { word: 'こども', reading: 'kodomo', meaning: 'child' }, audio: '/audio/ko.mp3', stroke: '/strokes/ko.svg' },
    ],
  },
  {
    name: 'S-row',
    slug: 's-row',
    kana: [
        { kana: 'さ', romaji: 'sa', type: 'hiragana', mnemonic: 'A "saw" cutting wood.', example: { word: 'さかな', reading: 'sakana', meaning: 'fish' }, audio: '/audio/sa.mp3', stroke: '/strokes/sa.svg' },
        { kana: 'し', romaji: 'shi', type: 'hiragana', mnemonic: 'A fishing hook for the "sea".', example: { word: 'しか', reading: 'shika', meaning: 'deer' }, audio: '/audio/shi.mp3', stroke: '/strokes/shi.svg' },
        { kana: 'す', romaji: 'su', type: 'hiragana', mnemonic: 'A curly straw to "sue" someone with.', example: { word: 'すいか', reading: 'suika', meaning: 'watermelon' }, audio: '/audio/su.mp3', stroke: '/strokes/su.svg' },
        { kana: 'せ', romaji: 'se', type: 'hiragana', mnemonic: 'A mouth "saying" something.', example: { word: 'せかい', reading: 'sekai', meaning: 'world' }, audio: '/audio/se.mp3', stroke: '/strokes/se.svg' },
        { kana: 'そ', romaji: 'so', type: 'hiragana', mnemonic: 'A zigzag stitch, "sew"ing something up.', example: { word: 'そら', reading: 'sora', meaning: 'sky' }, audio: '/audio/so.mp3', stroke: '/strokes/so.svg' },
    ]
  }
];

export const katakanaLessons: KanaLesson[] = [
    {
        name: 'Vowels',
        slug: 'vowels',
        kana: [
            { kana: 'ア', romaji: 'a', type: 'katakana', mnemonic: 'Looks like a part of a capital "A".', example: { word: 'アメリカ', reading: 'amerika', meaning: 'America' }, audio: '/audio/a.mp3', stroke: '/strokes/a.svg' },
            { kana: 'イ', romaji: 'i', type: 'katakana', mnemonic: 'An "eagle" flying.', example: { word: 'イス', reading: 'isu', meaning: 'chair' }, audio: '/audio/i.mp3', stroke: '/strokes/i.svg' },
            { kana: 'ウ', romaji: 'u', type: 'katakana', mnemonic: 'A roof of a house, seen from "under".', example: { word: 'ウイスキー', reading: 'uisukii', meaning: 'whiskey' }, audio: '/audio/u.mp3', stroke: '/strokes/u.svg' },
            { kana: 'エ', romaji: 'e', type: 'katakana', mnemonic: 'An "elevator" with three levels.', example: { word: 'エアコン', reading: 'eakon', meaning: 'air conditioner' }, audio: '/audio/e.mp3', stroke: '/strokes/e.svg' },
            { kana: 'オ', romaji: 'o', type: 'katakana', mnemonic: 'An "opera" singer with open mouth.', example: { word: 'オレンジ', reading: 'orenji', meaning: 'orange' }, audio: '/audio/o.mp3', stroke: '/strokes/o.svg' },
        ],
    },
    {
        name: 'K-row',
        slug: 'k-row',
        kana: [
            { kana: 'カ', romaji: 'ka', type: 'katakana', mnemonic: 'Same as hiragana か, but sharp, like a "karate" chop.', example: { word: 'カメラ', reading: 'kamera', meaning: 'camera' }, audio: '/audio/ka.mp3', stroke: '/strokes/ka.svg' },
            { kana: 'キ', romaji: 'ki', type: 'katakana', mnemonic: 'A sharp "key", but with an extra line.', example: { word: 'キロ', reading: 'kiro', meaning: 'kilo' }, audio: '/audio/ki.mp3', stroke: '/strokes/ki.svg' },
            { kana: 'ク', romaji: 'ku', type: 'katakana', mnemonic: 'A corner of a "cube".', example: { word: 'クラス', reading: 'kurasu', meaning: 'class' }, audio: '/audio/ku.mp3', stroke: '/strokes/ku.svg' },
            { kana: 'ケ', romaji: 'ke', type: 'katakana', mnemonic: 'A sharp "K" on its side.', example: { word: 'ケーキ', reading: 'keeki', meaning: 'cake' }, audio: '/audio/ke.mp3', stroke: '/strokes/ke.svg' },
            { kana: 'コ', romaji: 'ko', type: 'katakana', mnemonic: 'A corner of a box for "coffee".', example: { word: 'コーヒー', reading: 'koohii', meaning: 'coffee' }, audio: '/audio/ko.mp3', stroke: '/strokes/ko.svg' },
        ],
    },
    {
      name: 'S-row',
      slug: 's-row',
      kana: [
          { kana: 'サ', romaji: 'sa', type: 'katakana', mnemonic: 'Three "sardines" on a plate.', example: { word: 'サービス', reading: 'saabisu', meaning: 'service' }, audio: '/audio/sa.mp3', stroke: '/strokes/sa.svg' },
          { kana: 'シ', romaji: 'shi', type: 'katakana', mnemonic: 'Two drops of water, from a "sheet".', example: { word: 'シャツ', reading: 'shatsu', meaning: 'shirt' }, audio: '/audio/shi.mp3', stroke: '/strokes/shi.svg' },
          { kana: 'ス', romaji: 'su', type: 'katakana', mnemonic: 'A sharp, stylish "suit".', example: { word: 'スープ', reading: 'suupu', meaning: 'soup' }, audio: '/audio/su.mp3', stroke: '/strokes/su.svg' },
          { kana: 'セ', romaji: 'se', type: 'katakana', mnemonic: 'Looks like hiragana せ, but more angular, for a "set".', example: { word: 'セール', reading: 'seeru', meaning: 'sale' }, audio: '/audio/se.mp3', stroke: '/strokes/se.svg' },
          { kana: 'ソ', romaji: 'so', type: 'katakana', mnemonic: 'One needle for "sewing".', example: { word: 'ソース', reading: 'soosu', meaning: 'sauce' }, audio: '/audio/so.mp3', stroke: '/strokes/so.svg' },
      ]
    }
];

export const allKana = [...hiraganaLessons, ...katakanaLessons].flatMap(lesson => lesson.kana);
