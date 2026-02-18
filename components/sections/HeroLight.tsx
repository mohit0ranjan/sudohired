'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HeroLight = () => {
    return (
        <div className="relative pt-40 pb-32 overflow-hidden bg-white">
            {/* Ambient Animated Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -z-10 animate-pulse duration-[8s]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-100/50 blur-[130px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 mb-8 text-primary font-bold text-[10px] uppercase tracking-[0.2em]">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                                Next-Gen Talent Engine
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-slate-950">
                                Land Your <br />
                                Dream Job <br />
                                <span className="bg-gradient-to-r from-primary via-fuchsia-600 to-primary bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent italic">With Precision.</span>
                            </h1>
                            <p className="max-w-xl text-lg text-slate-500 leading-relaxed mb-10 font-medium">
                                The professional standard for high-stakes tech preparation. Leverage neural AI evaluations to master every stage of the hiring pipeline.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link
                                    href="/register"
                                    className="w-full sm:w-auto px-10 py-5 bg-gradient-to-tr from-primary to-fuchsia-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/30 group"
                                >
                                    INITIALIZE SESSION
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-2xl border-2 border-white bg-slate-100 shadow-sm" />)}
                                    </div>
                                    <span className="max-w-[100px] leading-tight">Join the elite network</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/80 backdrop-blur-xl rounded-[3rem] border border-slate-200/50 shadow-[0_32px_64px_-16px_rgba(200,100,255,0.15)] p-10 relative z-10"
                        >
                            <div className="flex items-center gap-2 mb-10">
                                <div className="w-3 h-3 rounded-full bg-primary/20" />
                                <div className="w-3 h-3 rounded-full bg-primary/20" />
                                <div className="w-3 h-3 rounded-full bg-primary/20" />
                            </div>
                            <div className="space-y-8">
                                <div className="h-48 bg-slate-50/50 rounded-3xl border border-slate-100 p-8 flex items-end gap-3 group">
                                    {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            className="flex-1 bg-gradient-to-t from-primary/10 to-primary/40 rounded-t-xl transition-all"
                                        />
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="h-24 bg-slate-50/50 rounded-3xl border border-slate-100 flex items-center justify-center">
                                        <div className="w-1/2 h-2 bg-slate-200 rounded-full" />
                                    </div>
                                    <div className="h-24 bg-slate-50/50 rounded-3xl border border-slate-100 flex items-center justify-center">
                                        <div className="w-1/3 h-2 bg-slate-200 rounded-full" />
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-12 -right-8 bg-white p-6 rounded-[2rem] border shadow-2xl flex items-center gap-4 z-20"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shadow-inner">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 leading-none mb-1">Score Matrix</p>
                                    <p className="text-xl font-black text-slate-950">92.4%</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Decorative Blur Ornament */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-fuchsia-400/20 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};
