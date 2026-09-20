import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ActivityCards } from '@/components/activity-cards';
import { ContentFacts } from '@/components/content-page-blocks';

export const metadata: Metadata = {
  title: 'Life at Apex: Activities in Kozhikode | Apex International School',
  description:
    'Discover Taekwondo, School Radio, Art and Craft, Skating and Chess at Apex International School in Kozhikode. Explore each activity and ask about current availability.',
  alternates: { canonical: '/life-at-apex' },
  openGraph: {
    title: 'Life at Apex | Apex International School',
    description:
      'Explore sport, creativity and new interests beyond the classroom at Apex in Kozhikode.',
    url: '/life-at-apex',
    type: 'website',
    siteName: 'Apex International School',
    locale: 'en_IN',
  },
};
export default function LifeAtApex() {
  return (
    <div className="activity-page activity-index" id="top">
      <a className="skip-link" href="#life-content">
        Skip to content
      </a>
      <SiteHeader current="life" />
      <main id="life-content">
        <section className="activity-index-intro activity-section">
          <h1>Life at Apex</h1>
          <p>
            Explore sport, creative work and activities beyond the classroom at
            Apex International School in Kozhikode.
          </p>
        </section>
        <section
          className="activity-section activity-index-cards"
          aria-labelledby="activities-heading"
        >
          <h2 id="activities-heading">Explore our activities</h2>
          <ActivityCards />
        </section>
        <ContentFacts />
        <section className="activity-visit activity-section">
          <h2>Ask about activities at Apex</h2>
          <p>
            A school visit is a chance to talk about your child’s interests,
            explore the campus and ask about current activities for their class.
          </p>
          <Link className="apex-cta activity-action" href="/visit-us#enquire">
            Arrange a visit <ArrowUpRight size={23} />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
