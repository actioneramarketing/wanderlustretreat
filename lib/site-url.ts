/**
 * Resolve the canonical site URL for metadata, sitemap, and robots.
 * Prefer an explicit public URL; fall back to Vercel production host, then localhost.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return normalizeSiteUrl(explicit);
  }

  const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProductionHost) {
    return normalizeSiteUrl(`https://${vercelProductionHost}`);
  }

  return "http://localhost:3000";
}

function normalizeSiteUrl(url: string): string {
  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  return withProtocol.replace(/\/+$/, "");
}
