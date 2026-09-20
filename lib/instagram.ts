export const instagramProfile = {
  handle: 'apexinternationalschoolclt',
  url: 'https://www.instagram.com/apexinternationalschoolclt/',
};

export type InstagramStory = {
  id: string;
  kind: 'post' | 'reel';
  date: string;
  title: string;
  summary: string;
  image: string;
  width: number;
  height: number;
};

/**
 * Curated from the school's public profile on 2026-09-13, not an automatic feed.
 * Dates come from the public image descriptions. Titles and summaries are
 * editorial descriptions of the visible posts, not copied Instagram captions.
 * Local thumbnails avoid relying on Instagram's temporary CDN URLs.
 * Add a post with its original shortcode and an image in public/assets/instagram.
 */
export const instagramStories: InstagramStory[] = [
  {
    id: 'DdGif9PGfdc',
    kind: 'post',
    date: '2026-09-10',
    title: 'Creativity worth celebrating',
    summary:
      'Celebrating our pupils’ A grades at the Malabar Sahodaya District Kalotsav IT Fest.',
    image: '/assets/instagram/DdGif9PGfdc.webp',
    width: 480,
    height: 640,
  },
  {
    id: 'Dc5k2lVGfvL',
    kind: 'post',
    date: '2026-09-05',
    title: 'For the teachers who inspire',
    summary:
      'A Teachers’ Day thank you to the people who guide every new chapter.',
    image: '/assets/instagram/Dc5k2lVGfvL.webp',
    width: 481,
    height: 640,
  },
  {
    id: 'DbdW4jEPuX6',
    kind: 'reel',
    date: '2026-07-31',
    title: 'A little letter. A big beginning.',
    summary:
      'Tiny hands and bright smiles as our youngest learners discover their first letter.',
    image: '/assets/instagram/DbdW4jEPuX6.webp',
    width: 361,
    height: 640,
  },
  {
    id: 'DbGBtH8P1aA',
    kind: 'post',
    date: '2026-07-22',
    title: 'Confidence beyond the classroom',
    summary:
      'Congratulations to our medal winners at the All Kerala Kick Boxing Championship.',
    image: '/assets/instagram/DbGBtH8P1aA.webp',
    width: 512,
    height: 640,
  },
  {
    id: 'DcSwwAFGUp5',
    kind: 'post',
    date: '2026-08-21',
    title: 'The colours of Onam',
    summary:
      'A festive greeting celebrating the traditions that bring Onam to life.',
    image: '/assets/instagram/DcSwwAFGUp5.webp',
    width: 481,
    height: 640,
  },
  {
    id: 'Dbm1a8Ymb8B',
    kind: 'post',
    date: '2026-08-03',
    title: 'A little monsoon magic',
    summary:
      'A rainy-day greeting about friendship and the small joys of childhood.',
    image: '/assets/instagram/Dbm1a8Ymb8B.webp',
    width: 481,
    height: 640,
  },
];

export function instagramPostUrl(story: InstagramStory) {
  return `${instagramProfile.url}${story.kind === 'reel' ? 'reel' : 'p'}/${story.id}/`;
}
