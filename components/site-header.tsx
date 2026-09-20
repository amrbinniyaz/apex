'use client';

import { SiteLink } from '@/components/site-link';
import { school } from '@/lib/school';
import Image from 'next/image';
import { SiteMenu } from '@/components/site-menu';

export function SiteHeader({
  home = false,
  photo = home,
  current,
}: {
  home?: boolean;
  photo?: boolean;
  current?: 'visit' | 'apply' | 'life';
}) {
  const links = [
    ['Contact', '#contact'],
    ['Visit us', '/visit-us'],
    ['Apply now', '/apply-now'],
  ];
  const isCurrent = (href: string) =>
    (current === 'visit' && href === '/visit-us') ||
    (current === 'apply' && href === '/apply-now');
  return (
    <header
      className={`site-header cinematic-header shared-site-header ${photo ? 'header-photo' : 'header-paper'}`}
    >
      <SiteLink
        className="brand-lockup"
        href={home ? '#top' : '/'}
        aria-label={`${school.name} home`}
      >
        <Image
          className="brand"
          src="/assets/apex-logo.svg"
          alt=""
          width="205"
          height="221"
        />
        <span className="brand-name">
          Apex<span>International School</span>
        </span>
      </SiteLink>
      <nav aria-label="Main navigation">
        <div className="header-quicklinks">
          {links.map(([label, href]) => (
            <SiteLink
              className="utility-link"
              key={label}
              href={href}
              aria-current={isCurrent(href) ? 'page' : undefined}
            >
              {label}
            </SiteLink>
          ))}
        </div>
        <SiteMenu home={home} current={current} />
      </nav>
    </header>
  );
}
