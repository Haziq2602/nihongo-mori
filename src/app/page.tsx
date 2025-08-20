
'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Leaf, Sparkles } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

export default function LandingPage() {
  const { user, loading } = useAuth();

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">Nihongo Mori</span>
        </div>
        <div className="flex items-center gap-2">
          {loading ? null : user ? (
            <Button asChild className="transition-transform duration-300 hover:scale-105">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" asChild className="transition-transform duration-300 hover:scale-105">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild className="transition-transform duration-300 hover:scale-105">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </header>

      <main className="flex-1">
        <section className="flex flex-col items-center justify-center gap-6 px-4 py-20 text-center md:py-32">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Master Japanese Kana, Effortlessly.
            </h1>
            <h2 className="text-2xl font-medium text-primary tracking-widest sm:text-3xl">
              にほんごのもり
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Nihongo Mori is an interactive learning experience designed to guide you through the first crucial steps of learning Japanese: mastering Hiragana and Katakana.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" asChild className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
              <Link href={user ? "/dashboard" : "/signup"}>
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">Features</h2>
              <p className="mt-2 text-muted-foreground">Everything you need to learn and practice.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle>Interactive Lessons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Progress through structured lessons for Hiragana and Katakana, complete with audio and mnemonics.</p>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-question"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"/><path d="M12 17h.01"/></svg>
                  </div>
                  <CardTitle>Gamified Quizzes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Test your knowledge with engaging quizzes. You'll need to pass to unlock the next set of characters.</p>
                </CardContent>
              </Card>
              <Card className="transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <CardTitle>Learn Vocabs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Practice with a comprehensive vocabulary list categorized by the lessons you've learned.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nihongo Mori. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
