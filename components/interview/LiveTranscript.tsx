'use client';

import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TranscriptEntry } from '@/types';
import { User, Bot } from 'lucide-react';

export const LiveTranscript = ({ transcript }: { transcript: TranscriptEntry[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [transcript]);

    return (
        <div className="flex flex-col h-full bg-zinc-950/30 rounded-2xl border border-white/5 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/5 bg-zinc-900/50 flex justify-between items-center">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">Live Transcript</h3>
                <div className="flex gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1 h-1 rounded-full bg-primary animate-bounce" />
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide"
            >
                <AnimatePresence initial={false}>
                    {transcript.length === 0 ? (
                        <div className="h-full flex items-center justify-center">
                            <p className="text-xs text-muted-foreground/40 italic">Waiting for conversation to start...</p>
                        </div>
                    ) : (
                        transcript.map((entry, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex gap-3 ${entry.role === 'candidate' ? 'flex-row' : 'flex-row'}`}
                            >
                                <div className={`mt-1 p-1.5 rounded-lg border shrink-0 ${entry.role === 'candidate' ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-zinc-800 border-white/10 text-muted-foreground'
                                    }`}>
                                    {entry.role === 'candidate' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                                </div>
                                <div className="flex-1">
                                    <p className="text-[10px] font-bold uppercase tracking-tighter opacity-50 mb-0.5">
                                        {entry.role === 'candidate' ? 'You' : 'Interviewer'}
                                    </p>
                                    <p className="text-sm leading-relaxed text-foreground/90 font-medium">
                                        {entry.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
