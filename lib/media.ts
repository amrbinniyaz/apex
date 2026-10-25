import { instagramPostUrl, instagramStories } from '@/lib/instagram';
import { newsArticles, newsHref } from '@/lib/news';
import { schoolVideos, videoUrl } from '@/lib/videos';

export type MediaSource = 'story' | 'instagram' | 'video';

export type MediaItem = {
  id: string;
  source: MediaSource;
  date?: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  width?: number;
  height?: number;
  href: string;
  external: boolean;
};

// Instagram posts already told as full stories appear once, as the story.
const storySources = new Set(
  newsArticles.map((article) => article.source.href),
);

const stories: MediaItem[] = newsArticles.map((article) => ({
  id: `story-${article.slug}`,
  source: 'story',
  date: article.date,
  title: article.title,
  text: article.summary,
  image: article.image,
  alt: article.alt,
  href: newsHref(article.slug),
  external: false,
}));

const posts: MediaItem[] = instagramStories
  .filter(
    (post) => !storySources.has(`https://www.instagram.com/p/${post.id}/`),
  )
  .map((post) => ({
    id: `instagram-${post.id}`,
    source: 'instagram',
    date: post.date,
    title: post.title,
    text: post.summary,
    image: post.image,
    alt: post.title,
    width: post.width,
    height: post.height,
    href: instagramPostUrl(post),
    external: true,
  }));

const videos: MediaItem[] = schoolVideos.map((video) => ({
  id: `video-${video.id}`,
  source: 'video',
  date: video.date,
  title: video.title,
  text: video.text,
  image: `/assets/videos/${video.id}.webp`,
  alt: `Still from the Apex video: ${video.title}`,
  width: video.kind === 'short' ? 200 : 480,
  height: video.kind === 'short' ? 360 : 270,
  href: videoUrl(video),
  external: true,
}));

/** Newest first; undated items keep their place after dated ones. */
export const mediaItems: MediaItem[] = [...stories, ...posts, ...videos].sort(
  (a, b) => (b.date ?? '').localeCompare(a.date ?? ''),
);
