import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { ArrowUpRight } from 'lucide-react';
import { ContentFacts } from '@/components/content-page-blocks';
import { ContentPageHero } from '@/components/content-page-hero';
import { SchoolImage } from '@/components/school-image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SiteLink } from '@/components/site-link';
import {
  perfectSubjectScores,
  resultsYear,
  schoolToppers,
} from '@/lib/results';
import { schoolAchievements } from '@/lib/achievements';
import { activities, activityHref } from '@/lib/activities';
import { school } from '@/lib/school';
import { JsonLd } from '@/components/json-ld';
import { faqData } from '@/lib/seo';
import './about.css';

export const metadata: Metadata = pageMetadata({
  title: 'About Apex | CBSE School in Kozhikode | Apex International School',
  description:
    'Get to know Apex International School, a CBSE-affiliated school in Kozhikode since 2005. Read our welcome and explore learning, pupil achievements and activities.',
  path: '/about',
  shareTitle: 'About Apex | Apex International School',
  shareDescription:
    'A welcome to our school, and a closer look at learning and life at Apex.',
  image: {
    url: '/assets/apex-cinematic-source.jpg',
    alt: 'Pupils learning together at Apex',
  },
});

const joinList = (items: string[]) =>
  `${items.slice(0, -1).join(', ')} and ${items.at(-1)}`;
const perfectSubjects = joinList(
  perfectSubjectScores.map((score) => score.subject),
);

// Answers use confirmed school facts, published results and activity names only.
const aboutFaqs = [
  {
    question: 'Is Apex International School a CBSE school?',
    answer:
      'Yes. Apex International School is a CBSE-affiliated school in Kozhikode, Kerala, established in 2005.',
  },
  {
    question: 'Where is Apex International School located?',
    answer: `The school is in Odumbra, Olavanna, Kozhikode. The full address is ${school.address}.`,
  },
  {
    question: `What were Apex’s CBSE Class X results in ${resultsYear}?`,
    answer: `Apex achieved 100% results in CBSE Class X (AISSE) ${resultsYear}. The school topper, ${schoolToppers[0].name}, scored ${schoolToppers[0].score}%.`,
  },
  {
    question: 'What activities can pupils take part in?',
    answer: `Activities at Apex include ${joinList(activities.map((activity) => activity.name))}. Ask the school about current groups and timings.`,
  },
  {
    question: 'How can we visit or apply?',
    answer: `Send an enquiry through the Visit Us or Admissions page, call ${school.phone} or email ${school.email}. The school can confirm visit dates, class availability and fees.`,
  },
];

export default function AboutPage() {
  return (
    <div className="about-page" id="top">
      <a className="skip-link" href="#about-content">
        Skip to content
      </a>
      <SiteHeader current="about" photo />
      <main id="about-content">
        <ContentPageHero
          title="About Apex"
          description="Get to know our school in Kozhikode."
          image="/assets/apex-cinematic-source.jpg"
          alt="Apex pupils learning together in the science laboratory"
          breadcrumbs={[{ label: 'About Apex' }]}
          nextSection="#headmasters-welcome"
        />
        <nav className="ad-page-sections" aria-label="On this page">
          <span>About Apex</span>
          <SiteLink href="#headmasters-welcome">Headmaster’s welcome</SiteLink>
          <SiteLink href="#why-choose-apex">Why choose Apex</SiteLink>
          <SiteLink href="#achievements">Achievements</SiteLink>
          <SiteLink href="#about-questions">Questions</SiteLink>
        </nav>

        {/* Welcome copy is an editorial draft pending the school's approval;
            a personal name, signature or portrait must only be added once supplied. */}
        <section
          className="about-welcome content-feature"
          id="headmasters-welcome"
          aria-labelledby="welcome-title"
        >
          <div className="content-feature-copy about-welcome-copy">
            <h2 id="welcome-title">Headmaster’s welcome</h2>
            <p className="about-lead">Welcome to Apex International School.</p>
            <p>
              A school is best understood through its everyday life: a question
              in the classroom, an idea taking shape in an art lesson, or a
              pupil finding the confidence to speak in front of others.
            </p>
            <p>
              At Apex, classroom learning sits alongside opportunities to
              explore sport, creativity and new interests. This page offers a
              glimpse of that school life, from our pupils’ achievements to the
              activities they take part in.
            </p>
            <p>
              We welcome families to visit our campus in Odumbra, ask questions
              and talk with us about their child’s next steps. We look forward
              to welcoming you to Apex.
            </p>
          </div>
          <figure className="content-feature-photo about-welcome-photo">
            <SchoolImage
              src="/assets/apex-video-campus.jpg"
              alt="The Apex International School campus surrounded by trees"
              sizes="(max-width: 767px) calc(100vw - 68px), 40vw"
            />
            <figcaption>Our campus in Odumbra, Kozhikode</figcaption>
          </figure>
        </section>

        <ContentFacts />

        <section
          className="about-reasons"
          id="why-choose-apex"
          aria-labelledby="why-title"
        >
          <div className="about-section-heading">
            <h2 id="why-title">Why choose Apex?</h2>
            <p>Results, activities and pupil voice you can see for yourself.</p>
          </div>

          <article className="about-reason about-reason-feature">
            <figure className="about-reason-photo">
              <SchoolImage
                src="/assets/results/class-of-2026.webp"
                alt="The Apex Class X batch of 2025–26 with their teachers"
                sizes="(max-width: 767px) calc(100vw - 48px), 55vw"
              />
              <figcaption>Class X pupils and staff, {resultsYear}</figcaption>
            </figure>
            <div className="about-reason-copy">
              <p className="about-reason-label">Academic results</p>
              <p className="about-reason-stat">
                100%
                <span>CBSE Class X results, {resultsYear}</span>
              </p>
              <h3>Strong CBSE results</h3>
              <p>
                {schoolToppers[0].name} topped the school with{' '}
                {schoolToppers[0].score}%, and pupils achieved perfect scores in{' '}
                {perfectSubjects}.
              </p>
              <SiteLink className="about-text-link" href="/results">
                See the full results{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </SiteLink>
            </div>
          </article>

          <div className="about-reason-grid">
            <article className="about-reason">
              <figure className="about-reason-photo">
                <SchoolImage
                  src="/assets/activities/art-and-craft.webp"
                  alt="A pupil and teacher displaying a handmade flower artwork at Apex"
                  sizes="(max-width: 767px) calc(100vw - 48px), 40vw"
                />
                <figcaption>
                  A handmade flower artwork in art and craft
                </figcaption>
              </figure>
              <div className="about-reason-copy">
                <p className="about-reason-label">Beyond lessons</p>
                <h3>Activities to explore</h3>
                <p>
                  Pupils can discover new interests in sport, strategy and
                  creative work.
                </p>
                <ul className="about-reason-chips" aria-label="Activities">
                  {activities.map((activity) => (
                    <li key={activity.slug}>
                      <SiteLink href={activityHref(activity.slug)}>
                        {activity.name}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            <article className="about-reason">
              <figure className="about-reason-photo">
                <SchoolImage
                  src="/assets/cab4df71-3a80-47cc-8d48-e48c96e9e7a9.JPG"
                  alt="A pupil speaking at a microphone during an Apex school event"
                  sizes="(max-width: 767px) calc(100vw - 48px), 40vw"
                />
                <figcaption>Speaking at an Apex school event</figcaption>
              </figure>
              <div className="about-reason-copy">
                <p className="about-reason-label">Pupil voice</p>
                <h3>Confidence to speak up</h3>
                <p>
                  School Radio gives pupils a platform for discussions,
                  interviews, shows and radio drama, alongside speaking at
                  school events.
                </p>
                <SiteLink
                  className="about-text-link"
                  href="/life-at-apex/school-radio"
                >
                  Discover School Radio{' '}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </SiteLink>
              </div>
            </article>
          </div>
        </section>

        <section
          className="about-achievements"
          id="achievements"
          aria-labelledby="achievements-title"
        >
          <div className="about-section-heading">
            <h2 id="achievements-title">Achievements beyond the classroom</h2>
          </div>
          <div className="about-story-grid">
            {schoolAchievements.map((achievement) => (
              <article className="about-achievement" key={achievement.source}>
                <figure>
                  <SchoolImage
                    src={achievement.image}
                    alt={achievement.alt}
                    sizes="(max-width: 767px) calc(100vw - 48px), 40vw"
                  />
                  <figcaption>{achievement.caption}</figcaption>
                </figure>
                <div className="about-achievement-copy">
                  <p className="about-achievement-result">
                    {achievement.result}
                  </p>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                  <a
                    className="about-text-link"
                    href={achievement.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    School announcement{' '}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="ad-practical about-questions"
          id="about-questions"
          aria-labelledby="about-questions-title"
        >
          <JsonLd nodes={[faqData(aboutFaqs)]} />
          <div>
            <h2 id="about-questions-title">Frequently asked questions</h2>
          </div>
          <div className="ad-faqs">
            {aboutFaqs.map(({ question, answer }) => (
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

        <section className="about-visit" aria-labelledby="about-visit-title">
          <h2 id="about-visit-title">Come and meet us</h2>
          <p>
            See the campus and talk to us about what matters to your family.
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
