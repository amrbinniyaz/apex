'use client';

import { useId, useRef, useState } from 'react';
import { SiteLink } from '@/components/site-link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { SchoolImage } from '@/components/school-image';
import { school } from '@/lib/school';
import { activities, activityHref } from '@/lib/activities';

type SiteMenuProps = { home?: boolean; current?: 'visit' | 'apply' | 'life' };
type MenuItem = {
  label: string;
  href: string;
  active?: boolean;
  children?: { label: string; href: string }[];
};

export function SiteMenu({ home = false, current }: SiteMenuProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const menuId = useId();
  const closeButton = useRef<HTMLButtonElement>(null);
  const navigating = useRef(false);
  const close = () => {
    navigating.current = true;
    setOpen(false);
  };
  const changeOpen = (value: boolean) => {
    if (value) {
      navigating.current = false;
      setExpanded(null);
    }
    setOpen(value);
  };
  const section = (id: string) => `${home ? '' : '/'}#${id}`;
  const navigation: MenuItem[] = [
    { label: 'Home', href: home ? '#top' : '/', active: home },
    {
      label: 'Our school',
      href: section('our-school'),
      children: [
        { label: 'Discover Apex', href: section('our-school') },
        { label: 'Explore our campus', href: '/visit-us' },
      ],
    },
    {
      label: 'Life at Apex',
      href: '/life-at-apex',
      active: current === 'life',
      children: [
        { label: 'Explore all activities', href: '/life-at-apex' },
        ...activities.map((activity) => ({
          label: activity.name,
          href: activityHref(activity.slug),
        })),
      ],
    },
    {
      label: 'Admissions',
      href: '/apply-now',
      active: current === 'apply',
      children: [
        { label: 'Welcome to Apex', href: '/apply-now' },
        { label: 'Make an enquiry', href: '/apply-now#enquire' },
        { label: 'Your next steps', href: '/apply-now#next-steps' },
        { label: 'Common questions', href: '/apply-now#questions' },
      ],
    },
    {
      label: 'Visit us',
      href: '/visit-us',
      active: current === 'visit',
      children: [
        { label: 'Plan your visit', href: '/visit-us' },
        { label: 'Arrange a school tour', href: '/visit-us#enquire' },
        { label: 'Getting here', href: '/visit-us#getting-here' },
      ],
    },
    { label: 'Contact us', href: '#contact' },
  ];
  const shortcuts = [
    {
      label: 'Our school',
      href: section('our-school'),
      image: '/assets/apex-campus-source.jpg',
      width: 2400,
      height: 1480,
    },
    {
      label: 'Activities at Apex',
      href: '/life-at-apex',
      image: '/assets/apex-skating-hero.png',
      width: 1672,
      height: 941,
    },
    {
      label: 'Visit the campus',
      href: '/visit-us',
      image: '/assets/apex-video-campus.jpg',
      width: 1179,
      height: 714,
    },
    {
      label: 'Admissions',
      href: '/apply-now',
      image: '/assets/07a6dcb8-4d03-4929-a681-785467613806.JPG',
      width: 1600,
      height: 1142,
      imagePosition: '50% 35%',
    },
  ];

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger className="menu-trigger" aria-label="Open school menu">
        <Menu size={27} strokeWidth={1.5} aria-hidden="true" />
        <i>menu</i>
      </DialogTrigger>
      <DialogContent
        className="apex-menu"
        fullScreen
        showCloseButton={false}
        initialFocus={closeButton}
        finalFocus={() => !navigating.current}
      >
        <DialogClose
          ref={closeButton}
          className="apex-menu-close"
          aria-label="Close school menu"
        >
          <X size={27} strokeWidth={1.25} />
          <span>Close</span>
        </DialogClose>

        <div className="apex-menu-body">
          <div className="apex-menu-navigation">
            <SiteLink
              className="apex-menu-brand"
              href={home ? '#top' : '/'}
              onClick={close}
              aria-label={`${school.name} home`}
            >
              <Image
                src="/assets/apex-logo.svg"
                alt=""
                width={205}
                height={221}
              />
              <span>
                Apex<span>International School</span>
              </span>
            </SiteLink>

            <DialogTitle className="apex-menu-eyebrow">
              Explore Apex
            </DialogTitle>
            <DialogDescription className="sr-only">
              Explore our school, admissions and visits. Expand a section to
              find more links.
            </DialogDescription>
            <nav aria-label="School navigation">
              <ul className="apex-menu-links">
                {navigation.map((item, index) => {
                  const isExpanded = expanded === item.label;
                  const panelId = `${menuId}-${index}`;
                  return (
                    <li key={item.label}>
                      {item.children ? (
                        <>
                          <button
                            className="apex-menu-category"
                            type="button"
                            aria-expanded={isExpanded}
                            aria-controls={panelId}
                            data-current={item.active || undefined}
                            onClick={() =>
                              setExpanded(isExpanded ? null : item.label)
                            }
                          >
                            <span>{item.label}</span>
                            <ArrowRight
                              className="apex-menu-category-arrow"
                              size={29}
                              strokeWidth={1.25}
                            />
                          </button>
                          <ul
                            className="apex-menu-submenu"
                            id={panelId}
                            hidden={!isExpanded}
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <SiteLink href={child.href} onClick={close}>
                                  {child.label}
                                  <ArrowUpRight size={17} strokeWidth={1.5} />
                                </SiteLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <SiteLink
                          className="apex-menu-category"
                          href={item.href}
                          onClick={close}
                          aria-current={item.active ? 'page' : undefined}
                        >
                          <span>{item.label}</span>
                        </SiteLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="apex-menu-contact">
              <a href={school.phoneHref} onClick={close}>
                {school.phone}
              </a>
              <a href={`mailto:${school.email}`} onClick={close}>
                Email the school <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <aside
            className="apex-menu-discover"
            aria-label="A little more of Apex"
          >
            <div className="apex-menu-discover-content">
              <nav className="apex-menu-utility" aria-label="Quick links">
                <SiteLink href="/visit-us" onClick={close}>
                  Visit us <ArrowUpRight size={14} />
                </SiteLink>
                <SiteLink href="/apply-now" onClick={close}>
                  Apply now <ArrowUpRight size={14} />
                </SiteLink>
                <SiteLink href="#contact" onClick={close}>
                  Contact <ArrowUpRight size={14} />
                </SiteLink>
              </nav>

              <div className="apex-menu-cards">
                {shortcuts.map((card) => (
                  <SiteLink
                    className="apex-menu-card"
                    href={card.href}
                    onClick={close}
                    key={card.label}
                  >
                    <div className="apex-menu-card-image">
                      <SchoolImage
                        src={card.image}
                        alt=""
                        width={card.width}
                        height={card.height}
                        sizes="(max-width: 767px) 45vw, 25vw"
                        style={{ objectPosition: card.imagePosition }}
                      />
                    </div>
                    <div className="apex-menu-card-copy">
                      <h2>{card.label}</h2>
                      <span className="apex-menu-card-arrow" aria-hidden="true">
                        <ArrowUpRight size={19} strokeWidth={1.5} />
                      </span>
                    </div>
                  </SiteLink>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}
