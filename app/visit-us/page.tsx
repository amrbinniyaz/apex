import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { AdmissionsPage } from '@/components/admissions-page';
import { getActivity } from '@/lib/activities';

export const metadata: Metadata = pageMetadata({
  title: 'Visit Us | Apex International School, Kozhikode',
  description:
    'Plan a visit to Apex International School in Odumbra, Olavanna, Kozhikode. Ask your questions, explore the campus and get directions.',
  path: '/visit-us',
  shareTitle: 'Visit Us | Apex International School',
  shareDescription:
    'Contact Apex International School in Kozhikode to arrange a school visit.',
});
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
