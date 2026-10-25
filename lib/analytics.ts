type Umami = { track(event: string, data?: Record<string, string>): void };

/** Sends an Umami event when the analytics script has loaded; never throws. */
export function track(event: string, data?: Record<string, string>) {
  try {
    (window as Window & { umami?: Umami }).umami?.track(event, data);
  } catch {
    // Analytics must never interrupt a family's enquiry.
  }
}

/** Names the conversion a clicked link represents, if any. */
export function linkEvent(link: HTMLAnchorElement) {
  const href = link.getAttribute('href') ?? '';
  if (href.startsWith('tel:')) return 'phone-click';
  if (href.startsWith('mailto:'))
    return href.includes('subject=') ? 'enquiry-email-draft' : 'email-click';
  if (href.includes('wa.me/')) return 'whatsapp-click';
  if (href.includes('google.com/maps')) return 'directions-click';
  if (href.includes('instagram.com/') || href.includes('youtube.com/@'))
    return 'social-click';
  const path = href.split(/[?#]/)[0];
  if (path === '/visit-us') return 'visit-cta-click';
  if (path === '/apply-now') return 'apply-cta-click';
  return null;
}
