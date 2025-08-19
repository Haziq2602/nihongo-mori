import { WordGenerator } from '@/components/word-generator';

export const metadata = {
    title: 'AI Word Generator | Nihongo Mori',
    description: 'Generate example words using the kana you have learned.',
};

export default function WordGeneratorPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">AI Word Generator</h1>
        <p className="text-muted-foreground">
          Select kana you've learned to generate example words.
        </p>
      </div>
      <WordGenerator />
    </div>
  );
}
