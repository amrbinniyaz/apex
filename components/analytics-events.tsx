'use client';

import { useEffect } from 'react';
import { linkEvent, track } from '@/lib/analytics';

/** One listener records contact and enquiry clicks across every page. */
export function AnalyticsEvents() {
  useEffect(() => {
    const record = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a');
      if (!link) return;
      const name = linkEvent(link);
      if (name) track(name, { page: window.location.pathname });
    };
    document.addEventListener('click', record, { capture: true });
    return () =>
      document.removeEventListener('click', record, { capture: true });
  }, []);
  return null;
}
