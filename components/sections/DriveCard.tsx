'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { MapPin, Calendar, ArrowUpRight, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DriveCardProps {
    company: string;
    role: string;
    location: string;
    applicants: number;
    status: 'LIVE' | 'UPCOMING' | 'CLOSED';
}

export const DriveCard = ({ company, role, location, applicants, status }: DriveCardProps) => {
    const { resolvedTheme } = useTheme();

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "p-6 rounded-3xl border transition-all duration-300 group relative overflow-hidden",
                resolvedTheme === 'dark'
                    ? "bg-zinc-950 border-white/5 hover:border-primary/50"
                    : "bg-white border-slate-200 shadow-lg hover:shadow-xl hover:border-blue-500/50"
            )}
        >
            <div className="flex justify-between items-start mb-6">
                <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl",
                    resolvedTheme === 'dark' ? "bg-primary/20 text-primary border border-primary/20" : "bg-primary/5 text-primary border border-primary/10"
                )}>
                    {company[0]}
                </div>
                <div className={cn(
                    "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                    status === 'LIVE' ? "bg-red-500/10 border-red-500/50 text-red-500 animate-pulse" :
                        status === 'UPCOMING' ? "bg-yellow-500/10 border-yellow-500/50 text-yellow-500" :
                            "bg-zinc-500/10 border-zinc-500/50 text-zinc-500"
                )}>
                    {status}
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className={cn("text-lg font-black tracking-tight", resolvedTheme === 'dark' ? "text-white" : "text-slate-900")}>
                        {role}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{company}</p>
                </div>

                <div className="flex flex-wrap gap-4 text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {location}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {applicants} Applied
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
                <button className={cn(
                    "text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all",
                    resolvedTheme === 'dark' ? "text-primary hover:gap-3" : "text-primary hover:gap-3"
                )}>
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>

            {/* Decorative background for dark mode */}
            {resolvedTheme === 'dark' && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl -z-10 rounded-full" />
            )}
        </motion.div>
    );
};
