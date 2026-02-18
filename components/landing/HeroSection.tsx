'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, ChevronRight, Zap, Target, Activity } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
            </div>

            <div className="container-width grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6 animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        New: Resume Analysis Engine v2.0
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground mb-6 leading-[1.15]">
                        Master your next <br />
                        <span className="text-gradient">Technical Interview</span>
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                        The all-in-one platform to practice, analyze, and perfect your coding interview skills.
                        Simulate real-world scenarios with AI-driven feedback.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/register"
                            className="btn-primary h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40"
                        >
                            Start Practicing Free <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                            href="#demo"
                            className="btn-secondary h-12 px-8 text-base group"
                        >
                            <Play className="mr-2 w-4 h-4 fill-current text-muted-foreground group-hover:text-foreground transition-colors" /> View Demo
                        </Link>
                    </div>

                    <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-background bg-zinc-${i * 100 + 200}`} />
                            ))}
                        </div>
                        <p>Trusted by 10,000+ developers</p>
                    </div>
                </motion.div>

                {/* Right Content: Clean Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:ml-auto w-full max-w-xl"
                >
                    <div className="relative rounded-xl border border-border bg-card shadow-2xl overflow-hidden group hover:shadow-primary/5 transition-all duration-500">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-muted/30">
                            <div className="flex space-x-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-[10px] font-medium text-muted-foreground font-mono bg-background/50 px-2 py-0.5 rounded border border-border">
                                dashboard.tsx
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 bg-background space-y-6">
                            {/* Stats Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="p-1.5 bg-blue-500/10 rounded text-blue-500">
                                            <Activity className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs text-muted-foreground">This Week</span>
                                    </div>
                                    <div className="text-2xl font-bold text-foreground">12</div>
                                    <div className="text-xs text-muted-foreground mt-1">Interviews Completed</div>
                                </div>
                                <div className="p-4 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="p-1.5 bg-green-500/10 rounded text-green-500">
                                            <Target className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs text-green-500 font-medium">+14%</span>
                                    </div>
                                    <div className="text-2xl font-bold text-foreground">92%</div>
                                    <div className="text-xs text-muted-foreground mt-1">Average Score</div>
                                </div>
                            </div>

                            {/* Chart Placeholder */}
                            <div className="h-32 rounded-lg border border-border bg-muted/10 relative overflow-hidden flex items-end justify-between px-4 pb-0 pt-8 gap-2">
                                {[40, 70, 45, 90, 65, 85, 55, 95].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.05 }}
                                        className="w-full bg-primary/20 rounded-t-sm hover:bg-primary/40 transition-colors"
                                    />
                                ))}
                            </div>

                            {/* Recent Activity List */}
                            <div className="space-y-3">
                                {[
                                    { name: "Algorithm Analysis", time: "2m ago", status: "Completed" },
                                    { name: "System Design Mock", time: "4h ago", status: "In Progress" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0 hover:bg-muted/30 -mx-2 px-2 rounded cursor-pointer transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                            <div>
                                                <div className="text-sm font-medium text-foreground">{item.name}</div>
                                                <div className="text-[10px] text-muted-foreground">{item.time}</div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                                            {item.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute top-20 -right-6 bg-card border border-border p-3 rounded-lg shadow-xl flex items-center gap-3 animate-float hidden sm:flex">
                            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground">Optimization</div>
                                <div className="text-sm font-bold">Excellent</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
