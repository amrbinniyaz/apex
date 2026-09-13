# Reference assets

This private design study recreates the homepage at https://www.pgs.org.uk/.
The logo, school photographs, architectural illustration, Agenda/Goudy fonts,
and hero/welcome films were retrieved from the reference website on 8 September 2026.
Hero films are locally optimized copies of the source Vimeo films (IDs 1205743168
and 1205746473); the welcome film is from /userfiles/pgsv2mvc/Homepage/PGS-Welcome-Video.mp4.
Images retain the original ownership. Navigation links lead to the official school site.
The implementation is original React/CSS and includes no original analytics or trackers.

## Apex hero update

The user supplied an Apex International School admissions photograph. The hero
asset `public/assets/apex-hero.png` was edited with the built-in image_gen tool
on 8 September 2026, preserving the pupil while removing poster overlays and
replacing the dark classroom with a feathered pale background. The original PGS
hero film remains in the assets directory but is no longer used in the hero.

## Layered creative hero

`apex-painting.png` and `apex-watercolors.png` are AI-generated imagined art
activities, made using built-in image_gen. They are decorative concept scenes,
not documentary photographs of an Apex school event. The approved `apex-hero.png`
remains the foreground pupil image, with a CSS silhouette mask to reveal the
independently positioned background layers. A generated transparency attempt
was rejected because it contained a baked checkerboard; it is not used on the site.
Generation prompts are saved in `apex-collage-prompts.json`.

## Discovery hero slide

The user supplied a Google Maps contribution photo showing Apex pupils in a
science laboratory (contribution account 109638889389741257152; photo
CIHM0ogKEICAgIC4jd7pigE). The original downloaded photo is retained as
`public/assets/apex-campus-source.jpg` and used in separate background panels.
Source: https://www.google.com/maps/contrib/109638889389741257152/photos/

`public/assets/apex-science-hero.png` is an identity-preserving, background-cleanup
edit of the central pupil made with built-in image_gen. The prompt is saved in
`apex-science-prompt.txt`. The original image's ownership is unchanged.

## Apex logo

`public/assets/apex-logo.svg` is the SVG supplied by the user on 10 September 2026, used in the header, footer, and browser icon. Its original paths and colors are preserved.

## Apex school video

The user-provided YouTube video https://www.youtube.com/watch?v=s3l7IsnY_jk plays muted inside the animated archway using the YouTube IFrame API. It starts when the section enters view, pauses offscreen, and loops. Its YouTube thumbnail is the loading image.

The video section background uses the user-selected Google Maps campus photograph (photo ID `CIABIhAGbwNQHxzaeGgBA0sACDY4`), saved as `public/assets/apex-video-campus.jpg` on 10 September 2026. The original 1179 × 714 image was retrieved from the googleusercontent photo URL embedded in the supplied Maps link. At the user's request, it was transformed into a graphite pencil illustration using built-in imagegen, saved as `public/assets/apex-campus-pencil.png` (1672 × 941). The artwork is displayed at 25% opacity with an ivory overlay for a very light background. The original photograph remains available; generated architectural details may differ from the source. The arch mask expands independently of the artwork and video. The original image's ownership is unchanged. The exact generation prompt is in `apex-campus-pencil-prompt.txt`.

## Illustrated school chapters

The active small doodles are now original inline SVG paths in `components/school-doodle.tsx`, drawn in with CSS stroke animation on entering the viewport. They replace the PNG sprites on the page; the original decal sheet remains as a design reference. SVG paths were authored directly for Apex, with reduced-motion support.

`apex-school-doodles.png` is an original AI-generated transparent 1536 × 1024 decal sheet, created with built-in imagegen on 10 September 2026. The six pen-and-pencil motifs (two curly arrows, paper plane, lightbulb, book, and stars) use Apex's navy, muted red, pale blue, and gold palette. The site displays individual cells through CSS background positioning. The motifs take general scrapbook inspiration from Madeira's site; they are not copied Madeira assets. Exact generation prompt: `apex-school-doodles-prompt.txt`.

The section immediately after the video was redesigned on 10 September 2026, inspired by the editorial serif, handwritten labels, and illustrated style at https://unexpected.madeira.org/.

`apex-chapter-illustration.png` is an original AI-generated conceptual illustration of pupils, made with the built-in image_gen tool. It is not a photograph of actual Apex pupils.

Lora (regular and bold) and Patrick Hand are locally hosted open-source Google Fonts from https://fonts.google.com/specimen/Lora and https://fonts.google.com/specimen/Patrick+Hand. Existing school-stage photographs and destination links are retained from the original design study.

The following life-beyond-the-classroom section uses the same typefaces, an ink-blue background, and `apex-possibilities-illustration.png`: an original AI-generated conceptual illustration of pupils exploring music, sport, and reading, created with built-in image_gen on 10 September 2026.

## Visit invitation and footer

The final two sections now use Apex branding, an existing user-supplied science-lab photo in a postcard frame, and the same Lora/Patrick Hand typefaces. Contact address, office phone (0495 2965004), and school email were checked against the official disclosure page on 10 September 2026: https://apexinternationalschool.org/mandatory-public-disclosure/. The email comes from the general-information table; the address and office number come from the page footer. Visit enquiries use email, and footer navigation links to the corresponding sections of this site.

## Cinematic hero

The user selected the Google Maps science-lab photo with photo ID `CIHM0ogKEICAgIDaoe2nbQ`, downloaded from its supplied googleusercontent URL on 10 September 2026. The untouched source is `apex-cinematic-source.jpg`.

`apex-cinematic-hero.png` is an AI-edited version, inspired by the full-screen photographic hero at https://www.churchillschoolnyc.org/. It adds warm directional lighting, foreground glassware, background cleanup, and space for website copy, and removes the embedded corner crest so the supplied SVG can be displayed in the header. The seven pupils and their activity are retained, but generated details may differ from the original photograph. The original image's ownership is unchanged.

The active hero is `apex-cinematic-hero-v2.png` (1671 × 941), re-edited on 10 September 2026 with the built-in imagegen tool using the first cinematic edit as the target and the original photograph as an identity reference. The user requested a more attractive science lab. This version adds brighter warm daylight, cleaner shelving, and restrained cyan/amber glassware. The previous version remains available. The tool does not expose a model selector or confirm its backend model. Generated details may differ from the original. The exact edit prompt is saved in `apex-cinematic-hero-v2-prompt.txt`.

## Second cinematic hero: skating

`apex-skating-source.png` is the user-provided screenshot of an Apex pupil preparing her skating guards. `apex-skating-hero.png` (1672 × 941) is a high-quality photographic edit generated using the built-in imagegen tool on 10 September 2026, requested as the second hero image. It removes the player interface and expands the photograph into a sunlit school courtyard, using the science hero as a lighting reference. The setting is an AI reconstruction; generated details may differ from the source. The exact prompt is in `apex-skating-hero-prompt.txt`. The original image's ownership is unchanged.

This single-photo hero replaces the previous two-slide collage. The archway video reveal below remains independent and keeps its fixed video dimensions.
