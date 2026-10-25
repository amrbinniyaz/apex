import type { socialLinks } from '@/lib/social';

type Network = (typeof socialLinks)[number]['network'];

/** Simple outline marks sized to sit with the shared line icons. */
export function SocialIcon({ network }: { network: Network }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {network === 'instagram' ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
        </>
      ) : (
        <>
          <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
          <path d="m10 9.2 5 2.8-5 2.8z" fill="currentColor" />
        </>
      )}
    </svg>
  );
}
