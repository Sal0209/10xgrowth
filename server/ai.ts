import { embed } from 'ai';
import { openai } from '@ai-sdk/openai';
import { db } from '../server/db';
import { contentEmbeddings } from '@shared/schema';

export async function generateEmbedding(text: string) {
    // Use text-embedding-3-small as the default model
    const { embedding } = await embed({
        model: openai.embedding('text-embedding-3-small'),
        value: text,
    });
    return embedding;
}

export async function generateContentEmbeddings(
    url: string,
    title: string,
    content: string
) {
    // 1. Generate the embedding for the content chunk
    const embeddingArray = await generateEmbedding(content);
    // pgvector expects the string format '[1.1, 2.2, 3.3]'
    const embeddingString = `[${embeddingArray.join(',')}]`;

    if (db) {
        await db.insert(contentEmbeddings).values({
            url,
            title,
            content,
            embedding: embeddingString,
        });
    } else {
        console.warn("Database not connected. Embedding would be:", embeddingString.substring(0, 50) + "...");
    }
}
