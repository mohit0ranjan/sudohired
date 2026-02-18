'use client';

import React, { useState, useEffect } from 'react';
import { Timer as TimerIcon, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Timer = ({ initialMinutes = 30 }: { initialMinutes?: number }) => {
    const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const isLowTime = timeLeft < 300; // Less than 5 mins

    return (
        <div className={cn(
            "flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition-all duration-500",
            isLowTime ? "bg-red-500/10 border-red-500/50 text-red-500 animate-pulse" : "bg-zinc-900 border-white/10 text-muted-foreground"
        )}>
            {isLowTime ? <AlertCircle className="w-4 h-4" /> : <TimerIcon className="w-4 h-4 text-primary" />}
            <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">Time Remaining</span>
                <span className="text-sm font-mono font-bold tabular-nums leading-tight">
                    {formatTime(timeLeft)}
                </span>
            </div>
        </div>
    );
};
