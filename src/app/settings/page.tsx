
'use client';

import { AppShell } from '@/components/layout/app-shell';
import { withAuth } from '@/hooks/use-auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { ModeToggle } from '@/components/mode-toggle';
import { Label } from '@/components/ui/label';

function SettingsPage() {
  return (
    <AppShell>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Customize your application experience.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Adjust the look and feel of the application.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="color-theme">Color Theme</Label>
              <ThemeSwitcher />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="mode-toggle">Light/Dark Mode</Label>
              <ModeToggle />
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

export default withAuth(SettingsPage);
