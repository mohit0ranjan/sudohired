'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { Briefcase, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '@/components/ThemeToggle';

export const Navbar = () => {
    const { user } = useStore();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b",
            isScrolled ? "bg-background/80 backdrop-blur-xl py-2 border-white/5" : "bg-transparent py-4 border-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                            <Briefcase className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-2xl font-black tracking-tight">Hire<span className="text-primary italic">Mock</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">Features</Link>
                        <Link href="#" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
                        <Link href="#" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">Resources</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link href="/dashboard" className="text-sm font-bold hover:text-primary transition-colors">
                                    Dashboard
                                </Link>
                                <div className="flex items-center space-x-2 bg-secondary/50 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">
                                    <User className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-bold">{user.name}</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-6">
                                <Link href="/login" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                                    Sign in
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                                >
                                    Start Now
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
