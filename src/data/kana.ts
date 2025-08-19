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
      { kana: 'が', romaji: 'ga', type: 'hiragana', mnemonic: 'A "guard" (か) with a shield.', example: { word: 'がっこう', reading: 'gakkou', meaning: 'school' }, audio: '/audio/ga.mp3', stroke: '/strokes/ga.svg' },
      { kana: 'ぎ', romaji: 'gi', type: 'hiragana', mnemonic: 'A "gift" (き) with a ribbon.', example: { word: 'ぎんこう', reading: 'ginkou', meaning: 'bank' }, audio: '/audio/gi.mp3', stroke: '/strokes/gi.svg' },
      { kana: 'ぐ', romaji: 'gu', type: 'hiragana', mnemonic: '"Good" (く) job!', example: { word: 'ぐんて', reading: 'gunte', meaning: 'work gloves' }, audio: '/audio/gu.mp3', stroke: '/strokes/gu.svg' },
      { kana: 'げ', romaji: 'ge', type: 'hiragana', mnemonic: '"Get" (け) a prize.', example: { word: 'げんき', reading: 'genki', meaning: 'healthy/energetic' }, audio: '/audio/ge.mp3', stroke: '/strokes/ge.svg' },
      { kana: 'ご', romaji: 'go', type: 'hiragana', mnemonic: '"Go" (こ) for it!', example: { word: 'ごはん', reading: 'gohan', meaning: 'rice/meal' }, audio: '/audio/go.mp3', stroke: '/strokes/go.svg' },
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
        { kana: 'ざ', romaji: 'za', type: 'hiragana', mnemonic: 'A "czar" (さ) with a crown.', example: { word: 'ざっし', reading: 'zasshi', meaning: 'magazine' }, audio: '/audio/za.mp3', stroke: '/strokes/za.svg' },
        { kana: 'じ', romaji: 'ji', type: 'hiragana', mnemonic: 'A "jeep" (し) driving.', example: { word: 'じかん', reading: 'jikan', meaning: 'time' }, audio: '/audio/ji.mp3', stroke: '/strokes/ji.svg' },
        { kana: 'ず', romaji: 'zu', type: 'hiragana', mnemonic: 'A "zoo" (す) with a fence.', example: { word: 'みず', reading: 'mizu', meaning: 'water' }, audio: '/audio/zu.mp3', stroke: '/strokes/zu.svg' },
        { kana: 'ぜ', romaji: 'ze', type: 'hiragana', mnemonic: '"Zen" (せ) meditation.', example: { word: 'かぜ', reading: 'kaze', meaning: 'wind' }, audio: '/audio/ze.mp3', stroke: '/strokes/ze.svg' },
        { kana: 'ぞ', romaji: 'zo', type: 'hiragana', mnemonic: 'A "zone" (そ) for construction.', example: { word: 'かぞく', reading: 'kazoku', meaning: 'family' }, audio: '/audio/zo.mp3', stroke: '/strokes/zo.svg' },
    ]
  },
  {
    name: 'T-row',
    slug: 't-row',
    kana: [
        { kana: 'た', romaji: 'ta', type: 'hiragana', mnemonic: 'Looks like "ta".', example: { word: 'たこ', reading: 'tako', meaning: 'octopus' }, audio: '/audio/ta.mp3', stroke: '/strokes/ta.svg' },
        { kana: 'ち', romaji: 'chi', type: 'hiragana', mnemonic: 'A "cheerleader" cheering.', example: { word: 'ちず', reading: 'chizu', meaning: 'map' }, audio: '/audio/chi.mp3', stroke: '/strokes/chi.svg' },
        { kana: 'つ', romaji: 'tsu', type: 'hiragana', mnemonic: 'A "tsunami" wave.', example: { word: 'つくえ', reading: 'tsukue', meaning: 'desk' }, audio: '/audio/tsu.mp3', stroke: '/strokes/tsu.svg' },
        { kana: 'て', romaji: 'te', type: 'hiragana', mnemonic: 'A "table" with one leg.', example: { word: 'てがみ', reading: 'tegami', meaning: 'letter' }, audio: '/audio/te.mp3', stroke: '/strokes/te.svg' },
        { kana: 'と', romaji: 'to', type: 'hiragana', mnemonic: 'A "toe" with a nail.', example: { word: 'とけい', reading: 'tokei', meaning: 'clock' }, audio: '/audio/to.mp3', stroke: '/strokes/to.svg' },
        { kana: 'だ', romaji: 'da', type: 'hiragana', mnemonic: '"Ta-da!" (た) with sparkles.', example: { word: 'だいがく', reading: 'daigaku', meaning: 'university' }, audio: '/audio/da.mp3', stroke: '/strokes/da.svg' },
        { kana: 'ぢ', romaji: 'ji', type: 'hiragana', mnemonic: 'A "jeep" (ち) with a flat tire.', example: { word: 'はなぢ', reading: 'hanaji', meaning: 'nosebleed' }, audio: '/audio/ji.mp3', stroke: '/strokes/ji.svg' },
        { kana: 'づ', romaji: 'zu', type: 'hiragana', mnemonic: 'A "tsunami" (つ) in a "zoo".', example: { word: 'つづく', reading: 'tsuzuku', meaning: 'to continue' }, audio: '/audio/zu.mp3', stroke: '/strokes/zu.svg' },
        { kana: 'で', romaji: 'de', type: 'hiragana', mnemonic: '"Deck" (て) the halls.', example: { word: 'でんわ', reading: 'denwa', meaning: 'telephone' }, audio: '/audio/de.mp3', stroke: '/strokes/de.svg' },
        { kana: 'ど', romaji: 'do', type: 'hiragana', mnemonic: 'A "door" (と) with a knob.', example: { word: 'どこ', reading: 'doko', meaning: 'where' }, audio: '/audio/do.mp3', stroke: '/strokes/do.svg' },
    ],
  },
  {
      name: 'N-row',
      slug: 'n-row',
      kana: [
          { kana: 'な', romaji: 'na', type: 'hiragana', mnemonic: 'A "knot" in a rope.', example: { word: 'なまえ', reading: 'namae', meaning: 'name' }, audio: '/audio/na.mp3', stroke: '/strokes/na.svg' },
          { kana: 'に', romaji: 'ni', type: 'hiragana', mnemonic: 'A "needle" and thread.', example: { word: 'にく', reading: 'niku', meaning: 'meat' }, audio: '/audio/ni.mp3', stroke: '/strokes/ni.svg' },
          { kana: 'ぬ', romaji: 'nu', type: 'hiragana', mnemonic: 'A bowl of "noodles".', example: { word: 'ぬりえ', reading: 'nurie', meaning: 'coloring book' }, audio: '/audio/nu.mp3', stroke: '/strokes/nu.svg' },
          { kana: 'ね', romaji: 'ne', type: 'hiragana', mnemonic: 'A "snail" in its shell.', example: { word: 'ねこ', reading: 'neko', meaning: 'cat' }, audio: '/audio/ne.mp3', stroke: '/strokes/ne.svg' },
          { kana: 'の', romaji: 'no', type: 'hiragana', mnemonic: 'A "no" sign.', example: { word: 'のり', reading: 'nori', meaning: 'seaweed' }, audio: '/audio/no.mp3', stroke: '/strokes/no.svg' },
      ],
  },
  {
      name: 'H-row',
      slug: 'h-row',
      kana: [
          { kana: 'は', romaji: 'ha', type: 'hiragana', mnemonic: 'A person laughing "ha ha".', example: { word: 'はな', reading: 'hana', meaning: 'flower' }, audio: '/audio/ha.mp3', stroke: '/strokes/ha.svg' },
          { kana: 'ひ', romaji: 'hi', type: 'hiragana', mnemonic: 'A smiling face, "hee hee".', example: { word: 'ひこうき', reading: 'hikouki', meaning: 'airplane' }, audio: '/audio/hi.mp3', stroke: '/strokes/hi.svg' },
          { kana: 'ふ', romaji: 'fu', type: 'hiragana', mnemonic: 'Mount "Fuji".', example: { word: 'ふね', reading: 'fune', meaning: 'boat' }, audio: '/audio/fu.mp3', stroke: '/strokes/fu.svg' },
          { kana: 'へ', romaji: 'he', type: 'hiragana', mnemonic: 'A pointy hill, heading to "heaven".', example: { word: 'へび', reading: 'hebi', meaning: 'snake' }, audio: '/audio/he.mp3', stroke: '/strokes/he.svg' },
          { kana: 'ほ', romaji: 'ho', type: 'hiragana', mnemonic: 'A "horse" with a saddle.', example: { word: 'ほし', reading: 'hoshi', meaning: 'star' }, audio: '/audio/ho.mp3', stroke: '/strokes/ho.svg' },
          { kana: 'ば', romaji: 'ba', type: 'hiragana', mnemonic: 'A "bat" (は) and ball.', example: { word: 'かばん', reading: 'kaban', meaning: 'bag' }, audio: '/audio/ba.mp3', stroke: '/strokes/ba.svg' },
          { kana: 'び', romaji: 'bi', type: 'hiragana', mnemonic: 'A "bee" (ひ) buzzing.', example: { word: 'くちびる', reading: 'kuchibiru', meaning: 'lips' }, audio: '/audio/bi.mp3', stroke: '/strokes/bi.svg' },
          { kana: 'ぶ', romaji: 'bu', type: 'hiragana', mnemonic: 'A "boot" (ふ).', example: { word: 'ぶた', reading: 'buta', meaning: 'pig' }, audio: '/audio/bu.mp3', stroke: '/strokes/bu.svg' },
          { kana: 'べ', romaji: 'be', type: 'hiragana', mnemonic: 'A "bed" (へ).', example: { word: 'たべる', reading: 'taberu', meaning: 'to eat' }, audio: '/audio/be.mp3', stroke: '/strokes/be.svg' },
          { kana: 'ぼ', romaji: 'bo', type: 'hiragana', mnemonic: 'A "boat" (ほ).', example: { word: 'ぼうし', reading: 'boushi', meaning: 'hat' }, audio: '/audio/bo.mp3', stroke: '/strokes/bo.svg' },
          { kana: 'ぱ', romaji: 'pa', type: 'hiragana', mnemonic: '"Pop" (は) corn.', example: { word: 'パン', reading: 'pan', meaning: 'bread' }, audio: '/audio/pa.mp3', stroke: '/strokes/pa.svg' },
          { kana: 'ぴ', romaji: 'pi', type: 'hiragana', mnemonic: 'A "pea" (ひ).', example: { word: 'えんぴつ', reading: 'enpitsu', meaning: 'pencil' }, audio: '/audio/pi.mp3', stroke: '/strokes/pi.svg' },
          { kana: 'ぷ', romaji: 'pu', type: 'hiragana', mnemonic: '"Pudding" (ふ).', example: { word: 'てんぷら', reading: 'tenpura', meaning: 'tempura' }, audio: '/audio/pu.mp3', stroke: '/strokes/pu.svg' },
          { kana: 'ぺ', romaji: 'pe', type: 'hiragana', mnemonic: 'A "pen" (へ).', example: { word: 'ぺんぎん', reading: 'pengin', meaning: 'penguin' }, audio: '/audio/pe.mp3', stroke: '/strokes/pe.svg' },
          { kana: 'ぽ', romaji: 'po', type: 'hiragana', mnemonic: '"Post" (ほ) office.', example: { word: 'さんぽ', reading: 'sanpo', meaning: 'a walk' }, audio: '/audio/po.mp3', stroke: '/strokes/po.svg' },
      ],
  },
  {
      name: 'M-row',
      slug: 'm-row',
      kana: [
          { kana: 'ま', romaji: 'ma', type: 'hiragana', mnemonic: 'Your "mom" is watching you.', example: { word: 'まど', reading: 'mado', meaning: 'window' }, audio: '/audio/ma.mp3', stroke: '/strokes/ma.svg' },
          { kana: 'み', romaji: 'mi', type: 'hiragana', mnemonic: 'The number 21, "me" in two decades.', example: { word: 'みみ', reading: 'mimi', meaning: 'ear' }, audio: '/audio/mi.mp3', stroke: '/strokes/mi.svg' },
          { kana: 'む', romaji: 'mu', type: 'hiragana', mnemonic: 'A cow saying "moo".', example: { word: 'むし', reading: 'mushi', meaning: 'insect' }, audio: '/audio/mu.mp3', stroke: '/strokes/mu.svg' },
          { kana: 'め', romaji: 'me', type: 'hiragana', mnemonic: 'A "messy" knot.', example: { word: 'めがね', reading: 'megane', meaning: 'glasses' }, audio: '/audio/me.mp3', stroke: '/strokes/me.svg' },
          { kana: 'も', romaji: 'mo', type: 'hiragana', mnemonic: 'A fish hook to catch "more" fish.', example: { word: 'もも', reading: 'momo', meaning: 'peach' }, audio: '/audio/mo.mp3', stroke: '/strokes/mo.svg' },
      ],
  },
  {
      name: 'Y-row',
      slug: 'y-row',
      kana: [
          { kana: 'や', romaji: 'ya', type: 'hiragana', mnemonic: 'A "yak" with large horns.', example: { word: 'やま', reading: 'yama', meaning: 'mountain' }, audio: '/audio/ya.mp3', stroke: '/strokes/ya.svg' },
          { kana: 'ゆ', romaji: 'yu', type: 'hiragana', mnemonic: 'A "unique" fish.', example: { word: 'ゆき', reading: 'yuki', meaning: 'snow' }, audio: '/audio/yu.mp3', stroke: '/strokes/yu.svg' },
          { kana: 'よ', romaji: 'yo', type: 'hiragana', mnemonic: 'A "yo-yo".', example: { word: 'よる', reading: 'yoru', meaning: 'night' }, audio: '/audio/yo.mp3', stroke: '/strokes/yo.svg' },
      ],
  },
  {
      name: 'R-row',
      slug: 'r-row',
      kana: [
          { kana: 'ら', romaji: 'ra', type: 'hiragana', mnemonic: 'A rapper saying "ra ra ra".', example: { word: 'らくだ', reading: 'rakuda', meaning: 'camel' }, audio: '/audio/ra.mp3', stroke: '/strokes/ra.svg' },
          { kana: 'り', romaji: 'ri', type: 'hiragana', mnemonic: 'A "river" flowing.', example: { word: 'りんご', reading: 'ringo', meaning: 'apple' }, audio: '/audio/ri.mp3', stroke: '/strokes/ri.svg' },
          { kana: 'る', romaji: 'ru', type: 'hiragana', mnemonic: 'A "loop" in a road.', example: { word: 'るす', reading: 'rusu', meaning: 'absent' }, audio: '/audio/ru.mp3', stroke: '/strokes/ru.svg' },
          { kana: 'れ', romaji: 're', type: 'hiragana', mnemonic: 'A person kneeling to "pray".', example: { word: 'れもん', reading: 'remon', meaning: 'lemon' }, audio: '/audio/re.mp3', stroke: '/strokes/re.svg' },
          { kana: 'ろ', romaji: 'ro', type: 'hiragana', mnemonic: 'A "road" with no turns.', example: { word: 'ろうそく', reading: 'rousoku', meaning: 'candle' }, audio: '/audio/ro.mp3', stroke: '/strokes/ro.svg' },
      ],
  },
  {
      name: 'W-row & N',
      slug: 'w-n-row',
      kana: [
          { kana: 'わ', romaji: 'wa', type: 'hiragana', mnemonic: 'A "swan" with a long neck.', example: { word: 'わたし', reading: 'watashi', meaning: 'I/me' }, audio: '/audio/wa.mp3', stroke: '/strokes/wa.svg' },
          { kana: 'を', romaji: 'wo', type: 'hiragana', mnemonic: 'Someone saying "whoa!".', example: { word: 'てがみをかく', reading: 'tegami wo kaku', meaning: 'write a letter' }, audio: '/audio/wo.mp3', stroke: '/strokes/wo.svg' },
          { kana: 'ん', romaji: 'n', type: 'hiragana', mnemonic: 'A lower-case "n".', example: { word: 'パン', reading: 'pan', meaning: 'bread' }, audio: '/audio/n.mp3', stroke: '/strokes/n.svg' },
      ],
  },
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
            { kana: 'ガ', romaji: 'ga', type: 'katakana', mnemonic: '"Gas" (カ) station.', example: { word: 'ガス', reading: 'gasu', meaning: 'gas' }, audio: '/audio/ga.mp3', stroke: '/strokes/ga.svg' },
            { kana: 'ギ', romaji: 'gi', type: 'katakana', mnemonic: 'A "guitar" (キ).', example: { word: 'ギター', reading: 'gitaa', meaning: 'guitar' }, audio: '/audio/gi.mp3', stroke: '/strokes/gi.svg' },
            { kana: 'グ', romaji: 'gu', type: 'katakana', mnemonic: '"Goo" (ク).', example: { word: 'グループ', reading: 'guruupu', meaning: 'group' }, audio: '/audio/gu.mp3', stroke: '/strokes/gu.svg' },
            { kana: 'ゲ', romaji: 'ge', type: 'katakana', mnemonic: '"Game" (ケ).', example: { word: 'ゲーム', reading: 'geemu', meaning: 'game' }, audio: '/audio/ge.mp3', stroke: '/strokes/ge.svg' },
            { kana: 'ゴ', romaji: 'go', type: 'katakana', mnemonic: '"Gorilla" (コ).', example: { word: 'ゴルフ', reading: 'gorufu', meaning: 'golf' }, audio: '/audio/go.mp3', stroke: '/strokes/go.svg' },
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
          { kana: 'ザ', romaji: 'za', type: 'katakana', mnemonic: 'A "pizza" (サ) slice.', example: { word: 'ピザ', reading: 'piza', meaning: 'pizza' }, audio: '/audio/za.mp3', stroke: '/strokes/za.svg' },
          { kana: 'ジ', romaji: 'ji', type: 'katakana', mnemonic: 'A "jeans" (シ) pocket.', example: { word: 'ジーンズ', reading: 'jiinzu', meaning: 'jeans' }, audio: '/audio/ji.mp3', stroke: '/strokes/ji.svg' },
          { kana: 'ズ', romaji: 'zu', type: 'katakana', mnemonic: 'A "zoo" (ス) with sharp corners.', example: { word: 'ズボン', reading: 'zubon', meaning: 'trousers' }, audio: '/audio/zu.mp3', stroke: '/strokes/zu.svg' },
          { kana: 'ゼ', romaji: 'ze', type: 'katakana', mnemonic: '"Zero" (セ).', example: { word: 'ゼロ', reading: 'zero', meaning: 'zero' }, audio: '/audio/ze.mp3', stroke: '/strokes/ze.svg' },
          { kana: 'ゾ', romaji: 'zo', type: 'katakana', mnemonic: 'A "zombie" (ソ).', example: { word: 'ゾーン', reading: 'zoon', meaning: 'zone' }, audio: '/audio/zo.mp3', stroke: '/strokes/zo.svg' },
      ]
    },
    {
        name: 'T-row',
        slug: 't-row',
        kana: [
            { kana: 'タ', romaji: 'ta', type: 'katakana', mnemonic: 'A "taco".', example: { word: 'タクシー', reading: 'takushii', meaning: 'taxi' }, audio: '/audio/ta.mp3', stroke: '/strokes/ta.svg' },
            { kana: 'チ', romaji: 'chi', type: 'katakana', mnemonic: 'A "cheese" wedge.', example: { word: 'チーズ', reading: 'chiizu', meaning: 'cheese' }, audio: '/audio/chi.mp3', stroke: '/strokes/chi.svg' },
            { kana: 'ツ', romaji: 'tsu', type: 'katakana', mnemonic: 'A wave from a "tsunami".', example: { word: 'ツアー', reading: 'tsuaa', meaning: 'tour' }, audio: '/audio/tsu.mp3', stroke: '/strokes/tsu.svg' },
            { kana: 'テ', romaji: 'te', type: 'katakana', mnemonic: 'A "telephone" pole.', example: { word: 'テレビ', reading: 'terebi', meaning: 'television' }, audio: '/audio/te.mp3', stroke: '/strokes/te.svg' },
            { kana: 'ト', romaji: 'to', type: 'katakana', mnemonic: 'A "totem" pole.', example: { word: 'トマト', reading: 'tomato', meaning: 'tomato' }, audio: '/audio/to.mp3', stroke: '/strokes/to.svg' },
            { kana: 'ダ', romaji: 'da', type: 'katakana', mnemonic: '"Dance" (タ).', example: { word: 'ダンス', reading: 'dansu', meaning: 'dance' }, audio: '/audio/da.mp3', stroke: '/strokes/da.svg' },
            { kana: 'ヂ', romaji: 'ji', type: 'katakana', mnemonic: '"Jeep" (チ) again, but sharp.', example: { word: 'ラヂオ', reading: 'rajio', meaning: 'radio (old spelling)' }, audio: '/audio/ji.mp3', stroke: '/strokes/ji.svg' },
            { kana: 'ヅ', romaji: 'zu', type: 'katakana', mnemonic: '"Zoo" (ツ) with sharp waves.', example: { word: 'アイヅ', reading: 'aizu', meaning: 'Aizu (place name)' }, audio: '/audio/zu.mp3', stroke: '/strokes/zu.svg' },
            { kana: 'デ', romaji: 'de', type: 'katakana', mnemonic: '"Desk" (テ).', example: { word: 'デザイン', reading: 'dezain', meaning: 'design' }, audio: '/audio/de.mp3', stroke: '/strokes/de.svg' },
            { kana: 'ド', romaji: 'do', type: 'katakana', mnemonic: '"Door" (ト).', example: { word: 'ドア', reading: 'doa', meaning: 'door' }, audio: '/audio/do.mp3', stroke: '/strokes/do.svg' },
        ],
    },
    {
        name: 'N-row',
        slug: 'n-row',
        kana: [
            { kana: 'ナ', romaji: 'na', type: 'katakana', mnemonic: 'A "knife".', example: { word: 'ナイフ', reading: 'naifu', meaning: 'knife' }, audio: '/audio/na.mp3', stroke: '/strokes/na.svg' },
            { kana: 'ニ', romaji: 'ni', type: 'katakana', mnemonic: 'Two "needles".', example: { word: 'ニュース', reading: 'nyuusu', meaning: 'news' }, audio: '/audio/ni.mp3', stroke: '/strokes/ni.svg' },
            { kana: 'ヌ', romaji: 'nu', type: 'katakana', mnemonic: 'A pair of "chopsticks" picking up noodles.', example: { word: 'ヌードル', reading: 'nuudoru', meaning: 'noodle' }, audio: '/audio/nu.mp3', stroke: '/strokes/nu.svg' },
            { kana: 'ネ', romaji: 'ne', type: 'katakana', mnemonic: 'A bird in a "nest".', example: { word: 'ネクタイ', reading: 'nekutai', meaning: 'necktie' }, audio: '/audio/ne.mp3', stroke: '/strokes/ne.svg' },
            { kana: 'ノ', romaji: 'no', type: 'katakana', mnemonic: 'A long "nose".', example: { word: 'ノート', reading: 'nooto', meaning: 'notebook' }, audio: '/audio/no.mp3', stroke: '/strokes/no.svg' },
        ],
    },
    {
        name: 'H-row',
        slug: 'h-row',
        kana: [
            { kana: 'ハ', romaji: 'ha', type: 'katakana', mnemonic: 'A pointy "hat".', example: { word: 'ハイキング', reading: 'haikingu', meaning: 'hiking' }, audio: '/audio/ha.mp3', stroke: '/strokes/ha.svg' },
            { kana: 'ヒ', romaji: 'hi', type: 'katakana', mnemonic: 'A "heel".', example: { word: 'ビール', reading: 'biiru', meaning: 'beer' }, audio: '/audio/hi.mp3', stroke: '/strokes/hi.svg' },
            { kana: 'フ', romaji: 'fu', type: 'katakana', mnemonic: 'A sharp hook for "food".', example: { word: 'フォーク', reading: 'fooku', meaning: 'fork' }, audio: '/audio/fu.mp3', stroke: '/strokes/fu.svg' },
            { kana: 'ヘ', romaji: 'he', type: 'katakana', mnemonic: 'Looks exactly like hiragana へ, for "heaven".', example: { word: 'ヘルメット', reading: 'herumetto', meaning: 'helmet' }, audio: '/audio/he.mp3', stroke: '/strokes/he.svg' },
            { kana: 'ホ', romaji: 'ho', type: 'katakana', mnemonic: 'A "hotel" sign.', example: { word: 'ホテル', reading: 'hoteru', meaning: 'hotel' }, audio: '/audio/ho.mp3', stroke: '/strokes/ho.svg' },
            { kana: 'バ', romaji: 'ba', type: 'katakana', mnemonic: 'A "bus" (ハ).', example: { word: 'バス', reading: 'basu', meaning: 'bus' }, audio: '/audio/ba.mp3', stroke: '/strokes/ba.svg' },
            { kana: 'ビ', romaji: 'bi', type: 'katakana', mnemonic: '"Beer" (ヒ).', example: { word: 'ビール', reading: 'biiru', meaning: 'beer' }, audio: '/audio/bi.mp3', stroke: '/strokes/bi.svg' },
            { kana: 'ブ', romaji: 'bu', type: 'katakana', mnemonic: '"Book" (フ).', example: { word: 'ブック', reading: 'bukku', meaning: 'book' }, audio: '/audio/bu.mp3', stroke: '/strokes/bu.svg' },
            { kana: 'ベ', romaji: 'be', type: 'katakana', mnemonic: '"Bed" (ヘ).', example: { word: 'ベッド', reading: 'beddo', meaning: 'bed' }, audio: '/audio/be.mp3', stroke: '/strokes/be.svg' },
            { kana: 'ボ', romaji: 'bo', type: 'katakana', mnemonic: '"Boat" (ホ).', example: { word: 'ボール', reading: 'booru', meaning: 'ball' }, audio: '/audio/bo.mp3', stroke: '/strokes/bo.svg' },
            { kana: 'パ', romaji: 'pa', type: 'katakana', mnemonic: '"Party" (ハ) hat.', example: { word: 'パーティー', reading: 'paathii', meaning: 'party' }, audio: '/audio/pa.mp3', stroke: '/strokes/pa.svg' },
            { kana: 'ピ', romaji: 'pi', type: 'katakana', mnemonic: '"Pizza" (ヒ) slice.', example: { word: 'ピアノ', reading: 'piano', meaning: 'piano' }, audio: '/audio/pi.mp3', stroke: '/strokes/pi.svg' },
            { kana: 'プ', romaji: 'pu', type: 'katakana', mnemonic: '"Pool" (フ).', example: { word: 'プール', reading: 'puuru', meaning: 'pool' }, audio: '/audio/pu.mp3', stroke: '/strokes/pu.svg' },
            { kana: 'ペ', romaji: 'pe', type: 'katakana', mnemonic: '"Pen" (ヘ).', example: { word: 'ペン', reading: 'pen', meaning: 'pen' }, audio: '/audio/pe.mp3', stroke: '/strokes/pe.svg' },
            { kana: 'ポ', romaji: 'po', type: 'katakana', mnemonic: '"Post" (ホ) office.', example: { word: 'ポスト', reading: 'posuto', meaning: 'postbox' }, audio: '/audio/po.mp3', stroke: '/strokes/po.svg' },
        ],
    },
    {
        name: 'M-row',
        slug: 'm-row',
        kana: [
            { kana: 'マ', romaji: 'ma', type: 'katakana', mnemonic: 'A "magician\'s" sharp cape.', example: { word: 'マスク', reading: 'masuku', meaning: 'mask' }, audio: '/audio/ma.mp3', stroke: '/strokes/ma.svg' },
            { kana: 'ミ', romaji: 'mi', type: 'katakana', mnemonic: 'Three "missiles".', example: { word: 'ミルク', reading: 'miruku', meaning: 'milk' }, audio: '/audio/mi.mp3', stroke: '/strokes/mi.svg' },
            { kana: 'ム', romaji: 'mu', type: 'katakana', mnemonic: 'A sharp, angular "moo" from a cow.', example: { word: 'チーム', reading: 'chiimu', meaning: 'team' }, audio: '/audio/mu.mp3', stroke: '/strokes/mu.svg' },
            { kana: 'メ', romaji: 'me', type: 'katakana', mnemonic: 'An "X" marking a treasure map, sent by "mail".', example: { word: 'メール', reading: 'meeru', meaning: 'mail' }, audio: '/audio/me.mp3', stroke: '/strokes/me.svg' },
            { kana: 'モ', romaji: 'mo', type: 'katakana', mnemonic: 'Looks like hiragana も, but sharper, for "mobile".', example: { word: 'メモ', reading: 'memo', meaning: 'memo' }, audio: '/audio/mo.mp3', stroke: '/strokes/mo.svg' },
        ],
    },
    {
        name: 'Y-row',
        slug: 'y-row',
        kana: [
            { kana: 'ヤ', romaji: 'ya', type: 'katakana', mnemonic: 'Looks like hiragana や, but sharper, like a "yacht".', example: { word: 'タイヤ', reading: 'taiya', meaning: 'tire' }, audio: '/audio/ya.mp3', stroke: '/strokes/ya.svg' },
            { kana: 'ユ', romaji: 'yu', type: 'katakana', mnemonic: 'A "uniform".', example: { word: 'ユニーク', reading: 'yuniiku', meaning: 'unique' }, audio: '/audio/yu.mp3', stroke: '/strokes/yu.svg' },
            { kana: 'ヨ', romaji: 'yo', type: 'katakana', mnemonic: 'A "yolk" in a broken egg.', example: { word: 'ヨーグルト', reading: 'yooguruto', meaning: 'yogurt' }, audio: '/audio/yo.mp3', stroke: '/strokes/yo.svg' },
        ],
    },
    {
        name: 'R-row',
        slug: 'r-row',
        kana: [
            { kana: 'ラ', romaji: 'ra', type: 'katakana', mnemonic: 'A "radio".', example: { word: 'ラジオ', reading: 'rajio', meaning: 'radio' }, audio: '/audio/ra.mp3', stroke: '/strokes/ra.svg' },
            { kana: 'リ', romaji: 'ri', type: 'katakana', mnemonic: 'Looks like hiragana り, for "ribbon".', example: { word: 'リスト', reading: 'risuto', meaning: 'list' }, audio: '/audio/ri.mp3', stroke: '/strokes/ri.svg' },
            { kana: 'ル', romaji: 'ru', type: 'katakana', mnemonic: 'A pair of "ruby" earrings.', example: { word: 'ルール', reading: 'ruuru', meaning: 'rule' }, audio: '/audio/ru.mp3', stroke: '/strokes/ru.svg' },
            { kana: 'レ', romaji: 're', type: 'katakana', mnemonic: 'A "razor".', example: { word: 'レストラン', reading: 'resutoran', meaning: 'restaurant' }, audio: '/audio/re.mp3', stroke: '/strokes/re.svg' },
            { kana: 'ロ', romaji: 'ro', type: 'katakana', mnemonic: 'A square "road".', example: { word: 'ロボット', reading: 'robotto', meaning: 'robot' }, audio: '/audio/ro.mp3', stroke: '/strokes/ro.svg' },
        ],
    },
    {
        name: 'W-row & N',
        slug: 'w-n-row',
        kana: [
            { kana: 'ワ', romaji: 'wa', type: 'katakana', mnemonic: 'A glass of "wine".', example: { word: 'ワイン', reading: 'wain', meaning: 'wine' }, audio: '/audio/wa.mp3', stroke: '/strokes/wa.svg' },
            { kana: 'ヲ', romaji: 'wo', type: 'katakana', mnemonic: 'A wolf howling "wooo!".', example: { word: 'ヲタク', reading: 'wotaku', meaning: 'otaku (geek)' }, audio: '/audio/wo.mp3', stroke: '/strokes/wo.svg' },
            { kana: 'ン', romaji: 'n', type: 'katakana', mnemonic: 'A single drop of "ink".', example: { word: 'ペン', reading: 'pen', meaning: 'pen' }, audio: '/audio/n.mp3', stroke: '/strokes/n.svg' },
        ],
    },
];

export const allKana = [...hiraganaLessons, ...katakanaLessons].flatMap(lesson => lesson.kana);
