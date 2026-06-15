"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Framework", items: [{ label: "Overview", href: "/framework", icon: "✦" },{ label: "Journey Path", href: "/journey", icon: "→" },{ label: "Teachings", href: "/teachings", icon: "📖" },{ label: "Seven Pillars", href: "/pillars", icon: "⬡" }] },
  { label: "Topics", items: [{ label: "Anxiety", href: "/anxiety", icon: "🌀" },{ label: "Depression", href: "/depression", icon: "🌧" },{ label: "PTSD & Trauma", href: "/ptsd", icon: "🧩" },{ label: "Faith & Renewal", href: "/faith", icon: "✝" },{ label: "Body & Nutrition", href: "/body", icon: "🌿" },{ label: "Purpose", href: "/purpose", icon: "🧭" }] },
  { label: "Articles", href: "/articles" },
  { label: "Devotionals", href: "/devotionals" },
  { label: "Media", items: [{ label: "Podcast", href: "/podcast", icon: "🎙" },{ label: "Video Series", href: "/videos", icon: "🎬" },{ label: "Speaking", href: "/speaking", icon: "🏛" }] },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<number|null>(null);
  const [mobile, setMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = mobile ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [mobile]);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null); };
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); setMobile(false); } };
    document.addEventListener("click", h);
    document.addEventListener("keydown", k);
    return () => { document.removeEventListener("click", h); document.removeEventListener("keydown", k); };
  }, []);

  return (
    <>
      <nav ref={navRef} style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(15,30,53,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="container-site" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.9rem", letterSpacing: "0.14em", color: "#c9a84c", whiteSpace: "nowrap" }}>
            Silence the Noise<sup style={{ fontSize: "0.55em", verticalAlign: "super" }}>™</sup>
          </Link>

          {/* Desktop links */}
          <ul className="nav-desktop" style={{ display: "none", alignItems: "center", gap: "0.25rem", listStyle: "none", margin: 0, padding: 0 }}>
            {NAV.map((item, i) => (
              <li key={item.label} style={{ position: "relative" }}>
                {"href" in item ? (
                  <Link href={item.href!} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.09em", textTransform: "uppercase", color: pathname===item.href?"#c9a84c":"rgba(255,255,255,0.7)", padding: "0.5rem 0.75rem", display: "block" }}>{item.label}</Link>
                ) : (
                  <>
                    <button onClick={() => setOpen(open===i?null:i)} aria-expanded={open===i} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", letterSpacing: "0.09em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", padding: "0.5rem 0.75rem", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      {item.label} <span style={{ fontSize: "0.55em", opacity: 0.5 }}>▼</span>
                    </button>
                    {open===i && (
                      <div style={{ position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", background: "#1a2e4a", border: "1px solid rgba(201,168,76,0.15)", borderRadius: 3, minWidth: 200, boxShadow: "0 16px 40px rgba(0,0,0,0.3)", overflow: "hidden", zIndex: 60 }}>
                        {"items" in item && item.items?.map(c => (
                          <Link key={c.href} href={c.href} style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.75rem 1.25rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", borderBottom: "1px solid rgba(255,255,255,0.05)", fontFamily: "var(--font-inter,sans-serif)" }}>
                            <span style={{ opacity: 0.6 }}>{c.icon}</span>{c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <Link href="/login" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Sign In</Link>
            <Link href="/membership" style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600, background: "#c9a84c", color: "#0f1e35", padding: "0.45rem 1.1rem", borderRadius: 2 }}>Join</Link>
            <button onClick={() => setMobile(!mobile)} aria-label="Toggle menu" style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", flexDirection: "column", gap: 5 }}>
              {[0,1,2].map(i => <span key={i} style={{ width: 22, height: 1.5, background: "rgba(255,255,255,0.7)", display: "block" }} />)}
            </button>
          </div>
        </div>
        <style>{`.nav-desktop{display:none!important}@media(min-width:1024px){.nav-desktop{display:flex!important}}`}</style>
      </nav>

      {mobile && (
        <div style={{ position: "fixed", inset: 0, zIndex: 40, background: "#0f1e35", overflowY: "auto", padding: "5rem 2rem 2rem" }}>
          <button onClick={() => setMobile(false)} aria-label="Close" style={{ position: "absolute", top: "1.25rem", right: "1.5rem", background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
          {NAV.map(item => (
            <div key={item.label}>
              {"href" in item
                ? <Link href={item.href!} style={{ display: "block", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", padding: "1rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{item.label}</Link>
                : <>
                    <p style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", paddingTop: "1.5rem", paddingBottom: "0.25rem", margin: 0 }}>{item.label}</p>
                    {"items" in item && item.items?.map(c => <Link key={c.href} href={c.href} style={{ display: "block", fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", padding: "0.75rem 0 0.75rem 1rem", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>{c.icon} {c.label}</Link>)}
                  </>
              }
            </div>
          ))}
          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Link href="/membership" className="btn btn-gold" style={{ justifyContent: "center" }}>Join the Community</Link>
            <Link href="/login" className="btn btn-outline-light" style={{ justifyContent: "center" }}>Sign In</Link>
          </div>
        </div>
      )}
    </>
  );
}
