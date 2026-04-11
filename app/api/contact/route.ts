import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, company, email, phone } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name und E-Mail sind erforderlich." },
        { status: 400 }
      );
    }

    let subject: string;
    let html: string;

    if (type === "abo") {
      const {
        services,
        socialPosts,
        contentType,
        budget,
        description,
        preferredContact,
      } = body;

      subject = `Abo-Anfrage von ${name}${company ? ` (${company})` : ""}`;

      html = `
        <h2>Neue Abo-Konfiguration</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Name</td><td style="padding:8px 12px;">${name}</td></tr>
          ${company ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Unternehmen</td><td style="padding:8px 12px;">${company}</td></tr>` : ""}
          <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">E-Mail</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Telefon</td><td style="padding:8px 12px;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
          ${preferredContact ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Bevorzugter Kontakt</td><td style="padding:8px 12px;">${preferredContact}</td></tr>` : ""}
        </table>

        <h3 style="margin-top:24px;">Gewählte Leistungen</h3>
        <ul style="padding-left:20px;">
          ${(services || []).map((s: string) => `<li style="padding:4px 0;">${s}</li>`).join("")}
        </ul>

        ${socialPosts ? `
          <h3 style="margin-top:16px;">Social Media Details</h3>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Beiträge/Monat</td><td style="padding:8px 12px;">${socialPosts}</td></tr>
            ${contentType && contentType.length > 0 ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Content-Art</td><td style="padding:8px 12px;">${contentType.join(", ")}</td></tr>` : ""}
          </table>
        ` : ""}

        ${budget ? `
          <h3 style="margin-top:16px;">Budget</h3>
          <p>${budget}</p>
        ` : ""}

        ${description ? `
          <h3 style="margin-top:16px;">Projektbeschreibung</h3>
          <p style="white-space:pre-wrap;">${description}</p>
        ` : ""}
      `;
    } else {
      const { subject: formSubject, message } = body;

      if (!message) {
        return NextResponse.json(
          { error: "Nachricht ist erforderlich." },
          { status: 400 }
        );
      }

      const subjectLabels: Record<string, string> = {
        general: "Allgemeine Anfrage",
        project: "Projektanfrage",
        abo: "Abo-Interesse",
        quote: "Offerte anfordern",
      };

      subject = `${subjectLabels[formSubject] || "Kontaktanfrage"} von ${name}`;

      html = `
        <h2>Neue Kontaktanfrage</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Name</td><td style="padding:8px 12px;">${name}</td></tr>
          ${company ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Unternehmen</td><td style="padding:8px 12px;">${company}</td></tr>` : ""}
          <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">E-Mail</td><td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Telefon</td><td style="padding:8px 12px;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
          <tr><td style="padding:8px 12px;font-weight:bold;color:#555;">Betreff</td><td style="padding:8px 12px;">${subjectLabels[formSubject] || formSubject}</td></tr>
        </table>
        <hr style="margin:20px 0;border:none;border-top:1px solid #eee;" />
        <p style="white-space:pre-wrap;">${message}</p>
      `;
    }

    await resend.emails.send({
      from: "b-emotion Kontaktformular <onboarding@resend.dev>",
      to: "neculai.inocentiu@gmail.com",
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}
