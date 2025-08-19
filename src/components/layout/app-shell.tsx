'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { Compass, BookOpen, BotMessageSquare, Home } from 'lucide-react';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
           <div className="flex items-center gap-2 p-2">
            <Compass className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight">Kana Compass</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === '/'}
                tooltip="Dashboard"
              >
                <Link href="/">
                  <Home />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          
          <div className="mt-4 px-4 mb-2 text-xs font-medium text-muted-foreground">LEARN</div>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith('/learn/hiragana')}
                tooltip="Hiragana"
              >
                <Link href="/learn/hiragana">
                  <BookOpen />
                  <span>Hiragana</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith('/learn/katakana')}
                tooltip="Katakana"
              >
                <Link href="/learn/katakana">
                  <BookOpen />
                  <span>Katakana</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <div className="mt-4 px-4 mb-2 text-xs font-medium text-muted-foreground">TOOLS</div>

           <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith('/tools/sentence-builder')}
                tooltip="Sentence Builder"
              >
                <Link href="/tools/sentence-builder">
                  <BotMessageSquare />
                  <span>AI Sentences</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

        </SidebarContent>
        <SidebarFooter>
          <div className="md:hidden flex justify-start p-2">
            <SidebarTrigger />
          </div>
          <div className="hidden md:flex justify-end p-2">
            <SidebarTrigger />
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 md:hidden border-b">
            <div className="flex items-center gap-2">
                <Compass className="h-6 w-6 text-primary" />
                <span className="font-semibold">Kana Compass</span>
            </div>
            <SidebarTrigger />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
