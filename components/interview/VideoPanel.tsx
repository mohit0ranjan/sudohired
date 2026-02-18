'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, CameraOff, Mic, MicOff, User, Monitor } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const VideoPanel = ({ isInterviewerSpeaking }: { isInterviewerSpeaking: boolean }) => {
    const { interviewSession, selectedCompany, user } = useStore();

    return (
        <div className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-900 border border-border shadow-2xl flex flex-col">
            {/* Interviewer View (Main) */}
            <div className="flex-1 relative flex items-center justify-center">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black opacity-50" />

                {/* Interviewer Avatar / Pulse */}
                <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="relative">
                        {isInterviewerSpeaking && (
                            <motion.div
                                initial={{ opacity: 0.5, scale: 1 }}
                                animate={{ opacity: 0, scale: 1.5 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
                            />
                        )}
                        <div className="w-40 h-40 rounded-full bg-zinc-800 border-4 border-zinc-700 flex items-center justify-center relative overflow-hidden shadow-2xl">
                            <span className="text-4xl font-bold text-zinc-500">
                                AI
                            </span>
                        </div>
                        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-zinc-900 rounded-full" />
                    </div>

                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-white tracking-tight">Sarah Chen</h2>
                        <p className="text-sm text-zinc-400">Senior Engineer • {selectedCompany?.name || 'Tech Corp'}</p>
                    </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                    <div className={cn("w-2 h-2 rounded-full transition-colors", isInterviewerSpeaking ? "bg-green-500 animate-pulse" : "bg-zinc-500")} />
                    <span className="text-xs font-medium text-white/90">
                        {isInterviewerSpeaking ? 'Speaking...' : 'Listening'}
                    </span>
                </div>
            </div>

            {/* User Self-View (PiP) */}
            <div className="absolute bottom-6 right-6 w-56 aspect-video bg-zinc-800 rounded-lg border border-white/10 shadow-2xl overflow-hidden z-20 hover:scale-105 transition-transform duration-300 group">
                {interviewSession.isCameraOn ? (
                    <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
                        <User className="w-12 h-12 text-zinc-500/50" />
                        {/* In a real app, this would be the webcam stream */}
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center flex-col gap-2 bg-zinc-900">
                        <CameraOff className="w-6 h-6 text-zinc-600" />
                        <span className="text-xs text-zinc-600 font-medium">Camera Off</span>
                    </div>
                )}

                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                    <span className="text-[10px] bg-black/50 px-2 py-0.5 rounded text-white/80 font-medium">You</span>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                    {!interviewSession.isMicOn && (
                        <div className="p-1 bg-red-500/90 rounded text-white">
                            <MicOff className="w-3 h-3" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
