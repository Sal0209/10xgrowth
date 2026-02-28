import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

// Vercel AI SDK integration
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { generateEmbedding } from './ai';

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Newsletter Subscription
  app.post(api.newsletter.subscribe.path, async (req, res) => {
    try {
      const input = api.newsletter.subscribe.input.parse(req.body);

      const existing = await storage.getSubscriberByEmail(input.email);
      if (existing) {
        return res.status(400).json({ message: "Email already subscribed" });
      }

      const subscriber = await storage.createSubscriber(input);
      res.status(201).json(subscriber);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Contact Inquiry
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Chat API for AI Integration
  app.post('/api/chat', async (req, res) => {
    try {
      const { messages } = req.body;
      const latestMessage = messages[messages.length - 1]?.content;

      let contextStr = "No context available.";

      if (latestMessage) {
        try {
          // Generate embedding for the user's latest query
          const queryEmbedding = await generateEmbedding(latestMessage);

          // Perform vector search in database context
          if (process.env.DATABASE_URL) {
            // Find similar content directly utilizing pgvector in postgres
            const similarRows = await storage.findSimilarContent(queryEmbedding);
            if (similarRows && similarRows.length > 0) {
              contextStr = similarRows.map(row => `Title: ${row.title}\nContent: ${row.content}`).join("\n\n---\n\n");
            }
          } else {
            console.warn("Using DB mock or fallback: Semantic search disabled without real DB connection.");
          }
        } catch (embeddingError) {
          console.error("Vector Search Error:", embeddingError);
          // Fallback to normal chat if search fails
        }
      }

      const result = await streamText({
        model: openai('gpt-4o'),
        messages: [
          {
            role: 'system',
            content: `You are a helpful AI assistant built directly into the 10xGrowth platform. You help users understand the business operating systems, whatsapp growth engine, growth studio, and performance marketing aspects of 10xGrowth. 
            
Use the following context when helpful to answer questions contextually to the company:
${contextStr}

Always be concise, professional, and directly address the user's question.`
          },
          ...messages
        ]
      });

      result.pipeTextStreamToResponse(res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred during chat processing." });
    }
  });

  return httpServer;
}
