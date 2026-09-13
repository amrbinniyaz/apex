import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { SchoolImage as Image } from '@/components/school-image';
import { SchoolDoodle } from '@/components/school-doodle';
import { schoolStages } from '@/lib/school';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function SchoolStages() {
  return (
    <section
      className="apex-chapters"
      id="our-school"
      aria-labelledby="chapters-title"
    >
      <div className="chapter-intro">
        <div className="chapter-copy" data-reveal>
          <p className="chapter-kicker">A school for every chapter</p>
          <h2 id="chapters-title">
            Big ideas.
            <br />
            Bright futures.
          </h2>
          <p className="chapter-handwritten">Your own path.</p>
          <p className="chapter-description">
            From the first spark of curiosity to the confidence to take your
            next step. There’s a whole world of possibilities ahead.
          </p>
        </div>
        <figure className="chapter-art" data-reveal>
          <SchoolDoodle kind="bulb" className="chapter-idea-doodle" />
          <SchoolDoodle kind="stars" className="chapter-stars-doodle" />
          <Image
            sizes="(max-width: 767px) 100vw, 50vw"
            src="/assets/apex-chapter-illustration.png"
            alt="Hand-drawn pupils with books and an oversized pencil, imagining what comes next"
            width="1536"
            height="1024"
            loading="lazy"
          />
          <figcaption>Little moments. Big discoveries.</figcaption>
        </figure>
      </div>
      <Carousel
        className="chapter-carousel"
        opts={{ align: 'start', loop: true }}
        aria-label="Explore life and learning at Apex"
      >
        <div className="chapter-journey-heading">
          <SchoolDoodle kind="arrow-left" className="chapter-curly-arrow" />
          <p>Every adventure starts somewhere.</p>
          <div className="chapter-navigation">
            <CarouselPrevious className="chapter-arrow" />
            <CarouselNext className="chapter-arrow" />
          </div>
        </div>
        <CarouselContent className="chapter-track">
          {schoolStages.map((stage, index) => (
            <CarouselItem key={stage.name} className="chapter-slide">
              <Link className="chapter-card" href={stage.href}>
                <div className="chapter-photo">
                  <Image
                    sizes="(max-width: 767px) 100vw, 50vw"
                    src={'/assets/' + stage.image}
                    alt={stage.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                  />
                  <span className="chapter-age">{stage.label}</span>
                </div>
                <div className="chapter-card-heading">
                  <span className="chapter-number">0{index + 1}</span>
                  <h3>{stage.name}</h3>
                  <ArrowUpRight size={24} strokeWidth={1.5} />
                </div>
                <p>{stage.line}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <p className="chapter-endnote">
          Room to explore. Space to become <span>you.</span>
        </p>
      </Carousel>
    </section>
  );
}
