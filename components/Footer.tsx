'use client';

import React from 'react';
import Link from 'next/link';
import { Briefcase, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-black tracking-tight text-foreground">Hire<span className="text-primary italic">Mock</span></span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            The professional standard for AI-driven interview preparation. Trusted by ambitious candidates globally.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="p-2 bg-secondary/50 rounded-lg hover:text-primary transition-colors border border-white/5"><Twitter className="w-4 h-4" /></Link>
                            <Link href="#" className="p-2 bg-secondary/50 rounded-lg hover:text-primary transition-colors border border-white/5"><Github className="w-4 h-4" /></Link>
                            <Link href="#" className="p-2 bg-secondary/50 rounded-lg hover:text-primary transition-colors border border-white/5"><Linkedin className="w-4 h-4" /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Community</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-foreground mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-[11px] font-bold text-muted-foreground/40 uppercase tracking-widest">
                    <p>© 2026 HireMock Platforms Inc. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span>GDPR Compliant</span>
                        <span>SOC2 Type II</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
