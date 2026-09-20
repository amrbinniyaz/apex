# Dokploy deployment

- Application: `apex-international-school-web-du25v1`
- Repository: `https://github.com/amrbinniyaz/apex.git`
- Branch: `main` (`master` contains the legacy website)
- Build type: Dockerfile; path `Dockerfile`; context `.`; stage `runtime`
- Container port: `3000`

The Dockerfile builds a standalone Node 24 server with Nitro. Set a domain in
Dokploy with path `/` and port `3000`. Deployments are started manually.

For a local production check, use Node 24:

```sh
npm ci
npm run build:node
PORT=4174 npm run start:node
node scripts/check-runtime.mjs http://localhost:4174
```

To enable enquiry email delivery, set `RESEND_API_KEY`, `ENQUIRY_FROM_EMAIL`,
and `ENQUIRY_TO_EMAIL` in the application environment. Without them, the form
provides its existing email and phone fallback. Never commit these values.

The default local development command remains `npm run dev`. No Sites or
Cloudflare deployment is involved in the Dokploy build.
