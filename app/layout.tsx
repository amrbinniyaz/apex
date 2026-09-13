import { siteUrl } from '@/lib/site-url';
import { SchoolStructuredData } from '@/components/school-structured-data';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Apex International School',
    locale: 'en_IN',
    title: 'Apex International School | Kozhikode, Kerala',
    description:
      'A place to wonder, learn and grow. Explore Apex International School in Kozhikode, Kerala.',
    url: '/',
  },
  title: 'Apex International School | Find your spark. Make it shine.',
  description:
    'Find your spark at Apex International School in Kozhikode, Kerala. A place to wonder, learn and grow.',
  robots: { index: true, follow: true },
  icons: { icon: { url: '/assets/apex-logo.svg', type: 'image/svg+xml' } },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SchoolStructuredData />
        {children}
      </body>
    </html>
  );
}
