import { Fragment } from 'react';
import { ArrowDown } from 'lucide-react';
import { SchoolImage } from '@/components/school-image';
import { SiteLink } from '@/components/site-link';

/** Shared full-width image opening used by Apex content pages. */
export function ContentPageHero({
  title,
  description,
  image,
  alt,
  breadcrumbs,
  nextSection,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  breadcrumbs: { label: string; href?: string }[];
  nextSection: string;
}) {
  return (
    <section
      className="ad-photographic-hero"
      aria-labelledby="content-page-title"
    >
      <SchoolImage
        className="ad-page-photo"
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        preload
        loading="eager"
        fetchPriority="high"
      />
      <div className="ad-page-photo-shade" aria-hidden="true" />
      <div className="ad-page-title-group">
        <nav className="ad-page-breadcrumb" aria-label="Breadcrumb">
          <SiteLink href="/">Home</SiteLink>
          {breadcrumbs.map((item) => (
            <Fragment key={item.label}>
              <span aria-hidden="true">/</span>
              {item.href ? (
                <SiteLink href={item.href}>{item.label}</SiteLink>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </Fragment>
          ))}
        </nav>
        <h1 id="content-page-title">{title}</h1>
        <p>{description}</p>
      </div>
      <SiteLink
        className="ad-hero-anchor"
        href={nextSection}
        aria-label="Explore this page"
      >
        <ArrowDown size={23} strokeWidth={1.5} />
      </SiteLink>
    </section>
  );
}
