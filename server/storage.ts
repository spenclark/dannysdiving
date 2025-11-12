import { type InsertContactRequest, type ContactRequest, contactRequests } from "@shared/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

export interface IStorage {
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getAllContactRequests(): Promise<ContactRequest[]>;
}

export class DbStorage implements IStorage {
  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const [contactRequest] = await db.insert(contactRequests).values(request).returning();
    return contactRequest;
  }

  async getAllContactRequests(): Promise<ContactRequest[]> {
    return await db.select().from(contactRequests).orderBy(contactRequests.createdAt);
  }
}

export const storage = new DbStorage();
