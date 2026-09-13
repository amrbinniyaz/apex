import type { Metadata } from 'next';
import { AdmissionsPage } from '@/components/admissions-page';

export const metadata: Metadata = {
  alternates: { canonical: '/visit-us' },
  openGraph: {
    title: 'Visit Us | Apex International School',
    description:
      'Contact Apex International School in Kozhikode to arrange a school visit.',
    url: '/visit-us',
    type: 'website',
    siteName: 'Apex International School',
    locale: 'en_IN',
  },
  title: 'Visit Us | Apex International School',
  description:
    'Get a feel for life at Apex International School in Kozhikode. Plan a visit, ask your questions and find your way to our campus.',
};
export default function VisitUs() {
  return <AdmissionsPage kind="visit" />;
}
