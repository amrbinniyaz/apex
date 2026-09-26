export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  source?: string;
  archive?: boolean;
  contain?: boolean;
  download?: string;
  fullSize?: string;
};

// Original school assets only. Album photo IDs below define the display order.
// Historical promotional artwork is labelled and shown without cropping.
export const galleryPhotos = {
  resultsClass: {
    id: 'resultsClass',
    src: '/assets/results/class-results-2025-26.webp',
    category: 'Results',
    contain: true,
    alt: 'The Class X batch photograph and the school’s 100% result announcement for AISSE 2025–26',
    caption: 'Class X results announcement · 2025–26',
    download: '/documents/results/class-results-2025-26.pdf',
    fullSize: '/assets/results/class-results-2025-26.webp',
  },
  resultsToppers: {
    id: 'resultsToppers',
    src: '/assets/results/toppers-2025-26.webp',
    category: 'Results',
    contain: true,
    alt: 'School toppers, students scoring above 90% and subject toppers in CBSE Class X, 2025–26',
    caption: 'School and subject toppers · 2025–26',
    download: '/documents/results/toppers-2025-26.pdf',
    fullSize: '/assets/results/toppers-2025-26.webp',
  },
  resultsSubjects: {
    id: 'resultsSubjects',
    src: '/assets/results/perfect-scores-2025-26.webp',
    category: 'Results',
    contain: true,
    alt: 'The school’s poster celebrating 100% scores in Mathematics, English, Information Technology and Arabic',
    caption: 'Perfect subject scores · 2025–26',
    download: '/documents/results/perfect-scores-2025-26.pdf',
    fullSize: '/assets/results/perfect-scores-2025-26.webp',
  },
  resultsStudents: {
    id: 'resultsStudents',
    src: '/assets/results/student-results-2025-26.webp',
    category: 'Results',
    contain: true,
    alt: 'Class X student results and first-class achievers listed in the school’s 2025–26 poster',
    caption: 'Student results · 2025–26',
    download: '/documents/results/student-results-2025-26.pdf',
    fullSize: '/assets/results/student-results-2025-26.webp',
  },
  campus: {
    id: 'campus',
    src: '/assets/apex-video-campus.jpg',
    category: 'Campus',
    alt: 'The Apex school building and lawn in Odumbra',
    caption: 'The school building and lawn, Odumbra.',
  },
  science: {
    id: 'science',
    src: '/assets/apex-cinematic-source.jpg',
    category: 'Learning',
    alt: 'Apex pupils examining glassware together in the science laboratory',
    caption: 'Pupils working together in the science laboratory.',
  },
  presentation: {
    id: 'presentation',
    src: '/assets/07a6dcb8-4d03-4929-a681-785467613806.JPG',
    category: 'School community',
    alt: 'A pupil receiving a certificate at an Apex school presentation',
    caption: 'A certificate presentation at school.',
  },
  gathering: {
    id: 'gathering',
    src: '/assets/cab4df71-3a80-47cc-8d48-e48c96e9e7a9.JPG',
    category: 'School community',
    alt: 'A speaker at the lectern during a gathering at Apex',
    caption: 'A school gathering with a speaker at the lectern.',
  },
  art: {
    id: 'art',
    src: '/assets/library/art-original-2019.jpg',
    category: 'Art and craft',
    archive: true,
    alt: 'A teacher and pupil holding a handmade flower picture in a 2019 school post',
    caption: 'A teacher and pupil sharing handmade artwork · 2019.',
    source: 'https://www.instagram.com/p/B6S-8QyDqHG/',
  },
  artTalent: {
    id: 'artTalent',
    src: '/assets/library/art-talent-2022.jpg',
    category: 'Art and craft',
    archive: true,
    alt: 'A pupil holding artwork in the school’s 2022 talent competition poster',
    caption: 'Pupil artwork featured in a talent competition poster · 2022.',
    source: 'https://www.instagram.com/p/CY1Nrwbvb2H/',
  },
  chess: {
    id: 'chess',
    src: '/assets/library/chess-day-2024.jpg',
    category: 'Chess',
    archive: true,
    alt: 'Children playing chess in the school’s International Chess Day post',
    caption: 'Pupils at the chessboard for International Chess Day · 2024.',
    source: 'https://www.instagram.com/p/C9macU3THSh/',
  },
  guitar: {
    id: 'guitar',
    src: '/assets/library/guitar-talent-2022.jpg',
    category: 'Music',
    archive: true,
    alt: 'A pupil holding a guitar in the school’s 2022 talent competition poster',
    caption:
      'A young guitarist featured in a talent competition poster · 2022.',
    source: 'https://www.instagram.com/p/CY35kKhv_w3/',
  },
  skating: {
    id: 'skating',
    src: '/assets/library/skating-original-2019.jpg',
    category: 'Skating',
    archive: true,
    alt: 'A pupil wearing a helmet and protective equipment in a skating video still',
    caption: 'Getting ready to skate, from the school’s video archive · 2019.',
    source: 'https://www.instagram.com/p/B5enNnEjUNr/',
  },
  taekwondo: {
    id: 'taekwondo',
    src: '/assets/library/taekwondo-original-2019.jpg',
    category: 'Taekwondo',
    archive: true,
    alt: 'The school’s illustrated Taekwondo poster showing two martial artists',
    caption: 'The school’s original Taekwondo artwork · 2019.',
    source: 'https://www.instagram.com/p/B1Q5c1ujtlW/',
  },
  radio: {
    id: 'radio',
    src: '/assets/library/school-radio-original-2019.jpg',
    category: 'School Radio',
    archive: true,
    alt: 'The school’s illustrated radio poster with headphones and a microphone',
    caption: 'The school’s original School Radio artwork · 2019.',
    source: 'https://www.instagram.com/p/B1QbbNbDCkA/',
  },
} satisfies Record<string, GalleryPhoto>;

type PhotoId = keyof typeof galleryPhotos;
type Album = {
  title: string;
  description: string;
  photos: PhotoId[];
  preview: number;
};
export const galleryAlbums = {
  results: {
    title: 'Results archive',
    description:
      'CBSE Class X · 2025–26. View the school’s original announcements and full results.',
    photos: [
      'resultsClass',
      'resultsToppers',
      'resultsSubjects',
      'resultsStudents',
    ],
    preview: 4,
  },
  apply: {
    title: 'A closer look at school life',
    description:
      'Learning, creative work and the people who make up our school.',
    photos: ['science', 'presentation', 'art', 'chess', 'guitar', 'gathering'],
    preview: 4,
  },
  visit: {
    title: 'Around Apex',
    description: 'A first look at the campus and its school community.',
    photos: ['campus', 'gathering', 'science', 'presentation', 'art'],
    preview: 4,
  },
  life: {
    title: 'School life in pictures',
    description:
      'Classroom moments, creative work and activities from the Apex archive.',
    photos: [
      'science',
      'art',
      'chess',
      'skating',
      'guitar',
      'presentation',
      'artTalent',
      'gathering',
    ],
    preview: 6,
  },
  'art-and-craft': {
    title: 'Art and craft gallery',
    description: 'Pupil artwork from the school archive.',
    photos: ['art', 'artTalent'],
    preview: 4,
  },
  chess: {
    title: 'From the chess archive',
    description: 'A closer look at the school’s International Chess Day post.',
    photos: ['chess'],
    preview: 4,
  },
  skating: {
    title: 'From the skating archive',
    description: 'A still from the school’s skating video.',
    photos: ['skating'],
    preview: 4,
  },
  taekwondo: {
    title: 'From the Taekwondo archive',
    description: 'The original artwork shared by the school.',
    photos: ['taekwondo'],
    preview: 4,
  },
  'school-radio': {
    title: 'From the School Radio archive',
    description: 'The original artwork shared by the school.',
    photos: ['radio'],
    preview: 4,
  },
} satisfies Record<string, Album>;

export type GalleryAlbumId = keyof typeof galleryAlbums;
