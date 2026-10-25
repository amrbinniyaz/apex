import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { ContentPageHero } from '@/components/content-page-hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import {
  disclosureAsOf,
  disclosureDocuments,
  generalInformation,
  staffAndInfrastructure,
} from '@/lib/disclosure';
import { pageMetadata } from '@/lib/seo';
import './disclosure.css';

export const metadata: Metadata = pageMetadata({
  title: 'Mandatory Public Disclosure | Apex International School (CBSE)',
  description:
    'CBSE Mandatory Public Disclosure for Apex International School, Kozhikode: affiliation 930963, school information, certificates, fee structure, academic calendar and results.',
  path: '/mandatory-public-disclosure',
});

function InfoTable({
  caption,
  rows,
}: {
  caption: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <table className="disclosure-table">
      <caption>{caption}</caption>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <th scope="row">{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function DisclosurePage() {
  return (
    <div className="disclosure-page" id="top">
      <a className="skip-link" href="#disclosure-content">
        Skip to content
      </a>
      <SiteHeader photo />
      <main id="disclosure-content">
        <ContentPageHero
          title="Mandatory Public Disclosure"
          description="CBSE Affiliation No. 930963"
          image="/assets/apex-video-campus.jpg"
          alt="The Apex International School campus in Kozhikode"
          breadcrumbs={[{ label: 'Mandatory Public Disclosure' }]}
          nextSection="#general-information"
        />
        <div className="disclosure-body">
          <p className="disclosure-note">
            As filed by the school on CBSE SARAS, {disclosureAsOf}.
          </p>
          <section id="general-information">
            <InfoTable
              caption="A. General information"
              rows={generalInformation}
            />
          </section>
          {disclosureDocuments.map((group, index) => (
            <section key={group.title}>
              <h2>
                {String.fromCharCode(66 + index)}. {group.title}
              </h2>
              <ul className="disclosure-docs">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText size={20} aria-hidden="true" />
                      <span>{item.label}</span>
                      <span className="disclosure-pdf">PDF</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section>
            <InfoTable
              caption="D. Staff, infrastructure and results"
              rows={staffAndInfrastructure}
            />
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
