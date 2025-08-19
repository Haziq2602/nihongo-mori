
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
  useSidebar,
} from '@/components/ui/sidebar';
import { Leaf, BookOpen, BotMessageSquare, Home, PanelLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { ModeToggle } from '../mode-toggle';

function AppShellContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { state, setOpenMobile } = useSidebar();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [pathname, isMobile, setOpenMobile]);


  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Leaf className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight">Nihongo Mori</span>
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
        <SidebarFooter className='flex items-center gap-2'>
            <ThemeSwitcher />
            <ModeToggle />
            {isMounted && <div className='flex-grow'/>}
            {isMounted && !isMobile && (
                <SidebarTrigger>
                   <PanelLeft />
                </SidebarTrigger>
            )}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b md:hidden">
            <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="font-semibold">Nihongo Mori</span>
            </div>
            <SidebarTrigger>
              <PanelLeft />
            </SidebarTrigger>
        </header>
        {children}
      </SidebarInset>
    </>
  );
}


export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppShellContent>{children}</AppShellContent>
    </SidebarProvider>
  );
}
