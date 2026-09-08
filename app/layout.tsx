import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'The Portsmouth Grammar School | Inspiring the best in you',
  description: 'Discover The Portsmouth Grammar School, an independent co-educational day school in the heart of Portsmouth. A homepage design study.',
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
