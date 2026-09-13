import type { Metadata } from 'next';
import { AdmissionsPage } from '@/components/admissions-page';

export const metadata: Metadata = {
  title: 'Apply Now | Apex International School',
  description: 'Start an admissions conversation with Apex International School in Kozhikode. Enquire about joining the school and your child’s next chapter.',
};
export default function ApplyNow() { return <AdmissionsPage kind="apply" />; }
