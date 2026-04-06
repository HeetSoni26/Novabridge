import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, budget, message, phone } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email required" }, { status: 400 });
    }

    // Lead Scoring Engine Logic
    let score = 10; // base score
    if (budget === "$5k+") score += 40;
    else if (budget === "$2k - $5k") score += 20;

    // 1. Save to Database
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone: phone || "",
        budget,
        message,
        score,
        status: score > 30 ? "QUALIFIED" : "NEW"
      }
    });

    // 2. HubSpot CRM Integration (Free Tier)
    if (process.env.HUBSPOT_ACCESS_TOKEN) {
      const [firstname, ...lastnames] = name.split(" ");
      const lastname = lastnames.join(" ");
      
      await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          properties: {
            email: email,
            firstname: firstname,
            lastname: lastname,
            phone: phone || "",
            lifecyclestage: "lead",
            hs_lead_status: "NEW",
            message: `[Budget: ${budget || "Unknown"}] ${message || ""}`
          }
        })
      }).catch(err => console.error("HubSpot Error:", err));
    }

    // 3. Brevo (Sendinblue) Email & SMS Automation (Free Tier)
    if (process.env.BREVO_API_KEY) {
      // Create Contact in Brevo for Email Nurturing
      await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          attributes: { FIRSTNAME: name.split(" ")[0], BUDGET: budget },
          listIds: [2], // Assuming list ID 2 is the Nurture sequence
          updateEnabled: true
        })
      }).catch(err => console.error("Brevo Email Error:", err));

      // Trigger instant SMS via Brevo (if phone provided)
      if (phone) {
        await fetch("https://api.brevo.com/v3/transactionalSMS/sms", {
          method: "POST",
          headers: {
            "api-key": process.env.BREVO_API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            type: "transactional",
            unicodeEnabled: false,
            sender: "NovaBridge",
            recipient: phone,
            content: `Hi ${name.split(" ")[0]}! Thanks for reaching out to NovaBridge. A growth architect will review your details and be in touch soon.`
          })
        }).catch(err => console.error("Brevo SMS Error:", err));
      }
    }

    return NextResponse.json({ success: true, lead: { id: lead.id } });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json({ error: "Failed to process lead", details: String(error) }, { status: 500 });
  }
}

