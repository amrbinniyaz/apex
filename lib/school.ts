/** Shared school details and editorial content. Keep contact details in one place. */
export const school = {
  name: 'Apex International School',
  email: 'info@apexinternationalschool.org',
  phone: '+91 495 296 5004',
  phoneHref: 'tel:+914952965004',
  address: 'Odumbra, Olavanna P.O., Kozhikode, Kerala 673025, India',
  directions:
    'https://www.google.com/maps/search/?api=1&query=Apex%20International%20School%20Odumbra%20Olavanna%20Kozhikode',
};

// Editorial themes, rather than unverified age ranges or programme names.
export const schoolStages = [
  {
    name: 'Curiosity',
    label: 'Discover',
    image: 'apex-campus-source.jpg',
    alt: 'Apex pupils exploring the science laboratory',
    line: 'Where questions begin',
    href: '/apply-now',
  },
  {
    name: 'Discovery',
    label: 'Learn',
    image: 'apex-cinematic-source.jpg',
    alt: 'Learning together at Apex International School',
    line: 'A world to explore',
    href: '/apply-now',
  },
  {
    name: 'Confidence',
    label: 'Grow',
    image: 'apex-skating-source.png',
    alt: 'A pupil taking part in skating at Apex',
    line: 'Space to find your strengths',
    href: '/visit-us',
  },
  {
    name: 'Possibility',
    label: 'Look ahead',
    image: 'apex-video-campus.jpg',
    alt: 'The Apex International School campus',
    line: 'Your next chapter starts here',
    href: '/apply-now',
  },
] as const;
