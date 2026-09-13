# Maintaining the Apex website

- `app/page.tsx` composes the homepage sections in `components/home/`.
- `HomeExperience` owns the welcome intro; `HeroCarousel` owns slide timing; `SchoolDiscovery` owns the film reveal.
- `hooks/use-media-query.ts`, `use-arch-scroll.ts`, and `use-reveal.ts` encapsulate subscriptions and clean up listeners.
- Visit Us and Apply Now use the same `AdmissionsPage` and `EnquiryForm`.
- Shared school contact details and homepage editorial cards live in `lib/school.ts`.
- Design tokens are in `styles/tokens.css`. `app/globals.css` imports the section styles in cascade order; preserve that order when editing responsive rules.
- School photos and their provenance are documented in `ASSET-SOURCES.md`. The homepage cards use editorial themes instead of the previous school's unverified programme names and age ranges.

## Responsive images

`SchoolImage` uses pre-generated WebP variants from `lib/image-manifest.json`, so production does not depend on a runtime image optimization service. Run `npm run images` after replacing one of the source images listed in `scripts/prepare-images.mjs`. Originals remain available for editing and provenance.

## Checks

Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
The enquiry tests mock delivery; they never send real email.

## Search configuration

`SITE_URL` is the public origin used for canonical URLs, the sitemap, social metadata, and School structured data. It defaults to `https://apexinternationalschool.org`; change it if the final public domain differs.

`/robots.txt` allows crawling of public pages and excludes the enquiry API. `/sitemap.xml` includes all three public pages. The application no longer emits `noindex`. A private Sites publication still requires access and cannot be indexed merely because these tags are enabled. Search Console verification, public domain launch, and real-user performance measurement remain operational follow-up tasks.

## Direct enquiry delivery

The server endpoint is `POST /api/enquiries`. The prepared integration uses [Resend's HTTP API](https://resend.com/docs/api-reference/emails/send-email) without an extra package. Configure these server-only runtime variables through your hosting provider or Sites environment settings:

- `RESEND_API_KEY`: an API key allowed to send from your verified domain.
- `ENQUIRY_FROM_EMAIL`: the verified sender address, optionally with a display name.
- `ENQUIRY_TO_EMAIL`: the school's confirmed enquiry inbox.

Do not commit credentials. The direct send button is available only when all three values exist. Otherwise the form retains its email-app and copy-message fallback. The same fallback remains available if delivery fails.

The endpoint checks origin, content type, byte size, required fields, email format, length limits, contact consent, and a hidden spam field. The delivery recipient and sender come only from server configuration. A stable idempotency key prevents duplicate deliveries on unchanged retries. A success message appears only after the provider returns an acceptance receipt; this does not claim inbox delivery. Message bodies and provider errors are not logged.

Before enabling direct delivery on a public host, configure host-level rate limiting for `/api/enquiries` and verify the sender domain and recipient inbox. The hidden spam field is a basic filter, not a replacement for rate limiting. This implementation does not keep an application database of enquiries; delivery and retention are handled by the configured email service and school mailbox. Update the school's privacy information to describe that service before public collection.
