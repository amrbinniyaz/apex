import type { Metadata } from 'next';
import { AdmissionsPage } from '@/components/admissions-page';

export const metadata: Metadata = {
  title: 'Visit Us | Apex International School',
  description: 'Get a feel for life at Apex International School in Kozhikode. Plan a visit, ask your questions and find your way to our campus.',
};
export default function VisitUs() { return <AdmissionsPage kind="visit" />; }
