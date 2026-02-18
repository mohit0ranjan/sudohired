'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { DriveCard } from './DriveCard';
import { cn } from '@/lib/utils';
import { SearchBar } from './SearchBar';
import { TerminalSearch } from './TerminalSearch';

const drives = [
    { company: 'Google', role: 'SDE II', location: 'London, UK', applicants: 1240, status: 'LIVE' as const },
    { company: 'Meta', role: 'Product Manager', location: 'Remote', applicants: 850, status: 'UPCOMING' as const },
    { company: 'Tesla', role: 'AI Engineer', location: 'Palo Alto, CA', applicants: 2100, status: 'LIVE' as const },
    { company: 'Stripe', role: 'Frontend Architect', location: 'Remote', applicants: 420, status: 'CLOSED' as const },
];

export const DrivesGrid = () => {
    const { resolvedTheme } = useTheme();

    return (
        <section className={cn(
            "py-32 border-t border-white/5",
            resolvedTheme === 'dark' ? "bg-black" : "bg-white"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:row items-center justify-between mb-16 gap-8">
                    <div className="space-y-4">
                        <h2 className={cn(
                            "text-4xl font-black uppercase tracking-tight",
                            resolvedTheme === 'dark' ? "text-white" : "text-slate-900"
                        )}>
                            {resolvedTheme === 'dark' ? '> SCAN_DIR ./DRIVES' : 'Active Hiring Drives'}
                        </h2>
                        <p className="text-muted-foreground font-medium">Join high-stakes hiring events from top tech global leaders.</p>
                    </div>

                    <div className="relative w-full md:w-96">
                        {resolvedTheme === 'dark' ? <TerminalSearch /> : <SearchBar />}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {drives.map((drive, i) => (
                        <DriveCard key={i} {...drive} />
                    ))}
                </div>
            </div>
        </section>
    );
};
