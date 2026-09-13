'use client';
import { SchoolImage as Image } from '@/components/school-image';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { SchoolFilm } from '@/components/school-film';
import { useArchScroll } from '@/hooks/use-arch-scroll';

export function SchoolDiscovery() {
  const archSection = useRef<HTMLElement>(null);
  useArchScroll(archSection);
  return (
    <section id="discover" ref={archSection} className="discover-section">
      <div className="discover-sticky">
        <SchoolFilm sectionRef={archSection} />
        <div className="discover-mask">
          <div className="discover-campus" aria-hidden="true">
            <Image
              src="/assets/apex-campus-pencil.png"
              alt=""
              width="1672"
              height="941"
              loading="lazy"
            />
          </div>
          <div className="discover-heading">
            <p>Every spark has a story.</p>
            <h2>Step into ours.</h2>
            <span className="discover-mobile-cue">
              Scroll to see it unfold <ArrowDown size={16} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
