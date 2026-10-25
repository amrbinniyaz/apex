import { ArrowUpRight } from 'lucide-react';
import { ContentFacts } from '@/components/content-page-blocks';
import { SiteLink } from '@/components/site-link';
import { schoolFacts } from '@/lib/content-pages';
import { resultsYear, schoolToppers } from '@/lib/results';

// Confirmed school facts plus the published Class X results.
const homeFacts = [
  ...schoolFacts.filter((fact) => fact.label !== 'Location'),
  { value: '100%', label: `Class X results, ${resultsYear}` },
  { value: `${schoolToppers[0].score}%`, label: 'Class X school topper' },
];

export function SchoolFacts() {
  return (
    <ContentFacts
      className="home-facts"
      facts={homeFacts}
      intro="A CBSE-affiliated school in Odumbra, Olavanna, Kozhikode, since 2005."
      action={
        <SiteLink className="apex-text-link" href="/results">
          See our results <ArrowUpRight size={20} aria-hidden="true" />
        </SiteLink>
      }
    />
  );
}
