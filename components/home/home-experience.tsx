'use client';

import { useCallback, useRef, useState, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ArchIntro } from '@/components/arch-intro';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroCarousel } from './hero-carousel';
import { useReveal } from '@/hooks/use-reveal';

export function HomeExperience({ children }: { children: ReactNode }) {
  const [introActive, setIntroActive] = useState(true);
  const finishIntro = useCallback(() => setIntroActive(false), []);
  const mainRef = useRef<HTMLElement>(null);
  useReveal(mainRef);
  return (
    <div id="top" className={introActive ? 'intro-active' : 'intro-complete'}>
      {introActive && <ArchIntro onComplete={finishIntro} />}
      {introActive && (
        <button className="intro-skip" onClick={finishIntro}>
          Skip intro <ArrowUpRight size={16} />
        </button>
      )}
      <a className="skip-link" href="#discover">
        Skip to content
      </a>
      <SiteHeader home />
      <main ref={mainRef}>
        <HeroCarousel introActive={introActive} />
        {children}
      </main>
      <SiteFooter home />
    </div>
  );
}
