import { SiteLink } from '@/components/site-link';
import Image from 'next/image';
import { ArrowUp, ArrowUpRight, Camera } from 'lucide-react';
import { school } from '@/lib/school';
import { instagramProfile } from '@/lib/instagram';

export function SiteFooter({ home = false }: { home?: boolean }) {
  const links = [
    { label: 'About Apex', href: '/about' },
    { label: 'Life at Apex', href: '/life-at-apex' },
    { label: 'Results & achievements', href: '/results' },
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
            <a
              className="footer-instagram"
              href={instagramProfile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Camera size={19} strokeWidth={1.5} aria-hidden="true" />
              <span>Follow life at Apex</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="apex-footer-bottom">
          <p>
            © {new Date().getFullYear()} {school.name}
          </p>
          <a
            href="https://apexinternationalschool.org/mandatory-public-disclosure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mandatory public disclosure{' '}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <SiteLink className="footer-back-top" href="#top">
            <span>Back to top</span>
            <ArrowUp size={18} strokeWidth={1.5} aria-hidden="true" />
          </SiteLink>
        </div>
      </div>
    </footer>
  );
}
