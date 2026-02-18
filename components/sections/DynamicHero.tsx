'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HeroLight } from './HeroLight';
import { HeroDark } from './HeroDark';

export const DynamicHero = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-screen bg-background" />;

    return resolvedTheme === 'dark' ? <HeroDark /> : <HeroLight />;
};
