import Image from 'next/image';
import { ArrowUpRight, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  instagramProfile,
  instagramStories,
  instagramPostUrl,
  type InstagramStory,
} from '@/lib/instagram';

function Instagram({
  size = 24,
  strokeWidth = 1.5,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

/** Shared content-page section; its data can later come from the school CMS. */
export function InstagramStories({
  stories = instagramStories,
  id = 'apex-stories',
}: {
  stories?: InstagramStory[];
  id?: string;
}) {
  if (!stories.length) return null;

  return (
    <Carousel
      className="instagram-stories"
      id={id}
      opts={{ align: 'start', containScroll: 'trimSnaps' }}
      aria-labelledby={`${id}-title`}
    >
      <div className="instagram-stories-heading">
        <p className="instagram-stories-kicker">
          <Instagram size={16} strokeWidth={1.5} />
          Instagram
        </p>
        <h2 id={`${id}-title`}>Stories from Apex.</h2>
      </div>
      <CarouselContent className="chapter-track instagram-stories-track">
        {stories.map((story, index) => (
          <CarouselItem
            className="chapter-slide instagram-story-slide"
            key={story.id}
            aria-label={`${index + 1} of ${stories.length}`}
          >
            <a
              className="chapter-card instagram-story-card"
              href={instagramPostUrl(story)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${story.title} — view ${story.kind === 'reel' ? 'Reel' : 'post'} on Instagram (opens in a new tab)`}
            >
              <div className="chapter-photo instagram-story-image">
                <Image
                  src={story.image}
                  alt=""
                  width={story.width}
                  height={story.height}
                  unoptimized
                  loading="lazy"
                />
                {story.kind === 'reel' && (
                  <span className="chapter-age instagram-story-reel">
                    <Play size={12} fill="currentColor" />
                    Reel
                  </span>
                )}
              </div>
              <div className="instagram-story-copy">
                <div className="instagram-story-meta">
                  <span>
                    <Instagram size={15} />
                    Instagram
                  </span>
                  <time dateTime={story.date}>
                    {dateFormat.format(new Date(`${story.date}T00:00:00Z`))}
                  </time>
                </div>
                <div className="chapter-card-heading">
                  <span className="chapter-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{story.title}</h3>
                  <ArrowUpRight size={24} strokeWidth={1.5} />
                </div>
                <p>{story.summary}</p>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="instagram-stories-bottom">
        <a
          className="instagram-stories-profile apex-text-link"
          href={instagramProfile.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          More on Instagram
          <ArrowUpRight size={19} />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <div className="instagram-stories-arrows">
          <CarouselPrevious
            className="chapter-arrow"
            aria-label="Previous Instagram stories"
          />
          <CarouselNext
            className="chapter-arrow"
            aria-label="Next Instagram stories"
          />
        </div>
      </div>
    </Carousel>
  );
}
