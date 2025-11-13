import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { ZodError } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // Send email notification
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: false,
          auth: process.env.SMTP_USER && process.env.SMTP_PASS ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          } : undefined,
        });

        const emailContent = `
New Quote Request from Danny's Diving Services Website

Name: ${validatedData.name}
Phone: ${validatedData.phone}
Email: ${validatedData.email}
Service: ${validatedData.service || "Not specified"}

Message:
${validatedData.message || "No message provided"}

---
Submitted at: ${new Date().toLocaleString()}
        `.trim();

        await transporter.sendMail({
          from: process.env.SMTP_FROM || '"Danny\'s Diving" <noreply@dannydiver.com>',
          to: process.env.CONTACT_EMAIL || "dannysdivingservices@gmail.com",
          subject: `New Quote Request from ${validatedData.name}`,
          text: emailContent,
        });

        console.log("Email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the request if email fails - the data is still saved
      }

      res.json({ 
        success: true, 
        message: "Quote request received successfully",
        id: contactRequest.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      }
      
      console.error("Error processing contact request:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to process quote request" 
      });
    }
  });

  // Get all contact requests (for admin viewing)
  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getAllContactRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact requests" 
      });
    }
  });

  // Sitemap for SEO
  // Note: Keep service slugs in sync with shared/services.ts
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = "https://dannysdiving.com";
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Service slugs must match those defined in shared/services.ts
    const serviceSlugs = [
      "hull-cleaning",
      "underwater-inspections",
      "zinc-changes",
      "mooring-services",
      "lost-item-retrieval",
      "commercial-diving"
    ];
    
    const pages = [
      { url: "/", priority: "1.0", changefreq: "weekly" },
      { url: "/videos", priority: "0.8", changefreq: "weekly" },
      ...serviceSlugs.map(slug => ({
        url: `/services/${slug}`,
        priority: "0.9",
        changefreq: "monthly"
      })),
      { url: "/privacy", priority: "0.3", changefreq: "yearly" },
      { url: "/terms", priority: "0.3", changefreq: "yearly" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  });

  const httpServer = createServer(app);
  return httpServer;
}
