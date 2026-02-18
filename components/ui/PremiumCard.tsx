'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

interface PremiumCardProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
}

export const PremiumCard = ({ children, className, animate = true }: PremiumCardProps) => {
    const { resolvedTheme } = useTheme();

    const Comp = animate ? motion.div : 'div';

    return (
        <Comp
            whileHover={animate ? { y: -5 } : undefined}
            className={cn(
                "rounded-[2.5rem] p-8 border transition-all duration-300 relative overflow-hidden",
                resolvedTheme === 'dark'
                    ? "bg-zinc-950 border-white/5 hover:border-primary/50 shadow-2xl shadow-primary/5"
                    : "bg-white border-slate-200 shadow-xl hover:shadow-2xl hover:border-primary/50 shadow-primary/5",
                className
            )}
        >
            {resolvedTheme === 'dark' && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 rounded-full" />
            )}
            {children}
        </Comp>
    );
};
