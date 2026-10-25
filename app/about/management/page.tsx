import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { ContentPageHero } from '@/components/content-page-hero';
import { SchoolImage } from '@/components/school-image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SiteLink } from '@/components/site-link';
import { management, managementPublished } from '@/lib/management';
import { pageMetadata } from '@/lib/seo';
import '../about.css';
import './management.css';

export const metadata: Metadata = pageMetadata({
  title: 'Management & Leadership | Apex International School, Kozhikode',
  description:
    'Meet the management and school leadership of Apex International School, a CBSE school in Odumbra, Olavanna, Kozhikode.',
  path: '/about/management',
});

export default function ManagementPage() {
  if (!managementPublished) notFound();
  const groups = management.groups.filter((group) => group.members.length);
  return (
    <div className="about-page management-page" id="top">
      <a className="skip-link" href="#management-content">
        Skip to content
      </a>
      <SiteHeader current="about" photo />
      <main id="management-content">
        <ContentPageHero
          title="Management"
          description="The people who lead Apex International School."
          image={management.groupPhoto?.src ?? '/assets/apex-video-campus.jpg'}
          alt={
            management.groupPhoto?.alt ??
            'The Apex International School campus in Kozhikode'
          }
          breadcrumbs={[
            { label: 'About Apex', href: '/about' },
            { label: 'Management' },
          ]}
          nextSection="#management-groups"
        />
        {management.statement && (
          <section className="management-statement">
            <p>{management.statement}</p>
          </section>
        )}
        <div className="management-groups" id="management-groups">
          {management.term && (
            <p className="management-term">{management.term}</p>
          )}
          {groups.map((group) => (
            <section
              className="management-group"
              key={group.title}
              aria-labelledby={`group-${group.title}`}
            >
              <h2 id={`group-${group.title}`}>{group.title}</h2>
              <ul className="management-grid">
                {group.members.map((leader) => (
                  <li className="management-person" key={leader.name}>
                    <div className="management-portrait">
                      <SchoolImage
                        src={leader.photo}
                        alt={leader.name}
                        width={320}
                        height={320}
                        sizes="200px"
                      />
                    </div>
                    <h3>{leader.name}</h3>
                    <p className="management-role">{leader.role}</p>
                    {leader.detail && (
                      <p className="management-detail">{leader.detail}</p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <section className="about-visit" aria-labelledby="management-visit">
          <h2 id="management-visit">Come and meet us</h2>
          <p>
            See the campus and talk to us about what matters to your family.
          </p>
          <SiteLink className="apex-cta" href="/visit-us#enquire">
            Arrange a visit <ArrowUpRight size={21} aria-hidden="true" />
          </SiteLink>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
