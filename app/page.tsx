'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SchoolFilm } from '@/components/school-film';
import { ArchIntro } from '@/components/arch-intro';
import { SchoolDoodle } from '@/components/school-doodle';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const base = 'https://www.pgs.org.uk';
const heroSlides = [
  { image: 'apex-cinematic-hero-v2.png', label: 'Science', alt: 'Apex pupils discovering together in a sunlit science laboratory, with colourful glassware', width: 1671, height: 941 },
  { image: 'apex-skating-hero.png', label: 'Skating', alt: 'An Apex pupil smiling as she adjusts her blue skating guards in a sunlit school courtyard', width: 1672, height: 941 },
];
const stages = [
  { name: 'Pre-School', age: '2–4 years', image: 'junior.jpg', line: 'Where curiosity begins', url: '/our-school/pre-school-2-4-' },
  { name: 'Junior School', age: '4–11 years', image: 'senior.jpg', line: 'A world of discovery', url: '/our-school/junior-school-4-11-/welcome-to-junior-school' },
  { name: 'Senior School', age: '11–16 years', image: 'hero-poster.jpg', line: 'Space to find your strengths', url: '/our-school/senior-school-11-16-/welcome-to-senior-school' },
  { name: 'Sixth Form', age: '16–18 years', image: 'sixth.jpg', line: 'Ready for what comes next', url: '/our-school/sixth-form-16-18-/welcome-to-sixth-form' },
];

export default function Home() {
  const [introActive, setIntroActive] = useState(true);
  const finishIntro = useCallback(() => setIntroActive(false), []);
  const [paused, setPaused] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);
  const heroScene = useRef<HTMLElement>(null);
  const archSection = useRef<HTMLElement>(null);
  useEffect(() => {
    setPaused(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  useEffect(() => {
    const section = heroScene.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (paused || !heroVisible || introActive) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setHeroSlide(current => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, heroVisible, introActive]);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    elements.forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
    let frame = 0;
    let progress = 0;
    let lastTime = 0;
    const update = (time: number) => {
      frame = 0;
      if (!archSection.current) return;
      const bounds = archSection.current.getBoundingClientRect();
      const target = Math.min(1, Math.max(0, -bounds.top / Math.max(1, bounds.height - window.innerHeight)));
      const elapsed = lastTime ? Math.min(64, time - lastTime) : 16;
      lastTime = time;
      progress += (target - progress) * (1 - Math.exp(-elapsed / 180));
      if (Math.abs(target - progress) < .0001) progress = target;
      const reveal = Math.min(1, progress * 1.02);
      const button = Math.min(1, progress * 2.55);
      archSection.current.style.setProperty('--arch-progress', String(1 - (1 - reveal) ** 2));
      archSection.current.style.setProperty('--film-button-progress', String(1 - (1 - button) ** 2));
      heroScene.current?.style.setProperty('--scene-scroll', `${Math.min(window.scrollY, window.innerHeight)}px`);
      if (progress !== target) frame = requestAnimationFrame(update);
    };
    const scroll = () => { if (!frame) { lastTime = 0; frame = requestAnimationFrame(update); } };
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    scroll();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); };
  }, []);
  return (
    <main id="top" className={introActive ? 'intro-active' : 'intro-complete'}>
      {introActive && <ArchIntro onComplete={finishIntro} />}
      {introActive && <button className="intro-skip" onClick={finishIntro}>Skip intro <ArrowUpRight size={16} /></button>}
      <a className="skip-link" href="#discover">Skip to content</a>
      <SiteHeader home />
      <section ref={heroScene} className={`hero cinematic-hero ${paused || !heroVisible ? 'cinematic-paused' : ''}`} aria-labelledby="hero-title" aria-roledescription="carousel">
        {heroSlides.map((slide, index) => <div key={slide.image} className={`cinematic-image-wrap cinematic-slide ${heroSlide === index ? 'is-active' : ''}`} aria-hidden={heroSlide !== index}>
          <img className={`cinematic-image cinematic-image-${slide.label.toLowerCase()}`} src={`/assets/${slide.image}`} alt={slide.alt} width={slide.width} height={slide.height} fetchPriority={index === 0 ? 'high' : 'low'} />
        </div>)}
        <div className="cinematic-shade" aria-hidden="true" />
        <div className="cinematic-copy"><p>A place to wonder, learn and grow.</p><h1 id="hero-title">Find your spark.<br />Make it <span>shine.</span></h1></div>
        <a className="cinematic-scroll" href="#discover"><span>Step into our world</span><ArrowDown size={26} strokeWidth={1.5} /></a>
        <div className="cinematic-controls">
          <div className="cinematic-slide-selectors" role="group" aria-label="Choose hero image">{heroSlides.map((slide, index) => <button key={slide.label} className={heroSlide === index ? 'is-active' : ''} aria-label={`Show ${slide.label.toLowerCase()} hero image`} aria-pressed={heroSlide === index} onClick={() => { setHeroSlide(index); setPaused(true); }}><span className="cinematic-slide-number">0{index + 1}</span><span className="cinematic-slide-label">{slide.label}</span></button>)}</div>
          <button aria-label={paused ? 'Play hero slideshow' : 'Pause hero slideshow'} onClick={() => setPaused(value => !value)}>{paused ? <Play size={17} /> : <Pause size={17} />}</button>
        </div>
      </section>
      <section id="discover" ref={archSection} className="discover-section">
        <div className="discover-sticky">
        <SchoolFilm sectionRef={archSection} />
        <div className="discover-mask">
          <div className="discover-campus" aria-hidden="true"><img src="/assets/apex-campus-pencil.png" alt="" width="1672" height="941" loading="lazy" /></div>
          <div className="discover-heading"><p>Every spark has a story.</p><h2>Step into ours.</h2><span className="discover-mobile-cue">Scroll to see it unfold <ArrowDown size={16} /></span></div>
        </div>
        </div>
      </section>
      <section className="apex-chapters" id="our-school" aria-labelledby="chapters-title">
        <div className="chapter-intro">
          <div className="chapter-copy" data-reveal>
            <p className="chapter-kicker">A school for every chapter</p>
            <h2 id="chapters-title">Big ideas.<br />Bright futures.</h2>
            <p className="chapter-handwritten">Your own path.</p>
            <p className="chapter-description">From the first spark of curiosity to the confidence to take your next step. There’s a whole world of possibilities ahead.</p>
          </div>
          <figure className="chapter-art" data-reveal>
            <SchoolDoodle kind="bulb" className="chapter-idea-doodle" />
            <SchoolDoodle kind="stars" className="chapter-stars-doodle" />
            <img src="/assets/apex-chapter-illustration.png" alt="Hand-drawn pupils with books and an oversized pencil, imagining what comes next" width="1536" height="1024" loading="lazy" />
            <figcaption>Little moments. Big discoveries.</figcaption>
          </figure>
        </div>
        <Carousel className="chapter-carousel" opts={{ align: 'start', loop: true }} aria-label="Explore the school stages">
          <div className="chapter-journey-heading">
            <SchoolDoodle kind="arrow-left" className="chapter-curly-arrow" />
            <p>Every adventure starts somewhere.</p>
            <div className="chapter-navigation"><CarouselPrevious className="chapter-arrow" /><CarouselNext className="chapter-arrow" /></div>
          </div>
          <CarouselContent className="chapter-track">
            {stages.map((stage, index) => <CarouselItem key={stage.name} className="chapter-slide">
              <a className="chapter-card" href={base + stage.url}>
                <div className="chapter-photo"><img src={'/assets/' + stage.image} alt={stage.name + ' at PGS'} loading="lazy" /><span className="chapter-age">{stage.age}</span></div>
                <div className="chapter-card-heading"><span className="chapter-number">0{index + 1}</span><h3>{stage.name}</h3><ArrowUpRight size={24} strokeWidth={1.5} /></div>
                <p>{stage.line}</p>
              </a>
            </CarouselItem>)}
          </CarouselContent>
          <p className="chapter-endnote">Room to explore. Space to become <span>you.</span></p>
        </Carousel>
      </section>
      <section className="apex-possibilities" id="life-at-apex" aria-labelledby="possibilities-title">
        <div className="possibilities-sketchbook" data-reveal>
          <figure className="possibilities-art-paper">
            <SchoolDoodle kind="book" className="possibilities-book-doodle" />
            <p className="possibilities-paper-label">Life beyond the classroom</p>
            <img src="/assets/apex-possibilities-illustration.png" alt="Illustrated pupils exploring music, sport, and reading together" width="1536" height="1024" loading="lazy" />
            <figcaption>Find what makes you, you.</figcaption>
          </figure>
        </div>
        <div className="possibilities-story" data-reveal>
          <SchoolDoodle kind="stars" className="possibilities-stars-doodle" />
          <p className="possibilities-kicker">So much more to discover</p>
          <h2 id="possibilities-title">Be curious.<br />Be courageous.<br /><span>Be you.</span></h2>
          <p className="possibilities-description">In the classroom, on the stage and out on the playing field, there is room to explore what matters to you.</p>
          <a className="possibilities-explore" href={base + '/pgs-experience/co-curriculum/clubs-activities'}>Explore the possibilities <ArrowUpRight size={24} strokeWidth={1.5} /></a>
        </div>
      </section>
      <section className="apex-visit" id="visit-apex" aria-labelledby="visit-title">
        <div className="visit-copy" data-reveal>
          <p className="visit-kicker">A little hello. A big beginning.</p>
          <h2 id="visit-title">Come and see<br />what’s possible.</h2>
          <p className="visit-handwritten">We’d love to meet you.</p>
          <p className="visit-description">Meet our school community and explore where your child’s next chapter could begin.</p>
          <div className="visit-action"><a className="visit-button apex-cta" href="/visit-us">Let’s plan a visit <ArrowUpRight size={23} strokeWidth={1.5} /></a><SchoolDoodle kind="arrow-left" className="visit-curly-arrow" /></div>
          <p className="visit-location">Odumbra, Olavanna · Kozhikode, Kerala</p>
        </div>
        <figure className="visit-postcard" data-reveal>
          <SchoolDoodle kind="plane" className="visit-plane-doodle" />
          <div className="visit-photo"><img src="/assets/apex-campus-source.jpg" alt="Apex pupils exploring together in their science laboratory" width="1200" height="900" loading="lazy" /></div>
          <figcaption><span>A little glimpse of life at Apex</span><span className="visit-postcard-mark" aria-hidden="true">Apex<br />with love.</span></figcaption>
        </figure>
      </section>
      <SiteFooter home />
    </main>
  );
}
