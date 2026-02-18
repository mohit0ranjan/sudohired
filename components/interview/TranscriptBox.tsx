'use client';

import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TranscriptEntry } from '@/types';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export const TranscriptBox = ({ transcript }: { transcript: TranscriptEntry[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [transcript]);

    return (
        <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto space-y-4 p-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent bg-transparent"
        >
            <AnimatePresence initial={false}>
                {transcript.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center gap-4 text-muted-foreground opacity-50">
                        <Bot className="w-12 h-12" />
                        <p className="text-sm font-medium">Session initialized. Waiting for input...</p>
                    </div>
                ) : (
                    transcript.map((entry, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={cn(
                                "flex gap-3 max-w-[85%]",
                                entry.role === 'candidate' ? "ml-auto flex-row-reverse" : ""
                            )}
                        >
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border shadow-sm",
                                entry.role === 'candidate' ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border"
                            )}>
                                {entry.role === 'candidate' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                            </div>

                            <div className={cn(
                                "p-3 rounded-lg text-sm shadow-sm border",
                                entry.role === 'candidate'
                                    ? "bg-primary text-primary-foreground border-primary rounded-tr-none"
                                    : "bg-card text-foreground border-border rounded-tl-none"
                            )}>
                                <p className="leading-relaxed">
                                    {entry.text}
                                </p>
                                <span className={cn(
                                    "text-[10px] mt-1 block opacity-70",
                                    entry.role === 'candidate' ? "text-primary-foreground" : "text-muted-foreground"
                                )}>
                                    {new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </motion.div>
                    ))
                )}
            </AnimatePresence>
        </div>
    );
};
