# The Wanderlust Revival Retreat

Premium one-page marketing site for **The Wanderlust Revival Retreat** at Villa Wanderlust, Costa Rica. Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React. Prepared for deployment on Vercel.

## Local setup

### Requirements

- Node.js 20+ recommended
- npm 10+

### Install

```bash
npm install
```

### Environment variables

Copy the example file and fill in values as needed:

```bash
cp .env.example .env.local
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Canonical URL, Open Graph, sitemap, robots |
| `RESEND_API_KEY` | Required for inquiry email | Resend API authentication |
| `RETREAT_INQUIRY_TO_EMAIL` | Required for inquiry email | Inbox that receives inquiries |
| `RETREAT_INQUIRY_FROM_EMAIL` | Required for inquiry email | Verified Resend sender address |

If email variables are missing, the site still loads. The inquiry form will show a clear configuration message instead of silently pretending the submission succeeded.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Vercel deployment

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Create a new project in [Vercel](https://vercel.com) and import the repository.
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variables from `.env.example`.
5. Deploy.

After the domain is known, set `NEXT_PUBLIC_SITE_URL` to the production URL (including `https://`) and redeploy.

## Project structure

```text
app/                     # Routes, layout, metadata, API
components/layout/       # Navigation, footer, sticky CTA
components/sections/     # One-page sections
components/ui/           # Shared UI primitives
data/                    # Centralized retreat content
lib/                     # Utilities, email helpers, rate limiting
public/images/retreat/   # Optimized local photography
```

## Editing retreat content

Most content is centralized so you do not need to hunt through large JSX files:

| File | What to edit |
| --- | --- |
| `data/retreat.ts` | Name, dates, location, investment, site URL, disclaimer |
| `data/navigation.ts` | Nav links and CTA labels |
| `data/revival.ts` | Four revival dimensions |
| `data/experiences.ts` | Signature experiences and layouts |
| `data/timeline.ts` | Sample weekly flow |
| `data/leaders.ts` | Leaders + Jai host copy |
| `data/inclusions.ts` | Included / not included lists |
| `data/faqs.ts` | FAQ content |
| `data/content.ts` | Shared section copy |
| `data/images.ts` | Image paths, alt text, future photo placeholders |

### Adding the confirmed retreat year

Open `data/retreat.ts` and update:

```ts
export const retreatDates = {
  year: 2027, // set when confirmed
  display: "May 30–June 6, 2027",
  eyebrow: "MAY 30–JUNE 6, 2027 • COSTA RICA",
  // ...
};
```

Event structured data is intentionally omitted until a full confirmed date (including year) is available.

### Updating leaders

Edit `data/leaders.ts`:

- Replace Kristen’s placeholder biography
- Replace TBA leader names, roles, and bios as they are confirmed
- Add portrait paths to the `image` field when photos are ready
- Update Jai’s host biography in the same file

Development-only reminder (not shown on the public site): replace placeholder biographies before launch.

### Configuring inquiry email

1. Create a [Resend](https://resend.com) account and API key.
2. Verify a sending domain / from address.
3. Set:

```bash
RESEND_API_KEY=re_xxx
RETREAT_INQUIRY_TO_EMAIL=team@your-domain.com
RETREAT_INQUIRY_FROM_EMAIL=inquiries@your-domain.com
```

The API route lives at `app/api/inquiry/route.ts`. It includes honeypot spam protection, basic rate limiting, HTML escaping, and an optional confirmation email to the applicant.

## Images

Retreat photography is stored in:

```text
public/images/retreat/
```

Current files:

- `hero-pool-pavilion.png`
- `evening-fire-circle.png`
- `cacao-sound-healing.png`
- `revitalization-session.png`
- `barrel-sauna.png`
- `jungle-hot-tub.png`
- `yoga-platform.png`
- `experience-collage.png`
- `editorial-statue.png`
- `accommodation-suite.png`
- `accommodation-bedroom.png`
- `accommodation-bath.png`
- `jungle-lounge.png`

Placeholder slots for future photos (beach, zipline, food, contribution, group connection, leader portraits) are defined in `data/images.ts`.

## Pre-launch checklist

Confirm or complete the following before public launch:

- [ ] Confirm retreat year
- [ ] Confirm final pricing structure
- [ ] Confirm deposit and payment plans
- [ ] Confirm retreat capacity
- [ ] Confirm airport and transportation details
- [ ] Confirm leader biographies and portraits
- [ ] Confirm Jai’s biography and role
- [ ] Confirm exact inclusions and exclusions
- [ ] Confirm room configurations
- [ ] Confirm cancellation terms
- [ ] Confirm whether ActionTalks includes filming
- [ ] Confirm dietary process
- [ ] Add beach, contribution, adventure, food, and group-connection photos
- [ ] Configure Resend environment variables
- [ ] Add final domain and `NEXT_PUBLIC_SITE_URL`
- [ ] Add final legal business and privacy information

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Create production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |
