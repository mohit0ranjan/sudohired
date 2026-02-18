'use client';

import React from 'react';
import { HiringStage } from '../types';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const stages: { key: HiringStage; label: string }[] = [
    { key: 'RESUME', label: 'Resume' },
    { key: 'SCREENING', label: 'Screening' },
    { key: 'OA', label: 'Online Assessment' },
    { key: 'INTERVIEW', label: 'Interview' },
    { key: 'RESULT', label: 'Final Result' },
];

interface ProgressBarProps {
    currentStage: HiringStage;
}

import { useTheme } from 'next-themes';

export const ProgressBar = ({ currentStage }: ProgressBarProps) => {
    const { resolvedTheme } = useTheme();
    const currentIndex = stages.findIndex((s) => s.key === currentStage);

    return (
        <div className="w-full py-8">
            <div className="relative flex justify-between">
                {/* Connection Line */}
                <div className={cn(
                    "absolute top-5 left-0 w-full h-px -z-10",
                    resolvedTheme === 'dark' ? "bg-white/10" : "bg-slate-200"
                )} />
                <div
                    className={cn(
                        "absolute top-5 left-0 h-px transition-all duration-700 -z-10",
                        resolvedTheme === 'dark' ? "bg-primary shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "bg-primary"
                    )}
                    style={{ width: `${(currentIndex / (stages.length - 1)) * 100}%` }}
                />

                {stages.map((stage, index) => {
                    const isCompleted = index < currentIndex;
                    const isCurrent = index === currentIndex;

                    return (
                        <div key={stage.key} className="flex flex-col items-center">
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500",
                                    isCompleted ? (resolvedTheme === 'dark' ? "bg-primary border-primary text-black" : "bg-primary border-primary text-white") :
                                        isCurrent ? (resolvedTheme === 'dark' ? "bg-zinc-950 border-primary text-primary shadow-lg shadow-primary/20" : "bg-white border-primary text-primary shadow-xl shadow-primary/10") :
                                            (resolvedTheme === 'dark' ? "bg-zinc-950 border-white/5 text-muted-foreground" : "bg-slate-50 border-slate-200 text-slate-400")
                                )}
                            >
                                {isCompleted ? <Check className="w-5 h-5" /> : <span className="text-xs font-black">{index + 1}</span>}
                            </div>
                            <span className={cn(
                                "mt-3 text-[10px] font-black uppercase tracking-widest hidden md:block transition-colors duration-500",
                                isCurrent ? (resolvedTheme === 'dark' ? "text-primary" : "text-primary") : "text-muted-foreground opacity-40"
                            )}>
                                {stage.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
