
'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { KanaLesson, Vocabulary, hiraganaLessons, katakanaLessons } from '@/data/kana';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { shuffle } from 'lodash';
import { useProgress } from '@/hooks/use-progress';
import { LoadingIndicator } from './loading-indicator';

interface VocabQuizProps {
  lesson: KanaLesson;
  kanaType: 'hiragana' | 'katakana';
}

type Question = {
  vocab: Vocabulary;
  options: string[]; // Options will be meanings
};

const generateQuestions = (lesson: KanaLesson): Question[] => {
  const allVocabMeanings = hiraganaLessons.concat(katakanaLessons).flatMap(l => l.vocabulary.map(v => v.meaning));
  const uniqueMeanings = Array.from(new Set(allVocabMeanings));

  const questions: Question[] = lesson.vocabulary.map(vocab => {
    let options = new Set<string>([vocab.meaning]);
    while (options.size < 4) {
        const randomMeaning = uniqueMeanings[Math.floor(Math.random() * uniqueMeanings.length)];
        if (randomMeaning !== vocab.meaning) {
            options.add(randomMeaning);
        }
    }
    return {
      vocab,
      options: shuffle(Array.from(options)),
    };
  });

  return shuffle(questions);
};

export function VocabQuiz({ lesson, kanaType }: VocabQuizProps) {
  const { completeVocabLesson, loading } = useProgress();
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (lesson.vocabulary.length > 0) {
      setQuestions(generateQuestions(lesson));
    }
  }, [lesson]);
  
  if (loading) {
    return <LoadingIndicator />;
  }
  
  if (questions.length === 0) {
      // This can happen if the lesson has no vocabulary or while questions are generating.
      // You could show a specific message or just the loading indicator.
      return <LoadingIndicator />;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;
  const passPercentage = 80;
  
  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setIsSubmitting(true);
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.vocab.meaning;
    
    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
    }
    
    setTimeout(() => {
      setIsSubmitting(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(i => i + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        // This is the last question
        const finalScore = correct ? score + 1 : score;
        if ((finalScore / questions.length) * 100 >= passPercentage) {
            completeVocabLesson(lesson.slug, kanaType);
        }
        setIsFinished(true);
      }
    }, 1200);
  };

  const finalScorePercentage = (score / questions.length) * 100;
  const passed = finalScorePercentage >= passPercentage;

  const getButtonClass = (option: string) => {
    if (!selectedAnswer) return 'bg-secondary text-secondary-foreground';
    const isSelected = selectedAnswer === option;
    const isAnswerCorrect = option === currentQuestion.vocab.meaning;

    if (isAnswerCorrect) return 'bg-green-500 hover:bg-green-500 text-white';
    if (isSelected && !isCorrect) return 'bg-destructive hover:bg-destructive text-destructive-foreground';
    return 'bg-secondary text-secondary-foreground opacity-50';
  };
  
  const playAudio = (audioSrc: string) => {
    try {
      const audio = new Audio(audioSrc);
      audio.play();
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  };

  if (isFinished) {
    // We need to re-calculate here because state updates might not be flushed
    const finalScoreOnFinish = (score / questions.length) * 100;
    const didPassOnFinish = finalScoreOnFinish >= passPercentage;

    return (
        <Card className="w-full max-w-lg text-center">
            <CardHeader>
                <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
                <CardDescription>You scored {finalScoreOnFinish.toFixed(0)}% for {lesson.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {isSubmitting ? <LoadingIndicator /> : (
                  <>
                    {didPassOnFinish ? (
                        <p className="text-green-600 font-semibold">Congratulations! You passed the quiz and unlocked the next vocabulary set.</p>
                    ) : (
                        <p className="text-destructive font-semibold">Nice try! You need {passPercentage}% to pass. Please review the words and try again.</p>
                    )}
                    <div className="flex justify-center gap-4">
                        <Button variant="outline" onClick={() => router.push('/tools/vocab')}>Back to Vocab Lessons</Button>
                        {!didPassOnFinish && <Button onClick={() => window.location.reload()}>Try Again</Button>}
                    </div>
                  </>
                )}
            </CardContent>
        </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl relative">
      <CardHeader>
        <CardTitle>Vocabulary Quiz: {lesson.name}</CardTitle>
        <CardDescription>
            What is the meaning of the word below?
        </CardDescription>
        <Progress value={progress} className="mt-2"/>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <button 
            onClick={() => playAudio(currentQuestion.vocab.audio)}
            className="text-center p-4 rounded-lg transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring"
        >
            <div className="text-8xl font-bold text-primary">
                {currentQuestion.vocab.word}
            </div>
            <div className="text-2xl text-muted-foreground">
                {currentQuestion.vocab.reading}
            </div>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {currentQuestion.options.map(option => (
            <Button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedAnswer || isSubmitting}
              className={cn('h-auto min-h-[5rem] py-4 text-xl font-bold transition-all duration-300 whitespace-normal', getButtonClass(option))}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
