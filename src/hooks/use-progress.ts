
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
  completedVocabLessons: string[];
  quizLog: QuizResult[];
  lastUpdated: any;
}

interface QuizStats {
    withSound: { correct: number; total: number };
    noSound: { correct: number; total: number };
}

const defaultProgress: ProgressData = { 
  learnedKana: [], 
  completedLessons: ['vowels-hiragana'],
  completedVocabLessons: ['vowels-hiragana'], // Unlock the first vocab lesson by default
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
        setProgress(defaultProgress);
        setLoading(false);
        return;
      }
      setLoading(true);
      const progressRef = getProgressRef();
      if (progressRef) {
        try {
          const docSnap = await getDoc(progressRef);
          if (docSnap.exists()) {
            const data = docSnap.data() as ProgressData;
            // Ensure completedVocabLessons exists to avoid issues with older data structures
            if (!data.completedVocabLessons) {
              data.completedVocabLessons = ['vowels-hiragana'];
            }
             if (!data.completedLessons.includes('vowels-hiragana')) {
              data.completedLessons.push('vowels-hiragana');
            }
            setProgress(data);
          } else {
            // Create initial progress for new user
            const initialProgress: ProgressData = {
              ...defaultProgress,
              lastUpdated: serverTimestamp(),
            };
            await setDoc(progressRef, initialProgress);
            setProgress(initialProgress);
          }
        } catch (error) {
            console.error("Error fetching user progress:", error);
            // Fallback to default progress on error
            setProgress(defaultProgress);
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
    // Unlock next kana lesson
    if (currentLessonIndex !== -1 && currentLessonIndex < lessons.length - 1) {
      const nextLesson = lessons[currentLessonIndex + 1];
      const nextLessonId = `${nextLesson.slug}-${kanaType}`;
      lessonsToComplete.push(nextLessonId);
    }
     // Also unlock the corresponding vocab lesson
    const vocabLessonId = `${lessonSlug}-${kanaType}`;
    
    setProgress(current => ({ 
        ...current, 
        completedLessons: Array.from(new Set([...current.completedLessons, ...lessonsToComplete])),
        completedVocabLessons: Array.from(new Set([...current.completedVocabLessons, vocabLessonId]))
    }));
    
    await updateDoc(progressRef, {
        completedLessons: arrayUnion(...lessonsToComplete),
        completedVocabLessons: arrayUnion(vocabLessonId),
        lastUpdated: serverTimestamp(),
    });

  }, [getProgressRef]);

  const completeVocabLesson = useCallback(async (lessonSlug: string, kanaType: 'hiragana' | 'katakana') => {
      const progressRef = getProgressRef();
      if (!progressRef) return;
  
      const lessons = kanaType === 'hiragana' ? hiraganaLessons : katakanaLessons;
      const currentLessonIndex = lessons.findIndex(l => l.slug === lessonSlug);
  
      if (currentLessonIndex !== -1 && currentLessonIndex < lessons.length - 1) {
          const nextLesson = lessons[currentLessonIndex + 1];
          // Only unlock the next vocab lesson if it has vocabulary
          if (nextLesson.vocabulary && nextLesson.vocabulary.length > 0) {
            const nextVocabLessonId = `${nextLesson.slug}-${kanaType}`;
            
            setProgress(current => ({
                ...current,
                completedVocabLessons: Array.from(new Set([...current.completedVocabLessons, nextVocabLessonId])),
            }));

            await updateDoc(progressRef, {
                completedVocabLessons: arrayUnion(nextVocabLessonId),
                lastUpdated: serverTimestamp(),
            });
          }
      }
  }, [getProgressRef]);

  const isLessonUnlocked = useCallback((lessonSlug: string, kanaType: 'hiragana' | 'katakana') => {
    const lessonId = `${lessonSlug}-${kanaType}`;
    return progress.completedLessons.includes(lessonId);
  }, [progress.completedLessons]);

  const isVocabLessonUnlocked = useCallback((lessonSlug: string, kanaType: 'hiragana' | 'katakana') => {
    // A vocab lesson is unlocked if the corresponding kana lesson is completed.
    const kanaLessonId = `${lessonSlug}-${kanaType}`;
    return progress.completedLessons.includes(kanaLessonId);
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
    completedVocabLessons: new Set(progress.completedVocabLessons),
    quizLog: progress.quizLog || [],
    addLearnedKana,
    completeLesson,
    completeVocabLesson,
    isLessonUnlocked,
    isVocabLessonUnlocked,
    addQuizResult,
    getStats,
  };
}
