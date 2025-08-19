'use client';

import { useState, useMemo, useEffect } from 'react';
import { Kana, allKana } from '@/data/kana';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { shuffle } from 'lodash';
import { useProgress } from '@/hooks/use-progress';
import { Volume2 } from 'lucide-react';

interface QuizProps {
  kanaInLesson: Kana[];
  onQuizComplete: () => void;
  onBackToLearn: () => void;
}

type Question = {
  kana: Kana;
  options: string[];
  type: 'kana-to-romaji' | 'romaji-to-kana';
};

const generateQuestions = (kanaInLesson: Kana[]): Question[] => {
  const questions: Question[] = [];

  kanaInLesson.forEach(kana => {
    // Kana to Romaji question
    let options = new Set<string>([kana.romaji]);
    while (options.size < 4) {
      const randomKana = allKana[Math.floor(Math.random() * allKana.length)];
      if (randomKana.type === kana.type) {
        options.add(randomKana.romaji);
      }
    }
    questions.push({
      kana,
      options: shuffle(Array.from(options)),
      type: 'kana-to-romaji',
    });

    // Romaji to Kana question
    options = new Set<string>([kana.kana]);
    while (options.size < 4) {
      const randomKana = allKana[Math.floor(Math.random() * allKana.length)];
       if (randomKana.type === kana.type) {
        options.add(randomKana.kana);
      }
    }
     questions.push({
      kana,
      options: shuffle(Array.from(options)),
      type: 'romaji-to-kana',
    });
  });

  return shuffle(questions);
};

export function Quiz({ kanaInLesson, onQuizComplete, onBackToLearn }: QuizProps) {
  const { addQuizResult, getStats } = useProgress();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [audioUsedOn, setAudioUsedOn] = useState<Set<number>>(new Set());

  useEffect(() => {
    setQuestions(generateQuestions(kanaInLesson));
  }, [kanaInLesson]);
  
  const stats = useMemo(() => getStats(), [isFinished, getStats]);

  const playAudio = (audioSrc: string) => {
    try {
      setAudioUsedOn(prev => new Set(prev).add(currentQuestionIndex));
      const audio = new Audio(audioSrc);
      audio.play();
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  };

  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;
  const passPercentage = 80;
  const finalScorePercentage = (score / questions.length) * 100;
  const passed = finalScorePercentage >= passPercentage;

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    let correct = false;
    if (currentQuestion.type === 'kana-to-romaji' && answer === currentQuestion.kana.romaji) {
      correct = true;
    } else if (currentQuestion.type === 'romaji-to-kana' && answer === currentQuestion.kana.kana) {
      correct = true;
    }
    
    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
    }

    const wasAudioUsed = audioUsedOn.has(currentQuestionIndex);
    addQuizResult({
        kana: currentQuestion.kana.kana,
        correct,
        audioUsed: wasAudioUsed,
    });
    
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(i => i + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setIsFinished(true);
      }
    }, 1200);
  };

  const getButtonClass = (option: string) => {
    if (!selectedAnswer) return 'bg-secondary text-secondary-foreground';
    const isSelected = selectedAnswer === option;
    const isAnswerCorrect = currentQuestion.type === 'kana-to-romaji' ? option === currentQuestion.kana.romaji : option === currentQuestion.kana.kana;

    if (isAnswerCorrect) return 'bg-green-500 hover:bg-green-500 text-white';
    if (isSelected && !isCorrect) return 'bg-destructive hover:bg-destructive text-destructive-foreground';
    return 'bg-secondary text-secondary-foreground opacity-50';
  };

  if (isFinished) {
    return (
        <Card className="w-full max-w-lg text-center">
            <CardHeader>
                <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
                <CardDescription>You scored {finalScorePercentage.toFixed(0)}%</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {passed ? (
                    <p className="text-green-600 font-semibold">Congratulations! You passed the quiz and unlocked the next lesson.</p>
                ) : (
                    <p className="text-destructive font-semibold">Nice try! You need {passPercentage}% to pass. Please review the lesson and try again.</p>
                )}
                 <div className="grid grid-cols-2 gap-4 text-sm">
                    <Card className="p-4">
                        <CardDescription>ACCURACY (NO SOUND)</CardDescription>
                        <p className="text-2xl font-bold">
                            {stats.noSound.total > 0 ? `${((stats.noSound.correct / stats.noSound.total) * 100).toFixed(0)}%` : 'N/A'}
                        </p>
                        <p className="text-xs text-muted-foreground">{stats.noSound.correct} / {stats.noSound.total} correct</p>
                    </Card>
                     <Card className="p-4">
                        <CardDescription>ACCURACY (WITH SOUND)</CardDescription>
                        <p className="text-2xl font-bold">
                             {stats.withSound.total > 0 ? `${((stats.withSound.correct / stats.withSound.total) * 100).toFixed(0)}%` : 'N/A'}
                        </p>
                         <p className="text-xs text-muted-foreground">{stats.withSound.correct} / {stats.withSound.total} correct</p>
                    </Card>
                </div>
                <div className="flex justify-center gap-4">
                    <Button variant="outline" onClick={onBackToLearn}>Review Lesson</Button>
                    {passed && <Button onClick={onQuizComplete}>Continue</Button>}
                    {!passed && <Button onClick={() => window.location.reload()}>Try Again</Button>}
                </div>
            </CardContent>
        </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Quiz Time!</CardTitle>
        <CardDescription>
            {currentQuestion.type === 'kana-to-romaji' ? `What is the romaji for this kana?` : `Which kana is "${currentQuestion.kana.romaji}"?`}
        </CardDescription>
        <Progress value={progress} className="mt-2"/>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
            <div className="text-8xl font-bold text-primary">
            {currentQuestion.type === 'kana-to-romaji' ? currentQuestion.kana.kana : currentQuestion.kana.romaji}
            </div>
            <Button
                variant="outline"
                size="icon"
                className="h-14 w-14 rounded-full"
                onClick={() => playAudio(currentQuestion.kana.audio)}
                aria-label="Play sound"
                >
                <Volume2 className="h-6 w-6" />
            </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {currentQuestion.options.map(option => (
            <Button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedAnswer}
              className={cn('h-20 text-3xl font-bold transition-all duration-300', getButtonClass(option))}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
