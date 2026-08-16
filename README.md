# Urban Gleams

Freelance web-studio site for [urbangleams.com](https://urbangleams.com). High-converting sites for cafes, salons, clinics, and trades.

## Local

You need Node.js 20+ (LTS is installed if you followed setup on this machine).

```bash
cd urbangleams
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `CONTACT_TO` | Where enquiries arrive |
| `RESEND_API_KEY` | Send the contact form via [Resend](https://resend.com). Without it, the form still validates and asks the visitor to email you. |
| `CONTACT_FROM` | Verified Resend from-address |
| `NEXT_PUBLIC_CAL_URL` | Cal.com / Calendly embed URL for the contact page |

Replace `hello@urbangleams.com` in `src/lib/site.ts` with your real inbox when you are ready.

## Publish with GitHub Desktop

Do this from GitHub Desktop so the YouTube recording matches a real workflow. Do not force-push.

1. Open **GitHub Desktop**.
2. **File → Add local repository** → select this `urbangleams` folder (the one with `package.json`).
3. If it is not a git repo yet: **create a repository** in that folder.
4. Commit the site (summary: `Launch Urban Gleams studio site`).
5. **Publish repository**. Suggested name: `urbangleams`. Public is better for a studio showcase.
6. Leave **Keep this code private** unchecked unless you have a reason.

Later edits: change files → commit in Desktop → **Push origin**. Vercel will rebuild.

## Deploy on Vercel + urbangleams.com

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New → Project** → import `urbangleams`.
3. Framework: Next.js. Root directory: the repo root (this folder).
4. Add the same env vars as `.env.example`.
5. Deploy. You will get `something.vercel.app`.
6. **Project → Settings → Domains** → add `urbangleams.com` and `www.urbangleams.com`.
7. At your domain registrar, add the DNS records Vercel shows (usually `A` for `@` to `76.76.21.21` and `CNAME` for `www` to `cname.vercel-dns.com`). Wait for SSL.

The public URL should be **https://urbangleams.com**, not the `vercel.app` URL.

## After it is live

- Put your real email, city, and calendar link on the site.
- Record the customer video using `VIDEO.md`.
- Swap spec case studies in `src/lib/work.ts` when you have real clients.
