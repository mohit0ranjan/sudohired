'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Square, RotateCcw, Volume2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VoiceControlProps {
    isRecording: boolean;
    onStart: () => void;
    onStop: () => void;
    onReplay: () => void;
    isProcessing?: boolean;
}

export const VoiceControlPanel = ({
    isRecording,
    onStart,
    onStop,
    onReplay,
    isProcessing
}: VoiceControlProps) => {

    return (
        <div className="glass p-6 rounded-[2rem] border border-white/10 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20">
                    <div className={cn("w-1.5 h-1.5 rounded-full bg-red-500", isRecording && "animate-ping")} />
                    <span className="text-[10px] font-black uppercase text-red-500 tracking-widest">
                        {isRecording ? 'Listening' : 'Ready'}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex-1 flex items-end gap-1 h-12 px-2">
                    {/* Audio Visualization Bars */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-primary rounded-full min-h-[4px]"
                            animate={{
                                height: isRecording ? [4, Math.random() * 40 + 10, 4] : 4,
                                opacity: isRecording ? 1 : 0.3
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                delay: i * 0.05
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <button
                    onClick={onReplay}
                    className="p-4 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/50 transition-all group"
                    title="Replay Link"
                >
                    <RotateCcw className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                </button>

                <button
                    onClick={isRecording ? onStop : onStart}
                    disabled={isProcessing}
                    className={cn(
                        "flex-1 py-4 px-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl",
                        isRecording
                            ? "bg-red-500 text-white shadow-red-500/20"
                            : "bg-primary text-primary-foreground shadow-primary/20 hover:scale-[1.02]"
                    )}
                >
                    {isProcessing ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Analyzing response...</span>
                        </>
                    ) : isRecording ? (
                        <>
                            <Square className="w-5 h-5 fill-current" />
                            <span>Stop Speaking</span>
                        </>
                    ) : (
                        <>
                            <Mic className="w-5 h-5" />
                            <span>Push to Speak</span>
                        </>
                    )}
                </button>

                <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-primary" />
                    <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-primary" />
                    </div>
                </div>
            </div>

            <p className="text-[10px] text-center font-bold text-muted-foreground/60 uppercase tracking-widest">
                {isRecording ? 'Interviewer is listening to you' : 'Press the button and start speaking'}
            </p>
        </div>
    );
};
