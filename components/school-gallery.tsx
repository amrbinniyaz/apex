'use client';

import { useEffect, useId, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Expand,
  Images,
  X,
} from 'lucide-react';
import { SchoolImage } from '@/components/school-image';
import {
  galleryAlbums,
  galleryPhotos,
  type GalleryAlbumId,
  type GalleryPhoto,
} from '@/lib/gallery';

export function SchoolGallery({
  album,
  itemLabel = 'photos',
}: {
  album: GalleryAlbumId;
  itemLabel?: 'photos' | 'posters';
}) {
  const collection = galleryAlbums[album];
  const photos: GalleryPhoto[] = collection.photos.map(
    (id) => galleryPhotos[id],
  );
  const [active, setActive] = useState<number | null>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const id = useId();
  const open = active !== null;
  const current = active === null ? null : photos[active];
  const preview = photos.slice(0, collection.preview);

  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    if (!element) return;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      opener.current?.focus({ preventScroll: true });
    };
  }, [open]);

  const show = (index: number, trigger: HTMLButtonElement) => {
    opener.current = trigger;
    setImageFailed(false);
    setActive(index);
  };
  const move = (direction: number) => {
    setImageFailed(false);
    setActive((index) =>
      index === null
        ? null
        : (index + direction + photos.length) % photos.length,
    );
  };

  return (
    <section
      className={`school-gallery${itemLabel === 'posters' ? ' school-gallery-posters' : ''}`}
      id={`gallery-${album}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="school-gallery-inner">
        <div className="school-gallery-heading">
          <div>
            <h2 id={`${id}-title`}>{collection.title}</h2>
            <p>{collection.description}</p>
          </div>
          <button
            type="button"
            className="school-gallery-link"
            aria-haspopup="dialog"
            onClick={(event) => show(0, event.currentTarget)}
          >
            <Images size={18} aria-hidden="true" />
            {photos.length === 1
              ? 'View image'
              : `View all ${photos.length} ${itemLabel}`}
            <ArrowUpRight size={19} aria-hidden="true" />
          </button>
        </div>
        <div className="school-gallery-grid" data-count={preview.length}>
          {preview.map((photo, index) => (
            <div key={photo.id} className="school-gallery-item">
              <button
                type="button"
                className="school-gallery-card"
                key={photo.id}
                aria-haspopup="dialog"
                aria-label={`Open image ${index + 1} of ${photos.length}: ${photo.caption}`}
                onClick={(event) => show(index, event.currentTarget)}
              >
                <span
                  className="school-gallery-image"
                  data-archive={photo.archive || undefined}
                  data-contain={photo.contain || undefined}
                >
                  <SchoolImage
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 600px) 88vw, (max-width: 900px) 44vw, 30vw"
                  />
                  <span className="school-gallery-expand">
                    <Expand size={18} aria-hidden="true" />
                  </span>
                  {photo.archive && (
                    <span className="school-gallery-archive">Archive</span>
                  )}
                </span>
                <span className="school-gallery-caption">
                  <span className="school-gallery-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {photo.caption}
                </span>
              </button>
              {photo.download && (
                <a
                  className="school-gallery-download"
                  href={photo.download}
                  download
                  aria-label={`Download ${photo.caption} as PDF`}
                >
                  Download PDF <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <dialog
        ref={dialog}
        className="school-gallery-lightbox"
        aria-labelledby={`${id}-viewer-title`}
        aria-describedby={`${id}-instructions`}
        onCancel={(event) => {
          event.preventDefault();
          setActive(null);
        }}
        onKeyDown={(event) => {
          if (event.altKey || event.ctrlKey || event.metaKey) return;
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            move(event.key === 'ArrowRight' ? 1 : -1);
          }
        }}
      >
        {current && (
          <>
            <header className="school-gallery-toolbar">
              <h2 id={`${id}-viewer-title`}>{collection.title}</h2>
              <button
                type="button"
                className="school-gallery-control"
                aria-label="Close gallery"
                onClick={() => setActive(null)}
                autoFocus
              >
                <X size={24} aria-hidden="true" />
              </button>
            </header>
            <p id={`${id}-instructions`} className="sr-only">
              Use the left and right arrow keys or swipe to browse. Press Escape
              to close.
            </p>
            <div
              className="school-gallery-stage"
              onTouchStart={(event) => {
                const point = event.touches[0];
                touchStart.current =
                  event.touches.length === 1
                    ? { x: point.clientX, y: point.clientY }
                    : null;
              }}
              onTouchCancel={() => {
                touchStart.current = null;
              }}
              onTouchEnd={(event) => {
                const start = touchStart.current;
                touchStart.current = null;
                if (!start) return;
                const point = event.changedTouches[0];
                const dx = point.clientX - start.x;
                if (
                  Math.abs(dx) > 60 &&
                  Math.abs(dx) > Math.abs(point.clientY - start.y) * 1.5
                )
                  move(dx < 0 ? 1 : -1);
              }}
            >
              {imageFailed ? (
                <output className="school-gallery-load-error">
                  This image couldn’t load. Try another image or reopen the
                  gallery.
                </output>
              ) : (
                <SchoolImage
                  key={current.id}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  loading="eager"
                  onError={() => setImageFailed(true)}
                />
              )}
            </div>
            <footer className="school-gallery-viewer-footer">
              <div
                className="school-gallery-description"
                aria-live="polite"
                aria-atomic="true"
              >
                <p>{current.caption}</p>
                {current.archive && (
                  <small>
                    Archive image; any dates or offers shown are historical.
                  </small>
                )}
                {current.source && (
                  <a
                    href={current.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Original school post{' '}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {current.fullSize && (
                  <a
                    href={current.fullSize}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open full-size poster{' '}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {current.download && (
                  <a href={current.download} download>
                    Download PDF <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
              <div className="school-gallery-navigation">
                {photos.length > 1 && (
                  <button
                    type="button"
                    className="school-gallery-control"
                    aria-label="Previous image"
                    onClick={() => move(-1)}
                  >
                    <ArrowLeft size={22} aria-hidden="true" />
                  </button>
                )}
                <span
                  className="school-gallery-counter"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {(active ?? 0) + 1} / {photos.length}
                </span>
                {photos.length > 1 && (
                  <button
                    type="button"
                    className="school-gallery-control"
                    aria-label="Next image"
                    onClick={() => move(1)}
                  >
                    <ArrowRight size={22} aria-hidden="true" />
                  </button>
                )}
              </div>
            </footer>
          </>
        )}
      </dialog>
    </section>
  );
}
