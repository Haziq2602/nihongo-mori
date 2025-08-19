'use client';

import { useState, useEffect, useCallback } from 'react';
import { hiraganaLessons, katakanaLessons } from '@/data/kana';

const KANA_COMPASS_PROGRESS_KEY = 'kanaCompassProgress';

interface QuizResult {
  kana: string;
  correct: boolean;
  audioUsed: boolean;
}

interface ProgressData {
  learnedKana: string[];
  completedLessons: string[];
  quizResults: QuizResult[];
}

interface QuizStats {
    withSound: { correct: number; total: number };
    noSound: { correct: number; total: number };
}


const isServer = typeof window === 'undefined';

const defaultProgress: ProgressData = { 
  learnedKana: [], 
  completedLessons: ['vowels-hiragana'],
  quizResults: []
};

function loadProgress(): ProgressData {
  if (isServer) {
    return defaultProgress;
  }
  try {
    const data = localStorage.getItem(KANA_COMPASS_PROGRESS_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      // Ensure the first lesson is always unlocked
      const completed = new Set(parsed.completedLessons || []);
      completed.add('vowels-hiragana');
      
      return {
          learnedKana: parsed.learnedKana || [],
          completedLessons: Array.from(completed),
          quizResults: parsed.quizResults || [],
      };
    }
  } catch (error) {
    console.error('Failed to load progress from localStorage', error);
  }
  // Default state with first lesson unlocked
  return defaultProgress;
}

function saveProgress(data: ProgressData) {
  if (isServer) return;
  try {
    localStorage.setItem(KANA_COMPASS_PROGRESS_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save progress to localStorage', error);
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const addLearnedKana = useCallback((kana: string) => {
    setProgress(current => {
      const newLearnedKana = new Set(current.learnedKana);
      newLearnedKana.add(kana);
      const updated = { ...current, learnedKana: Array.from(newLearnedKana) };
      saveProgress(updated);
      return updated;
    });
  }, []);

  const completeLesson = useCallback((lessonSlug: string, kanaType: 'hiragana' | 'katakana') => {
    setProgress(current => {
      const newCompletedLessons = new Set(current.completedLessons);
      const lessonId = `${lessonSlug}-${kanaType}`;
      newCompletedLessons.add(lessonId);
      
      const lessons = kanaType === 'hiragana' ? hiraganaLessons : katakanaLessons;
      const currentLessonIndex = lessons.findIndex(l => l.slug === lessonSlug);
      
      if (currentLessonIndex !== -1 && currentLessonIndex < lessons.length - 1) {
        const nextLesson = lessons[currentLessonIndex + 1];
        const nextLessonId = `${nextLesson.slug}-${kanaType}`;
        newCompletedLessons.add(nextLessonId);
      }

      const updated = { ...current, completedLessons: Array.from(newCompletedLessons) };
      saveProgress(updated);
      return updated;
    });
  }, []);

  const isLessonUnlocked = useCallback((lessonSlug: string, kanaType: 'hiragana' | 'katakana') => {
    if (isServer) return false;
    const lessonId = `${lessonSlug}-${kanaType}`;
    return progress.completedLessons.includes(lessonId);
  }, [progress.completedLessons]);

  const getLearnedKanaSet = useCallback(() => {
    return new Set(progress.learnedKana);
  }, [progress.learnedKana]);

  const addQuizResult = useCallback((result: QuizResult) => {
    setProgress(current => {
        const updated = { ...current, quizResults: [...current.quizResults, result] };
        saveProgress(updated);
        return updated;
    });
  }, []);

  const getStats = useCallback((): QuizStats => {
    const stats: QuizStats = {
      withSound: { correct: 0, total: 0 },
      noSound: { correct: 0, total: 0 },
    };

    progress.quizResults.forEach(result => {
        if (result.audioUsed) {
            stats.withSound.total++;
            if (result.correct) {
                stats.withSound.correct++;
            }
        } else {
            stats.noSound.total++;
            if (result.correct) {
                stats.noSound.correct++;
            }
        }
    });

    return stats;
  }, [progress.quizResults]);


  return {
    learnedKana: getLearnedKanaSet(),
    completedLessons: new Set(progress.completedLessons),
    addLearnedKana,
    completeLesson,
    isLessonUnlocked,
    addQuizResult,
    getStats,
  };
}
