
Page · TSX
import type { Metadata } from 'next'
import Script from 'next/script'
 
export const metadata: Metadata = {
  title: 'Silence the Noise™ | Dr. Samuel E. Wilson, MD',
  description:
    'A physician-led, faith-centered framework for anxiety, depression, PTSD, purpose, and spiritual renewal. Start your journey with Dr. Samuel E. Wilson, MD.',
}
 
export default function SilenceTheNoise() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap');
 
        .stn-root *, .stn-root *::before, .stn-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
        .stn-root {
          --navy:    #0D1B2A;
          --navy2:   #132033;
          --gold:    #C9A84C;
          --gold-lt: #E2C97E;
          --cream:   #F7F3EC;
          --warm:    #EDE8DF;
          --text:    #1A1A2E;
          --muted:   #6B7280;
          --white:   #FFFFFF;
          --serif:   'Cormorant Garamond', Georgia, serif;
          --sans:    'Inter', system-ui, sans-serif;
          font-family: var(--sans);
          color: var(--text);
          background: var(--white);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          scroll-behavior: smooth;
        }
 
        /* ── NAV ── */
        .stn-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(13,27,42,0.96);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(201,168,76,0.2);
          padding: 0 2rem;
          height: 64px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .stn-nav-brand {
          font-family: var(--serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--gold);
          letter-spacing: 0.02em;
          text-decoration: none;
        }
        .stn-nav-links { display: flex; gap: 2rem; align-items: center; }
        .stn-nav-links a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 500;
          transition: color 0.2s;
        }
        .stn-nav-links a:hover { color: #E2C97E; }
        .stn-nav-cta {
          background: #C9A84C !important;
          color: #0D1B2A !important;
          padding: 0.5rem 1.2rem !important;
          border-radius: 2px !important;
          font-weight: 600 !important;
        }
        .stn-nav-cta:hover { background: #E2C97E !important; }
 
        /* ── HERO ── */
        .stn-hero {
          min-height: 100vh;
          background: #0D1B2A;
          display: flex; align-items: center;
          position: relative;
          overflow: hidden;
          padding: 0 2rem;
        }
        .stn-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 60% at 60% 40%, rgba(201,168,76,0.07) 0%, transparent 70%);
        }
        .stn-hero-line {
          position: absolute; top: 0; left: 50%; width: 1px; height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent);
        }
        .stn-hero-inner {
          max-width: 760px;
          margin: 0 auto;
          padding: 7rem 0 5rem;
          position: relative; z-index: 1;
        }
        .stn-eyebrow {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 2rem;
        }
        .stn-eyebrow::before {
          content: '';
          display: block; width: 32px; height: 1px;
          background: #C9A84C;
        }
        .stn-hero h1 {
          font-family: var(--serif);
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 300;
          line-height: 1.05;
          color: #FFFFFF;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
        }
        .stn-hero h1 em { font-style: italic; color: #E2C97E; }
        .stn-hero-sub {
          font-family: var(--serif);
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(255,255,255,0.6);
          margin-bottom: 2.5rem;
          line-height: 1.5;
        }
        .stn-hero-body {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.82);
          max-width: 600px;
          margin-bottom: 3rem;
          line-height: 1.8;
        }
        .stn-hero-body strong { color: #E2C97E; font-weight: 500; }
        .stn-btn-group { display: flex; flex-wrap: wrap; gap: 1rem; }
        .stn-btn-primary {
          display: inline-block;
          background: #C9A84C;
          color: #0D1B2A;
          font-family: var(--sans);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 1rem 2.2rem;
          border-radius: 2px;
          transition: background 0.2s, transform 0.15s;
        }
        .stn-btn-primary:hover { background: #E2C97E; transform: translateY(-1px); }
        .stn-btn-ghost {
          display: inline-block;
          border: 1px solid rgba(201,168,76,0.4);
          color: rgba(255,255,255,0.85);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 1rem 2.2rem;
          border-radius: 2px;
          transition: border-color 0.2s, color 0.2s;
        }
        .stn-btn-ghost:hover { border-color: #C9A84C; color: #E2C97E; }
        .stn-scroll-hint {
          margin-top: 4rem;
          display: flex; align-items: center; gap: 0.75rem;
          color: rgba(255,255,255,0.3);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .stn-scroll-hint::before {
          content: '';
          display: block; width: 1px; height: 40px;
          background: linear-gradient(to bottom, rgba(201,168,76,0.5), transparent);
        }
 
        /* ── PAIN ── */
        .stn-pain { background: #F7F3EC; padding: 6rem 2rem; }
        .stn-pain-inner { max-width: 720px; margin: 0 auto; text-align: center; }
        .stn-section-label {
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 1.5rem;
        }
        .stn-pain h2 {
          font-family: var(--serif);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400; line-height: 1.15;
          color: #0D1B2A; margin-bottom: 2rem;
        }
        .stn-pain p { font-size: 1.05rem; color: #444; margin-bottom: 1.4rem; line-height: 1.85; }
        .stn-pain p strong { color: #0D1B2A; }
        .stn-pain-verse {
          margin: 3rem auto 0; padding: 2rem 2.5rem;
          border-left: 3px solid #C9A84C;
          background: #FFFFFF; text-align: left; max-width: 580px;
        }
        .stn-pain-verse p {
          font-family: var(--serif); font-size: 1.2rem;
          font-style: italic; color: #0D1B2A; margin-bottom: 0.5rem;
        }
        .stn-pain-verse cite {
          font-size: 0.78rem; color: #6B7280;
          letter-spacing: 0.08em; text-transform: uppercase; font-style: normal;
        }
 
        /* ── CRED ── */
        .stn-cred { background: #0D1B2A; padding: 5rem 2rem; }
        .stn-cred-inner {
          max-width: 900px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1px 1fr;
          gap: 0; align-items: start;
        }
        .stn-cred-divider { background: rgba(201,168,76,0.2); }
        .stn-cred-left { padding-right: 4rem; }
        .stn-cred-right { padding-left: 4rem; }
        .stn-cred-label {
          font-size: 0.7rem; letter-spacing: 0.18em;
          text-transform: uppercase; color: #C9A84C;
          margin-bottom: 1.2rem; font-weight: 600;
        }
        .stn-cred h3 {
          font-family: var(--serif);
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 300; color: #FFFFFF;
          line-height: 1.2; margin-bottom: 1.5rem;
        }
        .stn-cred p { color: rgba(255,255,255,0.7); font-size: 0.95rem; line-height: 1.85; margin-bottom: 1rem; }
        .stn-cred-stat { display: flex; gap: 2.5rem; margin-top: 2rem; flex-wrap: wrap; }
        .stn-stat-num {
          font-family: var(--serif); font-size: 2.8rem;
          font-weight: 300; color: #C9A84C; line-height: 1; display: block;
        }
        .stn-stat-desc {
          font-size: 0.75rem; color: rgba(255,255,255,0.45);
          letter-spacing: 0.08em; text-transform: uppercase; margin-top: 0.3rem;
        }
 
        /* ── PILLARS ── */
        .stn-pillars { background: #FFFFFF; padding: 6rem 2rem; }
        .stn-pillars-inner { max-width: 960px; margin: 0 auto; }
        .stn-pillars-header { text-align: center; margin-bottom: 4rem; }
        .stn-pillars-header h2 {
          font-family: var(--serif);
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 400; color: #0D1B2A; margin-bottom: 1rem;
        }
        .stn-pillars-header p { font-size: 1rem; color: #6B7280; max-width: 520px; margin: 0 auto; }
        .stn-pillar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.5px; background: #EDE8DF; border: 1.5px solid #EDE8DF;
        }
        .stn-pillar-card { background: #FFFFFF; padding: 2.2rem 2rem; transition: background 0.2s; }
        .stn-pillar-card:hover { background: #faf8f4; }
        .stn-pillar-num {
          font-family: var(--serif); font-size: 3rem;
          font-weight: 300; color: rgba(201,168,76,0.25);
          line-height: 1; margin-bottom: 0.75rem;
        }
        .stn-pillar-card h4 {
          font-family: var(--serif); font-size: 1.15rem;
          font-weight: 600; color: #0D1B2A; margin-bottom: 0.6rem;
        }
        .stn-pillar-card p { font-size: 0.88rem; color: #6B7280; line-height: 1.7; }
 
        /* ── DIMENSIONS ── */
        .stn-dimensions { background: #132033; padding: 6rem 2rem; }
        .stn-dimensions-inner { max-width: 900px; margin: 0 auto; }
        .stn-dim-header { text-align: center; margin-bottom: 4rem; }
        .stn-dim-header h2 {
          font-family: var(--serif);
          font-size: clamp(1.8rem, 3.5vw, 2.5rem);
          font-weight: 300; color: #FFFFFF; margin-bottom: 1rem;
        }
        .stn-dim-header p { color: rgba(255,255,255,0.55); font-size: 0.95rem; max-width: 500px; margin: 0 auto; }
        .stn-dim-list { display: flex; flex-direction: column; gap: 1px; background: rgba(255,255,255,0.06); }
        .stn-dim-item {
          background: #132033;
          display: flex; align-items: flex-start; gap: 2rem;
          padding: 2rem 2.2rem; text-decoration: none;
          transition: background 0.2s; border-left: 3px solid transparent;
        }
        .stn-dim-item:hover { background: rgba(201,168,76,0.06); border-left-color: #C9A84C; }
        .stn-dim-icon { font-size: 1.6rem; flex-shrink: 0; margin-top: 0.1rem; }
        .stn-dim-text h4 { font-family: var(--serif); font-size: 1.1rem; font-weight: 600; color: #FFFFFF; margin-bottom: 0.4rem; }
        .stn-dim-text p { font-size: 0.88rem; color: rgba(255,255,255,0.5); line-height: 1.65; }
        .stn-dim-arrow {
          margin-left: auto; color: #C9A84C; font-size: 1.2rem;
          flex-shrink: 0; align-self: center; opacity: 0.5;
          transition: opacity 0.2s, transform 0.2s;
        }
        .stn-dim-item:hover .stn-dim-arrow { opacity: 1; transform: translateX(4px); }
 
        /* ── OFFER ── */
        .stn-offer { background: #F7F3EC; padding: 6rem 2rem; }
        .stn-offer-inner { max-width: 860px; margin: 0 auto; }
        .stn-offer-header { text-align: center; margin-bottom: 4rem; }
        .stn-offer-header h2 {
          font-family: var(--serif);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400; color: #0D1B2A; margin-bottom: 1rem;
        }
        .stn-offer-header p { font-size: 1rem; color: #6B7280; max-width: 540px; margin: 0 auto; }
        .stn-offer-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .stn-offer-card { background: #FFFFFF; border: 1px solid #EDE8DF; padding: 2.2rem 1.8rem; position: relative; }
        .stn-offer-card.featured { border-color: #C9A84C; background: #0D1B2A; }
        .stn-offer-badge {
          position: absolute; top: -12px; left: 1.8rem;
          background: #C9A84C; color: #0D1B2A;
          font-size: 0.65rem; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 0.25rem 0.75rem; border-radius: 2px;
        }
        .stn-offer-card h4 { font-family: var(--serif); font-size: 1.3rem; font-weight: 600; color: #0D1B2A; margin-bottom: 0.5rem; }
        .stn-offer-card.featured h4 { color: #FFFFFF; }
        .stn-offer-price { font-family: var(--serif); font-size: 2rem; font-weight: 300; color: #C9A84C; margin-bottom: 1rem; line-height: 1; }
        .stn-offer-price span { font-size: 0.85rem; color: #6B7280; font-family: var(--sans); font-weight: 400; }
        .stn-offer-card.featured .stn-offer-price span { color: rgba(255,255,255,0.45); }
        .stn-offer-features { list-style: none; margin-bottom: 1.8rem; }
        .stn-offer-features li {
          font-size: 0.88rem; color: #6B7280;
          padding: 0.4rem 0; border-bottom: 1px solid #EDE8DF;
          display: flex; align-items: flex-start; gap: 0.5rem;
        }
        .stn-offer-card.featured .stn-offer-features li { color: rgba(255,255,255,0.65); border-bottom-color: rgba(255,255,255,0.08); }
        .stn-offer-features li::before { content: '✓'; color: #C9A84C; font-weight: 700; flex-shrink: 0; }
        .stn-btn-offer {
          display: block; text-align: center; text-decoration: none;
          padding: 0.9rem 1.5rem; border-radius: 2px;
          font-size: 0.82rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; transition: all 0.2s;
        }
        .stn-btn-offer-dark { background: #0D1B2A; color: #FFFFFF; }
        .stn-btn-offer-dark:hover { background: #132033; }
        .stn-btn-offer-gold { background: #C9A84C; color: #0D1B2A; }
        .stn-btn-offer-gold:hover { background: #E2C97E; }
        .stn-btn-offer-outline { border: 1px solid rgba(13,27,42,0.2); color: #0D1B2A; }
        .stn-btn-offer-outline:hover { border-color: #C9A84C; color: #C9A84C; }
 
        /* ── TESTIMONIALS ── */
        .stn-testimonials { background: #FFFFFF; padding: 6rem 2rem; }
        .stn-test-inner { max-width: 900px; margin: 0 auto; }
        .stn-test-header { text-align: center; margin-bottom: 3.5rem; }
        .stn-test-header h2 { font-family: var(--serif); font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 400; color: #0D1B2A; }
        .stn-test-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
        .stn-test-card { padding: 2rem; background: #F7F3EC; border-top: 3px solid #C9A84C; }
        .stn-test-stars { color: #C9A84C; font-size: 0.9rem; margin-bottom: 1rem; }
        .stn-test-card p { font-family: var(--serif); font-size: 1rem; font-style: italic; color: #0D1B2A; line-height: 1.75; margin-bottom: 1.2rem; }
        .stn-test-name { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #6B7280; }
 
        /* ── EMAIL / KIT ── */
        .stn-email-capture { background: #0D1B2A; padding: 5rem 2rem; text-align: center; }
        .stn-email-inner { max-width: 560px; margin: 0 auto; }
        .stn-email-inner h2 { font-family: var(--serif); font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 300; color: #FFFFFF; margin-bottom: 0.75rem; }
        .stn-email-inner > p { color: rgba(255,255,255,0.55); font-size: 0.95rem; margin-bottom: 2rem; }
        .stn-email-fine { margin-top: 1rem; font-size: 0.72rem; color: rgba(255,255,255,0.25); letter-spacing: 0.05em; }
        .stn-kit-wrapper { margin: 0 auto 1rem; max-width: 520px; }
 
        /* ── SUPPORT ── */
        .stn-support { background: #F7F3EC; padding: 6rem 2rem; }
        .stn-support-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .stn-support-inner h2 { font-family: var(--serif); font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 400; color: #0D1B2A; margin-bottom: 1rem; }
        .stn-support-inner > p { font-size: 1rem; color: #6B7280; max-width: 580px; margin: 0 auto 3rem; line-height: 1.8; }
        .stn-support-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
        .stn-support-card {
          background: #FFFFFF; border: 1px solid #EDE8DF;
          border-top: 3px solid #C9A84C; padding: 2rem 1.8rem;
          text-decoration: none; text-align: left; display: block;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .stn-support-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .stn-support-icon { font-size: 1.8rem; margin-bottom: 1rem; }
        .stn-support-card h4 { font-family: var(--serif); font-size: 1.15rem; font-weight: 600; color: #0D1B2A; margin-bottom: 0.5rem; }
        .stn-support-card p { font-size: 0.88rem; color: #6B7280; line-height: 1.7; margin-bottom: 1.2rem; }
        .stn-support-link { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C9A84C; }
 
        /* ── FINAL CTA ── */
        .stn-final-cta { background: #0D1B2A; padding: 7rem 2rem; text-align: center; position: relative; overflow: hidden; }
        .stn-final-cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.08), transparent); }
        .stn-final-inner { max-width: 620px; margin: 0 auto; position: relative; z-index: 1; }
        .stn-final-inner h2 { font-family: var(--serif); font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 300; color: #FFFFFF; line-height: 1.1; margin-bottom: 1.5rem; }
        .stn-final-inner h2 em { font-style: italic; color: #E2C97E; }
        .stn-final-inner p { font-size: 1rem; color: rgba(255,255,255,0.6); margin-bottom: 2.5rem; line-height: 1.8; }
        .stn-btn-group-center { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }
 
        /* ── FOOTER ── */
        .stn-footer { background: #080f17; padding: 2.5rem 2rem; text-align: center; border-top: 1px solid rgba(201,168,76,0.1); }
        .stn-footer p { font-size: 0.78rem; color: rgba(255,255,255,0.2); letter-spacing: 0.05em; }
        .stn-footer a { color: rgba(201,168,76,0.5); text-decoration: none; }
        .stn-footer a:hover { color: #C9A84C; }
 
        /* ── RESPONSIVE ── */
        @media (max-width: 700px) {
          .stn-nav-links { display: none; }
          .stn-cred-inner { grid-template-columns: 1fr; }
          .stn-cred-divider { display: none; }
          .stn-cred-left { padding-right: 0; margin-bottom: 3rem; }
          .stn-cred-right { padding-left: 0; }
          .stn-hero-inner { padding: 6rem 0 4rem; }
        }
        @media (prefers-reduced-motion: reduce) { .stn-root * { transition: none !important; } }
      `}</style>
 
      <div className="stn-root">
        {/* NAV */}
        <nav className="stn-nav">
          <a href="#" className="stn-nav-brand">Silence the Noise™</a>
          <div className="stn-nav-links">
            <a href="#framework">Framework</a>
            <a href="#dimensions">Topics</a>
            <a href="#offer">Join</a>
            <a href="#journey" className="stn-nav-cta">Start the Journey</a>
          </div>
        </nav>
 
        {/* HERO */}
        <section className="stn-hero">
          <div className="stn-hero-line" />
          <div className="stn-hero-inner">
            <div className="stn-eyebrow">Dr. Samuel E. Wilson, MD · Physician · Author · Speaker</div>
            <h1>The noise is not<br /><em>your identity.</em></h1>
            <p className="stn-hero-sub">A physician&apos;s framework for anxiety, depression, PTSD, and the life you were created to live.</p>
            <p className="stn-hero-body">
              You have tried to manage it — the racing thoughts, the weight you carry into every room, the exhaustion of
              pretending you are fine. You have been told it is a chemical imbalance. A personality flaw. A lack of faith.{' '}
              <strong>None of that is the whole truth.</strong>
              <br /><br />
              What if the anxiety, the depression, the spiritual emptiness — what if they are all symptoms of the same thing?{' '}
              <strong>The noise has simply become louder than the truth.</strong>
            </p>
            <div className="stn-btn-group">
              <a href="https://buy.stripe.com/5kQ3cw2903wC7MVcqi5Ne04" className="stn-btn-primary">Start the Journey</a>
              <a href="#framework" className="stn-btn-ghost">Explore the Framework</a>
            </div>
            <div className="stn-scroll-hint">Seven pillars. One transformation.</div>
          </div>
        </section>
 
        {/* PAIN */}
        <section className="stn-pain">
          <div className="stn-pain-inner">
            <div className="stn-section-label">You Are Not Alone</div>
            <h2>What brought you here<br />is not what will keep you here.</h2>
            <p>Maybe you are searching at 2am because sleep won&apos;t come. Maybe you&apos;ve read the books, tried the medication, sat in the therapist&apos;s office — and you still feel like something essential is missing. Maybe the thing you cannot name is this: <strong>you have been trying to quiet the noise with more noise.</strong></p>
            <p>Anxiety, depression, PTSD, fear, and spiritual exhaustion are almost never separate problems. They are different expressions of the same wound — a mind and spirit that have been flooded beyond their capacity to hear what they were made to hear.</p>
            <p>As a physician, I have spent decades studying what breaks the human mind and body. As a man of faith, I have learned what restores it. <strong>Both truths are needed. Neither is enough alone.</strong></p>
            <div className="stn-pain-verse">
              <p>&ldquo;Be still, and know that I am God.&rdquo;</p>
              <cite>Psalm 46:10</cite>
            </div>
          </div>
        </section>
 
        {/* CREDIBILITY */}
        <section className="stn-cred" id="about">
          <div className="stn-cred-inner">
            <div className="stn-cred-left">
              <div className="stn-cred-label">About Dr. Wilson</div>
              <h3>Medicine and faith are not in conflict.<br />They were always meant to work together.</h3>
              <p>Dr. Samuel E. Wilson, MD is a physician, educator, inventor, and faith-centered voice who has dedicated his career to understanding the full person — not just the diagnosis.</p>
              <p>The Silence the Noise™ framework emerged from years of clinical practice, personal study, and the recognition that most people do not simply need more information. They need less noise — and a clear path back to who they were always meant to be.</p>
              <p>This is not a program built in a conference room. It was built in the examination room, in prayer, and in honest reckoning with human suffering.</p>
            </div>
            <div className="stn-cred-divider" />
            <div className="stn-cred-right">
              <div className="stn-cred-label">The Framework at a Glance</div>
              <h3>One system. One journey. One message.</h3>
              <p>Silence the Noise™ is not a quick fix or a motivational speech. It is a seven-pillar framework — physician-designed, faith-grounded — that works from the inside out.</p>
              <div className="stn-cred-stat">
                <div><span className="stn-stat-num">7</span><div className="stn-stat-desc">Pillars</div></div>
                <div><span className="stn-stat-num">50+</span><div className="stn-stat-desc">Devotionals</div></div>
                <div><span className="stn-stat-num">20+</span><div className="stn-stat-desc">Teachings</div></div>
              </div>
            </div>
          </div>
        </section>
 
        {/* PILLARS */}
        <section className="stn-pillars" id="framework">
          <div className="stn-pillars-inner">
            <div className="stn-pillars-header">
              <div className="stn-section-label">The Silence the Noise™ Framework</div>
              <h2>Seven pillars. Every dimension of healing.</h2>
              <p>Each pillar builds on the last — not as information to absorb, but as lived transformation to walk through.</p>
            </div>
            <div className="stn-pillar-grid">
              {[
                { num: 'I', title: 'Awareness', desc: 'You cannot silence what you will not name. Recognize the noise before it controls you — and understand where it came from.' },
                { num: 'II', title: 'Surrender', desc: 'The noise grows loudest when we try to carry what was never ours to carry. Learn the freedom that comes only through release.' },
                { num: 'III', title: 'Identity', desc: 'You are not your diagnosis. You are not your trauma. You are not your past. This pillar rebuilds the foundation of who you truly are.' },
                { num: 'IV', title: 'Discipline', desc: 'Transformation does not come through a single moment. Small, daily actions — practiced consistently — create lasting change.' },
                { num: 'V', title: 'Renewal Under Pressure', desc: 'Storms do not disqualify your healing. They reveal your foundation — and become the very ground where growth takes root.' },
                { num: 'VI', title: 'Compassion', desc: 'Healing rarely happens in isolation. This pillar addresses community, forgiveness, and why connection is not optional to recovery.' },
                { num: 'VII', title: 'Integration', desc: 'Mind, body, spirit, purpose, and relationships — aligned. This is not the end of the journey. It is the beginning of the life you were created to live.' },
              ].map((p) => (
                <div className="stn-pillar-card" key={p.num}>
                  <div className="stn-pillar-num">{p.num}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* DIMENSIONS */}
        <section className="stn-dimensions" id="dimensions">
          <div className="stn-dimensions-inner">
            <div className="stn-dim-header">
              <div className="stn-section-label" style={{ color: '#C9A84C' }}>Explore Every Dimension</div>
              <h2>Wherever the noise is loudest — start there.</h2>
              <p>Each topic is addressed through the framework with both medical clarity and spiritual depth.</p>
            </div>
            <div className="stn-dim-list">
              {[
                { icon: '🌀', href: 'https://samuelewilson.org/anxiety', title: 'Anxiety', desc: 'The fear of tomorrow, the cost of uncertainty, and the path back to peace — addressed through Pillars I & II.' },
                { icon: '🌧', href: 'https://samuelewilson.org/depression', title: 'Depression', desc: "When the soul grows tired and hope feels far — a clinician's and believer's path back to light, through Pillars II & VI." },
                { icon: '🧩', href: 'https://samuelewilson.org/ptsd', title: 'PTSD & Trauma', desc: 'Trauma is not a life sentence. Integration is possible. Pillars III & VII show you what that actually looks like.' },
                { icon: '✝', href: 'https://samuelewilson.org/faith', title: 'Faith & Spiritual Renewal', desc: "How do you hear God's gentle whisper when the world is shouting? Pillars II & III bring you back to your spiritual center." },
                { icon: '🌿', href: 'https://samuelewilson.org/body', title: 'Body, Nutrition & Healing', desc: 'Stewardship of the whole person — because the body is not separate from the spirit. Pillar IV addresses physical foundations.' },
                { icon: '🧭', href: 'https://samuelewilson.org/purpose', title: 'Purpose', desc: 'From survival mode into the life you were created to live. Pillar VII is where everything finally comes together.' },
              ].map((d) => (
                <a href={d.href} className="stn-dim-item" key={d.title}>
                  <div className="stn-dim-icon">{d.icon}</div>
                  <div className="stn-dim-text"><h4>{d.title}</h4><p>{d.desc}</p></div>
                  <div className="stn-dim-arrow">→</div>
                </a>
              ))}
            </div>
          </div>
        </section>
 
        {/* OFFER */}
        <section className="stn-offer" id="offer">
          <div className="stn-offer-inner">
            <div className="stn-offer-header">
              <div className="stn-section-label">Begin Your Journey</div>
              <h2>Choose how you want to walk through this.</h2>
              <p>Every path leads to the same destination — a quieter mind, a clearer purpose, and a life lived from your true identity.</p>
            </div>
            <div className="stn-offer-cards">
              <div className="stn-offer-card">
                <h4>Free Start</h4>
                <div className="stn-offer-price">$0 <span>/ always free</span></div>
                <ul className="stn-offer-features">
                  <li>Access to 7-pillar overview</li>
                  <li>3 introductory devotionals</li>
                  <li>Weekly teaching via email</li>
                  <li>Explore all 6 topic dimensions</li>
                </ul>
                <a href="https://buy.stripe.com/bJe5kE6pgffk2sB2PI5Ne05" className="stn-btn-offer stn-btn-offer-outline">Start Free Trial</a>
              </div>
              <div className="stn-offer-card featured">
                <div className="stn-offer-badge">Most Popular</div>
                <h4>The Journey</h4>
                <div className="stn-offer-price">$29 <span>/ month</span></div>
                <ul className="stn-offer-features">
                  <li>Full 7-pillar curriculum</li>
                  <li>50+ devotionals — all topics</li>
                  <li>20+ physician-led teachings</li>
                  <li>Devotional Discoveries app access</li>
                  <li>Monthly live Q&amp;A with Dr. Wilson</li>
                  <li>Private community access</li>
                </ul>
                <a href="https://buy.stripe.com/5kQ3cw2903wC7MVcqi5Ne04" className="stn-btn-offer stn-btn-offer-gold">Join the Journey</a>
              </div>
              <div className="stn-offer-card">
                <h4>The Intensive</h4>
                <div className="stn-offer-price">$297 <span>/ one-time</span></div>
                <ul className="stn-offer-features">
                  <li>Everything in The Journey</li>
                  <li>Complete self-paced course</li>
                  <li>Downloadable workbooks</li>
                  <li>Personal framework assessment</li>
                  <li>Priority email support</li>
                  <li>Lifetime access to materials</li>
                </ul>
                <a href="https://buy.stripe.com/00weVe14Wd7c0ktfCu5Ne06" className="stn-btn-offer stn-btn-offer-dark">Get Lifetime Access</a>
              </div>
            </div>
          </div>
        </section>
 
        {/* TESTIMONIALS */}
        <section className="stn-testimonials">
          <div className="stn-test-inner">
            <div className="stn-test-header">
              <div className="stn-section-label">What People Are Saying</div>
              <h2>The noise can be silenced.<br />Here is proof.</h2>
            </div>
            <div className="stn-test-grid">
              {[
                { quote: 'For years I thought my anxiety was just who I was. Dr. Wilson gave me a language and a framework for something I never had words for. I am different now. That is not an exaggeration.', name: 'Marcus T., Army Veteran' },
                { quote: 'I tried therapy, medication, and prayer — separately. Silence the Noise™ was the first thing that honored all three parts of me at once. I finally feel whole.', name: 'Renee D., Mother of Three' },
                { quote: 'The Pillar on Identity changed everything. I had been living as my diagnosis for so long I forgot there was a person underneath it. Dr. Wilson helped me find her again.', name: 'Angela W., Educator' },
              ].map((t) => (
                <div className="stn-test-card" key={t.name}>
                  <div className="stn-test-stars">★★★★★</div>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <div className="stn-test-name">— {t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* EMAIL / KIT */}
        <section className="stn-email-capture" id="email">
          <div className="stn-email-inner">
            <div className="stn-section-label" style={{ color: '#C9A84C' }}>Free Weekly Teaching</div>
            <h2>Let the journey begin in your inbox.</h2>
            <p>Each week, Dr. Wilson sends one teaching from the Silence the Noise™ framework — directly to you. No noise. Just truth.</p>
            <div className="stn-kit-wrapper">
              <Script async data-uid="ce2838a0e0" src="https://samuel-e-wilson.kit.com/ce2838a0e0/index.js" strategy="lazyOnload" />
            </div>
            <p className="stn-email-fine">No spam. No selling your data. Unsubscribe anytime. Your peace matters more than our list.</p>
          </div>
        </section>
 
        {/* SUPPORT */}
        <section className="stn-support">
          <div className="stn-support-inner">
            <div className="stn-section-label">Support the Mission</div>
            <h2>Help us reach the ones who need this most.</h2>
            <p>Many people who need Silence the Noise™ cannot afford it. Your support makes it possible to reach them — veterans, single parents, those in crisis — with no barriers.</p>
            <div className="stn-support-cards">
              <a href="https://buy.stripe.com/aFa7sMdRI4AG6IRaia5Ne02" className="stn-support-card">
                <div className="stn-support-icon">🤝</div>
                <h4>Support the Mission</h4>
                <p>A one-time contribution to help expand the reach of this work.</p>
                <span className="stn-support-link">Contribute →</span>
              </a>
              <a href="https://donate.stripe.com/00wcN69Bs2syd7f8a25Ne01" className="stn-support-card">
                <div className="stn-support-icon">🙏</div>
                <h4>Make a Donation</h4>
                <p>Give what you can. Every dollar funds free access for someone who needs it.</p>
                <span className="stn-support-link">Donate →</span>
              </a>
              <a href="https://donate.stripe.com/7sY28s290gjoc3bdum5Ne00" className="stn-support-card">
                <div className="stn-support-icon">✨</div>
                <h4>Spiritual Reflections</h4>
                <p>Support the creation of devotionals and spiritual content for those walking through darkness.</p>
                <span className="stn-support-link">Give →</span>
              </a>
            </div>
          </div>
        </section>
 
        {/* FINAL CTA */}
        <section className="stn-final-cta" id="journey">
          <div className="stn-final-inner">
            <div className="stn-section-label" style={{ color: '#C9A84C' }}>The Decision</div>
            <h2>The noise has had<br /><em>enough of your life.</em></h2>
            <p>You did not find this page by accident. Something in you is ready — not for another coping strategy, but for a real framework. A way through. A way home.<br /><br />Start for free. Stay for transformation.</p>
            <div className="stn-btn-group-center">
              <a href="https://buy.stripe.com/5kQ3cw2903wC7MVcqi5Ne04" className="stn-btn-primary">Begin the Journey →</a>
              <a href="https://devotion-discovery.lovable.app/" className="stn-btn-ghost">Open the Devotional App</a>
            </div>
          </div>
        </section>
 
        {/* FOOTER */}
        <footer className="stn-footer">
          <p>© 2026 Dr. Samuel E. Wilson, MD · Silence the Noise™ is a registered trademark · <a href="https://samuelewilson.org">samuelewilson.org</a></p>
          <p style={{ marginTop: '0.5rem' }}>
            This content is for educational and faith-based purposes. It is not a substitute for professional medical care.
            If you are in crisis, please contact the <a href="tel:988">988 Suicide &amp; Crisis Lifeline</a>.
          </p>
        </footer>
      </div>
    </>
  )
}
