'use client';

import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';
import { Search, Building2, MapPin, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Company } from '@/types';
import { cn } from '@/lib/utils';

const companies: Company[] = [
    { id: '1', name: 'Google', description: 'Realize the world\'s information. Build the future of AI and search.', roles: ['Software Engineer', 'Frontend Developer'], minResumeScore: 85 },
    { id: '2', name: 'Amazon', description: 'Be part of the most customer-centric company on Earth.', roles: ['SDE-1', 'Backend Developer'], minResumeScore: 80 },
    { id: '3', name: 'Meta', description: 'Build technologies that help people connect, find communities, and grow businesses.', roles: ['Product Engineer', 'Fullstack Engineer'], minResumeScore: 82 },
    { id: '4', name: 'Microsoft', description: 'Empower every person and every organization on the planet to achieve more.', roles: ['SDE-2', 'UI Engineer'], minResumeScore: 80 },
];

export default function CompanySelectionPage() {
    const [search, setSearch] = useState('');
    const { setCompany, setStage } = useStore();
    const router = useRouter();

    const handleSelect = (company: Company) => {
        setCompany(company);
        setStage('OA');
        router.push('/assessment');
    };

    const filteredCompanies = companies.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.roles.some(r => r.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="mb-8">
                <h1 className="text-3xl font-heading font-bold mb-2">Target Company</h1>
                <p className="text-muted-foreground">
                    Select a company to start their specific hiring simulation.
                </p>
            </header>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCompanies.map((company, index) => (
                    <motion.div
                        key={company.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all flex flex-col group h-full"
                    >
                        <div className="p-6 flex-1">
                            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                <Building2 className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-foreground">{company.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-3 mb-6 leading-relaxed">
                                {company.description}
                            </p>

                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                    <ShieldCheck className="w-4 h-4 text-green-600" />
                                    <span>Relevance Score: {Math.floor(Math.random() * 20 + 80)}%</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                    <Users className="w-4 h-4" />
                                    <span>{company.roles.length} Active Roles</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-border bg-muted/5 mt-auto">
                            <button
                                onClick={() => handleSelect(company)}
                                className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-sm group-hover:translate-y-0.5"
                            >
                                Start Assessment <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
