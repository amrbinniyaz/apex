export type SchoolVideo = {
  id: string;
  kind: 'video' | 'short';
  /** Upload date shown on YouTube. */
  date: string;
  title: string;
  text: string;
};

/**
 * Curated from the school's YouTube channel on 2026-10-25. Titles are tidied
 * versions of the channel's own titles. Thumbnails are saved locally in
 * public/assets/videos/<id>.webp (16:9; 200 × 360 for the vertical short).
 */
export const schoolVideos: SchoolVideo[] = [
  {
    id: 'e0Fh7UVrrvQ',
    kind: 'video',
    date: '2024-04-01',
    title: '19th School Day celebration',
    text: 'Performances from the 19th School Day celebrations at Apex.',
  },
  {
    id: 'YT8k9qOxMxw',
    kind: 'video',
    date: '2024-03-25',
    title: '19th School Day inauguration',
    text: 'The opening of the 19th School Day at Apex International School.',
  },
  {
    id: 'MabmEwvxDGc',
    kind: 'video',
    date: '2024-03-25',
    title: '19th School Day highlights',
    text: 'Dance and stage performances from the 19th School Day.',
  },
  {
    id: 'iRfK8laVBsY',
    kind: 'video',
    date: '2021-03-30',
    title: 'Annual Day 2020, part 3',
    text: 'The final part of the Apex Annual Day 2020 programme.',
  },
  {
    id: '-eMEf0a6FK8',
    kind: 'video',
    date: '2021-03-30',
    title: 'Annual Day 2020, part 2',
    text: 'More performances from the Apex Annual Day 2020.',
  },
  {
    id: 'lJ13U-LX3TI',
    kind: 'video',
    date: '2021-03-30',
    title: 'Annual Day 2020, part 1',
    text: 'The opening of the Apex Annual Day 2020.',
  },
  {
    id: '48m2uYwwXIE',
    kind: 'video',
    date: '2020-11-17',
    title: 'Children’s Day celebrations 2020',
    text: 'Children’s Day 2020 at Apex, with chief guest Aryananda R Babu.',
  },
  {
    id: 'f6UZkcWYofs',
    kind: 'video',
    date: '2019-12-08',
    title: 'Parents’ feedback',
    text: 'Apex parents share their experience of the school.',
  },
  {
    id: 's3l7IsnY_jk',
    kind: 'video',
    date: '2019-12-06',
    title: 'Discover Apex International School',
    text: 'A tour of the campus and school life at Apex.',
  },
  {
    id: 'OaCx5Ku3mMI',
    kind: 'short',
    date: '2019-12-06',
    title: 'Welcome to Apex International School',
    text: 'A short welcome to the school, from the library to the classroom.',
  },
  {
    id: 'Cav3_pMg90w',
    kind: 'video',
    date: '2018-08-06',
    title: 'Apex School Radio',
    text: 'Pupils on air at the Apex school radio station.',
  },
  {
    id: 'b37TJmTuPyg',
    kind: 'video',
    date: '2018-07-31',
    title: 'School Parliament investiture 2018–19',
    text: 'The investiture ceremony for the 2018–19 School Parliament.',
  },
  {
    id: 'dWagsURbRIA',
    kind: 'video',
    date: '2018-07-27',
    title: 'Speech on courage',
    text: 'An Apex pupil speaks on the theme of courage.',
  },
  {
    id: 'SF608fInq9Q',
    kind: 'video',
    date: '2018-07-27',
    title: 'Group song: courage',
    text: 'A group song performed on the theme of courage.',
  },
  {
    id: 'XeR9hsyTdG4',
    kind: 'video',
    date: '2018-07-16',
    title: 'Speech on patriotism',
    text: 'An Apex pupil speaks on patriotism.',
  },
  {
    id: 'JePKOPNiRsY',
    kind: 'short',
    date: '2018-07-16',
    title: 'Cleanliness is next to godliness',
    text: 'A short message from an Apex pupil about cleanliness.',
  },
  {
    id: '-g92XfvfEvc',
    kind: 'video',
    date: '2018-06-22',
    title: 'International Yoga Day',
    text: 'Apex pupils practising yoga together on Yoga Day.',
  },
];

export const videoUrl = (video: SchoolVideo) =>
  video.kind === 'short'
    ? `https://www.youtube.com/shorts/${video.id}`
    : `https://www.youtube.com/watch?v=${video.id}`;
