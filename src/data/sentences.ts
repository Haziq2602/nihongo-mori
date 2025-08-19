
export interface ExampleSentence {
  sentence: string;
  romaji: string;
  translation: string;
  kana: string[];
}

export const exampleSentences: ExampleSentence[] = [
  // Sentences using only Vowels
  { sentence: 'あお', romaji: 'ao', translation: 'blue', kana: ['あ', 'お'] },
  { sentence: 'うえ', romaji: 'ue', translation: 'up', kana: ['う', 'え'] },
  { sentence: 'いいえ', romaji: 'iie', translation: 'no', kana: ['い', 'え'] },

  // Sentences using Vowels and K-row
  { sentence: 'えき', romaji: 'eki', translation: 'station', kana: ['え', 'き'] },
  { sentence: 'いけ', romaji: 'ike', translation: 'pond', kana: ['い', 'け'] },
  { sentence: 'あかい', romaji: 'akai', translation: 'red', kana: ['あ', 'か', 'い'] },
  { sentence: 'かき', romaji: 'kaki', translation: 'persimmon', kana: ['か', 'き'] },
  { sentence: 'きく', romaji: 'kiku', translation: 'to listen', kana: ['き', 'く'] },
  { sentence: 'ここ', romaji: 'koko', translation: 'here', kana: ['こ', 'こ'] },
  
  // Sentences using Vowels, K-row, S-row
  { sentence: 'せかい', romaji: 'sekai', translation: 'world', kana: ['せ', 'か', 'い'] },
  { sentence: 'すし', romaji: 'sushi', translation: 'sushi', kana: ['す', 'し'] },
  { sentence: 'そこ', romaji: 'soko', translation: 'there', kana: ['そ', 'こ'] },
  { sentence: 'いす', romaji: 'isu', translation: 'chair', kana: ['い', 'す'] },
  { sentence: 'かさ', romaji: 'kasa', translation: 'umbrella', kana: ['か', 'さ'] },
  { sentence: 'すき', romaji: 'suki', translation: 'to like', kana: ['す', 'き'] },

  // Sentences using up to T-row
  { sentence: 'ちかてつ', romaji: 'chikatetsu', translation: 'subway', kana: ['ち', 'か', 'て', 'つ'] },
  { sentence: 'とけい', romaji: 'tokei', translation: 'clock', kana: ['と', 'け', 'い'] },
  { sentence: 'した', romaji: 'shita', translation: 'under', kana: ['し', 'た'] },
  { sentence: 'そと', romaji: 'soto', translation: 'outside', kana: ['そ', 'と'] },
  { sentence: 'くつ', romaji: 'kutsu', translation: 'shoes', kana: ['く', 'つ'] },
  { sentence: 'て', romaji: 'te', translation: 'hand', kana: ['て'] },

  // Sentences using up to N-row
  { sentence: 'いぬ', romaji: 'inu', translation: 'dog', kana: ['い', 'ぬ'] },
  { sentence: 'ねこ', romaji: 'neko', translation: 'cat', kana: ['ね', 'こ'] },
  { sentence: 'さかな', romaji: 'sakana', translation: 'fish', kana: ['さ', 'か', 'な'] },
  { sentence: 'きのこ', romaji: 'kinoko', translation: 'mushroom', kana: ['き', 'の', 'こ'] },
  { sentence: 'なに', romaji: 'nani', translation: 'what', kana: ['な', 'に'] },

  // Sentences using up to H-row
  { sentence: 'はこ', romaji: 'hako', translation: 'box', kana: ['は', 'こ'] },
  { sentence: 'ふね', romaji: 'fune', translation: 'ship', kana: ['ふ', 'ね'] },
  { sentence: 'ほし', romaji: 'hoshi', translation: 'star', kana: ['ほ', 'し'] },
  { sentence: 'つくえ', romaji: 'tsukue', translation: 'desk', kana: ['つ', 'く', 'え'] },
  { sentence: 'へそ', romaji: 'heso', translation: 'belly button', kana: ['へ', 'そ'] },
  { sentence: 'かばん', romaji: 'kaban', translation: 'bag', kana: ['か', 'ば', 'ん'] },
  { sentence: 'えんぴつ', romaji: 'enpitsu', translation: 'pencil', kana: ['え', 'ん', 'ぴ', 'つ'] },

  // Sentences using up to M-row
  { sentence: 'みせ', romaji: 'mise', translation: 'shop', kana: ['み', 'せ'] },
  { sentence: 'みみ', romaji: 'mimi', translation: 'ear', kana: ['み', 'み'] },
  { sentence: 'むし', romaji: 'mushi', translation: 'insect', kana: ['む', 'し'] },
  { sentence: 'め', romaji: 'me', translation: 'eye', kana: ['め'] },
  { sentence: 'もも', romaji: 'momo', translation: 'peach', kana: ['も', 'も'] },

  // Sentences using up to Y-row
  { sentence: 'やま', romaji: 'yama', translation: 'mountain', kana: ['や', 'ま'] },
  { sentence: 'ゆき', romaji: 'yuki', translation: 'snow', kana: ['ゆ', 'き'] },
  { sentence: 'よる', romaji: 'yoru', translation: 'night', kana: ['よ', 'る'] },
  { sentence: 'やくそく', romaji: 'yakusoku', translation: 'promise', kana: ['や', 'く', 'そ', 'く'] },

  // Sentences using up to R-row
  { sentence: 'さくら', romaji: 'sakura', translation: 'cherry blossom', kana: ['さ', 'く', 'ら'] },
  { sentence: 'とり', romaji: 'tori', translation: 'bird', kana: ['と', 'り'] },
  { sentence: 'しろ', romaji: 'shiro', translation: 'castle', kana: ['し', 'ろ'] },
  { sentence: 'はしる', romaji: 'hashiru', translation: 'to run', kana: ['は', 'し', 'る'] },
  { sentence: 'れきし', romaji: 'rekishi', translation: 'history', kana: ['れ', 'き', 'し'] },

  // Sentences using W-row and N
  { sentence: 'わたし', romaji: 'watashi', translation: 'I', kana: ['わ', 'た', 'し'] },
  { sentence: 'ほん', romaji: 'hon', translation: 'book', kana: ['ほ', 'ん'] },
  { sentence: 'でんわ', romaji: 'denwa', translation: 'phone', kana: ['で', 'ん', 'わ'] },
  { sentence: 'ねこ を みる', romaji: 'neko o miru', translation: 'I see a cat', kana: ['ね', 'こ', 'を', 'み', 'る'] },
];
