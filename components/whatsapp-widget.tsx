import { MessageCircle } from 'lucide-react';
import { whatsappHref } from '@/lib/school';

/** Floating WhatsApp button on larger screens; phones use the contact bar. */
export function WhatsAppWidget() {
  if (!whatsappHref) return null;
  return (
    <a
      className="whatsapp-widget"
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      data-track-source="floating-widget"
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
