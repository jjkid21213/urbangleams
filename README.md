# Urban Gleams

Custom websites for local businesses. Live: [urbangleams.com](https://urbangleams.com)

Justin — justinbusiness124@gmail.com · 0494300150

```bash
npm install
npm run dev
```

Contact mail is handled only by `POST /api/contact` (never in the browser). Copy `.env.example` locally. On Cloudflare:

```bash
npx wrangler secret put RESEND_API_KEY
```

Paste a Resend API key. Free Resend delivers to the verified account inbox (`justinmureithi24@gmail.com`) until the sending domain is verified. The worker also sends to `justinbusiness124@gmail.com`, and falls back to FormSubmit (activate the first confirmation email in that Gmail). If send still fails, the form opens a mailto to justinbusiness124@gmail.com with the note filled in.

Publish: `npm run cf:deploy`
