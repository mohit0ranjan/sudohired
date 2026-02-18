'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    FileText,
    Database,
    Video,
    BarChart3,
    Settings,
    Command,
    Search,
    Cpu,
    User,
    LogOut,
    Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/landing/ThemeToggle';

const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Resume', icon: FileText, href: '/resume-upload' },
    { label: 'Mock Drives', icon: Database, href: '/company-selection' },
    { label: 'Practice', icon: Video, href: '/interview' },
    { label: 'Analytics', icon: BarChart3, href: '/result' },
];

export function Shell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isInterview = pathname.startsWith('/interview');
    const isLanding = pathname === '/';

    // Landing page gets its own layout
    if (isLanding) {
        return (
            <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
                {children}
            </div>
        );
    }

    // Interview page gets full screen mode but with SaaS styling
    if (isInterview) {
        return (
            <div className="h-screen w-full bg-background relative font-sans overflow-hidden">
                {children}
            </div>
        )
    }

    return (
        <div className="flex h-screen bg-muted/5 font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-card flex flex-col z-20 shadow-sm">
                {/* Logo Section */}
                <div className="h-16 px-6 border-b border-border flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
                        <Cpu className="w-5 h-5" />
                    </div>
                    <span className="font-heading font-bold text-lg tracking-tight">
                        Mock<span className="text-primary">Hire</span>
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm font-medium",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile */}
                <div className="p-4 border-t border-border">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-border">
                            <User className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-medium truncate">Mohit Sudo</p>
                            <p className="text-xs text-muted-foreground truncate">mohit@sudo.hired</p>
                        </div>
                        <Settings className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </aside>

            {/* Main Content Areas */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative bg-muted/5">
                {/* Top Header */}
                <header className="h-16 border-b border-border bg-card/80 backdrop-blur-sm flex items-center justify-between px-8 z-10 sticky top-0">
                    <div className="flex items-center gap-4 w-96">
                        <div className="relative w-full group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-muted/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                                <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                    <span className="text-xs">⌘</span>K
                                </kbd>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button className="relative p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border-2 border-background" />
                        </button>
                    </div>
                </header>

                {/* Dynamic Content */}
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="container-width max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
