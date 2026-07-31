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
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Canonical URL, Open Graph absolute image URLs, sitemap, robots |
| `RESEND_API_KEY` | Required for inquiry email | Resend API authentication |
| `RETREAT_INQUIRY_TO_EMAIL` | Required for inquiry email | Inbox that receives inquiries |
| `RETREAT_LEADER_APPLICATION_TO_EMAIL` | Optional | Leader applications (falls back to inquiry inbox) |
| `RETREAT_PAYMENT_TO_EMAIL` | Optional | Payment selections (falls back to inquiry inbox) |
| `RETREAT_INQUIRY_FROM_EMAIL` | Required for inquiry email | Verified Resend sender address |

#### `NEXT_PUBLIC_SITE_URL`

This is a public website URL only — not a secret.

- Local development: `http://localhost:3000`
- Vercel production: set it to the final public site URL, including `https://`
- Example: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
- Redeploy after changing the variable so Open Graph tags pick up the new absolute URLs

If unset, the app falls back to `VERCEL_PROJECT_PRODUCTION_URL` (when available), then `http://localhost:3000`.

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

### Social preview caching

Facebook, LinkedIn, X, iMessage, Slack, and other platforms often cache an older link preview. After deploying a new Open Graph image:

1. Confirm the image opens at `https://yourdomain.com/images/retreat/wanderlust-revival-social-share.png`
2. Re-scrape the URL in the platform’s sharing debugger, or temporarily share with a cache-busting query such as `https://yourdomain.com/?v=2`

Do not add that query string to canonical metadata — it is only for testing refreshed previews.

## Project structure

```text
app/                     # Routes, layout, metadata, API
components/layout/       # Navigation, footer, sticky CTA
components/sections/     # One-page sections
components/ui/           # Shared UI primitives
data/                    # Centralized retreat content
lib/                     # Utilities, email helpers, rate limiting
public/images/retreat/   # Optimized local photography
public/images/branding/  # Logo assets
public/images/leaders/   # Leader portraits
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
| `data/leader-opportunity.ts` | Leader recruitment page content and commitment model |
| `data/payment-options.ts` | Invitation-only `/payments` options, US bank-transfer details, PayPal details |

### Unlisted payment page

The `/payments` route is intentionally unlisted and noindexed, but anyone with the URL may still access it. Noindex is not authentication.

- Not linked in desktop or mobile navigation
- Not included in `app/sitemap.ts`
- Disallowed in `app/robots.ts`
- Uses `robots: { index: false, follow: false }` (noindex/nofollow)
- Page metadata and Open Graph copy must not include banking details
- Edit payment amounts, US ACH/wire details, and PayPal details in `data/payment-options.ts`
- Domestic ACH/wire details are finalized (`bankDetailsFinalized: true`); international SWIFT details are provided on request only

### Confirmed retreat dates

Confirmed retreat dates: **May 30–June 6, 2027**

Date display strings live in `data/retreat.ts` (`display`, `eyebrow`, `sentence`). Event structured data remains omitted until exact start/end times, address, and other required event fields can be represented accurately.

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

```text
public/images/branding/wanderlust-revival-logo.png
public/images/leaders/kristen-becher.jpg
public/images/retreat/wanderlust-revival-social-share.png
public/images/retreat/   # retreat photography
app/opengraph-image.png  # App Router OG convention (same social art)
app/twitter-image.png    # App Router Twitter convention (same social art)
app/icon.png             # favicon
```

Retreat photography files include `hero-pool-pavilion.png`, `evening-fire-circle.png`, `cacao-sound-healing.png`, and related villa assets.

Placeholder slots for future photos (beach, zipline, food, contribution, group connection, additional leader portraits) are defined in `data/images.ts`.

## Pre-launch checklist

Confirm or complete the following before public launch:

- [x] Confirm retreat year — May 30–June 6, 2027
- [ ] Confirm final pricing structure
- [ ] Confirm deposit and payment plans
- [x] Replace `/payments` ACH/wire placeholders and set `bankDetailsFinalized: true`
- [ ] Confirm each participant’s payment amount and schedule during their enrollment call (US domestic wire and ACH pay-in-full amount is $7,500 on `/payments`)
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
