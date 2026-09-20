import { deliveryConfigured } from '@/lib/enquiry';
import Link from 'next/link';
import { school } from '@/lib/school';
import { SchoolImage as Image } from '@/components/school-image';
import { ArrowDown, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SchoolDoodle } from '@/components/school-doodle';
import { EnquiryForm } from '@/components/enquiry-form';
import { InstagramStories } from '@/components/instagram-stories';
import { ContentFeature, ContentFacts } from '@/components/content-page-blocks';

const directions = school.directions;

export function AdmissionsPage({
  kind,
  initialMessage = '',
}: {
  kind: 'visit' | 'apply';
  initialMessage?: string;
}) {
  const visiting = kind === 'visit';
  const directSubmission = deliveryConfigured({
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.ENQUIRY_FROM_EMAIL,
    to: process.env.ENQUIRY_TO_EMAIL,
  });
  const steps = visiting
    ? [
        [
          'Send an enquiry',
          'Tell us a little about your family and what you’d like to discover.',
        ],
        [
          'Find a time',
          'Contact the school to agree a visit date that works for you.',
        ],
        [
          'Visit the school',
          'Explore the campus and discuss your questions with the school.',
        ],
      ]
    : [
        [
          'Enquire about a place',
          'Share the class you’re interested in and when you hope to join.',
        ],
        [
          'Explore the details',
          'Ask the school about places, fees and the documents you’ll need.',
        ],
        [
          'Complete your application',
          'The school will guide you through its application process.',
        ],
      ];
  const faqs = visiting
    ? [
        [
          'How do I arrange a visit?',
          'Use the enquiry form below to contact the school, or call us. Please agree your date and time with the school before travelling.',
        ],
        [
          'Can my child come along?',
          'Let the school know who would like to join you when you enquire, so the team can help plan your visit.',
        ],
        [
          'What should I ask about?',
          'Bring the questions that matter to your family—from the school day and classroom learning to activities, transport and admissions.',
        ],
      ]
    : [
        [
          'Is this the complete application?',
          'This form starts an admissions enquiry. The school can confirm availability and explain how to complete a formal application.',
        ],
        [
          'Where can I find fees and entry requirements?',
          'Ask the school for the current fee details, class availability and entry requirements for your child. You can include these questions in your enquiry.',
        ],
        [
          'Can we visit before applying?',
          'Of course you can enquire about a visit first. Head to our Visit Us page or contact the school to discuss a suitable time.',
        ],
      ];

  return (
    <div
      className={`admissions-page ${visiting ? 'ad-visit' : 'ad-apply'}`}
      id="top"
    >
      <Link className="skip-link" href="#page-content">
        Skip to content
      </Link>
      <SiteHeader current={kind} photo />
      <main id="page-content">
        <section
          className="ad-photographic-hero"
          aria-labelledby="ad-page-title"
        >
          <Image
            className="ad-page-photo"
            preload
            loading="eager"
            src={
              visiting
                ? '/assets/apex-video-campus.jpg'
                : '/assets/apex-campus-source.jpg'
            }
            alt={
              visiting
                ? 'Apex International School campus in Kozhikode'
                : 'Apex pupils exploring together in the science laboratory'
            }
            width={visiting ? 1179 : 1200}
            height={visiting ? 714 : 900}
            fetchPriority="high"
          />
          <div className="ad-page-photo-shade" aria-hidden="true" />
          <div className="ad-page-title-group">
            <nav className="ad-page-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>{visiting ? 'Visit us' : 'Admissions'}</span>
            </nav>
            <h1 id="ad-page-title">
              {visiting ? 'Visit Apex.' : 'Admissions.'}
            </h1>
            <p>
              {visiting
                ? 'Explore the campus and meet our school community.'
                : 'Information for families considering Apex.'}
            </p>
          </div>
          <Link
            className="ad-hero-anchor"
            href="#introduction"
            aria-label="Explore this page"
          >
            <ArrowDown size={23} strokeWidth={1.5} />
          </Link>
        </section>
        <nav className="ad-page-sections" aria-label="On this page">
          <span>{visiting ? 'Your visit' : 'Admissions'}</span>
          <Link href="#introduction">Overview</Link>
          <Link href="#enquire">{visiting ? 'Plan a visit' : 'Enquire'}</Link>
          <Link href="#next-steps">Next steps</Link>
          <Link href="#questions">Your questions</Link>
          {visiting && <Link href="#getting-here">Getting here</Link>}
          <Link href="#apex-stories">Our stories</Link>
        </nav>
        <section className="ad-page-intro" id="introduction">
          <h2>{visiting ? 'Plan a school visit' : 'Enquire about a place'}</h2>
          <p className="ad-intro-copy">
            {visiting
              ? 'Arrange a visit to explore the campus and discuss classroom learning, activities and admissions with the school.'
              : 'Tell us the class you are interested in and your preferred start date. The school can explain availability, fees and the application process.'}
          </p>
          <Link className="ad-button apex-cta" href="#enquire">
            {visiting ? 'Arrange a visit' : 'Enquire about admission'}{' '}
            <ArrowDown size={18} />
          </Link>
        </section>
        <ContentFeature kind={kind} />
        <ContentFacts />
        <section
          className="ad-enquiry"
          id="enquire"
          aria-label={visiting ? 'Visit enquiry' : 'Admissions enquiry'}
        >
          <aside className="ad-enquiry-aside">
            <h2>{visiting ? 'Arrange your visit' : 'Admissions enquiry'}</h2>
            <p>
              {visiting
                ? 'Share a preferred date and what you would like to see. Please wait for the school to confirm your visit before travelling.'
                : 'Share your child’s class, preferred start date and any questions about fees or the application process.'}
            </p>
            <div className="ad-personal-contact">
              <span>Prefer a conversation?</span>
              <Link href={school.phoneHref}>
                <Phone size={18} /> {school.phone}
              </Link>
              <Link href={`mailto:${school.email}`}>
                <Mail size={18} /> Email the school
              </Link>
            </div>
            <SchoolDoodle kind="arrow-left" className="ad-quiet-arrow" />
          </aside>
          <EnquiryForm
            kind={kind}
            directSubmission={directSubmission}
            initialMessage={initialMessage}
          />
        </section>
        <section
          className="ad-journey"
          id="next-steps"
          aria-labelledby="journey-title"
        >
          <div className="ad-section-heading">
            <h2 id="journey-title">
              {visiting ? 'How to arrange a visit' : 'The admissions process'}
            </h2>
            <p className="ad-process-note">
              {visiting
                ? 'Contact the school to agree a date and discuss what you would like to see.'
                : 'Begin with an enquiry. The school can then confirm class availability and guide your family through the formal application requirements.'}
            </p>
          </div>
          <ol>
            {steps.map(([title, copy], index) => (
              <li key={title}>
                <span className="ad-step-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="ad-practical" id="questions">
          <div>
            <h2>Frequently asked questions</h2>
          </div>
          <div className="ad-faqs">
            {faqs.map(([question, answer]) => (
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
        {visiting && (
          <section className="ad-location" id="getting-here">
            <div>
              <MapPin size={26} strokeWidth={1.4} />
              <h2>Getting here</h2>
              <address>
                Odumbra, Olavanna P.O.
                <br />
                Kozhikode, Kerala 673025, India
              </address>
              <Link
                className="ad-button apex-cta"
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions <ArrowUpRight size={18} />
              </Link>
            </div>
            <Image
              src="/assets/apex-campus-pencil.png"
              alt="Pencil illustration of the Apex school campus"
              width="1672"
              height="941"
              loading="lazy"
            />
          </section>
        )}
        <InstagramStories />
      </main>
      <SiteFooter />
    </div>
  );
}
