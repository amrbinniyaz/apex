import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { ContentPageHero } from '@/components/content-page-hero';
import { JsonLd } from '@/components/json-ld';
import { NewsCard } from '@/components/news-card';
import { SchoolImage } from '@/components/school-image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SiteLink } from '@/components/site-link';
import {
  formatNewsDate,
  getNewsArticle,
  newsArticles,
  newsHref,
} from '@/lib/news';
import { pageMetadata } from '@/lib/seo';
import { siteUrl } from '@/lib/site-url';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getNewsArticle((await params).slug);
  if (!article) return { title: 'Story not found', robots: { index: false } };
  return pageMetadata({
    title: `${article.title} | Apex International School`,
    description: article.summary,
    path: newsHref(article.slug),
    image: { url: article.image, alt: article.alt },
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const article = getNewsArticle((await params).slug);
  if (!article) notFound();
  const external = article.source.href.startsWith('http');
  const more = newsArticles.filter((item) => item.slug !== article.slug);
  return (
    <div className="news-page" id="top">
      <a className="skip-link" href="#news-content">
        Skip to content
      </a>
      <SiteHeader current="news" photo />
      <main id="news-content">
        <JsonLd
          nodes={[
            {
              '@type': 'NewsArticle',
              headline: article.title,
              description: article.summary,
              image: siteUrl(article.image),
              ...(article.date ? { datePublished: article.date } : {}),
              mainEntityOfPage: siteUrl(newsHref(article.slug)),
              author: { '@id': siteUrl('/#school') },
              publisher: { '@id': siteUrl('/#school') },
            },
          ]}
        />
        <ContentPageHero
          title={article.title}
          description={
            article.date
              ? `${article.category} · ${formatNewsDate(article.date)}`
              : article.category
          }
          image={article.image}
          alt={article.alt}
          breadcrumbs={[
            { label: 'News & events', href: '/news' },
            { label: article.category },
          ]}
          nextSection="#story"
        />
        <article className="news-story" id="story">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {article.facts && (
            <dl className="news-facts">
              {article.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <figure className="news-story-photo">
            <SchoolImage
              src={article.image}
              alt={article.alt}
              sizes="(max-width: 767px) calc(100vw - 48px), 720px"
            />
            <figcaption>{article.caption}</figcaption>
          </figure>
          <SiteLink
            className="apex-text-link"
            href={article.source.href}
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {article.source.label} <ArrowUpRight size={20} aria-hidden="true" />
          </SiteLink>
        </article>
        {more.length > 0 && (
          <section
            className="news-list news-more"
            aria-labelledby="more-news-title"
          >
            <h2 id="more-news-title">More news</h2>
            <ul>
              {more.map((item) => (
                <li key={item.slug}>
                  <NewsCard article={item} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
