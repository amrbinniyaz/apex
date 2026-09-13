import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Apex International School | Find your spark. Make it shine.',
  description: 'Find your spark at Apex International School in Kozhikode, Kerala. A place to wonder, learn and grow.',
  robots: { index: false, follow: false },
  icons: { icon: { url: '/assets/apex-logo.svg', type: 'image/svg+xml' } },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
