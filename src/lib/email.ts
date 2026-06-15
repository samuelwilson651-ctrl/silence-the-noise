import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`;

function wrap(content: string) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"/><style>body{font-family:Georgia,serif;background:#faf7f2;margin:0}.wrap{max-width:600px;margin:0 auto;background:#fff}.hdr{background:#0f1e35;padding:2.5rem 2rem;text-align:center}.hdr h1{color:#c9a84c;font-size:1.2rem;letter-spacing:.1em;margin:0}.hdr p{color:rgba(255,255,255,.4);font-size:.75rem;margin:.3rem 0 0;font-style:italic}.bdy{padding:2.5rem 2rem}.bdy p{color:#3d3530;line-height:1.85;font-size:1rem;margin:0 0 1rem}.bdy h2{color:#0f1e35;font-size:1.4rem;margin:0 0 1rem}.rule{width:44px;height:2px;background:#c9a84c;margin:1.5rem 0}.quote{border-left:3px solid #c9a84c;padding-left:1.25rem;color:#0f1e35;font-style:italic;font-size:1.05rem;line-height:1.7;margin:1.5rem 0}.cta{display:block;background:#c9a84c;color:#0f1e35;text-align:center;padding:.9rem 2rem;text-decoration:none;font-family:sans-serif;font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;font-weight:700;margin:2rem 0}.ftr{background:#06101d;padding:1.5rem 2rem;text-align:center}.ftr p{color:rgba(255,255,255,.25);font-size:.7rem;font-family:sans-serif;margin:0}.ftr a{color:rgba(201,168,76,.6)}</style></head><body><div class="wrap"><div class="hdr"><h1>SILENCE THE NOISE™</h1><p>Dr. Samuel E. Wilson, MD</p></div><div class="bdy">${content}</div><div class="ftr"><p>© 2026 Samuel E. Wilson, MD · <a href="https://samuelewilson.org">samuelewilson.org</a><br/><a href="https://samuelewilson.org/unsubscribe">Unsubscribe</a></p></div></div></body></html>`;
}

export async function subscribeToNewsletter(email: string, firstName?: string) {
  if (process.env.RESEND_AUDIENCE_NEWSLETTER) {
    await resend.contacts.create({ email, firstName, audienceId: process.env.RESEND_AUDIENCE_NEWSLETTER });
  }
  await resend.emails.send({
    from: FROM, to: email,
    subject: "You're in — welcome to Silence the Noise™",
    html: wrap(`<h2>Welcome${firstName ? `, ${firstName}` : ""}.</h2><div class="rule"></div><p>You've joined a growing community of people committed to one thing: silencing the noise.</p><div class="quote">"Many people do not simply need more information. They need less noise."</div><p>Your first free reflection arrives soon.</p><a href="https://samuelewilson.org/framework" class="cta">Explore the Framework →</a><p>— Dr. Samuel E. Wilson, MD</p>`),
  });
}

export async function sendMembershipWelcome(email: string, firstName: string, plan: string) {
  await resend.emails.send({
    from: FROM, to: email,
    subject: "Your membership is active — welcome to the community",
    html: wrap(`<h2>Welcome, ${firstName}.</h2><div class="rule"></div><p>Your ${plan} membership is now active. You have full access to the Silence the Noise™ library.</p><a href="https://samuelewilson.org/dashboard" class="cta">Access Your Dashboard →</a><p>— Dr. Samuel E. Wilson, MD</p>`),
  });
}

export async function sendCourseAccessEmail(email: string, firstName: string) {
  await resend.emails.send({
    from: FROM, to: email,
    subject: "Your Silence the Noise™ Course is ready",
    html: wrap(`<h2>Your course is ready, ${firstName}.</h2><div class="rule"></div><p>Start with Module 1: Awareness. It takes approximately 45 minutes and includes a downloadable workbook.</p><a href="https://samuelewilson.org/course" class="cta">Start Module 1 →</a><p>— Dr. Samuel E. Wilson, MD</p>`),
  });
}

export async function sendConsultationConfirmation(email: string, firstName: string) {
  await resend.emails.send({
    from: FROM, to: email,
    subject: "Your consultation with Dr. Wilson — next steps",
    html: wrap(`<h2>Confirmed, ${firstName}.</h2><div class="rule"></div><p>Dr. Wilson will reach out within 2 business days to schedule your session. Watch for an email with available times.</p><a href="https://samuelewilson.org/dashboard" class="cta">View Dashboard →</a>`),
  });
}

export async function sendSpeakingInquiry(data: { name: string; email: string; organization: string; message: string }) {
  await resend.emails.send({
    from: FROM, to: process.env.RESEND_FROM_EMAIL!,
    subject: `Speaking Inquiry — ${data.organization}`,
    html: wrap(`<h2>New Speaking Inquiry</h2><p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Organization:</strong> ${data.organization}</p><p><strong>Message:</strong> ${data.message}</p>`),
  });
  await resend.emails.send({
    from: FROM, to: data.email,
    subject: "We received your speaking inquiry",
    html: wrap(`<h2>Thank you, ${data.name}.</h2><div class="rule"></div><p>We received your inquiry and will respond within 3–5 business days.</p><a href="https://samuelewilson.org/speaking" class="cta">View Speaking Topics →</a>`),
  });
}
