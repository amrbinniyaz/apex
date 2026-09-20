import { SiteLink } from '@/components/site-link';
import { ArrowUpRight } from 'lucide-react';
import { SchoolImage } from '@/components/school-image';
import { activities, activityHref } from '@/lib/activities';

export function ActivityCards({
  exclude,
  compact = false,
}: {
  exclude?: string;
  compact?: boolean;
}) {
  const items = activities.filter((activity) => activity.slug !== exclude);
  return (
    <div
      className={`activity-card-grid ${compact ? 'activity-card-grid-compact' : ''}`}
    >
      {items.map((activity, index) => (
        <SiteLink
          className="chapter-card activity-card"
          href={activityHref(activity.slug)}
          key={activity.slug}
          data-activity={activity.slug}
        >
          <div className="chapter-photo">
            <SchoolImage
              src={activity.image}
              alt={activity.alt}
              width={1200}
              height={900}
              sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 30vw"
              loading="lazy"
            />
          </div>
          <p className="activity-card-category">{activity.category}</p>
          <div className="chapter-card-heading">
            <span className="chapter-number">0{index + 1}</span>
            <h3>{activity.name}</h3>
            <ArrowUpRight size={23} strokeWidth={1.5} />
          </div>
          <p className="activity-card-summary">{activity.summary}</p>
        </SiteLink>
      ))}
    </div>
  );
}
