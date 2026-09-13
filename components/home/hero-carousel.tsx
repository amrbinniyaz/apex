'use client';
import { SchoolImage as Image } from '@/components/school-image';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Pause, Play } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
const heroSlides = [
  {
    image: 'apex-cinematic-hero-v2.png',
    label: 'Science',
    alt: 'Apex pupils discovering together in a sunlit science laboratory, with colourful glassware',
    width: 1671,
    height: 941,
  },
  {
    image: 'apex-skating-hero.png',
    label: 'Skating',
    alt: 'An Apex pupil smiling as she adjusts her blue skating guards in a sunlit school courtyard',
    width: 1672,
    height: 941,
  },
];

export function HeroCarousel({ introActive }: { introActive: boolean }) {
  const [manuallyPaused, setPaused] = useState<boolean | null>(null);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)', true);
  const paused = manuallyPaused ?? reducedMotion;
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);
  const heroScene = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = heroScene.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (paused || !heroVisible || introActive) return;
    const timer = window.setInterval(() => {
      if (!document.hidden)
        setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, heroVisible, introActive]);
  return (
    <section
      ref={heroScene}
      className={`hero cinematic-hero ${paused || !heroVisible ? 'cinematic-paused' : ''}`}
      aria-labelledby="hero-title"
      aria-roledescription="carousel"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`cinematic-image-wrap cinematic-slide ${heroSlide === index ? 'is-active' : ''}`}
          aria-hidden={heroSlide !== index}
        >
          <Image
            className={`cinematic-image cinematic-image-${slide.label.toLowerCase()}`}
            src={`/assets/${slide.image}`}
            alt={slide.alt}
            preload={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            width={slide.width}
            height={slide.height}
            fetchPriority={index === 0 ? 'high' : 'low'}
          />
        </div>
      ))}
      <div className="cinematic-shade" aria-hidden="true" />
      <div className="cinematic-copy">
        <p>A place to wonder, learn and grow.</p>
        <h1 id="hero-title">
          Find your spark.
          <br />
          Make it <span>shine.</span>
        </h1>
      </div>
      <a className="cinematic-scroll" href="#discover">
        <span>Step into our world</span>
        <ArrowDown size={26} strokeWidth={1.5} />
      </a>
      <div className="cinematic-controls">
        <fieldset
          className="cinematic-slide-selectors"
          aria-label="Choose hero image"
        >
          {heroSlides.map((slide, index) => (
            <button
              key={slide.label}
              className={heroSlide === index ? 'is-active' : ''}
              aria-label={`Show ${slide.label.toLowerCase()} hero image`}
              aria-pressed={heroSlide === index}
              onClick={() => {
                setHeroSlide(index);
                setPaused(true);
              }}
            >
              <span className="cinematic-slide-number">0{index + 1}</span>
              <span className="cinematic-slide-label">{slide.label}</span>
            </button>
          ))}
        </fieldset>
        <button
          aria-label={paused ? 'Play hero slideshow' : 'Pause hero slideshow'}
          onClick={() => setPaused(!paused)}
        >
          {paused ? <Play size={17} /> : <Pause size={17} />}
        </button>
      </div>
    </section>
  );
}
