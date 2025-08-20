
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
import { ArrowRight, BookOpen, BotMessageSquare } from 'lucide-react';
import { hiraganaLessons, katakanaLessons } from '@/data/kana';
import { useEffect, useState } from 'react';
import { AppShell } from '@/components/layout/app-shell';
import { withAuth } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';

const totalHiragana = hiraganaLessons.flatMap(l => l.kana).length;
const totalKatakana = katakanaLessons.flatMap(l => l.kana).length;

function Dashboard() {
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

  const cards = [
    {
      title: 'Hiragana',
      description: `${hiraganaLearned} / ${totalHiragana} learned`,
      progress: hiraganaProgress,
      href: '/learn/hiragana',
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: 'Katakana',
      description: `${katakanaLearned} / ${totalKatakana} learned`,
      progress: katakanaProgress,
      href: '/learn/katakana',
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: 'AI Word Generator',
      description: "Generate example words with the Kana you've learned.",
      progress: null,
      href: '/tools/word-generator',
      icon: <BotMessageSquare className="h-6 w-6" />,
    },
  ]

  return (
    <AppShell>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-2 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <h1 className="text-3xl font-bold tracking-tight">Welcome to Nihongo Mori</h1>
          <p className="text-muted-foreground">
            Your guide to mastering Japanese Hiragana and Katakana.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={card.title} className={cn(
              "flex flex-col transition-transform duration-300 hover:scale-105 animate-fade-in-up",
            )} style={{ animationDelay: `${index * 100 + 200}ms` }}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "rounded-lg p-3",
                    card.title.includes('Generator') ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                  )}>
                    {card.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <CardTitle>{card.title}</CardTitle>
                    {card.description && <CardDescription>{card.description}</CardDescription>}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-end gap-4">
                {card.progress !== null && <Progress value={card.progress} aria-label={`${card.progress.toFixed(0)}% ${card.title} learned`} />}
                <Button asChild variant={card.title.includes('Generator') ? 'secondary' : 'default'} className="w-full">
                  <Link href={card.href}>
                    {card.title.includes('Generator') ? 'Go to Generator' : 'Start Learning'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

export default withAuth(Dashboard);
