import Link from 'next/link';
import { school } from '@/lib/school';
import Image from 'next/image';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export function SiteFooter({ home = false }: { home?: boolean }) {
  return (
    <footer className="apex-footer" id="contact">
      <div className="apex-footer-top">
        <div className="apex-footer-brand">
          <Link
            className="footer-brand-lockup"
            href={home ? '#top' : '/'}
            aria-label="Apex International School home"
          >
            <Image
              src="/assets/apex-logo.svg"
              alt=""
              width="205"
              height="221"
              loading="lazy"
            />
            <span>
              Apex<span>International School</span>
            </span>
          </Link>
          <p>
            Big ideas. Bright futures.
            <br />
            <span>Your own path.</span>
          </p>
        </div>
        <nav className="apex-footer-nav" aria-label="Explore Apex">
          <h2>Keep exploring</h2>
          <Link href={`${home ? '' : '/'}#our-school`}>
            Our school <ArrowUpRight size={17} />
          </Link>
          <Link href={`${home ? '' : '/'}#life-at-apex`}>
            Life at Apex <ArrowUpRight size={17} />
          </Link>
          <Link href={`${home ? '' : '/'}#discover`}>
            Watch our film <ArrowUpRight size={17} />
          </Link>
          <Link href="/visit-us">
            Come for a visit <ArrowUpRight size={17} />
          </Link>
          <Link href="/apply-now">
            Apply now <ArrowUpRight size={17} />
          </Link>
        </nav>
        <div className="apex-footer-contact">
          <h2>Say hello</h2>
          <address>
            Odumbra, Olavanna P.O.
            <br />
            Kozhikode, Kerala 673025
            <br />
            India
          </address>
          <Link href={school.phoneHref}>
            {school.phone} <ArrowUpRight size={17} />
          </Link>
          <Link className="footer-email" href={`mailto:${school.email}`}>
            {school.email} <ArrowUpRight size={17} />
          </Link>
          <Link
            className="footer-directions"
            href={school.directions}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find your way here <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className="apex-footer-signoff">
        <p>
          Your next chapter <span>starts here.</span>
        </p>
        <Link href="#top" aria-label="Back to top">
          <ArrowUp size={25} strokeWidth={1.5} />
          <span>Back to top</span>
        </Link>
      </div>
      <div className="apex-footer-bottom">
        <p>© {new Date().getFullYear()} Apex International School</p>
        <Link
          href="https://apexinternationalschool.org/mandatory-public-disclosure/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mandatory public disclosure <ArrowUpRight size={14} />
        </Link>
        <span>Made for bright futures.</span>
      </div>
    </footer>
  );
}
