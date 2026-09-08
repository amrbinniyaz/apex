'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpRight, ArrowRight, Menu, Pause, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const base = 'https://www.pgs.org.uk';
const links = [['Contact', '/contact'], ['Visit us', '/admissions/visit-us'], ['Apply now', '/admissions/admissions-process']];
const stages = [
  { name: 'Pre-School', age: '2–4 years', image: 'junior.jpg', line: 'Where curiosity begins', url: '/our-school/pre-school-2-4-' },
  { name: 'Junior School', age: '4–11 years', image: 'senior.jpg', line: 'A world of discovery', url: '/our-school/junior-school-4-11-/welcome-to-junior-school' },
  { name: 'Senior School', age: '11–16 years', image: 'hero-poster.jpg', line: 'Space to find your strengths', url: '/our-school/senior-school-11-16-/welcome-to-senior-school' },
  { name: 'Sixth Form', age: '16–18 years', image: 'sixth.jpg', line: 'Ready for what comes next', url: '/our-school/sixth-form-16-18-/welcome-to-sixth-form' },
];

export default function Home() {
  const hero = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [scene, setScene] = useState(0);
  const archSection = useRef<HTMLElement>(null);
  const welcome = useRef<HTMLVideoElement>(null);
  const [filmPaused, setFilmPaused] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 767px)').matches;
    if (hero.current) {
      hero.current.src = `/assets/hero${mobile ? '-mobile' : ''}.mp4`;
      hero.current.poster = `/assets/hero${mobile ? '-mobile' : ''}-poster.jpg`;
      if (!reduced) hero.current.play().catch(() => setPaused(true));
      else setPaused(true);
    }
  }, []);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setFilmPaused(true); return; }
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    elements.forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!archSection.current) return;
      const bounds = archSection.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -bounds.top / (bounds.height - window.innerHeight)));
      archSection.current.style.setProperty('--arch-progress', String(progress));
      document.querySelector<HTMLElement>('.hero-film')?.style.setProperty('transform', `translateY(${Math.min(window.scrollY, window.innerHeight) * .15}px)`);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    update();
    const videoObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting && !filmPaused) welcome.current?.play().catch(() => setFilmPaused(true));
        else welcome.current?.pause();
      }
    }, { threshold: .1 });
    if (welcome.current) videoObserver.observe(welcome.current);
    return () => { observer.disconnect(); videoObserver.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', scroll); };
  }, [filmPaused]);
  function toggleVideo() {
    const video = hero.current;
    if (!video) return;
    if (video.paused) video.play().then(() => setPaused(false)).catch(() => setPaused(true));
    else { video.pause(); setPaused(true); }
  }
  function toggleSchoolFilm() {
    if (!welcome.current) return;
    if (welcome.current.paused) welcome.current.play().then(() => setFilmPaused(false)).catch(() => setFilmPaused(true));
    else { welcome.current.pause(); setFilmPaused(true); }
  }
  return (
    <main id="top">
      <a className="skip-link" href="#discover">Skip to content</a>
      <header className="site-header">
        <a href="#top" aria-label="The Portsmouth Grammar School home"><img className="brand" src="/assets/logo.png" alt="The Portsmouth Grammar School" /></a>
        <nav aria-label="Main navigation">
          {links.map(([label, href]) => <a className="utility-link" key={label} href={base + href}>{label}</a>)}
          <Dialog>
            <DialogTrigger className="menu-trigger"><Menu size={27} strokeWidth={1.5} /><i>menu</i></DialogTrigger>
            <DialogContent className="school-menu">
              <DialogTitle className="menu-title">Explore PGS</DialogTitle>
              <nav aria-label="School navigation">{[['About us', '/about-us/welcome-from-the-head'], ['Admissions', '/admissions/admissions-process'], ['Our school', '/our-school/senior-school-11-16-/welcome-to-senior-school'], ['The PGS experience', '/pgs-experience/academics'], ['Stories & news', '/media'], ...links].map(([label, href]) => <a key={label} href={base + href}>{label}<ArrowUpRight /></a>)}</nav>
            </DialogContent>
          </Dialog>
        </nav>
      </header>
      <section className="hero" aria-label="Inspiring the best in you — pupil stories">
        <h1 className="sr-only">Inspiring the best in you</h1>
        <video ref={hero} className="hero-film" muted loop playsInline preload="auto" poster="/assets/hero-poster.jpg" onTimeUpdate={() => { if (hero.current) setScene(Math.min(2, Math.floor(hero.current.currentTime / 7))); }} aria-label="Animated pupil portraits celebrating curiosity, creativity and ambition" />
        <div className="mobile-strapline">Inspiring the best in <i>you</i></div>
        <div className="hero-controls">
          <button className="play-control" aria-label={paused ? 'Play hero animation' : 'Pause hero animation'} onClick={toggleVideo}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>
          {[0, 1, 2].map(index => <button key={index} className={`scene-dot ${scene === index ? 'active' : ''}`} aria-label={`Show pupil story ${index + 1}`} aria-pressed={scene === index} onClick={() => { if (hero.current) { hero.current.currentTime = index * 7 + .5; setScene(index); } }}><span /></button>)}
          <span className="scene-number">0{scene + 1} / 03</span>
        </div>
        <a className="scroll-cue" href="#discover" aria-label="Discover the school"><span>scroll to discover</span><ArrowDown strokeWidth={1} /></a>
      </section>
      <section id="discover" ref={archSection} className="discover-section">
        <div className="discover-sticky">
        <img className="city-art" src="/assets/archway.jpg" alt="" />
        <div className="discover-heading"><p>Step through the archway</p><h2>& discover the <i>buzz</i></h2></div>
        <div className="arch-window"><video ref={welcome} muted loop playsInline preload="metadata" poster="/assets/senior.jpg" src="/assets/welcome.mp4" aria-label="A glimpse of daily life at PGS" /></div>
        <div className="film-controls"><button className="film-toggle" onClick={toggleSchoolFilm} aria-label={filmPaused ? 'Play school film' : 'Pause school film'}>{filmPaused ? <Play size={16} /> : <Pause size={16} />}</button><span>A glimpse of life at PGS</span></div>
        </div>
      </section>
      <section className="excellence-section" id="our-school">
        <img className="crest-watermark" src="/assets/crest.png" alt="" loading="lazy" />
        <div className="section-intro" data-reveal><p className="eyebrow">A school for every chapter</p><h2>Big ideas.<br />Bright futures.<br /><i>Your own path.</i></h2><p className="intro-copy">From the first spark of curiosity to the confidence to take your next step. Discover a school full of possibilities.</p></div>
        <Carousel className="school-carousel" opts={{ align: 'start', loop: true }} aria-label="Explore the school stages">
          <CarouselContent className="school-track">{stages.map((stage, index) => <CarouselItem key={stage.name} className="stage-slide"><a className="stage-card" href={base + stage.url} data-reveal><div className="stage-image"><img src={'/assets/' + stage.image} alt={stage.name + ' at PGS'} loading="lazy" /><span className="stage-age">{stage.age}</span></div><div className="stage-info"><span className="stage-index">0{index + 1}</span><div><h3>{stage.name}</h3><p>{stage.line}</p></div><ArrowUpRight strokeWidth={1} /></div></a></CarouselItem>)}</CarouselContent>
          <div className="stage-navigation"><span>Find your next chapter</span><CarouselPrevious className="stage-arrow" /><CarouselNext className="stage-arrow" /></div>
        </Carousel>
      </section>
      <section className="possibilities-section">
        <div className="possibilities-image" data-reveal><img src="/assets/sixth.jpg" alt="Pupils sharing ideas at Portsmouth Grammar School" loading="lazy" /></div>
        <div className="possibilities-copy" data-reveal><p className="eyebrow">The PGS experience</p><h2>Be curious.<br />Be courageous.<br /><i>Be you.</i></h2><p>In the classroom, on the stage and out on the playing field, there is room to explore what matters to you.</p><a className="text-link" href={base + '/pgs-experience/co-curriculum/clubs-activities'}>Explore the possibilities <ArrowRight size={22} /></a></div>
      </section>
      <section className="portsmouth-section">
        <img src="/assets/education.jpg" alt="Portsmouth Harbour and the Spinnaker Tower" loading="lazy" />
        <div data-reveal><p className="eyebrow">A city of possibilities</p><h2>Education<br /><i>at the heart of Portsmouth</i></h2><a className="light-link" href={base + '/admissions/visit-us'}>Come and see for yourself <ArrowUpRight /></a></div>
      </section>
      <footer className="site-footer">
        <img className="footer-building" src="/assets/building.png" alt="" loading="lazy" />
        <div className="footer-main"><div className="footer-invitation" data-reveal><p className="eyebrow">Your story starts here</p><h2>Inspiring<br />the best<br />in <i>you</i></h2><div className="footer-actions">{links.map(([label, href]) => <a href={base + href} key={label}>{label}<ArrowUpRight size={18} /></a>)}</div></div><div className="footer-contact"><img src="/assets/logo.png" alt="The Portsmouth Grammar School" loading="lazy" /><p>High Street, Portsmouth<br />Hampshire, PO1 2LN</p><a href="tel:+442392360036">(023) 9236 0036 <ArrowUpRight size={18} /></a><div className="footer-school-links">{stages.map(stage => <a key={stage.name} href={base + stage.url}>{stage.name}<ArrowUpRight size={15} /></a>)}</div></div></div>
        <div className="footer-bottom"><p>PGS homepage design study · Inspired by <a href={base}>pgs.org.uk</a></p><a href="#top">Back to top <ArrowUp size={18} /></a></div>
      </footer>
    </main>
  );
}
