import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { ContentPageHero } from '@/components/content-page-hero';
import { SchoolGallery } from '@/components/school-gallery';
import { SchoolImage } from '@/components/school-image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SiteLink } from '@/components/site-link';
import {
  perfectSubjectScores,
  resultsYear,
  schoolToppers,
} from '@/lib/results';

export const metadata: Metadata = {
  title: 'Results & Achievements 2025–26 | Apex International School',
  description:
    'Explore Apex International School’s CBSE Class X AISSE 2025–26 results, school toppers and perfect subject scores. View the original results posters.',
  alternates: { canonical: '/results' },
  openGraph: {
    title: 'Results & Achievements | Apex International School',
    description:
      'CBSE Class X AISSE 2025–26: school results and student achievements.',
    url: '/results',
    images: [
      {
        url: '/assets/results/class-of-2026.webp',
        width: 1512,
        height: 591,
        alt: 'Apex Class X pupils and staff, 2025–26',
      },
    ],
  },
};

export default function ResultsPage() {
  return (
    <div className="results-page" id="top">
      <a className="skip-link" href="#results-content">
        Skip to content
      </a>
      <SiteHeader photo />
      <main id="results-content">
        <ContentPageHero
          title="Results & Achievements"
          description={`CBSE Class X · AISSE ${resultsYear}`}
          image="/assets/results/class-of-2026.webp"
          alt="The Apex Class X batch of 2025–26 with school staff"
          breadcrumbs={[{ label: 'Results & Achievements' }]}
          nextSection="#results-overview"
        />
        <nav className="ad-page-sections" aria-label="On this page">
          <span>{resultsYear}</span>
          <SiteLink href="#school-toppers">School toppers</SiteLink>
          <SiteLink href="#subject-achievements">Subject achievements</SiteLink>
          <SiteLink href="#gallery-results">Results posters</SiteLink>
        </nav>
        <section
          className="results-overview results-section"
          id="results-overview"
          aria-labelledby="results-overview-title"
        >
          <div className="results-overview-number">
            100<span>%</span>
          </div>
          <div>
            <h2 id="results-overview-title">Class X results</h2>
            <p>
              Congratulations to the {resultsYear} batch, and to the teachers
              and families who supported them.
            </p>
            <a
              className="results-text-link"
              href="/documents/results/class-results-2025-26.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the school’s announcement (PDF){' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
        <section
          className="results-section results-toppers"
          id="school-toppers"
          aria-labelledby="school-toppers-title"
        >
          <div className="results-section-heading">
            <h2 id="school-toppers-title">Our school toppers</h2>
            <p>Overall scores · CBSE Class X, {resultsYear}</p>
          </div>
          <div className="results-topper-grid">
            {schoolToppers.map((student) => (
              <article className="results-student-card" key={student.name}>
                <p className="results-rank">{student.rank}</p>
                <SchoolImage
                  src={student.image}
                  alt={student.name}
                  width={330}
                  height={330}
                  sizes="160px"
                  loading="lazy"
                />
                <h3>{student.name}</h3>
                <p className="results-score">
                  {student.score}
                  <span>%</span>
                </p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="results-subject-section"
          id="subject-achievements"
          aria-labelledby="subject-achievements-title"
        >
          <div className="results-section">
            <div className="results-section-heading">
              <h2 id="subject-achievements-title">Perfect subject scores</h2>
              <p>Pupils who achieved 100% in a subject.</p>
            </div>
            <div className="results-subject-grid">
              {perfectSubjectScores.map((result) => (
                <article className="results-subject-card" key={result.subject}>
                  <div className="results-subject-heading">
                    <h3>{result.subject}</h3>
                    <span>100%</span>
                  </div>
                  <ul>
                    {result.students.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <SchoolGallery album="results" itemLabel="posters" />
        <section
          className="results-visit results-section"
          aria-labelledby="results-visit-title"
        >
          <h2 id="results-visit-title">Explore learning at Apex</h2>
          <p>
            Visit the school to discuss classroom learning and the next steps
            for your child.
          </p>
          <SiteLink className="apex-cta" href="/visit-us#enquire">
            Arrange a visit <ArrowUpRight size={21} aria-hidden="true" />
          </SiteLink>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
