import { siteUrl } from '@/lib/site-url';
import { pageMetadata, siteName } from '@/lib/seo';
import { SchoolStructuredData } from '@/components/school-structured-data';
import { AnalyticsEvents } from '@/components/analytics-events';
import { introBootstrap } from '@/lib/intro-bootstrap';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  ...pageMetadata({
    title: 'Apex International School | CBSE School in Kozhikode, Kerala',
    description:
      'Apex International School is a CBSE-affiliated school in Odumbra, Olavanna, Kozhikode, established in 2005. Explore results, activities and school life, and arrange a visit.',
    path: '/',
    shareTitle: 'Apex International School | Kozhikode, Kerala',
    shareDescription:
      'A CBSE school in Kozhikode since 2005. Explore results, activities and life at Apex.',
  }),
  applicationName: siteName,
  robots: { index: true, follow: true },
  icons: { icon: { url: '/assets/apex-logo.svg', type: 'image/svg+xml' } },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introBootstrap }} />
        <script
          defer
          src="https://analytics.amrniyaz.com/script.js"
          data-website-id="d0774aeb-c5fd-45f0-befa-0a6147ee6c9a"
        />
      </head>
      <body>
        <SchoolStructuredData />
        <AnalyticsEvents />
        {children}
      </body>
    </html>
  );
}
