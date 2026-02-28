import * as cheerio from 'cheerio';
import { generateContentEmbeddings } from './ai';

export async function scrapeAndIndex(url: string, html: string) {
    const $ = cheerio.load(html);

    // Basic scraping strategy: extract text from main content areas
    const title = $('title').text() || url;

    // Remove scripts, styles, etc.
    $('script, style, nav, footer, header').remove();

    const mainContent = $('body').text()
        .replace(/\s+/g, ' ')
        .trim();

    // Split into manageable chunks (naive chunking by paragraphs could be better)
    const chunkSize = 1000;
    for (let i = 0; i < mainContent.length; i += chunkSize) {
        const chunk = mainContent.substring(i, i + chunkSize);
        if (chunk.length > 50) { // ignore tiny chunks
            await generateContentEmbeddings(url, title, chunk);
        }
    }
    return true;
}
