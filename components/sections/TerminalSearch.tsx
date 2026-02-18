'use client';

import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export const TerminalSearch = () => {
    return (
        <div className="flex items-center gap-3 bg-zinc-950 px-4 py-3 rounded-xl border border-primary/20 group shadow-2xl shadow-primary/5">
            <TerminalIcon className="w-4 h-4 text-primary" />
            <input
                type="text"
                placeholder="grep company_name..."
                className="bg-transparent border-none outline-none text-xs text-primary font-mono placeholder:text-primary/30 w-full"
            />
            <span className="text-[10px] text-primary/40 font-mono animate-pulse">_</span>
        </div>
    );
};
