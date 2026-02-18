'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    terminalPrefix?: string;
}

export const SectionHeader = ({ title, subtitle, terminalPrefix = '>' }: SectionHeaderProps) => {
    const { resolvedTheme } = useTheme();

    return (
        <div className="mb-12 space-y-4">
            <h2 className={cn(
                "text-3xl font-black uppercase tracking-tight italic",
                resolvedTheme === 'dark' ? "text-primary tracking-widest font-mono" : "text-slate-900"
            )}>
                {resolvedTheme === 'dark' ? `${terminalPrefix} ${title.toUpperCase().replace(/\s+/g, '_')}` : title}
            </h2>
            <p className={cn(
                "font-medium",
                resolvedTheme === 'dark' ? "text-muted-foreground/60 text-xs font-mono" : "text-muted-foreground"
            )}>
                {subtitle}
            </p>
        </div>
    );
};
