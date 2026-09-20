'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiteLink } from '@/components/site-link';
import { SchoolImage } from '@/components/school-image';
import { activities, activityHref } from '@/lib/activities';

const featuredActivities = [
  'art-and-craft',
  'skating',
  'chess',
  'taekwondo',
  'school-radio',
].map((slug) => activities.find((activity) => activity.slug === slug)!);

export function SchoolLife() {
  const [activeIndex, setActiveIndex] = useState(0);

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

        <div className="home-life-cinema">
          {featuredActivities.map((activity, index) => (
            <div
              className="home-life-scene"
              key={activity.slug}
              data-active={activeIndex === index}
              data-activity={activity.slug}
              aria-hidden={activeIndex !== index}
            >
              <SchoolImage
                src={activity.image}
                alt={activity.alt}
                width={1440}
                height={960}
                sizes="(max-width: 767px) 100vw, 88vw"
                loading="lazy"
              />
            </div>
          ))}

          <nav className="home-life-links" aria-label="Activities at Apex">
            {featuredActivities.map((activity, index) => (
              <SiteLink
                key={activity.slug}
                href={activityHref(activity.slug)}
                data-active={activeIndex === index}
                onFocus={() => setActiveIndex(index)}
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse') setActiveIndex(index);
                }}
              >
                <span>{activity.name}</span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </SiteLink>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
