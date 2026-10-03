import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { ContentPageHero } from '@/components/content-page-hero';
import { ContactForm } from '@/components/contact-form';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SiteLink } from '@/components/site-link';
import { deliveryConfigured } from '@/lib/enquiry';
import { school } from '@/lib/school';

export const metadata: Metadata = {
  title: 'Contact Us | Apex International School',
  description:
    'Contact Apex International School in Kozhikode. Send an enquiry, call the school or find our campus in Odumbra, Olavanna.',
  alternates: { canonical: '/contact-us' },
  openGraph: {
    title: 'Contact Us | Apex International School',
    description: 'Get in touch and find your way to our campus in Kozhikode.',
    url: '/contact-us',
  },
};

export default function ContactPage() {
  const directSubmission = deliveryConfigured({
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.ENQUIRY_FROM_EMAIL,
    to: process.env.ENQUIRY_TO_EMAIL,
  });
  const mapQuery = encodeURIComponent(`${school.name}, ${school.address}`);

  return (
    <div id="top" className="contact-page">
      <a className="skip-link" href="#contact-content">
        Skip to content
      </a>
      <SiteHeader photo current="contact" />
      <main id="contact-content">
        <ContentPageHero
          title="Contact us"
          description="Get in touch with Apex."
          image="/assets/apex-video-campus.jpg"
          alt="The Apex International School campus"
          breadcrumbs={[{ label: 'Contact us' }]}
          nextSection="#get-in-touch"
        />
        <section
          className="contact-layout"
          id="get-in-touch"
          aria-labelledby="contact-heading"
        >
          <div className="contact-details">
            <h2 id="contact-heading">How can we help?</h2>
            <p>
              For questions about the school, admissions or an upcoming visit,
              get in touch with our team.
            </p>
            <dl>
              <div>
                <dt>Call</dt>
                <dd>
                  <a href={school.phoneHref}>{school.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${school.email}`}>{school.email}</a>
                </dd>
              </div>
              <div>
                <dt>Find us</dt>
                <dd>
                  <address>{school.address}</address>
                </dd>
              </div>
            </dl>
            <SiteLink className="contact-text-link" href="/visit-us">
              Planning a school visit?{' '}
              <ArrowUpRight size={17} aria-hidden="true" />
            </SiteLink>
          </div>
          <ContactForm directSubmission={directSubmission} />
        </section>
        <section
          className="contact-location"
          aria-labelledby="contact-location-heading"
        >
          <div className="contact-location-heading">
            <div>
              <h2 id="contact-location-heading">Find our campus</h2>
              <p>Odumbra, Olavanna · Kozhikode</p>
            </div>
            <a
              className="contact-text-link"
              href={school.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <iframe
            title="Apex International School location on Google Maps"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
