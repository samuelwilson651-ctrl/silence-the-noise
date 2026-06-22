import Link from "next/link";

const cols = [
  { heading: "Framework", links: [
    { label: "Overview", href: "/framework" },
    { label: "The Journey Path", href: "/journey" },
    { label: "Seven Pillars", href: "/pillars" },
    { label: "Core Teachings", href: "/teachings" },
    { label: "The Course", href: "/course" },
  ]},
  { heading: "Topics", links: [
    { label: "Anxiety", href: "/anxiety" },
    { label: "Depression", href: "/depression" },
    { label: "PTSD & Trauma", href: "/ptsd" },
    { label: "Faith & Renewal", href: "/faith" },
    { label: "Body & Nutrition", href: "/body" },
    { label: "Purpose", href: "/purpose" },
  ]},
  { heading: "Content", links: [
    { label: "Articles", href: "/articles" },
    { label: "Devotionals", href: "/devotionals" },
    { label: "Podcast", href: "/podcast" },
    { label: "Video Series", href: "/videos" },
    { label: "Resources", href: "/resources" },
    { label: "Devotional App ↗", href: "https://devotional-discovery.lovable.app", external: true },
  ]},
  { heading: "Connect", links: [
    { label: "About Dr. Wilson", href: "/about" },
    { label: "Speaking", href: "/speaking" },
    { label: "Membership", href: "/membership" },
    { label: "Subscribe", href: "/subscribe" },
    { label: "Contact", href: "/contact" },
    { label: "Dashboard", href: "/dashboard" },
  ]},
];

export function SiteFooter() {
  return (
    <footer style={{ background: "#06101d", borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: "4rem" }}>
      <div className="container-site">
        {/* Brand */}
        <div style={{ marginBottom: "3rem", paddingBottom: "2.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <Link href="/" style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.95rem", letterSpacing: "0.14em", color: "#c9a84c", display: "block", marginBottom: "0.5rem" }}>
              Silence the Noise<sup style={{ fontSize: "0.55em" }}>™</sup>
            </Link>
            <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(255,255,255,0.35)", margin: "0 0 0.2rem" }}>Dr. Samuel E. Wilson, MD</p>
            <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", margin: 0 }}>Physician · Author · Speaker</p>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/membership" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.65rem 1.5rem", borderRadius: 2, background: "#c9a84c", color: "#0f1e35", display: "inline-flex" }}>Join the Community</Link>
            <Link href="/subscribe" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.65rem 1.5rem", borderRadius: 2, border: "1px solid rgba(201,168,76,0.25)", color: "rgba(201,168,76,0.7)", display: "inline-flex" }}>Free Reflections</Link>
          </div>
        </div>

        {/* Link columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          {cols.map(col => (
            <div key={col.heading}>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", marginBottom: "1rem" }}>{col.heading}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {col.links.map(l => (
                  l.external
                    ? <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.03em" }}>{l.label}</a>
                    : <Link key={l.label} href={l.href} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.03em" }}>{l.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1.75rem 0", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", margin: 0 }}>
            © 2026 Samuel E. Wilson, MD · Silence the Noise™ · All rights reserved
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[["Privacy Policy","/privacy"],["Terms of Service","/terms"],["Contact","/contact"],["Unsubscribe","/unsubscribe"]].map(([label, href]) => (
              <Link key={label} href={href} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.04em" }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
