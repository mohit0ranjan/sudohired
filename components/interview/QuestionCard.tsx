'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, MessageSquareQuote } from 'lucide-react';

interface QuestionCardProps {
    question: string;
    index: number;
    total: number;
}

export const QuestionCard = ({ question, index, total }: QuestionCardProps) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        setDisplayText('');
        let current = '';
        const interval = setInterval(() => {
            if (current.length < question.length) {
                current += question[current.length];
                setDisplayText(current);
            } else {
                clearInterval(interval);
            }
        }, 20);
        return () => clearInterval(interval);
    }, [question]);

    return (
        <div className="glass p-8 rounded-[2.5rem] border border-white/10 bg-zinc-900/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />

            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <MessageSquareQuote className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Question {index + 1} of {total}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                    <Activity className="w-3 h-3 text-primary animate-pulse" />
                    <span className="text-[10px] font-bold text-primary/80 uppercase">In Progress</span>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.h2
                    key={question}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-bold leading-relaxed text-foreground tracking-tight"
                >
                    {displayText}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-1 h-6 ml-1 bg-primary align-middle"
                    />
                </motion.h2>
            </AnimatePresence>

            <div className="mt-8 flex gap-4">
                <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Category</p>
                    <p className="text-sm font-bold">System Design & Problem Solving</p>
                </div>
                <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Difficulty</p>
                    <p className="text-sm font-bold text-yellow-500">Medium - Hard</p>
                </div>
            </div>
        </div>
    );
};
