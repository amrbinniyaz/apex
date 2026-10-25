import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site-url';

export const siteName = 'Apex International School';

// Default 1200×630 preview for links shared on social and messaging apps.
export const shareImage = {
  url: '/assets/apex-share.jpg',
  width: 1200,
  height: 630,
  alt: 'An Apex teacher and pupil displaying a handmade flower artwork in the art room',
};

type ShareImage = { url: string; width?: number; height?: number; alt: string };

/** Page metadata with matching canonical, Open Graph and Twitter fields. */
export function pageMetadata({
  title,
  description,
  path,
  shareTitle = title,
  shareDescription = description,
  image = shareImage,
}: {
  title: string;
  description: string;
  path: string;
  shareTitle?: string;
  shareDescription?: string;
  image?: ShareImage;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName,
      locale: 'en_IN',
      title: shareTitle,
      description: shareDescription,
      url: path,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: shareDescription,
      images: [image.url],
    },
  };
}

// The current page is the last item; schema.org allows it without a URL.
export function breadcrumbData(items: { label: string; href?: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ label: 'Home', href: '/' }, ...items].map(
      (item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(item.href ? { item: siteUrl(item.href) } : {}),
      }),
    ),
  };
}

export function faqData(questions: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: questions.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}
