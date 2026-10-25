import { ArrowUpRight } from 'lucide-react';
import { SiteLink } from '@/components/site-link';
import { SchoolImage } from '@/components/school-image';
import { activities, activityHref } from '@/lib/activities';
import { schoolAchievements } from '@/lib/achievements';

const featuredActivities = [
  'art-and-craft',
  'skating',
  'chess',
  'school-radio',
  'taekwondo',
].map((slug) => activities.find((activity) => activity.slug === slug)!);

const kickBoxing = schoolAchievements.find((achievement) =>
  achievement.title.includes('Kick Boxing'),
)!;

export function SchoolLife() {
  return (
    <section
      className="home-life"
      id="life-at-apex"
      aria-labelledby="home-life-title"
    >
      <div className="home-life-inner">
        <div className="home-life-heading">
          <h2 id="home-life-title">Life at Apex</h2>
          <SiteLink className="apex-text-link" href="/life-at-apex">
            All activities <ArrowUpRight size={21} aria-hidden="true" />
          </SiteLink>
        </div>

        <SiteLink className="home-life-feature" href="/about#achievements">
          <div className="home-life-feature-photo">
            <SchoolImage
              src="/assets/apex-kickboxing-cinematic-hero.webp"
              alt="Four Apex kick boxing medallists holding their medals and certificates"
              width={1671}
              height={941}
              sizes="(max-width: 767px) calc(100vw - 48px), 58vw"
              loading="lazy"
            />
          </div>
          <div className="home-life-feature-copy">
            <p className="home-life-feature-label">{kickBoxing.title}</p>
            <h3>{kickBoxing.result}</h3>
            <p>{kickBoxing.description}</p>
            <span className="home-life-feature-more">
              Achievements beyond the classroom
              <ArrowUpRight size={20} aria-hidden="true" />
            </span>
          </div>
        </SiteLink>

        <ul className="home-life-cards" aria-label="Activities at Apex">
          {featuredActivities.map((activity) => (
            <li key={activity.slug}>
              <SiteLink
                className="home-life-card"
                href={activityHref(activity.slug)}
                data-activity={activity.slug}
              >
                <div className="home-life-card-photo">
                  <SchoolImage
                    src={activity.image}
                    alt={activity.alt}
                    width={720}
                    height={720}
                    sizes="(max-width: 767px) 68vw, 18vw"
                    loading="lazy"
                  />
                </div>
                <p className="home-life-card-category">{activity.category}</p>
                <h3>
                  {activity.name}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </h3>
              </SiteLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
