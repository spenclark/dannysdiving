import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { Resend } from "resend";

// Schema definition (inline to avoid import issues with Netlify Functions)
const contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  service: text("service"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

// Initialize database
const getDb = () => {
  const sqlClient = neon(process.env.DATABASE_URL!);
  return drizzle(sqlClient);
};

// Send email notification via Resend
async function sendContactNotification(data: {
  name: string;
  phone: string;
  email: string;
  service?: string | null;
  message?: string | null;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.log("RESEND_API_KEY not configured, skipping email notification");
    return;
  }

  const resend = new Resend(resendApiKey);
  const toEmail = process.env.CONTACT_EMAIL || "dannysdivingservices@gmail.com";

  await resend.emails.send({
    from: "Danny's Diving <noreply@dannysdiving.com>",
    to: [toEmail],
    subject: `New Quote Request from ${data.name}`,
    html: `
      <h2>New Quote Request from Danny's Diving Services Website</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Service:</strong> ${data.service || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message || "No message provided"}</p>
      <hr>
      <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
    `,
  });
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const validatedData = insertContactRequestSchema.parse(body);

    const db = getDb();
    const [contactRequest] = await db.insert(contactRequests).values(validatedData).returning();

    // Send email notification
    try {
      await sendContactNotification({
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email,
        service: validatedData.service,
        message: validatedData.message,
      });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Don't fail the request if email fails
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Quote request received successfully",
        id: contactRequest.id,
      }),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        }),
      };
    }

    console.error("Error processing contact request:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Failed to process quote request",
      }),
    };
  }
};

export { handler };

