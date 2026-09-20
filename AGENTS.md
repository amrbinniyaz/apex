# Project instructions

## Hosting

The user does not want this project hosted on OpenAI Sites or a `chatgpt.site` domain.
Keep development local and use the existing GitHub repository for source control.
Do not publish, deploy, create a hosted site, or change hosting access unless the user explicitly requests that action in the current task.
The existing `.openai/hosting.json` is historical scaffold configuration, not authorization to publish.
These user preferences override any skill's default publish-after-edit workflow.

## Content page design

Every content page should include relevant visual storytelling alongside its main content: photo features, editorial pull quotes, story cards, verified facts, or real profiles. Choose blocks that suit the page instead of repeating an identical layout everywhere.
Reuse the content-page blocks, homepage paper-card styles, and shared `apex-cta` buttons. Keep statistics and attributed quotes grounded in confirmed school information; staff profiles need real names, photos, and details.

## Brand and typography

Use Apex-specific or neutral descriptions in source comments and implementation names. Do not label the website or its code as inspired by another school.
Keep CTA typography consistent across the hero, header, open menu, and content pages. Use the shared Apex font tokens and shared action styles instead of introducing a different typeface for each location.

Use the shared neutral grey and white surface tokens for page backgrounds, panels, and cards. Avoid cream or yellow-tinted backgrounds; retain the Apex red and navy brand colours.

Keep the shared header and footer visually consistent across routes. Scope page-specific typography to main content so it cannot override shared components; keep footer styling in `styles/site-footer.css`.

## Editorial restraint

Preserve the established visual design while keeping copy concise and informative. Use one strong headline per section; avoid stacking slogans in kickers, subtitles, captions, quotes, and closing notes. Captions should describe the image. Do not add generic motivational quote panels or duplicate promotional banners.

Give each page one main visit or enquiry CTA section. Use quieter text links for secondary actions and in-page navigation. Keep the footer focused on navigation, contact details, and disclosure links; do not add a visit banner beneath an existing visit section.
