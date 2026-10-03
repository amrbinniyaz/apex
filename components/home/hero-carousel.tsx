'use client';
import { SchoolImage as Image } from '@/components/school-image';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Pause, Play } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
const heroSlides = [
  {
    image: 'apex-art-cinematic-hero.png',
    mobileImage: 'apex-art-cinematic-hero-mobile',
    label: 'Art',
    alt: 'An Apex pupil and teacher proudly displaying a handmade flower artwork in the art classroom',
    width: 1672,
    height: 941,
  },
  {
    image: 'apex-cinematic-hero-v2.png',
    label: 'Science',
    alt: 'Apex pupils discovering together in a sunlit science laboratory, with colourful glassware',
    width: 1671,
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
      data-tone="dark"
      data-scene={heroSlides[heroSlide].label.toLowerCase()}
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          className={`cinematic-image-wrap cinematic-slide ${heroSlide === index ? 'is-active' : ''}`}
          aria-hidden={heroSlide !== index}
        >
          <picture>
            {slide.mobileImage && (
              <source
                media="(max-width: 767px)"
                srcSet={`/assets/responsive/${slide.mobileImage}-480.webp 480w, /assets/responsive/${slide.mobileImage}-800.webp 800w, /assets/responsive/${slide.mobileImage}-1024.webp 1024w`}
                sizes="100vw"
                width={1024}
                height={1536}
              />
            )}
            <Image
              className={`cinematic-image cinematic-image-${slide.label.toLowerCase()}`}
              src={`/assets/${slide.image}`}
              alt={slide.alt}
              preload={index === 0 && !slide.mobileImage}
              loading={index === 0 ? 'eager' : 'lazy'}
              width={slide.width}
              height={slide.height}
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          </picture>
        </div>
      ))}
      <div className="cinematic-shade" aria-hidden="true" />
      <div className="cinematic-copy">
        <h1 id="hero-title">
          Find your spark.
          <br />
          Make it <span>shine.</span>
        </h1>
      </div>
      <a
        className="cinematic-scroll"
        href="#discover"
        aria-label="Discover Apex"
      >
        <span>Discover Apex</span>
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
