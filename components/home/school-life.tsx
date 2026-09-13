import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { SchoolImage as Image } from '@/components/school-image';
import { SchoolDoodle } from '@/components/school-doodle';

export function SchoolLife() {
  return (
    <section
      className="apex-possibilities"
      id="life-at-apex"
      aria-labelledby="possibilities-title"
    >
      <div className="possibilities-sketchbook" data-reveal>
        <figure className="possibilities-art-paper">
          <SchoolDoodle kind="book" className="possibilities-book-doodle" />
          <p className="possibilities-paper-label">Life beyond the classroom</p>
          <Image
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/assets/apex-possibilities-illustration.png"
            alt="Illustrated pupils exploring music, sport, and reading together"
            width="1536"
            height="1024"
            loading="lazy"
          />
          <figcaption>Find what makes you, you.</figcaption>
        </figure>
      </div>
      <div className="possibilities-story" data-reveal>
        <SchoolDoodle kind="stars" className="possibilities-stars-doodle" />
        <p className="possibilities-kicker">So much more to discover</p>
        <h2 id="possibilities-title">
          Be curious.
          <br />
          Be courageous.
          <br />
          <span>Be you.</span>
        </h2>
        <p className="possibilities-description">
          In the classroom, on the stage and out on the playing field, there is
          room to explore what matters to you.
        </p>
        <Link className="possibilities-explore" href="/visit-us">
          Explore the possibilities <ArrowUpRight size={24} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
