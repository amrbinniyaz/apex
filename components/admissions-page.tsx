import { deliveryConfigured } from '@/lib/enquiry';
import Link from 'next/link';
import { school } from '@/lib/school';
import { SchoolImage as Image } from '@/components/school-image';
import { ArrowDown, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SchoolDoodle } from '@/components/school-doodle';
import { EnquiryForm } from '@/components/enquiry-form';

const directions = school.directions;

export function AdmissionsPage({ kind }: { kind: 'visit' | 'apply' }) {
  const visiting = kind === 'visit';
  const directSubmission = deliveryConfigured({
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.ENQUIRY_FROM_EMAIL,
    to: process.env.ENQUIRY_TO_EMAIL,
  });
  const steps = visiting
    ? [
        [
          'Say hello',
          'Tell us a little about your family and what you’d like to discover.',
        ],
        [
          'Find a time',
          'Contact the school to agree a visit date that works for you.',
        ],
        [
          'Bring your curiosity',
          'Come with your questions, explore the school and imagine your child here.',
        ],
      ]
    : [
        [
          'Start a conversation',
          'Share the class you’re interested in and when you hope to join.',
        ],
        [
          'Explore the details',
          'Ask the school about places, fees and the documents you’ll need.',
        ],
        [
          'Take your next step',
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
              {visiting ? 'Visit Apex.' : 'Begin at Apex.'}
            </h1>
            <p>
              {visiting
                ? 'See where their story could begin.'
                : 'A new chapter. A world of possibility.'}
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
        </nav>
        <section className="ad-page-intro" id="introduction">
          <p className="ad-hand">
            {visiting
              ? 'A school, experienced in person'
              : 'Your child. Their possibilities.'}
          </p>
          <h2>
            {visiting
              ? 'A sense of place.\nA feeling of belonging.'
              : 'An important decision,\nmade with confidence.'}
          </h2>
          <p className="ad-intro-copy">
            {visiting
              ? 'There is only so much a website can tell you. Come and explore our campus, ask your questions and discover what life at Apex could feel like for your child.'
              : 'Every child’s journey is different. Tell us about your family, explore what Apex has to offer and get the guidance you need to take the next step.'}
          </p>
          <Link className="ad-button apex-cta" href="#enquire">
            {visiting ? 'Arrange a visit' : 'Enquire about admission'}{' '}
            <ArrowDown size={18} />
          </Link>
          <span className="ad-intro-note">
            {visiting
              ? 'Odumbra, Olavanna · Kozhikode, Kerala'
              : 'A conversation is a good place to start.'}
          </span>
        </section>
        <section
          className="ad-enquiry"
          id="enquire"
          aria-label={visiting ? 'Visit enquiry' : 'Admissions enquiry'}
        >
          <aside className="ad-enquiry-aside">
            <p className="ad-hand">
              {visiting ? 'Plan your visit' : 'Begin your enquiry'}
            </p>
            <h2>
              {visiting ? (
                <>
                  Discover whether
                  <br />
                  Apex feels right.
                </>
              ) : (
                <>
                  Let’s discuss
                  <br />
                  their future.
                </>
              )}
            </h2>
            <p>
              {visiting
                ? 'Tell us what matters to your family. We’ll help you explore the school and the questions you’d like answered.'
                : 'Share your plans and ask about class availability, fees or the application process. Your enquiry is the start of a conversation.'}
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
          <EnquiryForm kind={kind} directSubmission={directSubmission} />
        </section>
        <section
          className="ad-journey"
          id="next-steps"
          aria-labelledby="journey-title"
        >
          <div className="ad-section-heading">
            <p className="ad-hand">What happens next</p>
            <h2 id="journey-title">
              {visiting
                ? 'Get to know\nyour next chapter.'
                : 'A clear path,\none step at a time.'}
            </h2>
            <p className="ad-process-note">
              {visiting
                ? 'A visit is a chance to ask, explore and find your own sense of the school. Here’s how to get started.'
                : 'Begin with an enquiry. The school can then confirm class availability and guide your family through the formal application requirements.'}
            </p>
            <Link className="ad-text-link" href="#enquire">
              {visiting ? 'Plan your visit' : 'Start an enquiry'}{' '}
              <ArrowUpRight size={18} />
            </Link>
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
            <p className="ad-hand">Useful information</p>
            <h2>Your questions, answered.</h2>
            {!visiting && (
              <Link className="ad-text-link" href="/visit-us">
                Explore a campus visit <ArrowUpRight size={18} />
              </Link>
            )}
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
              <p className="ad-hand">Getting here</p>
              <h2>We look forward to welcoming you.</h2>
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
        <section className="ad-crosslink">
          <p>{visiting ? 'Your next step' : 'Get to know us'}</p>
          <Link href={visiting ? '/apply-now' : '/visit-us'}>
            {visiting
              ? 'Explore admission to Apex.'
              : 'Experience the school in person.'}{' '}
            <ArrowUpRight />
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
