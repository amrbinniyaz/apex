'use client';

import { useState } from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export function SiteHeader({ home = false, photo = home, current }: { home?: boolean; photo?: boolean; current?: 'visit' | 'apply' }) {
  const [open, setOpen] = useState(false);
  const links = [['Contact', '#contact'], ['Visit us', '/visit-us'], ['Apply now', '/apply-now']];
  const navigation = [['Home', home ? '#top' : '/'], ['Our school', `${home ? '' : '/'}#our-school`], ['Life at Apex', `${home ? '' : '/'}#life-at-apex`], ['School film', `${home ? '' : '/'}#discover`], ...links];
  const isCurrent = (href: string) => (current === 'visit' && href === '/visit-us') || (current === 'apply' && href === '/apply-now');
  return <header className={`site-header cinematic-header shared-site-header ${photo ? 'header-photo' : 'header-paper'}`}>
    <a className="brand-lockup" href={home ? '#top' : '/'} aria-label="Apex International School home"><img className="brand" src="/assets/apex-logo.svg" alt="" width="205" height="221" /><span className="brand-name">Apex<span>International School</span></span></a>
    <nav aria-label="Main navigation">
      <div className="header-quicklinks">{links.map(([label, href]) => <a className="utility-link" key={label} href={href} aria-current={isCurrent(href) ? 'page' : undefined}>{label}</a>)}</div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="menu-trigger" aria-label="Open school menu"><Menu size={27} strokeWidth={1.5} /><i>menu</i></DialogTrigger>
        <DialogContent className="school-menu apex-shared-menu">
          <div className="menu-quicklinks">{links.map(([label, href]) => <a key={label} href={href} aria-current={isCurrent(href) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>)}</div>
          <div className="menu-school-brand"><img src="/assets/apex-logo.svg" alt="" width="205" height="221" /><span>A world of possibilities.</span></div>
          <DialogTitle className="menu-title">Explore Apex</DialogTitle>
          <nav aria-label="School navigation">{navigation.map(([label, href]) => <a key={label} href={href} aria-current={isCurrent(href) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}<ArrowUpRight /></a>)}</nav>
          <div className="menu-mobile-footer"><p>Your next chapter starts here.</p><a href="/visit-us" onClick={() => setOpen(false)}>Come for a visit <ArrowUpRight size={20} /></a><span>Odumbra, Olavanna · Kozhikode</span></div>
        </DialogContent>
      </Dialog>
    </nav>
  </header>;
}
