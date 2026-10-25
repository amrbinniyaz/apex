export type Leader = {
  name: string;
  role: string;
  /** Square portrait under /assets/management/, e.g. '/assets/management/name.webp'. */
  photo: string;
  /** Optional short detail supplied by the school, e.g. qualifications. */
  detail?: string;
};

/**
 * Management Committee from the school-supplied members list (October 2026).
 * School-supplied management details for /about/management. The page, its
 * menu link and its sitemap entry stay hidden until a group has members.
 */
export const management = {
  // e.g. 'Management and school leadership, 2026–27'
  term: '',
  // One sentence on the management's role, approved by the school.
  statement: '',
  // Optional group photo for the page opening.
  groupPhoto: null as { src: string; alt: string } | null,
  groups: [
    {
      title: 'Management Committee',
      members: [
        {
          name: 'C. A. Alikoya',
          role: 'Chairman',
          photo: '/assets/management/c-a-alikoya.webp',
        },
        {
          name: 'T. M. Ahamed Koya',
          role: 'Vice Chairman',
          photo: '/assets/management/t-m-ahamed-koya.webp',
        },
        {
          name: 'Dr. C. M. Najeeb',
          role: 'Honorary Secretary, Apex Educational Trust & Director',
          photo: '/assets/management/c-m-najeeb.webp',
        },
        {
          name: 'T. P. Aboobackar',
          role: 'Director, Apex Educational Trust',
          photo: '/assets/management/t-p-aboobackar.webp',
        },
        {
          name: 'Noushad Ali',
          role: 'Director',
          photo: '/assets/management/noushad-ali.webp',
        },
        {
          name: 'Abdurasheed M K',
          role: 'Director',
          photo: '/assets/management/abdurasheed-m-k.webp',
        },
        {
          name: 'Ummer Bin Abdul Azeez',
          role: 'Director',
          photo: '/assets/management/ummer-bin-abdul-azeez.webp',
        },
        {
          name: 'Shoukathali Shahjahan',
          role: 'Director',
          photo: '/assets/management/shoukathali-shahjahan.webp',
        },
      ] as Leader[],
    },
    { title: 'School leadership', members: [] as Leader[] },
  ],
};

export const managementPublished = management.groups.some(
  (group) => group.members.length > 0,
);
