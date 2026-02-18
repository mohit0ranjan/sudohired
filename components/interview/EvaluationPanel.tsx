'use client';

import React from 'react';
import { Target, Zap, BrainCircuit, Waves } from 'lucide-react';

interface EvaluationProps {
    confidence: number;
    keywords: string[];
}

export const EvaluationPanel = ({ confidence, keywords }: EvaluationProps) => {
    return (
        <div className="glass p-6 rounded-[2rem] border border-white/10 bg-zinc-950/20 grid grid-cols-2 gap-4">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Confidence</span>
                </div>
                <div className="flex items-end gap-2">
                    <span className="text-3xl font-black">{confidence}%</span>
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full mb-2 overflow-hidden">
                        <div
                            className="h-full bg-yellow-500 rounded-full transition-all duration-1000"
                            style={{ width: `${confidence}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-4 border-l border-white/5 pl-4">
                <div className="flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Key Concepts</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {keywords.map(kw => (
                        <span key={kw} className="text-[10px] font-bold px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-md">
                            {kw}
                        </span>
                    ))}
                </div>
            </div>

            <div className="col-span-2 pt-4 mt-2 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Waves className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[10px] font-bold text-muted-foreground">Neutral Tone Detected</span>
                </div>
                <div className="flex items-center gap-2">
                    <Target className="w-3 h-3 text-green-500" />
                    <span className="text-[10px] font-bold text-green-500 uppercase tracking-tighter">On Track</span>
                </div>
            </div>
        </div>
    );
};
