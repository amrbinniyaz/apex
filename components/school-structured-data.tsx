import { school } from '@/lib/school';
import { siteUrl } from '@/lib/site-url';

export function SchoolStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'School',
    '@id': siteUrl('/#school'),
    name: school.name,
    url: siteUrl(),
    logo: siteUrl('/assets/apex-logo.svg'),
    telephone: school.phone,
    email: school.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Odumbra, Olavanna P.O.',
      addressLocality: 'Kozhikode',
      addressRegion: 'Kerala',
      postalCode: '673025',
      addressCountry: 'IN',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
