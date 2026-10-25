import { instagramProfile } from '@/lib/instagram';

// School-owned accounts; the YouTube channel publishes the film on the homepage.
export const socialLinks = [
  { network: 'instagram', label: 'Instagram', url: instagramProfile.url },
  {
    network: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/@apexinternationalschool2179',
  },
] as const;
