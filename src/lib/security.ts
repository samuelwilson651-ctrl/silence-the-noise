// Small helpers for handling untrusted input safely.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuelewilson.org").replace(/\/+$/, "");

/** Escape text before putting it into HTML (e.g. emails). */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Return a same-site path for redirects. Anything that is not a plain
 * relative path ("/something") falls back to `fallback`, so attackers
 * can't send users to another website after sign-in or checkout.
 */
export function safeRedirectPath(value: unknown, fallback = "/dashboard"): string {
  if (typeof value !== "string") return fallback;
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) return fallback;
  if (/[\r\n\t]/.test(value)) return fallback;
  return value;
}

/** Turn a client-supplied URL or path into an absolute URL on our own site. */
export function sameSiteUrl(value: unknown, fallbackPath: string): string {
  if (typeof value === "string") {
    try {
      const site = new URL(SITE_URL);
      const url = new URL(value, SITE_URL);
      if (url.origin === site.origin) return `${SITE_URL}${safeRedirectPath(url.pathname + url.search, fallbackPath)}`;
    } catch {
      /* fall through */
    }
  }
  return `${SITE_URL}${fallbackPath}`;
}
