
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
import { Leaf, BookOpen, BotMessageSquare, Home, PanelLeft, LogOut, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { ModeToggle } from '../mode-toggle';
import { useAuth } from '@/hooks/use-auth';
import { Button } from '../ui/button';

function AppShellContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();
  const [isMounted, setIsMounted] = React.useState(false);
  const { logout } = useAuth();

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
                isActive={pathname === '/dashboard'}
                tooltip="Dashboard"
              >
                <Link href="/dashboard">
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
                isActive={pathname.startsWith('/tools/word-generator')}
                tooltip="Word Generator"
              >
                <Link href="/tools/word-generator">
                  <BotMessageSquare />
                  <span>AI Words</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
            <div className="mt-auto">
              <div className="px-4 mb-2 text-xs font-medium text-muted-foreground">USER</div>
              <SidebarMenu>
                 <SidebarMenuItem>
                    <div className="flex items-center gap-2 p-2">
                        <ThemeSwitcher />
                        <ModeToggle />
                        <div className='flex-grow'/>
                        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={logout}>
                            <LogOut />
                            <span className="sr-only">Sign Out</span>
                        </Button>
                    </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
            {isMounted && !isMobile && (
                <div className="p-2 flex justify-end">
                    <SidebarTrigger>
                    <PanelLeft />
                    </SidebarTrigger>
                </div>
            )}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        {isMounted && isMobile && (
          <header className="flex items-center justify-between p-4 border-b md:hidden">
              <div className="flex items-center gap-2">
                  <Leaf className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Nihongo Mori</span>
              </div>
              <SidebarTrigger>
                <PanelLeft />
              </SidebarTrigger>
          </header>
        )}
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
