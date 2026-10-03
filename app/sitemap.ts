import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-url';
import { activities, activityHref } from '@/lib/activities';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/',
    '/about',
    '/visit-us',
    '/contact-us',
    '/apply-now',
    '/life-at-apex',
    '/results',
    ...activities.map(({ slug }) => activityHref(slug)),
  ].map((path) => ({
    url: siteUrl(path),
  }));
}
