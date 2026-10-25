import { schoolAchievements } from '@/lib/achievements';
import {
  perfectSubjectScores,
  resultsYear,
  schoolToppers,
} from '@/lib/results';

const joinList = (items: string[]) =>
  `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`;

export type NewsArticle = {
  slug: string;
  /** ISO publication date of the school's announcement, when known. */
  date?: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  caption: string;
  body: string[];
  /** Plain facts listed beneath the story, e.g. topper scores. */
  facts?: { label: string; value: string }[];
  source: { label: string; href: string };
};

// Every story restates school-supplied announcements already used on the site.
const resultsStory: NewsArticle = {
  slug: 'cbse-class-x-results-2025-26',
  category: 'Results',
  title: `100% results in CBSE Class X, ${resultsYear}`,
  summary: `Apex celebrates 100% results in the CBSE Class X (AISSE) examination for ${resultsYear}, with a school topper score of ${schoolToppers[0].score}%.`,
  image: '/assets/results/class-of-2026.webp',
  alt: `The Apex Class X batch of ${resultsYear} with school staff`,
  caption: `The Class X batch of ${resultsYear} with staff`,
  body: [
    `Apex International School achieved 100% results in the CBSE Class X (AISSE) examination for ${resultsYear}. Congratulations to the batch, and to the teachers and families who supported them.`,
    `${schoolToppers[0].name} topped the school with ${schoolToppers[0].score}%, followed by ${schoolToppers[1].name} with ${schoolToppers[1].score}% and ${schoolToppers[2].name} with ${schoolToppers[2].score}%. Pupils also achieved perfect scores in ${joinList(perfectSubjectScores.map((score) => score.subject))}.`,
  ],
  facts: schoolToppers.map((student) => ({
    label: `${student.rank}: ${student.name}`,
    value: `${student.score}%`,
  })),
  source: { label: 'See the full results', href: '/results' },
};

const achievementStories: NewsArticle[] = schoolAchievements.map(
  (achievement) => ({
    slug: achievement.slug,
    date: achievement.date,
    category: 'Achievement',
    title: `${achievement.result.replace(' · ', ' and ')} at the ${achievement.title}`,
    summary: achievement.description,
    image: achievement.image,
    alt: achievement.alt,
    caption: achievement.caption,
    body: [achievement.description],
    source: {
      label: 'View the school’s announcement',
      href: achievement.source,
    },
  }),
);

// Transcribed from the school's Instagram announcements; dates come from the
// post IDs. Portraits are crops of the school's own posters.
const instagramStories: NewsArticle[] = [
  {
    slug: 'amina-faiza-arabic-recitation',
    date: '2026-10-22',
    category: 'Achievement',
    title: 'Third prize in Arabic Recitation at the Sahodaya Kalotsav',
    summary:
      'Amina Faiza A of Class X-A won third prize with an A grade in Arabic Recitation (Category III) at the Malabar Sahodaya District Kalotsav.',
    image: '/assets/news/amina-faiza-arabic-recitation.webp',
    alt: 'Amina Faiza A, Class X-A, Apex International School',
    caption: 'Amina Faiza A, Class X-A',
    body: [
      'Congratulations to Amina Faiza A of Class X-A, who won third prize with an A grade in Arabic Recitation (Category III) at the Malabar Sahodaya District Kalotsav.',
    ],
    source: {
      label: 'View the school’s announcement',
      href: 'https://www.instagram.com/p/DeyxS6tNd5C/',
    },
  },
  {
    slug: 'sravana-nair-light-music',
    date: '2026-10-22',
    category: 'Achievement',
    title: 'Second prize in Light Music at the Sahodaya Kalotsav 2026',
    summary:
      'Sravana Nair H C of Class X-B won second prize in Light Music at the Malabar Sahodaya District Kalotsav 2026.',
    image: '/assets/news/sravana-nair-light-music.webp',
    alt: 'Sravana Nair H C, Class X-B, Apex International School',
    caption: 'Sravana Nair H C, Class X-B',
    body: [
      'Congratulations to Sravana Nair H C of Class X-B on securing second prize in Light Music at the Malabar Sahodaya District Kalotsav 2026.',
    ],
    source: {
      label: 'View the school’s announcement',
      href: 'https://www.instagram.com/p/DeyvqtVvqYS/',
    },
  },
];

/** Dated stories first, newest at the top; undated results follow. */
export const newsArticles: NewsArticle[] = [
  ...[...instagramStories, ...achievementStories].sort((a, b) =>
    (b.date ?? '').localeCompare(a.date ?? ''),
  ),
  resultsStory,
];

export const newsHref = (slug: string) => `/news/${slug}`;

export const getNewsArticle = (slug: string) =>
  newsArticles.find((article) => article.slug === slug);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Formats an ISO date as "22 October 2026" (or "22 Oct 2026" when short).
 * Avoids Intl so server and browser render identical text during hydration.
 */
export function formatNewsDate(date: string, short = false) {
  const [year, month, day] = date.split('-').map(Number);
  const name = months[month - 1];
  return `${day} ${short ? name.slice(0, 3) : name} ${year}`;
}
