import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
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
        <p className="visit-kicker">A little hello. A big beginning.</p>
        <h2 id="visit-title">
          Come and see
          <br />
          what’s possible.
        </h2>
        <p className="visit-handwritten">We’d love to meet you.</p>
        <p className="visit-description">
          Meet our school community and explore where your child’s next chapter
          could begin.
        </p>
        <div className="visit-action">
          <Link className="visit-button apex-cta" href="/visit-us">
            Let’s plan a visit <ArrowUpRight size={23} strokeWidth={1.5} />
          </Link>
          <SchoolDoodle kind="arrow-left" className="visit-curly-arrow" />
        </div>
        <p className="visit-location">Odumbra, Olavanna · Kozhikode, Kerala</p>
      </div>
      <figure className="visit-postcard" data-reveal>
        <SchoolDoodle kind="plane" className="visit-plane-doodle" />
        <div className="visit-photo">
          <Image
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/assets/apex-campus-source.jpg"
            alt="Apex pupils exploring together in their science laboratory"
            width="1200"
            height="900"
            loading="lazy"
          />
        </div>
        <figcaption>
          <span>A little glimpse of life at Apex</span>
          <span className="visit-postcard-mark" aria-hidden="true">
            Apex
            <br />
            with love.
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
