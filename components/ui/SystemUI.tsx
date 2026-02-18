'use client';

import React from 'react';
import { cn } from '@/lib/utils';

// Keeping name 'SystemPanel' for compatibility, but redesigning it as a Modern Card
export function SystemPanel({ title, subtitle, children, className }: {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    terminalPrefix?: string; // Legacy prop, ignored in new design
}) {
    return (
        <div className={cn("bg-card border border-border shadow-sm rounded-xl overflow-hidden transition-all hover:shadow-md", className)}>
            {(title) && (
                <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                    <div>
                        <h3 className="font-heading font-semibold text-foreground text-sm tracking-tight">{title}</h3>
                        {subtitle && <p className="text-muted-foreground text-xs mt-0.5">{subtitle}</p>}
                    </div>
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
}

export function StatBlock({ label, value, icon, trend, className }: {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    trend?: string;
    className?: string;
}) {
    return (
        <div className={cn("p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all group", className)}>
            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">{label}</span>
                {icon && <div className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</div>}
            </div>
            <div className="flex items-end justify-between">
                <div className="text-3xl font-heading font-bold text-foreground tracking-tight">
                    {value}
                </div>
                {trend && (
                    <div className={cn(
                        "text-xs font-semibold px-2 py-1 rounded-full",
                        trend.startsWith('+') ? "bg-green-500/10 text-green-600" : "bg-red-500/10 text-red-600"
                    )}>
                        {trend}
                    </div>
                )}
            </div>
        </div>
    );
}

export function StatusBadge({ status, variant = 'primary' }: { status: string, variant?: 'primary' | 'success' | 'warning' | 'error' }) {
    const variants = {
        primary: 'bg-primary/10 text-primary border-primary/20',
        success: 'bg-green-500/10 text-green-600 border-green-500/20',
        warning: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
        error: 'bg-red-500/10 text-red-600 border-red-500/20',
    };

    return (
        <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", variants[variant])}>
            {status}
        </span>
    );
}
