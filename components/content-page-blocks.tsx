import { SchoolImage } from '@/components/school-image';
import {
  contentPageFeatures,
  schoolFacts,
  type ContentPageKind,
} from '@/lib/content-pages';

/** Photo-led editorial feature shared by content pages, with page-specific copy. */
export function ContentFeature({ kind }: { kind: ContentPageKind }) {
  const feature = contentPageFeatures[kind];
  return (
    <section
      className={`content-feature content-feature-${kind}`}
      aria-labelledby={`${kind}-feature-title`}
    >
      <figure className="content-feature-photo">
        <SchoolImage
          src={feature.image}
          alt={feature.alt}
          width={feature.width}
          height={feature.height}
          sizes="(max-width: 767px) 100vw, 55vw"
          loading="lazy"
        />
        <figcaption>{feature.caption}</figcaption>
      </figure>
      <div className="content-feature-copy">
        <h2 id={`${kind}-feature-title`}>{feature.title}</h2>
        <p>{feature.text}</p>
      </div>
    </section>
  );
}

export function ContentFacts() {
  return (
    <section className="content-facts" aria-labelledby="school-facts-title">
      <div className="content-facts-heading">
        <h2 id="school-facts-title">Apex at a glance</h2>
      </div>
      <dl>
        {schoolFacts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
