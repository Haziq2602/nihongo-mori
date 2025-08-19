export interface Kana {
  kana: string;
  romaji: string;
  type: 'hiragana' | 'katakana';
  mnemonic: string;
  mnemonic_image: string;
  mnemonic_hint: string;
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
      { kana: 'あ', romaji: 'a', type: 'hiragana', mnemonic: 'An "apple" with a leaf.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'apple leaf', example: { word: 'あか', reading: 'aka', meaning: 'red' }, audio: '/audio/a.mp3', stroke: '/strokes/a.svg' },
      { kana: 'い', romaji: 'i', type: 'hiragana', mnemonic: 'Two "eels" swimming side-by-side.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'swimming eels', example: { word: 'いぬ', reading: 'inu', meaning: 'dog' }, audio: '/audio/i.mp3', stroke: '/strokes/i.svg' },
      { kana: 'う', romaji: 'u', type: 'hiragana', mnemonic: 'A person with a broken "umbrella".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'broken umbrella', example: { word: 'うし', reading: 'ushi', meaning: 'cow' }, audio: '/audio/u.mp3', stroke: '/strokes/u.svg' },
      { kana: 'え', romaji: 'e', type: 'hiragana', mnemonic: 'An "energetic" ninja running.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'running ninja', example: { word: 'えき', reading: 'eki', meaning: 'station' }, audio: '/audio/e.mp3', stroke: '/strokes/e.svg' },
      { kana: 'お', romaji: 'o', type: 'hiragana', mnemonic: 'A UFO ("oh!") with an antenna.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'ufo antenna', example: { word: 'おちゃ', reading: 'ocha', meaning: 'tea' }, audio: '/audio/o.mp3', stroke: '/strokes/o.svg' },
    ],
  },
  {
    name: 'K-row',
    slug: 'k-row',
    kana: [
      { kana: 'か', romaji: 'ka', type: 'hiragana', mnemonic: 'A "car" driving away.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'driving car', example: { word: 'かさ', reading: 'kasa', meaning: 'umbrella' }, audio: '/audio/ka.mp3', stroke: '/strokes/ka.svg' },
      { kana: 'き', romaji: 'ki', type: 'hiragana', mnemonic: 'A "key" in a lock.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'key lock', example: { word: 'きつね', reading: 'kitsune', meaning: 'fox' }, audio: '/audio/ki.mp3', stroke: '/strokes/ki.svg' },
      { kana: 'く', romaji: 'ku', type: 'hiragana', mnemonic: 'A "cuckoo" bird\'s beak.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'cuckoo beak', example: { word: 'くつ', reading: 'kutsu', meaning: 'shoes' }, audio: '/audio/ku.mp3', stroke: '/strokes/ku.svg' },
      { kana: 'け', romaji: 'ke', type: 'hiragana', mnemonic: 'A "keg" of beer.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'beer keg', example: { word: 'けむし', reading: 'kemushi', meaning: 'caterpillar' }, audio: '/audio/ke.mp3', stroke: '/strokes/ke.svg' },
      { kana: 'こ', romaji: 'ko', type: 'hiragana', mnemonic: 'Two "koalas" hugging.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'hugging koalas', example: { word: 'こども', reading: 'kodomo', meaning: 'child' }, audio: '/audio/ko.mp3', stroke: '/strokes/ko.svg' },
    ],
  },
  {
    name: 'S-row',
    slug: 's-row',
    kana: [
        { kana: 'さ', romaji: 'sa', type: 'hiragana', mnemonic: 'A "saw" cutting wood.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'saw wood', example: { word: 'さかな', reading: 'sakana', meaning: 'fish' }, audio: '/audio/sa.mp3', stroke: '/strokes/sa.svg' },
        { kana: 'し', romaji: 'shi', type: 'hiragana', mnemonic: 'A fishing hook for the "sea".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'fishing hook', example: { word: 'しか', reading: 'shika', meaning: 'deer' }, audio: '/audio/shi.mp3', stroke: '/strokes/shi.svg' },
        { kana: 'す', romaji: 'su', type: 'hiragana', mnemonic: 'A curly straw to "sue" someone with.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'curly straw', example: { word: 'すいか', reading: 'suika', meaning: 'watermelon' }, audio: '/audio/su.mp3', stroke: '/strokes/su.svg' },
        { kana: 'せ', romaji: 'se', type: 'hiragana', mnemonic: 'A mouth "saying" something.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'speaking mouth', example: { word: 'せかい', reading: 'sekai', meaning: 'world' }, audio: '/audio/se.mp3', stroke: '/strokes/se.svg' },
        { kana: 'そ', romaji: 'so', type: 'hiragana', mnemonic: 'A zigzag stitch, "sew"ing something up.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'zigzag stitch', example: { word: 'そら', reading: 'sora', meaning: 'sky' }, audio: '/audio/so.mp3', stroke: '/strokes/so.svg' },
    ]
  },
  {
    name: 'T-row',
    slug: 't-row',
    kana: [
        { kana: 'た', romaji: 'ta', type: 'hiragana', mnemonic: 'Looks like "ta".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'abstract shape', example: { word: 'たこ', reading: 'tako', meaning: 'octopus' }, audio: '/audio/ta.mp3', stroke: '/strokes/ta.svg' },
        { kana: 'ち', romaji: 'chi', type: 'hiragana', mnemonic: 'A "cheerleader" cheering.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'cheerleader silhouette', example: { word: 'ちず', reading: 'chizu', meaning: 'map' }, audio: '/audio/chi.mp3', stroke: '/strokes/chi.svg' },
        { kana: 'つ', romaji: 'tsu', type: 'hiragana', mnemonic: 'A "tsunami" wave.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'tsunami wave', example: { word: 'つくえ', reading: 'tsukue', meaning: 'desk' }, audio: '/audio/tsu.mp3', stroke: '/strokes/tsu.svg' },
        { kana: 'て', romaji: 'te', type: 'hiragana', mnemonic: 'A "table" with one leg.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'one-legged table', example: { word: 'てがみ', reading: 'tegami', meaning: 'letter' }, audio: '/audio/te.mp3', stroke: '/strokes/te.svg' },
        { kana: 'と', romaji: 'to', type: 'hiragana', mnemonic: 'A "toe" with a nail.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'toe nail', example: { word: 'とけい', reading: 'tokei', meaning: 'clock' }, audio: '/audio/to.mp3', stroke: '/strokes/to.svg' },
    ],
  },
  {
      name: 'N-row',
      slug: 'n-row',
      kana: [
          { kana: 'な', romaji: 'na', type: 'hiragana', mnemonic: 'A "knot" in a rope.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'rope knot', example: { word: 'なまえ', reading: 'namae', meaning: 'name' }, audio: '/audio/na.mp3', stroke: '/strokes/na.svg' },
          { kana: 'に', romaji: 'ni', type: 'hiragana', mnemonic: 'A "needle" and thread.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'needle thread', example: { word: 'にく', reading: 'niku', meaning: 'meat' }, audio: '/audio/ni.mp3', stroke: '/strokes/ni.svg' },
          { kana: 'ぬ', romaji: 'nu', type: 'hiragana', mnemonic: 'A bowl of "noodles".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'bowl noodles', example: { word: 'ぬりえ', reading: 'nurie', meaning: 'coloring book' }, audio: '/audio/nu.mp3', stroke: '/strokes/nu.svg' },
          { kana: 'ね', romaji: 'ne', type: 'hiragana', mnemonic: 'A "snail" in its shell.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'snail shell', example: { word: 'ねこ', reading: 'neko', meaning: 'cat' }, audio: '/audio/ne.mp3', stroke: '/strokes/ne.svg' },
          { kana: 'の', romaji: 'no', type: 'hiragana', mnemonic: 'A "no" sign.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'no sign', example: { word: 'のり', reading: 'nori', meaning: 'seaweed' }, audio: '/audio/no.mp3', stroke: '/strokes/no.svg' },
      ],
  },
  {
      name: 'H-row',
      slug: 'h-row',
      kana: [
          { kana: 'は', romaji: 'ha', type: 'hiragana', mnemonic: 'A person laughing "ha ha".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'laughing person', example: { word: 'はな', reading: 'hana', meaning: 'flower' }, audio: '/audio/ha.mp3', stroke: '/strokes/ha.svg' },
          { kana: 'ひ', romaji: 'hi', type: 'hiragana', mnemonic: 'A smiling face, "hee hee".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'smiling face', example: { word: 'ひこうき', reading: 'hikouki', meaning: 'airplane' }, audio: '/audio/hi.mp3', stroke: '/strokes/hi.svg' },
          { kana: 'ふ', romaji: 'fu', type: 'hiragana', mnemonic: 'Mount "Fuji".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'mount fuji', example: { word: 'ふね', reading: 'fune', meaning: 'boat' }, audio: '/audio/fu.mp3', stroke: '/strokes/fu.svg' },
          { kana: 'へ', romaji: 'he', type: 'hiragana', mnemonic: 'A pointy hill, heading to "heaven".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'pointy hill', example: { word: 'へび', reading: 'hebi', meaning: 'snake' }, audio: '/audio/he.mp3', stroke: '/strokes/he.svg' },
          { kana: 'ほ', romaji: 'ho', type: 'hiragana', mnemonic: 'A "horse" with a saddle.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'saddled horse', example: { word: 'ほし', reading: 'hoshi', meaning: 'star' }, audio: '/audio/ho.mp3', stroke: '/strokes/ho.svg' },
      ],
  },
  {
      name: 'M-row',
      slug: 'm-row',
      kana: [
          { kana: 'ま', romaji: 'ma', type: 'hiragana', mnemonic: 'Your "mom" is watching you.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'watching mother', example: { word: 'まど', reading: 'mado', meaning: 'window' }, audio: '/audio/ma.mp3', stroke: '/strokes/ma.svg' },
          { kana: 'み', romaji: 'mi', type: 'hiragana', mnemonic: 'The number 21, "me" in two decades.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'number 21', example: { word: 'みみ', reading: 'mimi', meaning: 'ear' }, audio: '/audio/mi.mp3', stroke: '/strokes/mi.svg' },
          { kana: 'む', romaji: 'mu', type: 'hiragana', mnemonic: 'A cow saying "moo".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'cow moo', example: { word: 'むし', reading: 'mushi', meaning: 'insect' }, audio: '/audio/mu.mp3', stroke: '/strokes/mu.svg' },
          { kana: 'め', romaji: 'me', type: 'hiragana', mnemonic: 'A "messy" knot.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'messy knot', example: { word: 'めがね', reading: 'megane', meaning: 'glasses' }, audio: '/audio/me.mp3', stroke: '/strokes/me.svg' },
          { kana: 'も', romaji: 'mo', type: 'hiragana', mnemonic: 'A fish hook to catch "more" fish.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'fish hook', example: { word: 'もも', reading: 'momo', meaning: 'peach' }, audio: '/audio/mo.mp3', stroke: '/strokes/mo.svg' },
      ],
  },
  {
      name: 'Y-row',
      slug: 'y-row',
      kana: [
          { kana: 'や', romaji: 'ya', type: 'hiragana', mnemonic: 'A "yak" with large horns.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'yak horns', example: { word: 'やま', reading: 'yama', meaning: 'mountain' }, audio: '/audio/ya.mp3', stroke: '/strokes/ya.svg' },
          { kana: 'ゆ', romaji: 'yu', type: 'hiragana', mnemonic: 'A "unique" fish.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'unique fish', example: { word: 'ゆき', reading: 'yuki', meaning: 'snow' }, audio: '/audio/yu.mp3', stroke: '/strokes/yu.svg' },
          { kana: 'よ', romaji: 'yo', type: 'hiragana', mnemonic: 'A "yo-yo".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'yo-yo toy', example: { word: 'よる', reading: 'yoru', meaning: 'night' }, audio: '/audio/yo.mp3', stroke: '/strokes/yo.svg' },
      ],
  },
  {
      name: 'R-row',
      slug: 'r-row',
      kana: [
          { kana: 'ら', romaji: 'ra', type: 'hiragana', mnemonic: 'A rapper saying "ra ra ra".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'rapper silhouette', example: { word: 'らくだ', reading: 'rakuda', meaning: 'camel' }, audio: '/audio/ra.mp3', stroke: '/strokes/ra.svg' },
          { kana: 'り', romaji: 'ri', type: 'hiragana', mnemonic: 'A "river" flowing.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'flowing river', example: { word: 'りんご', reading: 'ringo', meaning: 'apple' }, audio: '/audio/ri.mp3', stroke: '/strokes/ri.svg' },
          { kana: 'る', romaji: 'ru', type: 'hiragana', mnemonic: 'A "loop" in a road.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'road loop', example: { word: 'るす', reading: 'rusu', meaning: 'absent' }, audio: '/audio/ru.mp3', stroke: '/strokes/ru.svg' },
          { kana: 'れ', romaji: 're', type: 'hiragana', mnemonic: 'A person kneeling to "pray".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'kneeling person', example: { word: 'れもん', reading: 'remon', meaning: 'lemon' }, audio: '/audio/re.mp3', stroke: '/strokes/re.svg' },
          { kana: 'ろ', romaji: 'ro', type: 'hiragana', mnemonic: 'A "road" with no turns.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'straight road', example: { word: 'ろうそく', reading: 'rousoku', meaning: 'candle' }, audio: '/audio/ro.mp3', stroke: '/strokes/ro.svg' },
      ],
  },
  {
      name: 'W-row & N',
      slug: 'w-n-row',
      kana: [
          { kana: 'わ', romaji: 'wa', type: 'hiragana', mnemonic: 'A "swan" with a long neck.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'swan neck', example: { word: 'わたし', reading: 'watashi', meaning: 'I/me' }, audio: '/audio/wa.mp3', stroke: '/strokes/wa.svg' },
          { kana: 'を', romaji: 'wo', type: 'hiragana', mnemonic: 'Someone saying "whoa!".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'surprised person', example: { word: 'てがみをかく', reading: 'tegami wo kaku', meaning: 'write a letter' }, audio: '/audio/wo.mp3', stroke: '/strokes/wo.svg' },
          { kana: 'ん', romaji: 'n', type: 'hiragana', mnemonic: 'A lower-case "n".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'letter n', example: { word: 'パン', reading: 'pan', meaning: 'bread' }, audio: '/audio/n.mp3', stroke: '/strokes/n.svg' },
      ],
  },
];

export const katakanaLessons: KanaLesson[] = [
    {
        name: 'Vowels',
        slug: 'vowels',
        kana: [
            { kana: 'ア', romaji: 'a', type: 'katakana', mnemonic: 'Looks like a part of a capital "A".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'capital A', example: { word: 'アメリカ', reading: 'amerika', meaning: 'America' }, audio: '/audio/a.mp3', stroke: '/strokes/a.svg' },
            { kana: 'イ', romaji: 'i', type: 'katakana', mnemonic: 'An "eagle" flying.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'flying eagle', example: { word: 'イス', reading: 'isu', meaning: 'chair' }, audio: '/audio/i.mp3', stroke: '/strokes/i.svg' },
            { kana: 'ウ', romaji: 'u', type: 'katakana', mnemonic: 'A roof of a house, seen from "under".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'house roof', example: { word: 'ウイスキー', reading: 'uisukii', meaning: 'whiskey' }, audio: '/audio/u.mp3', stroke: '/strokes/u.svg' },
            { kana: 'エ', romaji: 'e', type: 'katakana', mnemonic: 'An "elevator" with three levels.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'elevator doors', example: { word: 'エアコン', reading: 'eakon', meaning: 'air conditioner' }, audio: '/audio/e.mp3', stroke: '/strokes/e.svg' },
            { kana: 'オ', romaji: 'o', type: 'katakana', mnemonic: 'An "opera" singer with open mouth.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'opera singer', example: { word: 'オレンジ', reading: 'orenji', meaning: 'orange' }, audio: '/audio/o.mp3', stroke: '/strokes/o.svg' },
        ],
    },
    {
        name: 'K-row',
        slug: 'k-row',
        kana: [
            { kana: 'カ', romaji: 'ka', type: 'katakana', mnemonic: 'Same as hiragana か, but sharp, like a "karate" chop.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'karate chop', example: { word: 'カメラ', reading: 'kamera', meaning: 'camera' }, audio: '/audio/ka.mp3', stroke: '/strokes/ka.svg' },
            { kana: 'キ', romaji: 'ki', type: 'katakana', mnemonic: 'A sharp "key", but with an extra line.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'sharp key', example: { word: 'キロ', reading: 'kiro', meaning: 'kilo' }, audio: '/audio/ki.mp3', stroke: '/strokes/ki.svg' },
            { kana: 'ク', romaji: 'ku', type: 'katakana', mnemonic: 'A corner of a "cube".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'cube corner', example: { word: 'クラス', reading: 'kurasu', meaning: 'class' }, audio: '/audio/ku.mp3', stroke: '/strokes/ku.svg' },
            { kana: 'ケ', romaji: 'ke', type: 'katakana', mnemonic: 'A sharp "K" on its side.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'letter k', example: { word: 'ケーキ', reading: 'keeki', meaning: 'cake' }, audio: '/audio/ke.mp3', stroke: '/strokes/ke.svg' },
            { kana: 'コ', romaji: 'ko', type: 'katakana', mnemonic: 'A corner of a box for "coffee".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'coffee box', example: { word: 'コーヒー', reading: 'koohii', meaning: 'coffee' }, audio: '/audio/ko.mp3', stroke: '/strokes/ko.svg' },
        ],
    },
    {
      name: 'S-row',
      slug: 's-row',
      kana: [
          { kana: 'サ', romaji: 'sa', type: 'katakana', mnemonic: 'Three "sardines" on a plate.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'sardines plate', example: { word: 'サービス', reading: 'saabisu', meaning: 'service' }, audio: '/audio/sa.mp3', stroke: '/strokes/sa.svg' },
          { kana: 'シ', romaji: 'shi', type: 'katakana', mnemonic: 'Two drops of water, from a "sheet".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'water drops', example: { word: 'シャツ', reading: 'shatsu', meaning: 'shirt' }, audio: '/audio/shi.mp3', stroke: '/strokes/shi.svg' },
          { kana: 'ス', romaji: 'su', type: 'katakana', mnemonic: 'A sharp, stylish "suit".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'stylish suit', example: { word: 'スープ', reading: 'suupu', meaning: 'soup' }, audio: '/audio/su.mp3', stroke: '/strokes/su.svg' },
          { kana: 'セ', romaji: 'se', type: 'katakana', mnemonic: 'Looks like hiragana せ, but more angular, for a "set".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'abstract angular', example: { word: 'セール', reading: 'seeru', meaning: 'sale' }, audio: '/audio/se.mp3', stroke: '/strokes/se.svg' },
          { kana: 'ソ', romaji: 'so', type: 'katakana', mnemonic: 'One needle for "sewing".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'sewing needle', example: { word: 'ソース', reading: 'soosu', meaning: 'sauce' }, audio: '/audio/so.mp3', stroke: '/strokes/so.svg' },
      ]
    },
    {
        name: 'T-row',
        slug: 't-row',
        kana: [
            { kana: 'タ', romaji: 'ta', type: 'katakana', mnemonic: 'A "taco".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'taco food', example: { word: 'タクシー', reading: 'takushii', meaning: 'taxi' }, audio: '/audio/ta.mp3', stroke: '/strokes/ta.svg' },
            { kana: 'チ', romaji: 'chi', type: 'katakana', mnemonic: 'A "cheese" wedge.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'cheese wedge', example: { word: 'チーズ', reading: 'chiizu', meaning: 'cheese' }, audio: '/audio/chi.mp3', stroke: '/strokes/chi.svg' },
            { kana: 'ツ', romaji: 'tsu', type: 'katakana', mnemonic: 'A wave from a "tsunami".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'tsunami wave', example: { word: 'ツアー', reading: 'tsuaa', meaning: 'tour' }, audio: '/audio/tsu.mp3', stroke: '/strokes/tsu.svg' },
            { kana: 'テ', romaji: 'te', type: 'katakana', mnemonic: 'A "telephone" pole.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'telephone pole', example: { word: 'テレビ', reading: 'terebi', meaning: 'television' }, audio: '/audio/te.mp3', stroke: '/strokes/te.svg' },
            { kana: 'ト', romaji: 'to', type: 'katakana', mnemonic: 'A "totem" pole.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'totem pole', example: { word: 'トマト', reading: 'tomato', meaning: 'tomato' }, audio: '/audio/to.mp3', stroke: '/strokes/to.svg' },
        ],
    },
    {
        name: 'N-row',
        slug: 'n-row',
        kana: [
            { kana: 'ナ', romaji: 'na', type: 'katakana', mnemonic: 'A "knife".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'sharp knife', example: { word: 'ナイフ', reading: 'naifu', meaning: 'knife' }, audio: '/audio/na.mp3', stroke: '/strokes/na.svg' },
            { kana: 'ニ', romaji: 'ni', type: 'katakana', mnemonic: 'Two "needles".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'two needles', example: { word: 'ニュース', reading: 'nyuusu', meaning: 'news' }, audio: '/audio/ni.mp3', stroke: '/strokes/ni.svg' },
            { kana: 'ヌ', romaji: 'nu', type: 'katakana', mnemonic: 'A pair of "chopsticks" picking up noodles.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'chopsticks noodles', example: { word: 'ヌードル', reading: 'nuudoru', meaning: 'noodle' }, audio: '/audio/nu.mp3', stroke: '/strokes/nu.svg' },
            { kana: 'ネ', romaji: 'ne', type: 'katakana', mnemonic: 'A bird in a "nest".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'bird nest', example: { word: 'ネクタイ', reading: 'nekutai', meaning: 'necktie' }, audio: '/audio/ne.mp3', stroke: '/strokes/ne.svg' },
            { kana: 'ノ', romaji: 'no', type: 'katakana', mnemonic: 'A long "nose".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'long nose', example: { word: 'ノート', reading: 'nooto', meaning: 'notebook' }, audio: '/audio/no.mp3', stroke: '/strokes/no.svg' },
        ],
    },
    {
        name: 'H-row',
        slug: 'h-row',
        kana: [
            { kana: 'ハ', romaji: 'ha', type: 'katakana', mnemonic: 'A pointy "hat".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'pointy hat', example: { word: 'ハイキング', reading: 'haikingu', meaning: 'hiking' }, audio: '/audio/ha.mp3', stroke: '/strokes/ha.svg' },
            { kana: 'ヒ', romaji: 'hi', type: 'katakana', mnemonic: 'A "heel".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'high heel', example: { word: 'ビール', reading: 'biiru', meaning: 'beer' }, audio: '/audio/hi.mp3', stroke: '/strokes/hi.svg' },
            { kana: 'フ', romaji: 'fu', type: 'katakana', mnemonic: 'A sharp hook for "food".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'food hook', example: { word: 'フォーク', reading: 'fooku', meaning: 'fork' }, audio: '/audio/fu.mp3', stroke: '/strokes/fu.svg' },
            { kana: 'ヘ', romaji: 'he', type: 'katakana', mnemonic: 'Looks exactly like hiragana へ, for "heaven".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'heaven gate', example: { word: 'ヘルメット', reading: 'herumetto', meaning: 'helmet' }, audio: '/audio/he.mp3', stroke: '/strokes/he.svg' },
            { kana: 'ホ', romaji: 'ho', type: 'katakana', mnemonic: 'A "hotel" sign.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'hotel sign', example: { word: 'ホテル', reading: 'hoteru', meaning: 'hotel' }, audio: '/audio/ho.mp3', stroke: '/strokes/ho.svg' },
        ],
    },
    {
        name: 'M-row',
        slug: 'm-row',
        kana: [
            { kana: 'マ', romaji: 'ma', type: 'katakana', mnemonic: 'A "magician\'s" sharp cape.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'magician cape', example: { word: 'マスク', reading: 'masuku', meaning: 'mask' }, audio: '/audio/ma.mp3', stroke: '/strokes/ma.svg' },
            { kana: 'ミ', romaji: 'mi', type: 'katakana', mnemonic: 'Three "missiles".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'three missiles', example: { word: 'ミルク', reading: 'miruku', meaning: 'milk' }, audio: '/audio/mi.mp3', stroke: '/strokes/mi.svg' },
            { kana: 'ム', romaji: 'mu', type: 'katakana', mnemonic: 'A sharp, angular "moo" from a cow.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'angular cow', example: { word: 'チーム', reading: 'chiimu', meaning: 'team' }, audio: '/audio/mu.mp3', stroke: '/strokes/mu.svg' },
            { kana: 'メ', romaji: 'me', type: 'katakana', mnemonic: 'An "X" marking a treasure map, sent by "mail".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'map x', example: { word: 'メール', reading: 'meeru', meaning: 'mail' }, audio: '/audio/me.mp3', stroke: '/strokes/me.svg' },
            { kana: 'モ', romaji: 'mo', type: 'katakana', mnemonic: 'Looks like hiragana も, but sharper, for "mobile".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'sharp mobile', example: { word: 'メモ', reading: 'memo', meaning: 'memo' }, audio: '/audio/mo.mp3', stroke: '/strokes/mo.svg' },
        ],
    },
    {
        name: 'Y-row',
        slug: 'y-row',
        kana: [
            { kana: 'ヤ', romaji: 'ya', type: 'katakana', mnemonic: 'Looks like hiragana や, but sharper, like a "yacht".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'sharp yacht', example: { word: 'タイヤ', reading: 'taiya', meaning: 'tire' }, audio: '/audio/ya.mp3', stroke: '/strokes/ya.svg' },
            { kana: 'ユ', romaji: 'yu', type: 'katakana', mnemonic: 'A "uniform".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'sharp uniform', example: { word: 'ユニーク', reading: 'yuniiku', meaning: 'unique' }, audio: '/audio/yu.mp3', stroke: '/strokes/yu.svg' },
            { kana: 'ヨ', romaji: 'yo', type: 'katakana', mnemonic: 'A "yolk" in a broken egg.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'egg yolk', example: { word: 'ヨーグルト', reading: 'yooguruto', meaning: 'yogurt' }, audio: '/audio/yo.mp3', stroke: '/strokes/yo.svg' },
        ],
    },
    {
        name: 'R-row',
        slug: 'r-row',
        kana: [
            { kana: 'ラ', romaji: 'ra', type: 'katakana', mnemonic: 'A "radio".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'old radio', example: { word: 'ラジオ', reading: 'rajio', meaning: 'radio' }, audio: '/audio/ra.mp3', stroke: '/strokes/ra.svg' },
            { kana: 'リ', romaji: 'ri', type: 'katakana', mnemonic: 'Looks like hiragana り, for "ribbon".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'red ribbon', example: { word: 'リスト', reading: 'risuto', meaning: 'list' }, audio: '/audio/ri.mp3', stroke: '/strokes/ri.svg' },
            { kana: 'ル', romaji: 'ru', type: 'katakana', mnemonic: 'A pair of "ruby" earrings.', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'ruby earrings', example: { word: 'ルール', reading: 'ruuru', meaning: 'rule' }, audio: '/audio/ru.mp3', stroke: '/strokes/ru.svg' },
            { kana: 'レ', romaji: 're', type: 'katakana', mnemonic: 'A "razor".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'sharp razor', example: { word: 'レストラン', reading: 'resutoran', meaning: 'restaurant' }, audio: '/audio/re.mp3', stroke: '/strokes/re.svg' },
            { kana: 'ロ', romaji: 'ro', type: 'katakana', mnemonic: 'A square "road".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'square road', example: { word: 'ロボット', reading: 'robotto', meaning: 'robot' }, audio: '/audio/ro.mp3', stroke: '/strokes/ro.svg' },
        ],
    },
    {
        name: 'W-row & N',
        slug: 'w-n-row',
        kana: [
            { kana: 'ワ', romaji: 'wa', type: 'katakana', mnemonic: 'A glass of "wine".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'wine glass', example: { word: 'ワイン', reading: 'wain', meaning: 'wine' }, audio: '/audio/wa.mp3', stroke: '/strokes/wa.svg' },
            { kana: 'ヲ', romaji: 'wo', type: 'katakana', mnemonic: 'A wolf howling "wooo!".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'howling wolf', example: { word: 'ヲタク', reading: 'wotaku', meaning: 'otaku (geek)' }, audio: '/audio/wo.mp3', stroke: '/strokes/wo.svg' },
            { kana: 'ン', romaji: 'n', type: 'katakana', mnemonic: 'A single drop of "ink".', mnemonic_image: 'https://placehold.co/100x100.png', mnemonic_hint: 'ink drop', example: { word: 'ペン', reading: 'pen', meaning: 'pen' }, audio: '/audio/n.mp3', stroke: '/strokes/n.svg' },
        ],
    },
];

export const allKana = [...hiraganaLessons, ...katakanaLessons].flatMap(lesson => lesson.kana);
