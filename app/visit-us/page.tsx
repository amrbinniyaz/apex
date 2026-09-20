import type { Metadata } from 'next';
import { AdmissionsPage } from '@/components/admissions-page';
import { getActivity } from '@/lib/activities';

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
export default async function VisitUs({
  searchParams,
}: {
  searchParams: Promise<{ activity?: string | string[] }>;
}) {
  const selected = (await searchParams).activity;
  const activity =
    typeof selected === 'string' ? getActivity(selected) : undefined;
  return (
    <AdmissionsPage
      kind="visit"
      initialMessage={
        activity
          ? `I would like to learn more about ${activity.name} for my child during our school visit.`
          : ''
      }
    />
  );
}
