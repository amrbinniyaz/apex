/** Shared school details and editorial content. Keep contact details in one place. */
export const school = {
  name: 'Apex International School',
  email: 'info@apexinternationalschool.org',
  phone: '+91 495 296 5004',
  phoneHref: 'tel:+914952965004',
  // WhatsApp number in international format without '+' or spaces, e.g. '919876543210'.
  // Leave empty until the school confirms it; WhatsApp links stay hidden.
  whatsapp: '',
  // Public URL of the CBSE mandatory disclosure (a PDF under /documents or a page).
  // The footer link is hidden while empty, so it never points to a missing page.
  disclosureHref: '',
  address: 'Odumbra, Olavanna P.O., Kozhikode, Kerala 673025, India',
  directions:
    'https://www.google.com/maps/search/?api=1&query=Apex%20International%20School%20Odumbra%20Olavanna%20Kozhikode',
};

export const whatsappHref = school.whatsapp
  ? `https://wa.me/${school.whatsapp}?text=${encodeURIComponent('Hello Apex International School, I would like to enquire about admission.')}`
  : '';

// Editorial themes, rather than unverified age ranges or programme names.
export const schoolStages = [
  {
    name: 'Curiosity',
    label: 'Discover',
    image: 'apex-campus-source.jpg',
    alt: 'Apex pupils exploring the science laboratory',
    line: 'Science in the classroom',
    href: '/about',
  },
  {
    name: 'Discovery',
    label: 'Learn',
    image: 'apex-cinematic-source.jpg',
    alt: 'Learning together at Apex International School',
    line: 'Learning together',
    href: '/about#why-choose-apex',
  },
  {
    name: 'Confidence',
    label: 'Grow',
    image: 'cab4df71-3a80-47cc-8d48-e48c96e9e7a9.JPG',
    alt: 'An Apex pupil speaking at a microphone during a school event',
    line: 'Pupil leadership',
    href: '/about#achievements',
  },
  {
    name: 'Possibility',
    label: 'Look ahead',
    image: 'apex-video-campus.jpg',
    alt: 'The Apex International School campus',
    line: 'Explore our campus',
    href: '/visit-us',
  },
] as const;
