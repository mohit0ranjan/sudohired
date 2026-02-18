'use client';

import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center p-1 rounded-full border border-border bg-input/20 backdrop-blur-sm">
            {[
                { name: 'light', icon: Sun },
                { name: 'system', icon: Laptop },
                { name: 'dark', icon: Moon },
            ].map((t) => (
                <button
                    key={t.name}
                    onClick={() => setTheme(t.name)}
                    className={`
                        p-1.5 rounded-full transition-all duration-300
                        ${theme === t.name
                            ? 'bg-background text-primary shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }
                    `}
                    aria-label={`Switch to ${t.name} theme`}
                >
                    <t.icon className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
            ))}
        </div>
    );
}
