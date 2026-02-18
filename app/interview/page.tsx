'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {
    Mic,
    MicOff,
    Video,
    VideoOff,
    PhoneOff,
    MessageSquare,
    Settings,
    MoreVertical,
    ChevronRight,
    Clock,
    Layout
} from 'lucide-react';

import { InterviewLayout } from '@/components/interview/InterviewLayout';
import { VideoPanel } from '@/components/interview/VideoPanel';
import { QuestionPanel } from '@/components/interview/QuestionPanel';
import { TranscriptBox } from '@/components/interview/TranscriptBox';
import { cn } from '@/lib/utils';

const interviewQuestions = [
    {
        text: "Explain the architectural considerations when building a highly available distributed system.",
        subtext: "Focus on technologies like Kubernetes, Redis, or microservices patterns."
    },
    {
        text: "How do you approach performance optimization in a large-scale React application?",
        subtext: "Discuss trade-offs between Context API, Redux, or Zustand."
    },
    {
        text: "Describe a scenario where you had to resolve a critical production bottleneck.",
        subtext: "Mention profiling tools or specific optimizations like lazy loading or memoization."
    }
];

export default function InterviewPage() {
    const {
        interviewSession,
        updateInterviewSession,
        updateProgress,
        setStage,
        selectedCompany,
        user
    } = useStore();

    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isInterviewerSpeaking, setIsInterviewerSpeaking] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
    const [activeTab, setActiveTab] = useState<'transcript' | 'notes'>('transcript');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Initial greeting
    useEffect(() => {
        setIsInterviewerSpeaking(true);
        const greeting = `Welcome, ${user?.name || 'Candidate'}. I am your interviewer for ${selectedCompany?.name || 'the tech'} role. We will begin the technical evaluation now.`;

        const timeout = setTimeout(() => {
            setIsInterviewerSpeaking(false);
            updateInterviewSession({
                transcript: [{ role: 'interviewer' as const, text: greeting, timestamp: Date.now() }]
            });
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    const handleEndInterview = () => {
        updateProgress({ interviewScore: 88, status: 'COMPLETED' });
        setStage('RESULT');
        router.push('/result');
    };

    const handleNextQuestion = () => {
        if (interviewSession.currentQuestionIndex < interviewQuestions.length - 1) {
            updateInterviewSession({
                currentQuestionIndex: interviewSession.currentQuestionIndex + 1
            });
            setIsInterviewerSpeaking(true);
            setTimeout(() => setIsInterviewerSpeaking(false), 2500);
        } else {
            handleEndInterview();
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className="h-screen w-full bg-background flex flex-col overflow-hidden">
            {/* Top Bar */}
            <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6 z-10">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {(selectedCompany?.name || 'Tech')[0]}
                        </div>
                        <div>
                            <h1 className="text-sm font-bold text-foreground leading-tight">{selectedCompany?.name || 'Techno'} Corp</h1>
                            <p className="text-xs text-muted-foreground">Technical Interview • L4 Engineer</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-mono font-medium text-foreground">{formatTime(timeLeft)}</span>
                </div>

                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-muted rounded-full transition-colors">
                        <Settings className="w-5 h-5 text-muted-foreground" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-full transition-colors">
                        <Layout className="w-5 h-5 text-muted-foreground" />
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex overflow-hidden">
                {/* Visual Area (Left) */}
                <div className="flex-1 bg-black relative flex flex-col">
                    <div className="flex-1 relative p-4">
                        <VideoPanel isInterviewerSpeaking={isInterviewerSpeaking} />

                        {/* Live Caption/Question Overlay */}
                        <div className="absolute top-8 left-8 right-8 z-10">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-black/60 backdrop-blur-md text-white p-6 rounded-2xl border border-white/10 shadow-2xl max-w-2xl mx-auto"
                            >
                                <h3 className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">Current Question</h3>
                                <p className="text-lg font-medium leading-relaxed">
                                    {interviewQuestions[interviewSession.currentQuestionIndex].text}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Controls */}
                    <div className="h-20 bg-card border-t border-border flex items-center justify-center gap-4 px-6">
                        <button
                            onClick={() => updateInterviewSession({ isMicOn: !interviewSession.isMicOn })}
                            className={cn(
                                "p-4 rounded-full transition-all duration-300",
                                interviewSession.isMicOn ? "bg-muted text-foreground hover:bg-muted/80" : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                            )}
                        >
                            {interviewSession.isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => updateInterviewSession({ isCameraOn: !interviewSession.isCameraOn })}
                            className={cn(
                                "p-4 rounded-full transition-all duration-300",
                                interviewSession.isCameraOn ? "bg-muted text-foreground hover:bg-muted/80" : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                            )}
                        >
                            {interviewSession.isCameraOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={handleEndInterview}
                            className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-red-500/20 flex items-center gap-2"
                        >
                            <PhoneOff className="w-4 h-4" /> End Interview
                        </button>

                        <button
                            onClick={handleNextQuestion}
                            className="absolute right-8 flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                            Next Question <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Sidebar (Right) */}
                <div className="w-96 border-l border-border bg-card flex flex-col">
                    <div className="flex border-b border-border">
                        <button
                            onClick={() => setActiveTab('transcript')}
                            className={cn(
                                "flex-1 py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === 'transcript' ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                            )}
                        >
                            Transcript
                        </button>
                        <button
                            onClick={() => setActiveTab('notes')}
                            className={cn(
                                "flex-1 py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === 'notes' ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                            )}
                        >
                            Notes
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4">
                        {activeTab === 'transcript' ? (
                            <TranscriptBox transcript={interviewSession.transcript} />
                        ) : (
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Take notes here..."
                                className="w-full h-full bg-transparent resize-none focus:outline-none text-sm leading-relaxed"
                            />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
