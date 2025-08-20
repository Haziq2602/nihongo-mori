
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './use-auth';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';
import { hiraganaLessons, katakanaLessons } from '@/data/kana';

interface QuizResult {
  kana: string;
  correct: boolean;
  audioUsed: boolean;
  timestamp: string;
}

interface ProgressData {
  learnedKana: string[];
  completedLessons: string[];
  quizLog: QuizResult[]; // Changed from quizResults to quizLog for clarity
  lastUpdated: any;
}

interface QuizStats {
    withSound: { correct: number; total: number };
    noSound: { correct: number; total: number };
}

const defaultProgress: ProgressData = { 
  learnedKana: [], 
  completedLessons: ['vowels-hiragana'],
  quizLog: [],
  lastUpdated: null
};

export function useProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);
  const [loading, setLoading] = useState(true);

  const getProgressRef = useCallback(() => {
    if (!user) return null;
    return doc(db, 'userProgress', user.uid);
  }, [user]);

  // Fetch progress from Firestore
  useEffect(() => {
    const fetchProgress = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      setLoading(true);
      const progressRef = getProgressRef();
      if (progressRef) {
        const docSnap = await getDoc(progressRef);
        if (docSnap.exists()) {
          setProgress(docSnap.data() as ProgressData);
        } else {
          // Create initial progress for new user
          const initialProgress: ProgressData = {
            ...defaultProgress,
            lastUpdated: serverTimestamp(),
          };
          await setDoc(progressRef, initialProgress);
          setProgress(initialProgress);
        }
      }
      setLoading(false);
    };

    fetchProgress();
  }, [user, getProgressRef]);

  const addLearnedKana = useCallback(async (kana: string) => {
    const progressRef = getProgressRef();
    if (!progressRef) return;
    
    setProgress(current => ({ ...current, learnedKana: Array.from(new Set([...current.learnedKana, kana])) }));
    await updateDoc(progressRef, {
      learnedKana: arrayUnion(kana),
      lastUpdated: serverTimestamp(),
    });
  }, [getProgressRef]);

  const completeLesson = useCallback(async (lessonSlug: string, kanaType: 'hiragana' | 'katakana') => {
    const progressRef = getProgressRef();
    if (!progressRef) return;

    const lessonId = `${lessonSlug}-${kanaType}`;
    const lessons = kanaType === 'hiragana' ? hiraganaLessons : katakanaLessons;
    const currentLessonIndex = lessons.findIndex(l => l.slug === lessonSlug);
    
    let lessonsToComplete = [lessonId];
    if (currentLessonIndex !== -1 && currentLessonIndex < lessons.length - 1) {
      const nextLesson = lessons[currentLessonIndex + 1];
      const nextLessonId = `${nextLesson.slug}-${kanaType}`;
      lessonsToComplete.push(nextLessonId);
    }
    
    setProgress(current => ({ ...current, completedLessons: Array.from(new Set([...current.completedLessons, ...lessonsToComplete])) }));
    await updateDoc(progressRef, {
        completedLessons: arrayUnion(...lessonsToComplete),
        lastUpdated: serverTimestamp(),
    });

  }, [getProgressRef]);

  const isLessonUnlocked = useCallback((lessonSlug: string, kanaType: 'hiragana' | 'katakana') => {
    const lessonId = `${lessonSlug}-${kanaType}`;
    return progress.completedLessons.includes(lessonId);
  }, [progress.completedLessons]);

  const getLearnedKanaSet = useCallback(() => {
    return new Set(progress.learnedKana);
  }, [progress.learnedKana]);

  const addQuizResult = useCallback(async (result: QuizResult) => {
    const progressRef = getProgressRef();
    if (!progressRef) return;
    
    setProgress(current => ({ ...current, quizLog: [...current.quizLog, result] }));
    await updateDoc(progressRef, {
      quizLog: arrayUnion(result),
      lastUpdated: serverTimestamp(),
    });
  }, [getProgressRef]);

  const getStats = useCallback((): QuizStats => {
    const stats: QuizStats = {
      withSound: { correct: 0, total: 0 },
      noSound: { correct: 0, total: 0 },
    };

    // Note: this calculates stats based on ALL quiz history.
    // This could be scoped to a specific quiz session if needed.
    (progress.quizLog || []).forEach(result => {
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
  }, [progress.quizLog]);


  return {
    loading,
    learnedKana: getLearnedKanaSet(),
    completedLessons: new Set(progress.completedLessons),
    quizLog: progress.quizLog || [],
    addLearnedKana,
    completeLesson,
    isLessonUnlocked,
    addQuizResult,
    getStats,
  };
}
