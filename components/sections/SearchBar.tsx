'use client';

import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = () => {
    return (
        <div className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-200 group focus-within:border-blue-500 transition-all shadow-sm">
            <Search className="w-4 h-4 text-slate-400 group-focus-within:text-blue-500 font-bold" />
            <input
                type="text"
                placeholder="Search opportunities..."
                className="bg-transparent border-none outline-none text-sm text-slate-600 placeholder:text-slate-400 w-full font-bold"
            />
        </div>
    );
};
