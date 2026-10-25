import { HomeExperience } from '@/components/home/home-experience';
import { SchoolDiscovery } from '@/components/home/school-discovery';
import { SchoolFacts } from '@/components/home/school-facts';
import { SchoolStages } from '@/components/home/school-stages';
import { SchoolLife } from '@/components/home/school-life';
import { VisitInvitation } from '@/components/home/visit-invitation';

export default function Home() {
  return (
    <HomeExperience>
      <SchoolDiscovery />
      <SchoolFacts />
      <SchoolStages />
      <SchoolLife />
      <VisitInvitation />
    </HomeExperience>
  );
}
