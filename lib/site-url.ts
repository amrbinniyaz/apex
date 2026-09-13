/** Set SITE_URL to the final public origin before deploying to a custom domain. */
export function siteUrl(path = '/') {
  const configured =
    process.env.SITE_URL || 'https://apexinternationalschool.org';
  const base = new URL(configured);
  if (!['https:', 'http:'].includes(base.protocol))
    throw new Error('SITE_URL must be an HTTP(S) URL');
  return new URL(path, base.origin).toString();
}
