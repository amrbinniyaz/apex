'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Newspaper, Play, Search } from 'lucide-react';
import { SchoolImage } from '@/components/school-image';
import { SiteLink } from '@/components/site-link';
import { SocialIcon } from '@/components/social-icon';
import { useMediaQuery } from '@/hooks/use-media-query';
import type { MediaItem, MediaSource } from '@/lib/media';
import { formatNewsDate } from '@/lib/news';

const filters: { value: MediaSource | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'story', label: 'Stories' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'video', label: 'Video' },
];

const sourceLabel: Record<MediaSource, string> = {
  story: 'Story',
  instagram: 'Instagram',
  video: 'Video',
};

const pageSize = 9;

function SourceIcon({ source }: { source: MediaSource }) {
  if (source === 'instagram') return <SocialIcon network="instagram" />;
  if (source === 'video') return <Play size={16} aria-hidden="true" />;
  return <Newspaper size={16} aria-hidden="true" />;
}

export function MediaWall({ items }: { items: MediaItem[] }) {
  const [filter, setFilter] = useState<MediaSource | 'all'>('all');
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(pageSize);

  const matches = useMemo(() => {
    const words = query.trim().toLowerCase();
    return items.filter(
      (item) =>
        (filter === 'all' || item.source === filter) &&
        (!words || `${item.title} ${item.text}`.toLowerCase().includes(words)),
    );
  }, [items, filter, query]);
  const shown = matches.slice(0, visible);
  // Deal cards across columns so the newest items fill the top row.
  const wide = useMediaQuery('(min-width: 1100px)', true);
  const medium = useMediaQuery('(min-width: 768px)', true);
  const columnCount = wide ? 3 : medium ? 2 : 1;
  const columns = Array.from({ length: columnCount }, (_, column) =>
    shown.filter((_, index) => index % columnCount === column),
  );

  return (
    <div className="media-wall">
      <div className="media-toolbar">
        <label className="media-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search news and events</span>
          <input
            type="search"
            placeholder="Search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisible(pageSize);
            }}
          />
        </label>
        <fieldset className="media-filters">
          <legend className="sr-only">Filter by</legend>
          {filters.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={filter === option.value}
              onClick={() => {
                setFilter(option.value);
                setVisible(pageSize);
              }}
            >
              {option.value !== 'all' && <SourceIcon source={option.value} />}
              {option.label}
            </button>
          ))}
        </fieldset>
      </div>

      <p className="media-count" aria-live="polite">
        {matches.length === 1 ? '1 item' : `${matches.length} items`}
      </p>

      {shown.length > 0 ? (
        <div className="media-grid">
          {columns.map((column, index) => (
            <ul className="media-column" key={index}>
              {column.map((item) => (
                <li key={item.id}>
                  <SiteLink
                    className={`media-card media-card-${item.source}`}
                    href={item.href}
                    {...(item.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <div className="media-card-photo">
                      <SchoolImage
                        src={item.image}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1100px) 45vw, 30vw"
                      />
                      <span className="media-badge">
                        <SourceIcon source={item.source} />
                        {sourceLabel[item.source]}
                      </span>
                      {item.source === 'video' && (
                        <span className="media-play" aria-hidden="true">
                          <Play size={28} />
                        </span>
                      )}
                    </div>
                    <div className="media-card-copy">
                      {item.date && (
                        <time dateTime={item.date}>
                          {formatNewsDate(item.date, true)}
                        </time>
                      )}
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <span className="media-card-more">
                        {item.source === 'story'
                          ? 'Read the story'
                          : item.source === 'video'
                            ? 'Watch on YouTube'
                            : 'View on Instagram'}
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </span>
                    </div>
                  </SiteLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      ) : (
        <p className="media-empty">No news matches your search.</p>
      )}

      {visible < matches.length && (
        <div className="media-more">
          <button
            type="button"
            className="apex-cta"
            onClick={() => setVisible((count) => count + pageSize)}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
