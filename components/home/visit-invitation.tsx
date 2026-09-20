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
            src="/assets/07a6dcb8-4d03-4929-a681-785467613806.JPG"
            alt="Apex pupils receiving a certificate together at a school event"
            width={1600}
            height={1142}
            loading="lazy"
          />
        </div>
        <figcaption>
          <span>Pupils receiving a certificate at a school event</span>
        </figcaption>
      </figure>
    </section>
  );
}
