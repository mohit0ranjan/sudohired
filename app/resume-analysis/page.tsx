'use client';

import { Navbar } from '@/components/Navbar';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Briefcase, GraduationCap, Code } from 'lucide-react';
import Link from 'next/link';

export default function ResumeAnalysisPage() {
    const { resumeData } = useStore();

    if (!resumeData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>No analysis data found. Please upload your resume first.</p>
            </div>
        );
    }

    const analysis = {
        score: 82,
        strengths: ['Modern Tech Stack', 'Strong React knowledge', 'Good Project experience'],
        improvements: ['Quantify achievements more', 'Add more cloud technologies', 'Mention unit testing'],
    };

    return (
        <main className="min-h-screen bg-background pt-24">
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 p-8 glass rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-4">Analysis Result</h1>
                        <p className="text-muted-foreground text-lg mb-6">
                            Great job! Your resume is looking strong. We&apos;ve identified your key skill sets and areas for improvement.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-green-500/10 text-green-500 rounded-full border border-green-500/20 text-sm font-medium flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Recommended for Frontend Roles
                            </span>
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm font-medium flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" /> Strong Growth Potential
                            </span>
                        </div>
                    </div>

                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="96" cy="96" r="80"
                                fill="none" stroke="currentColor" strokeWidth="12"
                                className="text-secondary"
                            />
                            <circle
                                cx="96" cy="96" r="80"
                                fill="none" stroke="currentColor" strokeWidth="12"
                                strokeDasharray={2 * Math.PI * 80}
                                strokeDashoffset={2 * Math.PI * 80 * (1 - analysis.score / 100)}
                                className="text-primary transition-all duration-1000 ease-out animate-glow"
                            />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-4xl font-black">{analysis.score}</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Score</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Parsed Data */}
                    <section className="glass p-8 rounded-3xl border space-y-8">
                        <h2 className="text-2xl font-bold border-b pb-4">Parsed Details</h2>

                        <div className="flex gap-4">
                            <Code className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-2">Technical Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {resumeData.skills.map((skill: string) => (
                                        <span key={skill} className="px-3 py-1 bg-secondary rounded-lg text-sm">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Briefcase className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">Experience</h3>
                                <p className="text-muted-foreground">{resumeData.experience}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <GraduationCap className="w-6 h-6 text-primary shrink-0" />
                            <div>
                                <h3 className="font-semibold mb-1">Education</h3>
                                <p className="text-muted-foreground">{resumeData.education}</p>
                            </div>
                        </div>
                    </section>

                    {/* AI Insights */}
                    <section className="glass p-8 rounded-3xl border space-y-8">
                        <h2 className="text-2xl font-bold border-b pb-4">AI Insights</h2>

                        <div>
                            <h3 className="font-semibold mb-4 text-green-500">Key Strengths</h3>
                            <ul className="space-y-3">
                                {analysis.strengths.map((s) => (
                                    <li key={s} className="flex items-center gap-3 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" /> {s}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4 text-yellow-500">Suggested Improvements</h3>
                            <ul className="space-y-3">
                                {analysis.improvements.map((i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" /> {i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="flex justify-center mb-20">
                    <Link
                        href="/company-selection"
                        className="px-12 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                    >
                        Select Target Company
                    </Link>
                </div>
            </div>
        </main>
    );
}
