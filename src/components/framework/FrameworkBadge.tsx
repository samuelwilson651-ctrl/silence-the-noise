import Link from "next/link";
import { PILLARS, TOPICS, type Pillar, type TopicCategory } from "@/types";

interface Props { pillars?: Pillar[]; category?: TopicCategory; variant?: "light"|"dark"; className?: string; }

export function FrameworkBadge({ pillars=[], category, variant="light", className="" }: Props) {
  const isDark = variant==="dark";
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem" }} className={className}>
      <Link href="/framework" className="stn-badge">Part of Silence the Noise™</Link>
      {pillars.map(p => {
        const data = PILLARS[p];
        return (
          <Link key={p} href={`/journey#${p}`} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: 2, fontWeight: 500, background: isDark?"rgba(255,255,255,0.05)":"rgba(15,30,53,0.05)", color: isDark?"rgba(255,255,255,0.6)":"#6b6256", border: `1px solid ${isDark?"rgba(255,255,255,0.1)":"#e4ddd2"}` }}>
            Pillar {data.number}: {data.title}
          </Link>
        );
      })}
      {category && (
        <Link href={`/${category}`} style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: 2, fontWeight: 500, background: "rgba(201,168,76,0.08)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.2)" }}>
          {TOPICS[category].icon} {TOPICS[category].title}
        </Link>
      )}
    </div>
  );
}

interface RelatedItem { _id: string; title: string; slug: { current: string }; excerpt?: string; readingTime?: number; category?: TopicCategory; }
interface RelatedProps { items: RelatedItem[]; type?: "article"|"devotional"; heading?: string; }

export function RelatedContent({ items, type="article", heading="Continue the Journey" }: RelatedProps) {
  if (!items.length) return null;
  const base = type==="article"?"/articles":"/devotionals";
  return (
    <section style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: "1px solid #e4ddd2" }}>
      <p className="label-text">{heading}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "1rem" }}>
        {items.map(item => (
          <Link key={item._id} href={`${base}/${item.slug.current}`} className="card" style={{ padding: "1.5rem", display: "block" }}>
            {item.category && <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", display: "block", marginBottom: "0.5rem" }}>{TOPICS[item.category]?.icon} {TOPICS[item.category]?.title}</span>}
            <h4 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.1rem", fontWeight: 600, color: "#0f1e35", marginBottom: "0.4rem" }}>{item.title}</h4>
            {item.excerpt && <p style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "0.92rem", color: "#6b6256", lineHeight: 1.6, fontStyle: "italic", marginBottom: "0.5rem" }}>{item.excerpt}</p>}
            {item.readingTime && <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>{item.readingTime} min read →</span>}
          </Link>
        ))}
      </div>
    </section>
  );
}
