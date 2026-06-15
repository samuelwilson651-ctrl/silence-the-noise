import Link from "next/link";

const cols: Record<string, { label: string; href: string }[]> = {
  Framework: [{ label:"Overview",href:"/framework"},{ label:"Journey Path",href:"/journey"},{ label:"Seven Pillars",href:"/pillars"},{ label:"Teachings",href:"/teachings"}],
  Topics:    [{ label:"Anxiety",href:"/anxiety"},{ label:"Depression",href:"/depression"},{ label:"PTSD & Trauma",href:"/ptsd"},{ label:"Faith & Renewal",href:"/faith"},{ label:"Body & Nutrition",href:"/body"},{ label:"Purpose",href:"/purpose"}],
  Content:   [{ label:"Articles",href:"/articles"},{ label:"Devotionals",href:"/devotionals"},{ label:"Podcast",href:"/podcast"},{ label:"Videos",href:"/videos"},{ label:"Resources",href:"/resources"}],
  Connect:   [{ label:"About Dr. Wilson",href:"/about"},{ label:"Speaking",href:"/speaking"},{ label:"Membership",href:"/membership"},{ label:"Course",href:"/course"},{ label:"Contact",href:"/contact"}],
};

export function SiteFooter() {
  return (
    <footer>
      <div style={{ background: "#0f1e35", padding: "4rem 0" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "2.5rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-cinzel,serif)", color: "#c9a84c", letterSpacing: "0.14em", fontSize: "0.88rem", margin: "0 0 0.25rem" }}>SILENCE THE NOISE<sup style={{ fontSize: "0.55em", verticalAlign: "super" }}>™</sup></p>
              <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", margin: "0 0 1rem" }}>Dr. Samuel E. Wilson, MD</p>
              <div style={{ width: 32, height: 2, background: "#c9a84c", margin: "0 0 1rem" }} />
              <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontStyle: "italic", fontSize: "0.9rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.7, margin: 0 }}>One system. One journey.<br/>One framework. One message.</p>
            </div>
            {Object.entries(cols).map(([group, links]) => (
              <div key={group}>
                <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a84c", margin: "0 0 1rem", opacity: 0.8 }}>{group}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {links.map(l => <li key={l.href}><Link href={l.href} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", display: "block" }}>{l.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ background: "#06101d", padding: "1.25rem 0" }}>
        <div className="container-site" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(255,255,255,0.2)", margin: 0 }}>© {new Date().getFullYear()} Samuel E. Wilson, MD · Silence the Noise™</p>
          <div style={{ display: "flex", gap: "1.25rem" }}>
            {[["Privacy Policy","/privacy"],["Terms","/terms"],["Contact","/contact"]].map(([l,h]) => (
              <Link key={h} href={h} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", color: "rgba(201,168,76,0.4)" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
