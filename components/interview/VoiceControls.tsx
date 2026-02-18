'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Square, RotateCcw, Volume2, Loader2, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VoiceControlsProps {
    isRecording: boolean;
    onStart: () => void;
    onStop: () => void;
    onReplay: () => void;
    isProcessing?: boolean;
}

export const VoiceControls = ({
    isRecording,
    onStart,
    onStop,
    onReplay,
    isProcessing
}: VoiceControlsProps) => {

    return (
        <div className="flex flex-col gap-4 font-mono w-full max-w-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        isRecording ? "bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" : "bg-zinc-600"
                    )} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        {isRecording ? 'INPUT_ACTIVE_LISTENING...' : 'SIGNAL_IDLE_READY'}
                    </span>
                </div>
                {isRecording && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                    >
                        <Waves className="w-3 h-3 text-primary animate-pulse" />
                        <span className="text-[9px] font-bold text-primary uppercase">VOICE_SYNC</span>
                    </motion.div>
                )}
            </div>

            {/* Waveform Visualization */}
            <div className="flex items-center gap-1 h-12 px-4 bg-primary/5 border border-primary/10 justify-center overflow-hidden">
                {[...Array(32)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 bg-primary min-h-[4px]"
                        animate={{
                            height: isRecording ? [4, Math.random() * 32 + 4, 4] : 4,
                            opacity: isRecording ? 1 : 0.1
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.02
                        }}
                    />
                ))}
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={onReplay}
                    className="p-3 border border-border hover:border-primary/50 transition-colors group"
                    title="REPLAY_LAST_SIGNAL"
                >
                    <RotateCcw className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform" />
                </button>

                <button
                    onClick={isRecording ? onStop : onStart}
                    disabled={isProcessing}
                    className={cn(
                        "flex-1 py-3 px-6 font-bold text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3",
                        isRecording
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "bg-primary text-background hover:bg-primary/90"
                    )}
                >
                    {isProcessing ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>PROCESSING_RESPONSE...</span>
                        </>
                    ) : isRecording ? (
                        <>
                            <Square className="w-3 h-3 fill-current" />
                            <span>TERMINATE_RECORDING</span>
                        </>
                    ) : (
                        <>
                            <Mic className="w-4 h-4" />
                            <span>INITIALIZE_VOICE_COMMAND</span>
                        </>
                    )}
                </button>
            </div>

            <div className="flex items-center justify-between opacity-40">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Volume2 className="w-3 h-3 text-primary" />
                    <span className="text-[8px] uppercase tracking-tighter">OUT_STABLE</span>
                </div>
                <p className="text-[8px] font-bold uppercase tracking-tighter">
                    [SPACEBAR] to TOGGLE_MIC
                </p>
            </div>
        </div>
    );
};
