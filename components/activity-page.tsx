import { SiteLink } from '@/components/site-link';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SchoolImage } from '@/components/school-image';
import { ActivityCards } from '@/components/activity-cards';
import { type Activity, activityHref } from '@/lib/activities';
import { school } from '@/lib/school';
import { siteUrl } from '@/lib/site-url';

export function ActivityPage({ activity }: { activity: Activity }) {
  const visitHref = `/visit-us?activity=${activity.slug}#enquire`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': siteUrl(activityHref(activity.slug)),
        name: `${activity.name} at Apex International School`,
        description: activity.description,
        url: siteUrl(activityHref(activity.slug)),
        about: { '@id': siteUrl('/#school') },
        isPartOf: {
          '@type': 'CollectionPage',
          url: siteUrl('/life-at-apex'),
          name: 'Life at Apex',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Life at Apex',
            item: siteUrl('/life-at-apex'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: activity.name,
            item: siteUrl(activityHref(activity.slug)),
          },
        ],
      },
    ],
  };
  return (
    <div className={`activity-page activity-${activity.slug}`} id="top">
      <a href="#activity-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader current="life" />
      <main id="activity-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        <nav className="activity-breadcrumb" aria-label="Breadcrumb">
          <SiteLink href="/">Home</SiteLink>
          <span aria-hidden="true">/</span>
          <SiteLink href="/life-at-apex">Life at Apex</SiteLink>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{activity.name}</span>
        </nav>
        <section className="activity-hero" aria-labelledby="activity-title">
          <div className="activity-hero-copy">
            <p className="content-block-kicker">
              {activity.category} · Life at Apex
            </p>
            <h1 id="activity-title">{activity.name}</h1>
            <p className="activity-lead">{activity.summary}</p>
            <SiteLink
              href="#activity-enquiry"
              className="apex-text-link activity-action"
            >
              Ask about {activity.name} <ArrowUpRight size={22} />
            </SiteLink>
            <p className="activity-location">
              Apex International School · Kozhikode, Kerala
            </p>
          </div>
          <figure className="activity-hero-photo">
            <SchoolImage
              src={activity.image}
              alt={activity.alt}
              width={1200}
              height={900}
              preload
              sizes="(max-width: 767px) 100vw, 58vw"
            />
            <figcaption>{activity.name} at Apex</figcaption>
          </figure>
        </section>
        <section
          className="activity-intro activity-section"
          aria-labelledby="activity-intro-title"
        >
          <div>
            <h2 id="activity-intro-title">About {activity.name}</h2>
          </div>
          <div>
            {activity.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
        <section
          className="activity-benefits activity-section"
          aria-labelledby="activity-benefits-title"
        >
          <h2 id="activity-benefits-title">What pupils practise</h2>
          <div className="activity-benefit-grid">
            {activity.benefits.map((benefit, index) => (
              <article key={benefit.title}>
                <span className="activity-benefit-number">0{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="activity-story activity-section"
          aria-labelledby="activity-story-title"
        >
          <div>
            <h2 id="activity-story-title">{activity.storyTitle}</h2>
            <p>{activity.story}</p>
          </div>
          <div className="activity-source-list">
            {activity.sources.map((source) => (
              <a
                href={source.url}
                key={source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>From the Apex archive</span>
                <h3>{source.label}</h3>
                <span className="activity-source-action">
                  View on Instagram <ArrowUpRight size={22} />
                </span>
              </a>
            ))}
          </div>
        </section>
        <section
          className="activity-questions activity-section"
          aria-labelledby="activity-questions-title"
        >
          <div>
            <h2 id="activity-questions-title">Frequently asked questions</h2>
          </div>
          <div>
            {activity.questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
            <details>
              <summary>
                How do we enquire about joining Apex?
                <span aria-hidden="true">+</span>
              </summary>
              <p>
                <SiteLink href="/apply-now">
                  Start an admissions enquiry
                </SiteLink>{' '}
                or arrange a school visit. Share your child’s class and
                interests so the school can guide your family through the next
                steps.
              </p>
            </details>
          </div>
        </section>
        <section
          className="activity-visit activity-section"
          id="activity-enquiry"
          aria-labelledby="activity-visit-title"
        >
          <h2 id="activity-visit-title">Interested in {activity.name}?</h2>
          <p>
            Ask about current groups, timings and availability for your child’s
            class. You can include {activity.name} in your school visit enquiry.
          </p>
          <div className="activity-visit-actions">
            <SiteLink className="apex-cta activity-action" href={visitHref}>
              Enquire about {activity.name} <ArrowUpRight size={23} />
            </SiteLink>
            <a className="activity-call" href={school.phoneHref}>
              <Phone size={18} />
              Talk to the school
            </a>
          </div>
        </section>
        <section
          className="activity-related activity-section"
          aria-labelledby="activity-related-title"
        >
          <div className="activity-section-heading">
            <div>
              <h2 id="activity-related-title">Other activities at Apex</h2>
            </div>
            <SiteLink href="/life-at-apex">
              All activities <ArrowRight size={20} />
            </SiteLink>
          </div>
          <ActivityCards exclude={activity.slug} compact />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
