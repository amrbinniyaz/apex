import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { deliveryConfigured } from '@/lib/enquiry';
import { school } from '@/lib/school';
import { admissionsDetails, admissionsGlance } from '@/lib/admissions';
import { schoolAchievements } from '@/lib/achievements';
import { resultsYear, schoolToppers } from '@/lib/results';
import { faqData } from '@/lib/seo';
import { ContentPageHero } from '@/components/content-page-hero';
import { EnquiryForm } from '@/components/enquiry-form';
import { InstagramStories } from '@/components/instagram-stories';
import { JsonLd } from '@/components/json-ld';
import { SchoolImage } from '@/components/school-image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SiteLink } from '@/components/site-link';

const steps = [
  [
    'Send an enquiry',
    'Tell us your child’s current class and when you hope to join.',
  ],
  [
    'Talk to the school',
    'The school confirms availability and explains fees, documents and any assessment.',
  ],
  [
    'Visit and apply',
    'See the campus, then complete the application with the school’s guidance.',
  ],
];

const topper = schoolToppers[0];
const kickBoxing = schoolAchievements.find((achievement) =>
  achievement.title.includes('Kick Boxing'),
)!;

const proof = [
  { value: '100%', label: `CBSE Class X results, ${resultsYear}` },
  { value: `${topper.score}%`, label: `School topper, ${topper.name}` },
  { value: kickBoxing.result, label: kickBoxing.title },
];

const faqs = [
  {
    question: 'Is Apex International School affiliated to CBSE?',
    answer:
      'Yes. Apex is a CBSE-affiliated school in Odumbra, Olavanna, Kozhikode, established in 2005.',
  },
  admissionsDetails.documents.length > 0 && {
    question: 'Which documents do we need?',
    answer: `${admissionsDetails.documents.join(', ')}. The school will confirm anything else needed for your child’s class.`,
  },
  admissionsDetails.assessment && {
    question: 'Is there an entrance assessment?',
    answer: admissionsDetails.assessment,
  },
  admissionsDetails.transport && {
    question: 'Is school transport available?',
    answer: admissionsDetails.transport,
  },
  {
    question: 'Is this form the complete application?',
    answer:
      'No. The form starts an admissions enquiry. The school then confirms availability and explains how to complete the formal application.',
  },
  {
    question: 'How do we find out about fees?',
    answer: `Ask in your enquiry, call ${school.phone} or email ${school.email}. The school shares current fees for the class you are considering.`,
  },
  {
    question: 'Can we visit before applying?',
    answer:
      'Yes. Arrange a visit through the Visit Us page or by calling the school, and agree a date before travelling.',
  },
].filter((faq): faq is { question: string; answer: string } => Boolean(faq));

export function ApplyPage() {
  const directSubmission = deliveryConfigured({
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.ENQUIRY_FROM_EMAIL,
    to: process.env.ENQUIRY_TO_EMAIL,
  });
  return (
    <div className="admissions-page ad-apply" id="top">
      <SiteLink className="skip-link" href="#page-content">
        Skip to content
      </SiteLink>
      <SiteHeader current="apply" photo />
      <main id="page-content">
        <ContentPageHero
          title="Admissions"
          description="Join a CBSE school in Kozhikode."
          image="/assets/apex-campus-source.jpg"
          alt="Apex pupils exploring together in the science laboratory"
          breadcrumbs={[{ label: 'Admissions' }]}
          nextSection="#joining-apex"
        />
        <nav className="ad-page-sections" aria-label="On this page">
          <span>Admissions</span>
          <SiteLink href="#joining-apex">Overview</SiteLink>
          <SiteLink href="#enquire">Enquire</SiteLink>
          <SiteLink href="#apex-results">Results</SiteLink>
          <SiteLink href="#questions">Questions</SiteLink>
          <SiteLink href="#apex-stories">Our stories</SiteLink>
        </nav>

        <section
          className="apply-overview"
          id="joining-apex"
          aria-labelledby="joining-title"
        >
          <div className="apply-overview-copy">
            <h2 id="joining-title">Joining Apex</h2>
            <p>
              Apex International School is a CBSE-affiliated school in Odumbra,
              Olavanna, Kozhikode. Admission starts with an enquiry, and the
              school guides each family through availability, fees and the
              application.
            </p>
            <dl className="apply-glance">
              {admissionsGlance.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            {admissionsDetails.documents.length > 0 && (
              <div className="apply-documents">
                <h3>Documents to prepare</h3>
                <ul>
                  {admissionsDetails.documents.map((document) => (
                    <li key={document}>{document}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="apply-steps">
            <h3>How admission works</h3>
            <ol>
              {steps.map(([title, copy]) => (
                <li key={title}>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="ad-enquiry apply-enquiry"
          id="enquire"
          aria-labelledby="apply-enquiry-title"
        >
          <aside className="apply-enquiry-aside">
            <h2 id="apply-enquiry-title">Enquire about admission</h2>
            <p>
              Share your child’s class and preferred start date. The school
              replies with availability and next steps.
            </p>
            <div className="apply-contact">
              <span>Prefer to talk?</span>
              <SiteLink href={school.phoneHref}>
                <Phone size={18} aria-hidden="true" /> {school.phone}
              </SiteLink>
              <SiteLink href={`mailto:${school.email}`}>
                <Mail size={18} aria-hidden="true" /> {school.email}
              </SiteLink>
            </div>
            <SiteLink className="apex-text-link" href="/visit-us">
              Visit the school first{' '}
              <ArrowUpRight size={20} aria-hidden="true" />
            </SiteLink>
          </aside>
          <EnquiryForm kind="apply" directSubmission={directSubmission} />
        </section>

        <section
          className="apply-proof"
          id="apex-results"
          aria-labelledby="apply-proof-title"
        >
          <figure className="apply-proof-photo">
            <SchoolImage
              src="/assets/results/class-of-2026.webp"
              alt="The Apex Class X batch of 2025–26 with school staff"
              width={1512}
              height={591}
              sizes="(max-width: 767px) calc(100vw - 48px), 88vw"
              loading="lazy"
            />
            <figcaption>
              The Class X batch of {resultsYear} with staff
            </figcaption>
          </figure>
          <div className="apply-proof-copy">
            <h2 id="apply-proof-title">Results and achievements</h2>
            <dl>
              {proof.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <SiteLink className="apex-text-link" href="/results">
              See the full results <ArrowUpRight size={20} aria-hidden="true" />
            </SiteLink>
          </div>
        </section>

        <section
          className="ad-practical"
          id="questions"
          aria-labelledby="apply-questions-title"
        >
          <JsonLd nodes={[faqData(faqs)]} />
          <div>
            <h2 id="apply-questions-title">Frequently asked questions</h2>
          </div>
          <div className="ad-faqs">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
        <InstagramStories />
      </main>
      <SiteFooter />
    </div>
  );
}
