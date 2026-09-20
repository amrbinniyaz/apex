import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { activities, activityHref, getActivity } from '@/lib/activities';
import { ActivityPage } from '@/components/activity-page';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return activities.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const activity = getActivity((await params).slug);
  if (!activity)
    return { title: 'Activity not found', robots: { index: false } };
  const title = `${activity.name} in Kozhikode | Apex International School`;
  return {
    title,
    description: activity.description,
    alternates: { canonical: activityHref(activity.slug) },
    openGraph: {
      title,
      description: activity.description,
      url: activityHref(activity.slug),
      type: 'website',
      siteName: 'Apex International School',
      locale: 'en_IN',
    },
  };
}
export default async function Page({ params }: Props) {
  const activity = getActivity((await params).slug);
  if (!activity) notFound();
  return <ActivityPage activity={activity} />;
}
