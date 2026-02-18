'use client';

import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import { Award, TrendingUp, AlertTriangle, CheckCircle2, Share2, Download, ArrowRight, RefreshCcw, ShieldCheck, Zap, Activity, FileText } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import Link from 'next/link';
import { SystemPanel, StatBlock, StatusBadge } from '@/components/ui/SystemUI';
import { cn } from '@/lib/utils';

const COLORS = ['#00e5ff', '#8b5cf6', '#10b981'];

export default function ResultPage() {
    const { progress, selectedCompany, user } = useStore();

    const scoreData = [
        { name: 'INDEX_RESUME', score: progress.resumeScore || 82, hex: '0x52' },
        { name: 'INDEX_OA', score: progress.oaScore || 88, hex: '0x58' },
        { name: 'INDEX_VIVE', score: progress.interviewScore || 92, hex: '0x5C' },
    ];

    const totalScore = Math.floor(scoreData.reduce((acc, curr) => acc + curr.score, 0) / 3);

    const feedback = [
        { type: 'strength', text: 'HIGH_FIDELITY: Excellent technical communication skills captured.' },
        { type: 'strength', text: 'CORE_VALID: Proved expertise in React architecture protocols.' },
        { type: 'improvement', text: 'LATENCY_DETECTED: Optimize algorithmic response speed.' },
        { type: 'improvement', text: 'DATA_GAPS: Quantify past impact with higher precision metrics.' }
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-20 font-mono">
            {/* Header / Meta */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-border/30 pb-6">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-4 bg-primary" />
                        <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Simulation_Final_Report</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tighter uppercase glow-text">Performance_Audit_v4.0</h1>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-tight">Agent: {user?.name || 'UNKNOWN'} // CID: SQ-9912-X</p>
                </div>
                <div className="text-right">
                    <StatusBadge status="COMPLETED" variant="primary" />
                    <p className="text-[10px] text-muted-foreground mt-2 uppercase">Timestamp: {new Date().toISOString()}</p>
                </div>
            </div>

            {/* Core Result HUD */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                    <SystemPanel
                        terminalPrefix="[AUDIT_OVERVIEW]"
                        title="Candidate Compatibility Matrix"
                        subtitle="Detailed analysis of simulation performance parameters."
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                            <div className="flex flex-col items-center justify-center border-r border-border/20 last:border-0">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase mb-2">Aggregate_Score</span>
                                <span className="text-6xl font-black text-primary glow-text tracking-tighter">{totalScore}%</span>
                            </div>
                            <div className="flex flex-col items-center justify-center border-r border-border/20 last:border-0 md:col-span-2 px-8">
                                <div className="w-full space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Hiring_Status</span>
                                        <span className="text-xs font-bold text-green-500 uppercase">Recommended_For_Onboarding</span>
                                    </div>
                                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${totalScore}%` }}
                                            className="h-full bg-primary shadow-[0_0_10px_rgba(0,229,255,0.5)]"
                                        />
                                    </div>
                                    <p className="text-[9px] text-muted-foreground leading-relaxed uppercase">
                                        Candidate exceeds baseline requirements for {selectedCompany?.name || 'GENERIC'}_NODE. Proceed to final handshake.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[200px] w-full mt-4 border-t border-border/20 pt-8">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={scoreData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                    <XAxis dataKey="name" stroke="#525252" fontSize={10} tickLine={false} axisLine={false} />
                                    <YAxis hide />
                                    <Tooltip
                                        cursor={{ fill: 'rgba(0,229,255,0.05)' }}
                                        contentStyle={{ backgroundColor: '#05070d', border: '1px solid #1e293b', borderRadius: '0' }}
                                        itemStyle={{ fontSize: '10px', color: '#00e5ff' }}
                                    />
                                    <Bar dataKey="score" radius={[2, 2, 0, 0]} barSize={40}>
                                        {scoreData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} fillOpacity={0.8} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </SystemPanel>
                </div>

                <div className="lg:col-span-4 space-y-6">
                    <SystemPanel terminalPrefix="[META_DATA]" title="Session_Summary">
                        <div className="space-y-4">
                            {[
                                { label: 'Sim_Context', value: selectedCompany?.name || 'GENERIC' },
                                { label: 'Protocol', value: 'FULL_DIVE_AI' },
                                { label: 'Integrity', value: '99.4%' },
                                { label: 'Security', value: 'AES_GCM' }
                            ].map(item => (
                                <div key={item.label} className="flex justify-between items-center border-b border-border/20 pb-2">
                                    <span className="text-[10px] text-muted-foreground uppercase">{item.label}</span>
                                    <span className="text-[10px] font-bold text-foreground">{item.value?.toUpperCase()}</span>
                                </div>
                            ))}
                        </div>
                    </SystemPanel>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="border border-primary/20 bg-primary/5 p-4 flex flex-col items-center justify-center text-center space-y-2 group cursor-pointer hover:bg-primary/10 transition-colors">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="text-[10px] font-bold text-primary uppercase">Optimize_Profile</span>
                        </div>
                        <div className="border border-border bg-card/40 p-4 flex flex-col items-center justify-center text-center space-y-2 group cursor-pointer hover:bg-muted transition-colors">
                            <Share2 className="w-5 h-5 text-muted-foreground" />
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">Broadcast_Results</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Performance Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SystemPanel terminalPrefix="[SIGNAL_STRENGTH]" title="Structural_Assets">
                    <div className="space-y-4 py-2">
                        {feedback.filter(f => f.type === 'strength').map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-3 bg-green-500/5 border border-green-500/10">
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[10px] font-bold text-green-500 uppercase mb-1">POSITIVE_INDICATOR</h4>
                                    <p className="text-[11px] text-foreground/80 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SystemPanel>

                <SystemPanel terminalPrefix="[MODULATION_NEEDED]" title="Architectural_Faults">
                    <div className="space-y-4 py-2">
                        {feedback.filter(f => f.type === 'improvement').map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-3 bg-orange-500/5 border border-orange-500/10">
                                <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-[10px] font-bold text-orange-500 uppercase mb-1">OPTIMIZATION_POINT</h4>
                                    <p className="text-[11px] text-foreground/80 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </SystemPanel>
            </div>

            {/* Global Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/30">
                <button className="w-full sm:w-auto px-10 py-3 border border-border hover:border-primary/50 text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-3">
                    <Download className="w-4 h-4" /> Export_Data_Bundle
                </button>
                <Link
                    href="/company-selection"
                    className="w-full sm:w-auto px-10 py-3 bg-primary text-background font-bold text-[10px] uppercase tracking-[0.2em] hover:scale-[1.02] transition-all flex items-center gap-3"
                >
                    INITIALIZE_NEW_SIMULATION <RefreshCcw className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
