'use client';

import * as React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-1 bg-secondary/50 p-1 rounded-xl border border-white/5 backdrop-blur-md">
            <button
                onClick={() => setTheme('light')}
                className={`p-2 rounded-lg transition-all ${theme === 'light' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:bg-white/5'}`}
                title="Premium Light"
            >
                <Sun className="w-4 h-4" />
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:bg-white/5'}`}
                title="Terminal Dark"
            >
                <Moon className="w-4 h-4" />
            </button>
            <button
                onClick={() => setTheme('system')}
                className={`p-2 rounded-lg transition-all ${theme === 'system' ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:bg-white/5'}`}
                title="System"
            >
                <Monitor className="w-4 h-4" />
            </button>
        </div>
    );
}
