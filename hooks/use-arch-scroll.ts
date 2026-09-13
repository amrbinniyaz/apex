'use client';

import { useEffect, type RefObject } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';

export function useArchScroll(sectionRef: RefObject<HTMLElement | null>) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', true);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;
    let frame = 0;
    let progress = 0;
    let lastTime = 0;
    const update = (time: number) => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const target = Math.min(
        1,
        Math.max(
          0,
          -bounds.top / Math.max(1, bounds.height - window.innerHeight),
        ),
      );
      const elapsed = lastTime ? Math.min(64, time - lastTime) : 16;
      lastTime = time;
      progress += (target - progress) * (1 - Math.exp(-elapsed / 180));
      if (Math.abs(target - progress) < 0.0001) progress = target;
      const reveal = Math.min(1, progress * 1.02);
      const button = Math.min(1, progress * 2.55);
      section.style.setProperty(
        '--arch-progress',
        String(1 - (1 - reveal) ** 2),
      );
      section.style.setProperty(
        '--film-button-progress',
        String(1 - (1 - button) ** 2),
      );
      if (progress !== target) frame = requestAnimationFrame(update);
    };
    const scroll = () => {
      if (!frame) {
        lastTime = 0;
        frame = requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    scroll();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', scroll);
      section.style.removeProperty('--arch-progress');
      section.style.removeProperty('--film-button-progress');
    };
  }, [sectionRef, reducedMotion]);
}
