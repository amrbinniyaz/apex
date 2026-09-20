export type ContentPageKind = 'visit' | 'apply';

// School facts confirmed by the school's public Instagram biography.
export const schoolFacts = [
  { value: '2005', label: 'Established' },
  { value: 'CBSE', label: 'Affiliation' },
  { value: 'Kozhikode', label: 'Location' },
];

export const contentPageFeatures = {
  visit: {
    title: 'Explore the campus',
    text: 'Let us know which parts of school life you would like to see, from classrooms to activities. The school can confirm what is available on your chosen visit date.',
    image: '/assets/apex-video-campus.jpg',
    alt: 'The Apex International School campus, surrounded by trees and green space',
    width: 1179,
    height: 714,
    caption: 'Our campus in Odumbra, Kozhikode',
  },
  apply: {
    title: 'Learning at Apex',
    text: 'Explore classroom learning and activities before making your decision. Ask us about the class you are considering, the school day and opportunities for your child.',
    image: '/assets/apex-cinematic-source.jpg',
    alt: 'Apex pupils learning together with glassware in the science laboratory',
    width: 2400,
    height: 1485,
    caption: 'Pupils learning together in the science laboratory',
  },
} satisfies Record<
  ContentPageKind,
  {
    title: string;
    text: string;
    image: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  }
>;
