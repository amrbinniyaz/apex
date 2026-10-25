import { SiteLink } from '@/components/site-link';
import Image from 'next/image';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { school, whatsappHref } from '@/lib/school';
import { socialLinks } from '@/lib/social';
import { SocialIcon } from '@/components/social-icon';
import { MobileActions } from '@/components/mobile-actions';

export function SiteFooter({ home = false }: { home?: boolean }) {
  const links = [
    { label: 'About Apex', href: '/about' },
    { label: 'Life at Apex', href: '/life-at-apex' },
    { label: 'Results & achievements', href: '/results' },
    { label: 'News & events', href: '/news' },
    { label: 'Admissions', href: '/apply-now' },
    { label: 'Visit us', href: '/visit-us' },
    { label: 'Contact us', href: '/contact-us' },
  ];

  return (
    <footer className="apex-footer" id="contact">
      <div className="apex-footer-inner">
        <div className="apex-footer-top">
          <div className="apex-footer-brand">
            <SiteLink
              className="footer-brand-lockup"
              href={home ? '#top' : '/'}
              aria-label={`${school.name} home`}
            >
              <Image
                src="/assets/apex-logo.svg"
                alt=""
                width={205}
                height={221}
                loading="lazy"
              />
              <span>
                Apex<span>International School</span>
              </span>
            </SiteLink>
            <address>{school.address}</address>
            <a
              className="footer-directions"
              href={school.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <nav className="apex-footer-nav" aria-label="Explore Apex">
            <h2>Explore</h2>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <SiteLink href={link.href}>
                    {link.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </SiteLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="apex-footer-contact">
            <h2>Let’s talk</h2>
            <a href={school.phoneHref}>
              <span>{school.phone}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a href={`mailto:${school.email}`}>
              <span>{school.email}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            {whatsappHref && (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <span>WhatsApp the school</span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
            <ul className="footer-socials" aria-label="Follow Apex">
              {socialLinks.map((social) => (
                <li key={social.network}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Apex on ${social.label}`}
                  >
                    <SocialIcon network={social.network} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="apex-footer-bottom">
          <p>
            © {new Date().getFullYear()} {school.name}
          </p>
          {school.disclosureHref ? (
            <a
              href={school.disclosureHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mandatory public disclosure{' '}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : (
            <span />
          )}
          <SiteLink className="footer-back-top" href="#top">
            <span>Back to top</span>
            <ArrowUp size={18} strokeWidth={1.5} aria-hidden="true" />
          </SiteLink>
        </div>
      </div>
      <MobileActions />
    </footer>
  );
}
