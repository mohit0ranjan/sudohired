'use client';

import { motion } from 'framer-motion';
import { FileCode, Database, Terminal, BarChart2 } from 'lucide-react';

const features = [
    {
        title: 'Resume Parsing',
        desc: 'Advanced PDF analysis against job descriptions.',
        icon: FileCode,
        color: 'bg-blue-500/10 text-blue-500',
    },
    {
        title: 'Mock Interviews',
        desc: 'Real-time simulations with AI personas.',
        icon: Terminal,
        color: 'bg-green-500/10 text-green-500',
    },
    {
        title: 'System Design',
        desc: 'Scalable architecture challenges.',
        icon: Database,
        color: 'bg-purple-500/10 text-purple-500',
    },
    {
        title: 'Analytics Engine',
        desc: 'Detailed performance metrics and growth.',
        icon: BarChart2,
        color: 'bg-orange-500/10 text-orange-500',
    },
];

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-muted/30">
            <div className="container-width">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold tracking-tight mb-4">
                        Everything you need to succeed
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Our platform covers every aspect of the technical interview process, from initial screening to final negotiation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <div
                            key={feature.title}
                            className="group p-6 rounded-2xl bg-card border border-border transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/20"
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
