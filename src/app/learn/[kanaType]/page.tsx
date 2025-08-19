import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { notFound } from 'next/navigation';
import { KanaGrid } from '@/components/kana-grid';

interface LearnPageProps {
  params: {
    kanaType: 'hiragana' | 'katakana';
  };
}

export function generateMetadata({ params }: LearnPageProps) {
  const title = params.kanaType.charAt(0).toUpperCase() + params.kanaType.slice(1);
  return {
    title: `Learn ${title} | Nihongo Mori`,
  };
}

export default function LearnPage({ params }: LearnPageProps) {
  const { kanaType } = params;
  const lessons = kanaType === 'hiragana' ? hiraganaLessons : katakanaLessons;

  if (!lessons) {
    notFound();
  }

  const title = kanaType.charAt(0).toUpperCase() + kanaType.slice(1);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Learn {title}</h1>
        <p className="text-muted-foreground">
          Click on a lesson to start learning the characters.
        </p>
      </div>
      <KanaGrid lessons={lessons} kanaType={kanaType} />
    </div>
  );
}
