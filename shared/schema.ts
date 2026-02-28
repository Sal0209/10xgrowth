import { pgTable, text, timestamp, varchar, bigint, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";

// Requires CREATE EXTENSION IF NOT EXISTS vector; in the database
export const contentEmbeddings = pgTable("content_embeddings", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  // Drizzle supports custom types if needed, but for simplicity we can use standard sql template for vector
  // The correct way in newer drizzle is customType, but here we can define the vector column using sql template
  embedding: text("embedding"), // We will handle vector type differently or use raw SQL
  createdAt: timestamp("created_at").defaultNow(),
});

export const subscribers = pgTable("subscribers", {
  id: bigint("id", { mode: "number" }).primaryKey().generatedByDefaultAsIdentity(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const inquiries = pgTable("inquiries", {
  id: bigint("id", { mode: "number" }).primaryKey().generatedByDefaultAsIdentity(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({ email: true });
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });
export const insertContentSchema = createInsertSchema(contentEmbeddings).omit({ id: true, createdAt: true });

export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type InsertContent = z.infer<typeof insertContentSchema>;

export type Subscriber = typeof subscribers.$inferSelect;
export type Inquiry = typeof inquiries.$inferSelect;
export type ContentEmbedding = typeof contentEmbeddings.$inferSelect;
