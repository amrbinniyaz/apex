import type { Metadata } from 'next';
import { ContentPageHero } from '@/components/content-page-hero';
import { MediaWall } from '@/components/media-wall';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { mediaItems } from '@/lib/media';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'News & Events | Apex International School, Kozhikode',
  description:
    'News and events from Apex International School in Kozhikode: CBSE results, Kalotsav prizes, competition medals, school life on Instagram and video.',
  path: '/news',
  shareTitle: 'News & Events | Apex International School',
  shareDescription: 'Results and achievements from Apex International School.',
});

export default function NewsPage() {
  return (
    <div className="news-page" id="top">
      <a className="skip-link" href="#news-content">
        Skip to content
      </a>
      <SiteHeader current="news" photo />
      <main id="news-content">
        <ContentPageHero
          title="News & events"
          description="Achievements, results and events at Apex."
          image="/assets/news/annual-day-dancers.webp"
          alt="Two young Apex dancers in traditional costume performing at the Annual Day"
          breadcrumbs={[{ label: 'News & events' }]}
          nextSection="#latest-news"
        />
        <section
          className="media-section"
          id="latest-news"
          aria-labelledby="latest-news-title"
        >
          <h2 id="latest-news-title">Latest from Apex</h2>
          <MediaWall items={mediaItems} />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
