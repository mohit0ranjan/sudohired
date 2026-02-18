'use client';

import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import {
    FileText,
    Users,
    ArrowRight,
    TrendingUp,
    Target,
    Activity,
    ShieldCheck,
    Cpu,
    Briefcase,
    Zap,
    CheckCircle2,
    Calendar
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SystemPanel, StatBlock, StatusBadge } from '@/components/ui/SystemUI';

export default function DashboardPage() {
    const { progress, user } = useStore();

    const stats = [
        { label: 'Resume Score', value: progress.resumeScore || 'N/A', icon: <FileText className="w-5 h-5" />, trend: '+4.2%' },
        { label: 'OA Performance', value: progress.oaScore || 'N/A', icon: <Cpu className="w-5 h-5" />, trend: 'Stable' },
        { label: 'Interview Readiness', value: progress.interviewScore || '0%', icon: <Users className="w-5 h-5" />, trend: 'Top 5%' },
        { label: 'Profile Status', value: progress.status === 'COMPLETED' ? 'Verified' : 'Pending', icon: <ShieldCheck className="w-5 h-5" />, trend: ' secure' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header / Welcome Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-heading font-bold tracking-tight text-foreground">
                        Welcome back, {user?.name || 'Candidate'}
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Here's an overview of your interview preparation progress.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground hidden md:inline-block">Last sync: Just now</span>
                    <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                        Start New Session
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <StatBlock {...stat} />
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Progress Section */}
                <div className="lg:col-span-2 space-y-8">
                    <SystemPanel title="Application Pipeline">
                        <div className="relative pt-6 pb-8">
                            {/* Progress Line */}
                            <div className="absolute top-10 left-0 w-full h-1 bg-muted rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all duration-1000"
                                    style={{ width: `${getProgressPercentage(progress.stage)}%` }}
                                />
                            </div>

                            <div className="relative z-10 flex justify-between">
                                {['RESUME', 'SCREENING', 'OA', 'INTERVIEW', 'RESULT'].map((stage, i) => {
                                    const stages = ['RESUME', 'SCREENING', 'OA', 'INTERVIEW', 'RESULT'];
                                    const isCompleted = stages.indexOf(stage) < stages.indexOf(progress.stage);
                                    const isCurrent = progress.stage === stage;

                                    return (
                                        <div key={stage} className="flex flex-col items-center gap-3">
                                            <div className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ring-4 ring-background",
                                                isCompleted ? "bg-primary text-primary-foreground" :
                                                    isCurrent ? "bg-background border-2 border-primary text-primary" :
                                                        "bg-muted text-muted-foreground"
                                            )}>
                                                {isCompleted ? <CheckCircle2 className="w-5 h-5" /> :
                                                    isCurrent ? <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" /> :
                                                        <div className="w-2.5 h-2.5 bg-muted-foreground/30 rounded-full" />
                                                }
                                            </div>
                                            <span className={cn(
                                                "text-xs font-semibold tracking-tight",
                                                isCurrent ? "text-foreground" : "text-muted-foreground"
                                            )}>
                                                {stage}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Link
                                href={getNextStepRoute(progress.stage)}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-all shadow-sm group"
                            >
                                Continue to {getNextStepLabel(progress.stage)}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </SystemPanel>

                    <SystemPanel title="Recommended Companies">
                        <div className="space-y-3">
                            {[
                                { name: 'Google', role: 'L3 Software Engineer', match: 92 },
                                { name: 'Amazon', role: 'SDE I', match: 88 },
                                { name: 'Netflix', role: 'Senior UI Engineer', match: 85 },
                                { name: 'Meta', role: 'E3 Product Engineer', match: 79 },
                            ].map((company, i) => (
                                <div key={company.name} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-muted/30 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center font-bold text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            {company.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-sm text-foreground">{company.name}</h4>
                                            <p className="text-xs text-muted-foreground">{company.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="hidden sm:flex flex-col items-end">
                                            <span className="text-xs font-medium text-foreground">{company.match}% Match</span>
                                            <div className="w-20 h-1.5 bg-muted rounded-full mt-1 overflow-hidden">
                                                <div className="h-full bg-green-500 rounded-full" style={{ width: `${company.match}%` }} />
                                            </div>
                                        </div>
                                        <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SystemPanel>
                </div>

                {/* Sidebar Info Panels */}
                <div className="space-y-6">
                    <SystemPanel title="AI Insights" subtitle="Real-time performance analysis">
                        <div className="space-y-5">
                            {[
                                { icon: <TrendingUp className="w-4 h-4" />, title: "Resume Impact", text: "Add more quantified metrics to your experience section." },
                                { icon: <Target className="w-4 h-4" />, title: "Behavioral Gap", text: "Your response time to 'conflict resolution' questions is high." },
                                { icon: <Activity className="w-4 h-4" />, title: "Technical Strength", text: "Strong performance in Dynamic Programming problems." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SystemPanel>

                    <div className="p-6 rounded-xl bg-gradient-to-br from-primary to-violet-600 text-white shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold">Live Mock Session</h3>
                        </div>
                        <p className="text-sm text-blue-50 mb-6 opacity-90 leading-relaxed">
                            Upgrade to Pro to schedule 1:1 live mock interviews with Senior Engineers from FAANG.
                        </p>
                        <button className="w-full py-2.5 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors text-sm shadow-sm">
                            Schedule Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getProgressPercentage(stage: string) {
    const stages = ['RESUME', 'SCREENING', 'OA', 'INTERVIEW', 'RESULT'];
    const index = stages.indexOf(stage);
    return index === -1 ? 0 : (index / (stages.length - 1)) * 100;
}

function getNextStepRoute(stage: string) {
    switch (stage) {
        case 'RESUME': return '/resume-upload';
        case 'SCREENING': return '/company-selection';
        case 'OA': return '/assessment';
        case 'INTERVIEW': return '/interview';
        case 'RESULT': return '/result';
        default: return '/dashboard';
    }
}

function getNextStepLabel(stage: string) {
    switch (stage) {
        case 'RESUME': return 'Resume Upload';
        case 'SCREENING': return 'Company Selection';
        case 'OA': return 'Assessment';
        case 'INTERVIEW': return 'Interview';
        case 'RESULT': return 'Final Result';
        default: return 'Next Step';
    }
}
