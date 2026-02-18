'use client';

import { Navbar } from '@/components/Navbar';
import { useStore } from '@/store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Send, ChevronRight, ChevronLeft, Code, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const questions = [
    {
        id: '1',
        type: 'MCQ',
        question: 'What is the time complexity of searching an element in a balanced Binary Search Tree?',
        options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
        correct: 1,
    },
    {
        id: '2',
        type: 'MCQ',
        question: 'Which of the following is not a React Hook?',
        options: ['useState', 'useEffect', 'useContext', 'useService'],
        correct: 3,
    },
    {
        id: '3',
        type: 'CODING',
        question: 'Write a function `isPalindrome(str)` that returns true if the given string is a palindrome.',
        language: 'javascript',
        initialCode: 'function isPalindrome(str) {\n  // Your code here\n}',
    }
];

export default function AssessmentPage() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
    const { updateProgress, setStage } = useStore();
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const handleNext = () => {
        if (currentIdx < questions.length - 1) {
            setCurrentIdx(currentIdx + 1);
        }
    };

    const handlePrev = () => {
        if (currentIdx > 0) {
            setCurrentIdx(currentIdx - 1);
        }
    };

    const handleSubmit = () => {
        updateProgress({ oaScore: 88 });
        setStage('INTERVIEW');
        toast.success('Assessment submitted successfully!');
        router.push('/dashboard');
    };

    const currentQuestion = questions[currentIdx];

    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Question Area */}
                    <div className="flex-1 space-y-6">
                        <div className="glass p-8 rounded-3xl border min-h-[500px] flex flex-col">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-sm font-bold text-primary tracking-widest uppercase">
                                    Question {currentIdx + 1} of {questions.length}
                                </span>
                                <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-xl border">
                                    <Timer className="w-4 h-4 text-primary" />
                                    <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIdx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex-1"
                                >
                                    <h2 className="text-2xl font-bold mb-8">{currentQuestion.question}</h2>

                                    {currentQuestion.type === 'MCQ' ? (
                                        <div className="space-y-4">
                                            {currentQuestion.options?.map((option, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setAnswers({ ...answers, [currentQuestion.id]: idx })}
                                                    className={`w-full p-4 rounded-xl border text-left transition-all ${answers[currentQuestion.id] === idx
                                                            ? 'bg-primary/10 border-primary text-primary font-bold'
                                                            : 'hover:bg-secondary border-transparent'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${answers[currentQuestion.id] === idx ? 'bg-primary border-primary text-white' : 'bg-background'
                                                            }`}>
                                                            {String.fromCharCode(65 + idx)}
                                                        </div>
                                                        {option}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="bg-zinc-950 rounded-xl p-4 border border-white/10 font-mono text-sm">
                                                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                                                    <Code className="w-4 h-4 text-primary" />
                                                    <span className="text-zinc-400">solution.js</span>
                                                </div>
                                                <textarea
                                                    className="w-full bg-transparent outline-none text-zinc-300 min-h-[300px] resize-none"
                                                    spellCheck={false}
                                                    value={answers[currentQuestion.id] || currentQuestion.initialCode}
                                                    onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex justify-between items-center mt-12 pt-8 border-t">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentIdx === 0}
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold hover:bg-secondary disabled:opacity-0 transition-all"
                                >
                                    <ChevronLeft className="w-4 h-4" /> Previous
                                </button>

                                {currentIdx === questions.length - 1 ? (
                                    <button
                                        onClick={handleSubmit}
                                        className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
                                    >
                                        Submit Assessment <CheckCircle className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleNext}
                                        className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg"
                                    >
                                        Next Question <ChevronRight className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Map */}
                    <div className="w-full lg:w-72 space-y-6">
                        <div className="glass p-6 rounded-3xl border">
                            <h3 className="font-bold mb-4">Question Map</h3>
                            <div className="grid grid-cols-4 gap-2">
                                {questions.map((q, idx) => (
                                    <button
                                        key={q.id}
                                        onClick={() => setCurrentIdx(idx)}
                                        className={`h-10 rounded-lg border font-bold text-sm transition-all ${idx === currentIdx ? 'bg-primary border-primary text-white' :
                                                answers[q.id] !== undefined ? 'bg-green-500/10 border-green-500/20 text-green-500' :
                                                    'bg-secondary hover:border-muted-foreground'
                                            }`}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="glass p-6 rounded-3xl border border-yellow-500/20 bg-yellow-500/5">
                            <h3 className="font-bold mb-2 flex items-center gap-2 text-yellow-500">
                                <Send className="w-4 h-4" /> Ethics Reminder
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Please ensure you are alone in a quiet room. Screen sharing or switching tabs may lead to automatic disqualification.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
