'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FileText, Code2, BrainCircuit, BarChart3, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
    { id: 'resume', title: 'Resume Scan', icon: FileText, desc: 'ATS optimization engine' },
    { id: 'oa', title: 'Skill Audit', icon: Code2, desc: 'Technical assessment' },
    { id: 'interview', title: 'AI Interview', icon: BrainCircuit, desc: 'Real-time simulation' },
    { id: 'result', title: 'Insights', icon: BarChart3, desc: 'Performance analytics' },
];

export const PipelineSection = () => {
    const { resolvedTheme } = useTheme();

    return (
        <section className={cn(
            "py-32 relative overflow-hidden",
            resolvedTheme === 'dark' ? "bg-black" : "bg-slate-50"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <h2 className={cn(
                        "text-4xl font-black mb-4 uppercase italic",
                        resolvedTheme === 'dark' ? "text-primary tracking-widest" : "text-slate-900"
                    )}>
                        {resolvedTheme === 'dark' ? '> EXEC PIPELINE_INIT' : 'The Hiring Pipeline'}
                    </h2>
                    <p className="text-muted-foreground font-medium">
                        {resolvedTheme === 'dark' ? 'Running full diagnostic on your career trajectory...' : 'A seamless, data-driven journey designed to maximize your hireability.'}
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
                    {/* Horizontal Line for Light Mode */}
                    {resolvedTheme !== 'dark' && (
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10" />
                    )}

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center group"
                        >
                            <div className={cn(
                                "w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 relative z-10",
                                resolvedTheme === 'dark'
                                    ? "bg-zinc-950 border border-primary/20 text-primary shadow-2xl shadow-primary/5 group-hover:border-primary"
                                    : "bg-white border shadow-xl text-primary group-hover:border-primary/50 shadow-primary/5"
                            )}>
                                <step.icon className="w-8 h-8" />
                                <div className={cn(
                                    "absolute -bottom-1 -right-1 w-6 h-6 text-[10px] font-black flex items-center justify-center rounded-lg shadow-lg",
                                    resolvedTheme === 'dark' ? "bg-primary text-black" : "bg-black text-white"
                                )}>
                                    {i + 1}
                                </div>
                            </div>
                            <div className="mt-8 text-center space-y-2">
                                <h4 className={cn(
                                    "font-black uppercase tracking-tight",
                                    resolvedTheme === 'dark' ? "text-white text-xs" : "text-slate-900"
                                )}>
                                    {step.title}
                                </h4>
                                <p className="text-[10px] text-muted-foreground opacity-60 max-w-[120px]">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
