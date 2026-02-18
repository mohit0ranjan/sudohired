'use client';

import React from 'react';
import { HelpCircle, Clock, Lightbulb } from 'lucide-react';

interface QuestionPanelProps {
    question: string;
    index: number;
    total: number;
    subtext?: string;
}

export const QuestionPanel = ({ question, index, total, subtext }: QuestionPanelProps) => {
    return (
        <div className="flex flex-col h-full bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-muted/30 flex items-center justify-between">
                <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Question {index + 1} of {total}
                    </span>
                </div>
                <div className="flex items-center gap-1.5">
                    {[...Array(total)].map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-primary scale-110' : i < index ? 'bg-primary/40' : 'bg-muted-foreground/20'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="p-6 space-y-6 flex-1 overflow-y-auto">
                <div>
                    <h2 className="text-xl font-heading font-semibold text-foreground leading-relaxed">
                        {question}
                    </h2>

                    {subtext && (
                        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/10 flex gap-3">
                            <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-primary mb-1">Hint</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {subtext}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Est. Time: 5-8 min</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <HelpCircle className="w-4 h-4" />
                        <span>System Design</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
