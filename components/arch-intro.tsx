'use client';

import { useEffect } from 'react';

export function ArchIntro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Deep links and restored scroll positions should go straight to their content.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.location.hash || window.scrollY > 80) {
      onComplete();
      return;
    }
    // Always release the page, including when an animation event is interrupted.
    const timeout = window.setTimeout(onComplete, 3800);
    const dismiss = () => onComplete();
    window.addEventListener('wheel', dismiss, { passive: true, once: true });
    window.addEventListener('touchstart', dismiss, { passive: true, once: true });
    window.addEventListener('keydown', dismiss, { once: true });
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('wheel', dismiss);
      window.removeEventListener('touchstart', dismiss);
      window.removeEventListener('keydown', dismiss);
    };
  }, [onComplete]);

  return (
    <div className="arch-intro" aria-hidden="true" onAnimationEnd={event => {
      if (event.target === event.currentTarget) onComplete();
    }}>
      <div className="arch-intro-brand">
        <img src="/assets/apex-logo.svg" alt="" width="205" height="221" fetchPriority="high" />
        <span>Apex<span>International School</span></span>
      </div>
    </div>
  );
}
