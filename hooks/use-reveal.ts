'use client';

import { useEffect, type RefObject } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';

export function useReveal(containerRef: RefObject<HTMLElement | null>) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', true);
  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;
    const elements =
      containerRef.current.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => {
      element.classList.add('will-reveal');
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) =>
        element.classList.remove('will-reveal', 'revealed'),
      );
    };
  }, [containerRef, reducedMotion]);
}
