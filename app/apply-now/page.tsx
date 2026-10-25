import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { ApplyPage } from '@/components/apply-page';

export const metadata: Metadata = pageMetadata({
  title: 'Admissions in Kozhikode | Apex International School',
  description:
    'Start an admissions enquiry with Apex International School, a CBSE school in Kozhikode. Ask about class availability, fees and the application process.',
  path: '/apply-now',
  shareTitle: 'Admissions | Apex International School',
  shareDescription:
    'Contact Apex International School in Kozhikode to enquire about admissions.',
});
export default function ApplyNow() {
  return <ApplyPage />;
}
