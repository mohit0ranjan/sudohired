'use client';

import { motion } from 'framer-motion';

export function StatsSection() {
    const stats = [
        { value: '10K+', label: 'Interviews Conducted' },
        { value: '94%', label: 'Offer Rate' },
        { value: '1.2M', label: 'Lines of Code' },
        { value: '24/7', label: 'AI Availability' },
    ];

    return (
        <section className="py-24 border-y border-border bg-background">
            <div className="container-width">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-violet-500 mb-2"
                            >
                                {stat.value}
                            </motion.span>
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function MarqueeSection() {
    return (
        <div className="py-12 border-b border-border bg-muted/20 overflow-hidden">
            <div className="container-width text-center mb-8">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Developers hired by top companies
                </p>
            </div>
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee flex whitespace-nowrap gap-16 items-center">
                    {/* Repeated logos for seamless loop */}
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 items-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            <span className="text-xl font-black font-heading">GOOGLE</span>
                            <span className="text-xl font-black font-heading">AMAZON</span>
                            <span className="text-xl font-black font-heading">NETFLIX</span>
                            <span className="text-xl font-black font-heading">META</span>
                            <span className="text-xl font-black font-heading">MICROSOFT</span>
                            <span className="text-xl font-black font-heading">UBER</span>
                            <span className="text-xl font-black font-heading">STRIPE</span>
                            <span className="text-xl font-black font-heading">AIRBNB</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
