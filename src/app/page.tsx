'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useProgress } from '@/hooks/use-progress';
import { ArrowRight, BookOpen, MessageSquareQuote, BotMessageSquare } from 'lucide-react';
import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { useEffect, useState } from 'react';

const totalHiragana = hiraganaLessons.flatMap(l => l.kana).length;
const totalKatakana = katakanaLessons.flatMap(l => l.kana).length;

export default function Dashboard() {
  const { learnedKana } = useProgress();
  const [hiraganaLearned, setHiraganaLearned] = useState(0);
  const [katakanaLearned, setKatakanaLearned] = useState(0);

  useEffect(() => {
    const hiragana = hiraganaLessons.flatMap(l => l.kana).filter(k => learnedKana.has(k.kana)).length;
    const katakana = katakanaLessons.flatMap(l => l.kana).filter(k => learnedKana.has(k.kana)).length;
    setHiraganaLearned(hiragana);
    setKatakanaLearned(katakana);
  }, [learnedKana]);

  const hiraganaProgress = totalHiragana > 0 ? (hiraganaLearned / totalHiragana) * 100 : 0;
  const katakanaProgress = totalKatakana > 0 ? (katakanaLearned / totalKatakana) * 100 : 0;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to Nihongo Mori</h1>
        <p className="text-muted-foreground">
          Your guide to mastering Japanese Hiragana and Katakana.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-1">
                <CardTitle>Hiragana</CardTitle>
                <CardDescription>
                  {hiraganaLearned} / {totalHiragana} learned
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-end gap-4">
            <Progress value={hiraganaProgress} aria-label={`${hiraganaProgress.toFixed(0)}% Hiragana learned`} />
            <Button asChild className="w-full">
              <Link href="/learn/hiragana">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-1">
                <CardTitle>Katakana</CardTitle>
                <CardDescription>
                  {katakanaLearned} / {totalKatakana} learned
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-end gap-4">
            <Progress value={katakanaProgress} aria-label={`${katakanaProgress.toFixed(0)}% Katakana learned`} />
            <Button asChild className="w-full">
              <Link href="/learn/katakana">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-accent/10 p-3 text-accent">
                <BotMessageSquare className="h-6 w-6" />
              </div>
              <CardTitle>AI Word Generator</CardTitle>
            </div>
            <CardDescription className="pt-2">
              Generate example words with the Kana you've learned.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col justify-end">
            <Button asChild variant="secondary" className="w-full">
              <Link href="/tools/word-generator">
                Go to Generator <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
