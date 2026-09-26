# School galleries

The shared `SchoolGallery` currently appears on admissions, visits, Life at Apex and activity pages. Only add it to further pages when the user specifies them; keep it off the homepage. It displays a short selection and opens the complete album in a full-screen viewer. Single-image archives use the same viewer without navigation arrows.

## Add school photos

1. Put a school-approved original in `public/assets/library/`. Use a descriptive, unique filename.
2. Add its relative path (`library/your-photo.jpg`) to `scripts/prepare-images.mjs` and run `npm run images`. This creates responsive WebP files and updates the image manifest; do not edit the manifest manually.
3. Add a record to `galleryPhotos` in `lib/gallery.ts`, including a unique ID, path, descriptive alt text, factual caption and category. Keep the original school source link where available. Mark historical promotional posts `archive: true`; those images are not cropped, and the viewer explains that dates/offers are historical.
4. Add its key to the relevant `galleryAlbums` photo lists. List order is display order. Set `preview` to 4 or 6; additional images load only when opened in the viewer.

Use original school photos, not AI retouches, in documentary galleries. Only use images the school has approved for its website. Avoid identifying pupils or asserting event details without confirmed information. Reuse an image across albums only when relevant to both pages. There is no automatic Instagram feed or third-party gallery service.

The viewer supports Escape, arrow keys, touch swipes, focus restoration and browser-native modal focus containment. Its styles are isolated in `styles/school-gallery.css` and use shared Apex tokens.
