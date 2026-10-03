import { ArrowUpRight } from 'lucide-react';
import { SiteLink } from '@/components/site-link';
import { SchoolImage as Image } from '@/components/school-image';
import { SchoolDoodle } from '@/components/school-doodle';

export function VisitInvitation() {
  return (
    <section
      className="apex-visit"
      id="visit-apex"
      aria-labelledby="visit-title"
    >
      <div className="visit-copy" data-reveal>
        <p className="visit-kicker">Visit Apex</p>
        <h2 id="visit-title">
          Come and see
          <br />
          what’s possible.
        </h2>
        <p className="visit-description">
          Meet our school community, explore the campus and ask the questions
          that matter to your family.
        </p>
        <div className="visit-action">
          <SiteLink className="visit-button apex-cta" href="/visit-us">
            Arrange a visit <ArrowUpRight size={23} strokeWidth={1.5} />
          </SiteLink>
        </div>
        <p className="visit-location">Odumbra, Olavanna · Kozhikode, Kerala</p>
      </div>
      <figure className="visit-postcard" data-reveal>
        <SchoolDoodle kind="plane" className="visit-plane-doodle" />
        <div className="visit-photo">
          <Image
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/assets/apex-visit-group.webp"
            alt="A group from Apex at the Malabar Sahodaya IT Fest"
            width={1484}
            height={1060}
            loading="lazy"
          />
        </div>
        <figcaption>
          <span>Together at the Malabar Sahodaya IT Fest</span>
        </figcaption>
      </figure>
    </section>
  );
}
