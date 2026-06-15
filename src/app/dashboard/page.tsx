import { requireAuth } from "@/lib/access";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export const metadata = { title: "Dashboard", robots: { index: false } };

export default async function DashboardPage({ searchParams }: { searchParams: Promise<{ success?: string }> }) {
  await requireAuth();
  const user = await currentUser();
  const params = await searchParams;
  const firstName = user?.firstName ?? "Friend";
  const justJoined = params.success === "true";

  const links = [["→","The Journey Path","/journey","Your 7-step framework roadmap"],["📄","Articles","/articles","All published writings"],["✝","Devotional App","https://devotional-discovery.lovable.app","Daily scripture-rooted reflections"],["🎙","Podcast","/podcast","The Whole Person Podcast"],["🎬","Videos","/videos","Teaching video library"],["📚","Resources","/resources","Guides, PDFs, tools"]];
  const pillars = [["I","Awareness"],["II","Surrender"],["III","Identity"],["IV","Discipline"],["V","Renewal"],["VI","Compassion"],["VII","Integration"]];

  return (
    <div style={{ minHeight: "100vh", background: "#faf7f2" }}>
      <div style={{ background: "#0f1e35", padding: "4rem 2rem 3rem" }}>
        <div className="container-site">
          <p className="label-text" style={{ color: "#c9a84c" }}>Your Dashboard</p>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(2rem,4vw,3rem)", color: "white", fontWeight: 600, margin: 0 }}>
            {justJoined ? `Welcome to the community, ${firstName}.` : `Welcome back, ${firstName}.`}
          </h1>
        </div>
      </div>
      <div className="container-site section-pad">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "3rem", alignItems: "start" }}>
          <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem" }}>
            <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.25rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e4ddd2" }}>Start Here</h2>
            {links.map(([icon,label,href,desc]) => (
              <Link key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", borderBottom: "1px solid #e4ddd2" }}>
                <span style={{ fontSize: "1.2rem", minWidth: "2rem", textAlign: "center" }}>{icon}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1rem", fontWeight: 600, color: "#0f1e35" }}>{label}</div>
                  <div style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.72rem", color: "#6b6256" }}>{desc}</div>
                </div>
                <span style={{ marginLeft: "auto", color: "#c9a84c" }}>→</span>
              </Link>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: "white", border: "1px solid #e4ddd2", borderRadius: 2, padding: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.25rem", fontWeight: 600, color: "#0f1e35", margin: "0 0 1rem", paddingBottom: "0.75rem", borderBottom: "1px solid #e4ddd2" }}>Framework Journey</h2>
              {pillars.map(([num,label]) => (
                <Link key={num} href={`/journey#${label.toLowerCase()}`} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid #e4ddd2" }}>
                  <span style={{ fontFamily: "var(--font-cinzel,serif)", fontSize: "0.7rem", color: "#c9a84c", minWidth: "2.5rem" }}>{num}</span>
                  <span style={{ fontFamily: "var(--font-inter,sans-serif)", fontSize: "0.78rem", color: "#0f1e35" }}>{label}</span>
                </Link>
              ))}
            </div>
            <Link href="/membership" className="btn btn-gold" style={{ justifyContent: "center" }}>Upgrade Membership →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
