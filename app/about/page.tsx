import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { ContentFacts } from '@/components/content-page-blocks';
import { ContentPageHero } from '@/components/content-page-hero';
import { SchoolImage } from '@/components/school-image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SiteLink } from '@/components/site-link';
import { resultsYear, schoolToppers } from '@/lib/results';
import { schoolAchievements } from '@/lib/achievements';
import './about.css';

export const metadata: Metadata = {
  title: 'About Apex | Apex International School, Kozhikode',
  description:
    'Get to know Apex International School in Kozhikode. Read our welcome and explore classroom learning, pupil achievements and activities beyond lessons.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Apex | Apex International School',
    description:
      'A welcome to our school, and a closer look at learning and life at Apex.',
    url: '/about',
    images: [
      {
        url: '/assets/apex-cinematic-source.jpg',
        alt: 'Pupils learning together at Apex',
      },
    ],
  },
};

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
            <p>
              Look at what pupils learn, what they achieve and the experiences
              open to them. Here are three ways to get to know our school.
            </p>
          </div>

          <article className="content-feature about-results">
            <figure className="content-feature-photo">
              <SchoolImage
                src="/assets/results/class-of-2026.webp"
                alt="The Apex Class X batch of 2025–26 with their teachers"
                sizes="(max-width: 767px) calc(100vw - 68px), 50vw"
              />
              <figcaption>Class X pupils and staff, {resultsYear}</figcaption>
            </figure>
            <div className="content-feature-copy">
              <h3>Academic achievement</h3>
              <p>
                Our pupils’ work speaks through their achievements. In the CBSE
                Class X results for {resultsYear}, school topper{' '}
                {schoolToppers[0].name} achieved {schoolToppers[0].score}%.
                Explore the full results and the school’s original
                announcements.
              </p>
              <SiteLink className="about-text-link" href="/results">
                Explore our results{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </SiteLink>
            </div>
          </article>

          <div className="about-story-grid">
            <article className="about-story">
              <figure className="content-feature-photo">
                <SchoolImage
                  src="/assets/activities/art-and-craft.webp"
                  alt="A pupil and teacher displaying a handmade flower artwork at Apex"
                  sizes="(max-width: 767px) calc(100vw - 68px), 40vw"
                />
                <figcaption>
                  A handmade flower artwork in an art and craft session
                </figcaption>
              </figure>
              <h3>Room to try something new</h3>
              <p>
                Art and craft, Taekwondo, skating and chess offer different ways
                to get involved beyond lessons. Explore the activities, then ask
                us what is available for your child’s class.
              </p>
              <SiteLink className="about-text-link" href="/life-at-apex">
                Explore life at Apex{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </SiteLink>
            </article>
            <article className="about-story">
              <figure className="content-feature-photo">
                <SchoolImage
                  src="/assets/cab4df71-3a80-47cc-8d48-e48c96e9e7a9.JPG"
                  alt="A speaker at a microphone during an Apex school event"
                  sizes="(max-width: 767px) calc(100vw - 68px), 40vw"
                />
                <figcaption>Speaking at an Apex school event</figcaption>
              </figure>
              <h3>Opportunities to find a voice</h3>
              <p>
                Sharing an idea is part of learning, too. School Radio gives
                pupils a way to explore speaking, listening and presenting,
                alongside opportunities to take part in school events.
              </p>
              <SiteLink
                className="about-text-link"
                href="/life-at-apex/school-radio"
              >
                Discover School Radio{' '}
                <ArrowUpRight size={18} aria-hidden="true" />
              </SiteLink>
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
