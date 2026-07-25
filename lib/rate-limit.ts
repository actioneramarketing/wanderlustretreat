/**
 * Simple in-memory rate limiter suitable for single-instance / warm serverless
 * invocations. Not a hard security boundary — just basic abuse friction.
 */

type Entry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, Entry>();

export function rateLimit(
  key: string,
  limit = 5,
  windowMs = 60_000,
): { success: boolean; remaining: number } {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || now > existing.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, remaining: limit - 1 };
  }

  if (existing.count >= limit) {
    return { success: false, remaining: 0 };
  }

  existing.count += 1;
  store.set(key, existing);
  return { success: true, remaining: limit - existing.count };
}
