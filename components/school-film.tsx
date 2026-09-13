'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { Maximize, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type Player = {
  mute(): void;
  unMute(): void;
  playVideo(): void;
  pauseVideo(): void;
  destroy(): void;
  getIframe(): HTMLIFrameElement;
  getCurrentTime(): number;
  getDuration(): number;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getOptions?(): string[];
  unloadModule?(module: string): void;
  setOption?(module: string, option: string, value: unknown): void;
};
type YouTubeAPI = {
  Player: new (element: HTMLElement, options: {
    host: string;
    videoId: string;
    playerVars: Record<string, string | number>;
    events: {
      onReady(event: { target: Player }): void;
      onStateChange(event: { data: number }): void;
      onAutoplayBlocked(): void;
      onError(): void;
      onApiChange?(event: { target: Player }): void;
    };
  }) => Player;
};

// Captions can load after onReady according to the viewer's YouTube preferences.
// This optional module API is available in current players, but not guaranteed.
function hideCaptions(target: Player) {
  target.setOption?.('captions', 'track', {});
  if (target.getOptions?.().includes('captions')) target.unloadModule?.('captions');
}

const cleanPlayerVars = { autoplay: 0, start: 6, controls: 0, playsinline: 1, disablekb: 1, cc_load_policy: 0, rel: 0 };

let apiPromise: Promise<YouTubeAPI> | undefined;
function loadYouTube() {
  const ytWindow = window as Window & { YT?: YouTubeAPI; onYouTubeIframeAPIReady?: () => void };
  if (ytWindow.YT?.Player) return Promise.resolve(ytWindow.YT);
  if (!apiPromise) {
    apiPromise = new Promise<YouTubeAPI>((resolve, reject) => {
      const previous = ytWindow.onYouTubeIframeAPIReady;
      ytWindow.onYouTubeIframeAPIReady = () => {
        previous?.();
        if (ytWindow.YT) resolve(ytWindow.YT);
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.onerror = () => { apiPromise = undefined; script.remove(); reject(new Error('Video player unavailable')); };
      document.head.appendChild(script);
    });
  }
  return apiPromise;
}

export function SchoolFilm({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  const host = useRef<HTMLDivElement>(null);
  const player = useRef<Player | null>(null);
  const manuallyPaused = useRef(false);
  const inView = useRef(false);
  const popupOpen = useRef(false);
  const filmTitle = useRef<HTMLHeadingElement>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [muted, setMuted] = useState(true);
  const [filmOpen, setFilmOpen] = useState(false);

  useEffect(() => {
    if (!host.current || !sectionRef.current) return;
    let disposed = false;
    let instance: Player | undefined;
    manuallyPaused.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const syncPlayback = () => {
      if (!player.current) return;
      if (inView.current && !document.hidden && !manuallyPaused.current && !popupOpen.current) player.current.playVideo();
      else player.current.pauseVideo();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView.current = entry.isIntersecting && entry.intersectionRatio >= .1;
      syncPlayback();
    }, { threshold: [0, .1] });
    observer.observe(sectionRef.current);
    document.addEventListener('visibilitychange', syncPlayback);
    const mount = document.createElement('div');
    host.current.appendChild(mount);
    loadYouTube().then(api => {
      if (disposed) return;
      instance = new api.Player(mount, {
        host: 'https://www.youtube-nocookie.com',
        videoId: 's3l7IsnY_jk',
        playerVars: { ...cleanPlayerVars, loop: 1, playlist: 's3l7IsnY_jk', origin: window.location.origin },
        events: {
          onReady: ({ target }) => {
            if (disposed) return;
            player.current = target;
            target.mute();
            hideCaptions(target);
            target.getIframe().title = 'Apex International School video';
            target.getIframe().tabIndex = -1;
            setReady(true);
            syncPlayback();
          },
          onStateChange: ({ data }) => {
            if (disposed) return;
            setPlaying(data === 1);
            if (data === 1) { setHasStarted(true); if (player.current) hideCaptions(player.current); }
            if (data === 1 && (!inView.current || document.hidden || manuallyPaused.current || popupOpen.current)) player.current?.pauseVideo();
          },
          onAutoplayBlocked: () => { if (!disposed) setPlaying(false); },
          onApiChange: ({ target }) => { if (!disposed) hideCaptions(target); },
          onError: () => { if (!disposed) { setFailed(true); setPlaying(false); } },
        },
      });
    }).catch(() => { if (!disposed) setFailed(true); });
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      player.current = null;
      instance?.destroy();
      mount.remove();
    };
  }, [sectionRef]);

  function togglePlayback() {
    manuallyPaused.current = playing;
    if (playing) player.current?.pauseVideo();
    else player.current?.playVideo();
  }

  function toggleAudio() {
    if (muted) player.current?.unMute();
    else player.current?.mute();
    setMuted(!muted);
  }

  function changePopup(open: boolean) {
    popupOpen.current = open;
    setFilmOpen(open);
    if (open) player.current?.pauseVideo();
    else if (inView.current && !document.hidden && !manuallyPaused.current) player.current?.playVideo();
  }

  return <>
    <div className="school-film-window">
      <img className={`school-film-poster ${hasStarted && !failed ? 'is-playing' : ''}`} src="https://i.ytimg.com/vi/s3l7IsnY_jk/hqdefault.jpg" alt="" loading="lazy" />
      <div ref={host} className="school-film-player" />
    </div>
    <Dialog open={filmOpen} onOpenChange={changePopup}>
      <DialogTrigger className="school-film-full" aria-label="Play full school video">
        <span><Play size={32} strokeWidth={1.5} /></span><i>Play Full Video</i>
      </DialogTrigger>
      <DialogContent className="school-film-dialog" initialFocus={filmTitle}>
        <DialogTitle ref={filmTitle} tabIndex={-1}>Discover Apex International School</DialogTitle>
        {filmOpen && <FullSchoolFilm />}
        <a href="https://www.youtube.com/watch?v=s3l7IsnY_jk&t=6s" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
      </DialogContent>
    </Dialog>
    <div className="school-film-controls">
      {!failed && <>
        <button className="film-toggle" onClick={togglePlayback} disabled={!ready} aria-label={playing ? 'Pause school film' : 'Play school film'}>{playing ? <Pause size={16} /> : <Play size={16} />}</button>
        <button className="film-audio-toggle" onClick={toggleAudio} disabled={!ready} aria-label={muted ? 'Unmute school film' : 'Mute school film'}>{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}<span className="film-control-label">{muted ? 'Sound on' : 'Sound off'}</span></button>
      </>}
    </div>
  </>;
}

function FullSchoolFilm() {
  const host = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const player = useRef<Player | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [elapsed, setElapsed] = useState(6);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!host.current) return;
    let disposed = false;
    let instance: Player | undefined;
    const mount = document.createElement('div');
    host.current.appendChild(mount);
    loadYouTube().then(api => {
      if (disposed) return;
      instance = new api.Player(mount, {
        host: 'https://www.youtube-nocookie.com', videoId: 's3l7IsnY_jk',
        playerVars: { ...cleanPlayerVars, origin: window.location.origin },
        events: {
          onReady: ({ target }) => {
            if (disposed) return;
            player.current = target;
            target.getIframe().title = 'Full Apex International School video';
            target.getIframe().tabIndex = -1;
            hideCaptions(target);
            target.unMute();
            target.seekTo(6, true);
            setReady(true);
            setDuration(target.getDuration());
            target.playVideo();
          },
          onStateChange: ({ data }) => {
            if (disposed) return;
            setPlaying(data === 1);
            if (data === 1 && player.current) hideCaptions(player.current);
          },
          onApiChange: ({ target }) => { if (!disposed) hideCaptions(target); },
          onAutoplayBlocked: () => { if (!disposed) setPlaying(false); },
          onError: () => { if (!disposed) { setFailed(true); setPlaying(false); } },
        },
      });
    }).catch(() => { if (!disposed) setFailed(true); });
    const timer = window.setInterval(() => {
      if (!player.current || document.hidden) return;
      setElapsed(player.current.getCurrentTime());
      setDuration(player.current.getDuration());
    }, 500);
    const pauseWhenHidden = () => { if (document.hidden) player.current?.pauseVideo(); };
    document.addEventListener('visibilitychange', pauseWhenHidden);
    return () => {
      disposed = true;
      clearInterval(timer);
      document.removeEventListener('visibilitychange', pauseWhenHidden);
      player.current = null;
      instance?.destroy();
      mount.remove();
    };
  }, []);

  const timestamp = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
  return <div ref={stage} className="full-film-stage">
    <div ref={host} className="full-film-mount" />
    {failed ? <p className="full-film-error">The film couldn’t load. Please use the YouTube link below.</p> : <div className="full-film-controls">
      <button disabled={!ready} aria-label={playing ? 'Pause full film' : 'Play full film'} onClick={() => playing ? player.current?.pauseVideo() : player.current?.playVideo()}>{playing ? <Pause size={18} /> : <Play size={18} />}</button>
      <button disabled={!ready} aria-label={muted ? 'Unmute full film' : 'Mute full film'} onClick={() => { if (muted) player.current?.unMute(); else player.current?.mute(); setMuted(!muted); }}>{muted ? <VolumeX size={18} /> : <Volume2 size={18} />}</button>
      <input type="range" aria-label="Seek full film" aria-valuetext={`${timestamp(elapsed)} of ${timestamp(duration)}`} min="0" max={duration || 1} step="1" value={Math.min(elapsed, duration || 1)} disabled={!ready || !duration} onChange={event => { const time = Number(event.target.value); setElapsed(time); player.current?.seekTo(time, true); }} />
      <span className="full-film-time">{timestamp(elapsed)} / {timestamp(duration)}</span>
      <button aria-label="Fullscreen film" onClick={() => { if (document.fullscreenElement) void document.exitFullscreen(); else void stage.current?.requestFullscreen?.().catch(() => {}); }}><Maximize size={18} /></button>
    </div>}
  </div>;
}
