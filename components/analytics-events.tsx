'use client';

import { useEffect } from 'react';
import { linkEvent, track } from '@/lib/analytics';
import { school, whatsappMessage } from '@/lib/school';

/** One listener records contact and enquiry clicks across every page. */
export function AnalyticsEvents() {
  useEffect(() => {
    const record = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a');
      if (!link) return;
      const name = linkEvent(link);
      if (!name) return;
      // Where on the page the click came from, e.g. mobile bar or floating widget.
      const source =
        link.closest<HTMLElement>('[data-track-source]')?.dataset.trackSource ??
        'page';
      track(name, { page: window.location.pathname, source });
      // Name the exact page in the message before WhatsApp opens.
      if (name === 'whatsapp-click') {
        const page = `apexinternationalschool.org${window.location.pathname}`;
        link.href = `https://wa.me/${school.whatsapp}?text=${encodeURIComponent(whatsappMessage(page))}`;
      }
    };
    document.addEventListener('click', record, { capture: true });
    return () =>
      document.removeEventListener('click', record, { capture: true });
  }, []);
  return null;
}
