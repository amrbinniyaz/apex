import { MessageCircle, PenLine, Phone } from 'lucide-react';
import { SiteLink } from '@/components/site-link';
import { school, whatsappHref } from '@/lib/school';

/** Fixed contact bar on phones: call, WhatsApp (once configured) and enquire. */
export function MobileActions() {
  return (
    <nav className="mobile-actions" aria-label="Contact Apex">
      <a href={school.phoneHref}>
        <Phone size={19} aria-hidden="true" />
        Call
      </a>
      {whatsappHref && (
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={19} aria-hidden="true" />
          WhatsApp
        </a>
      )}
      <SiteLink className="mobile-actions-primary" href="/apply-now#enquire">
        <PenLine size={19} aria-hidden="true" />
        Enquire
      </SiteLink>
    </nav>
  );
}
