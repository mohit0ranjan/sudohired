'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Zap } from 'lucide-react';

export const HeroDark = () => {
    return (
        <div className="relative pt-40 pb-32 overflow-hidden bg-black font-mono">
            {/* Pulsing Neural Network Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.15),transparent_70%)] animate-pulse" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-3 text-primary opacity-60">
                                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                                <span className="text-[10px] uppercase font-black tracking-widest leading-none">Kernel: Stable_v2.4</span>
                            </div>

                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.85]">
                                System.Engine(<br />
                                <span className="bg-gradient-to-r from-primary to-fuchsia-400 bg-clip-text text-transparent italic tracking-[-0.05em]">"Hired_Target"</span><br />
                                );
                            </h1>

                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl max-w-xl backdrop-blur-md relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
                                <p className="text-zinc-400 leading-relaxed font-medium">
                                    <span className="text-primary font-black mr-2">root@talent:~$</span>
                                    Deconstruct legacy prep methods. Inject advanced behavioral heuristics. Secure recursive career growth with zero latency.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-10 py-5 bg-primary text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                                    INITIALIZE_BOOTSTRAP
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                                <button className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                                    DEBUG_PIPELINE
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-zinc-950 border border-primary/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative"
                        >
                            <div className="bg-zinc-900/80 backdrop-blur-md px-6 py-4 border-b border-white/5 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50" />
                                </div>
                                <span className="text-[9px] font-black uppercase text-primary/40 tracking-widest">Core_Analyzer_v8</span>
                            </div>
                            <div className="p-10 space-y-6 text-[11px] font-mono leading-relaxed">
                                <div className="flex gap-3">
                                    <span className="text-primary font-black opacity-50">[0.00ms]</span>
                                    <span className="text-zinc-500">Parsing candidate_metadata...</span>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-primary font-black opacity-50">[0.45ms]</span>
                                    <span className="text-zinc-500">Injecting career_optimization_logic...</span>
                                </div>
                                <div className="flex gap-3 items-center bg-primary/5 p-3 rounded-xl border border-primary/10">
                                    <Zap className="w-4 h-4 text-primary animate-pulse" />
                                    <span className="text-white font-bold">STATE: <span className="text-primary animate-pulse tracking-widest uppercase">SYNERGY_OPTIMIZED</span></span>
                                </div>
                                <div className="pt-8 border-t border-white/5 space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] uppercase font-black tracking-widest text-zinc-600">HireabilityIndex</span>
                                        <span className="text-xl font-black text-primary">0.962_ALPHA</span>
                                    </div>
                                    <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '96.2%' }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-primary to-fuchsia-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
