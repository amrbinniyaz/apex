import type { ComponentProps } from 'react';

/** Native navigation keeps public pages independent of the client router runtime. */
export function SiteLink({
  href,
  children,
  ...props
}: ComponentProps<'a'> & { href: string }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
