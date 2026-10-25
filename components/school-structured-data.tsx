import { JsonLd } from '@/components/json-ld';
import { socialLinks } from '@/lib/social';
import { school } from '@/lib/school';
import { shareImage, siteName } from '@/lib/seo';
import { siteUrl } from '@/lib/site-url';

// Founding year and CBSE affiliation are confirmed in lib/content-pages.ts.
export function SchoolStructuredData() {
  return (
    <JsonLd
      nodes={[
        {
          '@type': 'School',
          '@id': siteUrl('/#school'),
          name: school.name,
          alternateName: 'Apex International School Kozhikode',
          description:
            'A CBSE-affiliated school in Odumbra, Olavanna, Kozhikode, Kerala, established in 2005.',
          url: siteUrl(),
          logo: siteUrl('/assets/apex-logo.svg'),
          image: siteUrl(shareImage.url),
          foundingDate: '2005',
          identifier: {
            '@type': 'PropertyValue',
            propertyID: 'CBSE Affiliation Number',
            value: school.affiliationNumber,
          },
          telephone: school.phone,
          email: school.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Odumbra, Olavanna P.O.',
            addressLocality: 'Kozhikode',
            addressRegion: 'Kerala',
            postalCode: '673019',
            addressCountry: 'IN',
          },
          hasMap: school.directions,
          areaServed: { '@type': 'City', name: 'Kozhikode' },
          sameAs: socialLinks.map((social) => social.url),
        },
        {
          '@type': 'WebSite',
          '@id': siteUrl('/#website'),
          name: siteName,
          url: siteUrl(),
          inLanguage: 'en-IN',
          publisher: { '@id': siteUrl('/#school') },
        },
      ]}
    />
  );
}
