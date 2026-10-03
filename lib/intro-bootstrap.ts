/** Runs in the document head, before the homepage or its images can paint. */
export const introBootstrap = String.raw`
(() => {
  if (window.location.pathname !== '/') return;
  try {
    if (window.localStorage.getItem('apex-intro-seen')) return;
    window.localStorage.setItem('apex-intro-seen', '1');
  } catch {
    return;
  }
  if (
    window.location.hash ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.performance.getEntriesByType('navigation')[0]?.type === 'back_forward'
  ) return;
  document.documentElement.setAttribute('data-apex-intro', 'active');
  // Release the page even if hydration is delayed or a client bundle fails.
  const finish = () => {
    document.documentElement.removeAttribute('data-apex-intro');
    window.dispatchEvent(new Event('apex:intro-end'));
  };
  window.setTimeout(finish, 4500);
  window.addEventListener('pagehide', finish, { once: true });
})();
`;
