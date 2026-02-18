'use client';

import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { StatsSection, MarqueeSection } from '@/components/landing/StatsSection';
import { Footer } from '@/components/landing/Footer';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`min-h-screen font-sans antialiased text-foreground bg-background ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />

      <main className="relative flex flex-col items-center justify-center w-full">
        <HeroSection />
        <MarqueeSection />
        <FeaturesSection />
        <StatsSection />

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shine opacity-30" />
          <div className="container-width relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">Ready to ace your interview?</h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have landed their dream jobs using our platform.
            </p>
            <button className="bg-background text-primary font-bold py-4 px-8 rounded-lg shadow-2xl hover:bg-background/90 transition-transform hover:scale-105 active:scale-95">
              Get Started for Free
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
