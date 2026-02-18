'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Zap, ShieldCheck, Cpu, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FeaturesSection = () => {
    const { resolvedTheme } = useTheme();

    return (
        <section id="features" className={cn(
            "py-32 border-t border-white/5",
            resolvedTheme === 'dark' ? "bg-black" : "bg-slate-50"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:row items-center justify-between mb-24 gap-8">
                    <div className="space-y-4">
                        <h2 className={cn(
                            "text-4xl md:text-5xl font-black tracking-tight uppercase",
                            resolvedTheme === 'dark' ? "text-white italic" : "text-slate-900"
                        )}>
                            {resolvedTheme === 'dark' ? '> CORE_MODULES' : 'High Performance Preparation'}
                        </h2>
                        <p className="text-muted-foreground font-medium max-w-lg">
                            Every tool you need to outperform the competition, built with enterprise standards.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={<ShieldCheck className="w-8 h-8" />}
                        title="Resume Intel"
                        desc="ATS-optimized keyword matching engine."
                    />
                    <FeatureCard
                        icon={<Zap className="w-8 h-8" />}
                        title="Skill Audits"
                        desc="Coding challenges with 12+ language support."
                    />
                    <FeatureCard
                        icon={<Cpu className="w-8 h-8" />}
                        title="AI Simulations"
                        desc="Real-time voice-driven mock interviews."
                    />
                    <FeatureCard
                        icon={<Users className="w-8 h-8" />}
                        title="Live Feedback"
                        desc="Drill-down analytics on your performance."
                    />
                </div>
            </div>
        </section>
    );
};

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string, desc: string }) {
    const { resolvedTheme } = useTheme();

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "p-10 rounded-[2.5rem] border transition-all duration-300 group selection:bg-primary/20 relative overflow-hidden",
                resolvedTheme === 'dark'
                    ? "bg-zinc-950 border-white/5 hover:border-primary/50"
                    : "bg-white border-slate-200 shadow-xl hover:shadow-2xl hover:border-primary/30 text-slate-900"
            )}
        >
            <div className={cn(
                "mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-10",
                resolvedTheme === 'dark'
                    ? "bg-zinc-900 text-primary group-hover:bg-primary/10"
                    : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
            )}>
                {icon}
            </div>
            <h3 className={cn("text-xl font-black uppercase tracking-tight mb-4 relative z-10", resolvedTheme === 'dark' ? "text-white" : "text-slate-900")}>
                {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium relative z-10">
                {desc}
            </p>
            {resolvedTheme === 'dark' && (
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/5 blur-2xl rounded-full" />
            )}
        </motion.div>
    );
}
