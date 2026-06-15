import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, note } = req.body ?? {};

  if (!name || typeof name !== "string" || name.trim().length < 1) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Valid email is required" });
  }

  const cleanName = name.trim().slice(0, 120);
  const cleanEmail = email.trim().toLowerCase().slice(0, 254);
  const cleanNote = typeof note === "string" ? note.trim().slice(0, 1000) : "";

  const { error: dbError } = await supabase.from("beta_requests").insert({
    name: cleanName,
    email: cleanEmail,
    note: cleanNote,
  });

  if (dbError) {
    console.error("Supabase insert error:", dbError);
    return res.status(500).json({ error: "Failed to save request" });
  }

  await resend.emails.send({
    from: "Anapana <noreply@anapana.ai>",
    to: ["hello@anapana.ai"],
    subject: `Beta invite request — ${cleanName}`,
    html: `
      <p><strong>${cleanName}</strong> (<a href="mailto:${cleanEmail}">${cleanEmail}</a>) has requested a beta invite.</p>
      ${cleanNote ? `<blockquote>${cleanNote}</blockquote>` : ""}
      <p style="color:#888;font-size:13px">Saved to Supabase beta_requests.</p>
    `,
  });

  return res.status(200).json({ ok: true });
}
