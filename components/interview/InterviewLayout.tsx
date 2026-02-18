'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InterviewLayoutProps {
    children: React.ReactNode;
    topBar?: React.ReactNode;
    bottomBar?: React.ReactNode;
}

export const InterviewLayout = ({ children, topBar, bottomBar }: InterviewLayoutProps) => {
    return (
        <div className="h-screen w-full bg-background text-foreground flex flex-col font-mono selection:bg-primary/20 overflow-hidden relative">
            {/* HUD Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            {topBar && (
                <header className="h-12 border-b border-border bg-card/60 backdrop-blur-md z-50 flex-shrink-0 flex items-center">
                    <div className="w-full px-6">
                        {topBar}
                    </div>
                </header>
            )}

            <main className="flex-1 flex overflow-hidden relative">
                {children}
            </main>

            {bottomBar && (
                <footer className="h-14 border-t border-border bg-card/80 backdrop-blur-md flex-shrink-0 flex items-center z-50">
                    <div className="w-full px-6">
                        {bottomBar}
                    </div>
                </footer>
            )}
        </div>
    );
};
