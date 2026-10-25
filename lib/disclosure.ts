/**
 * CBSE Mandatory Public Disclosure, transcribed from the school's SARAS 6.0
 * printout dated 21 June 2025 (public/documents/disclosure/
 * mandatory-public-disclosure.pdf). Documents were recovered from the
 * school's previous website. Update these values and files when the school
 * submits a new disclosure; do not edit figures without a new SARAS record.
 */
export const disclosureAsOf = '21 June 2025';

const file = (name: string) => `/documents/disclosure/${name}.pdf`;

export const generalInformation = [
  { label: 'Name of the school', value: 'Apex International School' },
  { label: 'Affiliation number', value: '930963' },
  { label: 'School code', value: '76012' },
  {
    label: 'Complete address with PIN code',
    value: 'Odumbra, Olavanna P.O., Kozhikode, Kerala – 673019',
  },
  { label: 'Principal name', value: 'Sindhu M P' },
  { label: 'Principal qualification', value: 'M.A, M.Ed' },
  { label: 'School email', value: 'info@apexinternationalschool.org' },
  { label: 'Contact details', value: '9895623694' },
];

export const disclosureDocuments = [
  {
    title: 'Documents and information',
    items: [
      {
        label: 'Affiliation, upgradation and recent extension of affiliation',
        href: file('affiliation-renewal-letter'),
      },
      {
        label: 'Society, trust or company registration certificate',
        href: file('trust-deed'),
      },
      {
        label: 'No Objection Certificate (NOC) issued by the State Government',
        href: file('state-noc'),
      },
      {
        label: 'Recognition certificate under the RTE Act, 2009',
        href: file('state-noc'),
      },
      {
        label: 'Building safety certificate as per the National Building Code',
        href: file('building-fitness-2024-25'),
      },
      {
        label: 'Fire safety certificate issued by the competent authority',
        href: file('fire-safety-certificate'),
      },
      {
        label: 'Self-certification submitted for affiliation or extension',
        href: file('self-certification'),
      },
      {
        label: 'Water, health and sanitation certificates',
        href: file('water-sanitation-certificate'),
      },
      { label: 'Land certificate', href: file('land-certificate') },
    ],
  },
  {
    title: 'Results and academics',
    items: [
      {
        label: 'Fee structure (first term, 2025–26)',
        href: file('fee-structure-2025-26'),
      },
      {
        label: 'Annual academic calendar (2025–26)',
        href: file('academic-calendar-2025-26'),
      },
      {
        label: 'Last three years’ board examination results',
        href: file('board-results'),
      },
      {
        label: 'Complete disclosure as filed on CBSE SARAS',
        href: file('mandatory-public-disclosure'),
      },
    ],
  },
];

export const staffAndInfrastructure = [
  { label: 'Total number of teachers', value: '49 (TGT 13, PRT 22)' },
  { label: 'Special educator', value: '1' },
  { label: 'Counsellor and wellness teacher', value: '1' },
  { label: 'Total campus area', value: '8,873 sq m' },
  // Number and size fields are shown exactly as filed.
  { label: 'Number and size of classrooms (sq m)', value: '45 & 47' },
  {
    label: 'Number and size of laboratories, including computer labs (sq m)',
    value: '3 & 57',
  },
  { label: 'Internet facility', value: 'Yes' },
  { label: 'Girls’ and boys’ toilets', value: '14 each' },
  { label: 'Class X result, 2024', value: '33 registered, 33 passed (100%)' },
];
