import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { notFound } from 'next/navigation';
import { KanaLessonClient } from '@/components/kana-lesson-client';

interface LessonPageProps {
  params: {
    kanaType: 'hiragana' | 'katakana';
    lesson: string;
  };
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { kanaType, lesson: lessonSlug } = params;
  const lessons = kanaType === 'hiragana' ? hiraganaLessons : katakanaLessons;
  const lessonData = lessons.find((l) => l.slug === lessonSlug);
  
  const kanaTypeName = kanaType.charAt(0).toUpperCase() + kanaType.slice(1);

  if (!lessonData) {
    return {
      title: `Lesson Not Found | Nihongo Mori`,
    };
  }

  return {
    title: `${kanaTypeName}: ${lessonData.name} | Nihongo Mori`,
  };
}


export default function LessonPage({ params }: LessonPageProps) {
  const { kanaType, lesson: lessonSlug } = params;
  const lessons = kanaType === 'hiragana' ? hiraganaLessons : katakanaLessons;
  const lesson = lessons.find((l) => l.slug === lessonSlug);

  if (!lesson) {
    notFound();
  }

  return <KanaLessonClient lesson={lesson} kanaType={kanaType} />;
}
