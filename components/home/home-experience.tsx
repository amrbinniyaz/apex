'use client';

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ArchIntro } from '@/components/arch-intro';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroCarousel } from './hero-carousel';
import { useReveal } from '@/hooks/use-reveal';

const INTRO_SEEN_KEY = 'apex-intro-seen';

export function HomeExperience({ children }: { children: ReactNode }) {
  // Start without an overlay so returning visitors never see an intro flash.
  const [introActive, setIntroActive] = useState(false);
  const introChecked = useRef(false);
  useLayoutEffect(() => {
    if (introChecked.current) return;
    introChecked.current = true;
    try {
      if (window.localStorage.getItem(INTRO_SEEN_KEY)) return;
      // Remember immediately, including when someone skips or reloads mid-intro.
      window.localStorage.setItem(INTRO_SEEN_KEY, '1');
    } catch {
      // If storage is unavailable, keep the page accessible without an intro.
      return;
    }
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.location.hash ||
      window.scrollY > 80
    )
      return;
    // Resolve the browser-only visit check before paint to avoid a delayed overlay.
    // oxlint-disable-next-line react/react-compiler
    setIntroActive(true);
  }, []);
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
