import { db } from "./db";
import {
  subscribers,
  inquiries,
  contentEmbeddings,
  type InsertSubscriber,
  type InsertInquiry,
  type Subscriber,
  type Inquiry,
  type ContentEmbedding
} from "@shared/schema";
import { eq, sql, desc } from "drizzle-orm";

export interface IStorage {
  // Newsletter
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;

  // Contact
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // AI Vector Search
  findSimilarContent(queryEmbedding: number[]): Promise<ContentEmbedding[]>;
}

export class MemStorage implements IStorage {
  private subscribers: Map<number, Subscriber>;
  private inquiries: Map<number, Inquiry>;
  private currentId: number;

  constructor() {
    this.subscribers = new Map();
    this.inquiries = new Map();
    this.currentId = 1;
  }

  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.currentId++;
    const newSubscriber: Subscriber = {
      ...subscriber,
      id,
      createdAt: new Date(),
    };
    this.subscribers.set(id, newSubscriber);
    return newSubscriber;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (s) => s.email === email,
    );
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentId++;
    const newInquiry: Inquiry = {
      ...inquiry,
      id,
      createdAt: new Date(),
      phone: inquiry.phone ?? null,
      message: inquiry.message ?? null,
    };
    this.inquiries.set(id, newInquiry);
    return newInquiry;
  }

  async findSimilarContent(queryEmbedding: number[]): Promise<ContentEmbedding[]> {
    // Cannot do true vector similarity search in pure JS easily without a library,
    // so return empty array for the mock fallback memory storage.
    return [];
  }
}

export class DatabaseStorage implements IStorage {
  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const [newSubscriber] = await db.insert(subscribers).values(subscriber).returning();
    return newSubscriber;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const [subscriber] = await db.select().from(subscribers).where(eq(subscribers.email, email));
    return subscriber;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async findSimilarContent(queryEmbedding: number[]): Promise<ContentEmbedding[]> {
    // Utilize pgvector `<=>` cosine distance operator
    // We order by distance and limit to top 5 most relevant chunks
    const embeddingStr = `[${queryEmbedding.join(',')}]`;
    const similarity = sql`embedding <=> ${embeddingStr}`;

    // Fallback if vector throws (e.g., extension not available locally)
    try {
      const results = await db.select()
        .from(contentEmbeddings)
        .orderBy(similarity)
        .limit(5);
      return results;
    } catch (e) {
      console.error("Vector search failed, perhaps pgvector is missing:", e);
      return [];
    }
  }
}

export const storage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MemStorage();
