import { ArrowUpRight } from 'lucide-react';
import { SchoolImage } from '@/components/school-image';
import { SiteLink } from '@/components/site-link';
import { formatNewsDate, newsHref, type NewsArticle } from '@/lib/news';

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <SiteLink className="news-card" href={newsHref(article.slug)}>
      <div className="news-card-photo">
        <SchoolImage
          src={article.image}
          alt={article.alt}
          sizes="(max-width: 767px) calc(100vw - 48px), 30vw"
        />
      </div>
      <div className="news-card-copy">
        <p className="news-meta">
          <span>{article.category}</span>
          {article.date && (
            <time dateTime={article.date}>{formatNewsDate(article.date)}</time>
          )}
        </p>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <span className="news-card-more">
          Read the story <ArrowUpRight size={18} aria-hidden="true" />
        </span>
      </div>
    </SiteLink>
  );
}
