// lib/flows/analyzeDialectFlow.ts
import { ai } from "../genkit/config";

export const analyzeDialectFlow = ai.defineFlow(
  "analyzeDialectFlow",
  async ({ text, dialect, language }: { text: string; dialect: string, language: "en" | "ar" }) => {
    if (!text || !dialect || !language) throw new Error("Text, dialect and language are required");

    const languageInstruction = language === "ar"
      ? "Return your result in JSON. Keep all JSON keys in English, but translate all text content (like 'reasoning', 'misread', and entity text) into Arabic (Saudi dialect)."
      : "Return your result in JSON. Keep all text in English.";

    const prompt = `
You are an expert in Arabic dialects, specifically ${dialect}.
Analyze the following text:

"${text}"

${languageInstruction}

Return your result as JSON:
{
  "sentiment": {
    "label": "positive | negative | neutral" (can be in arabic too),
    "confidence": number,
    "reasoning": "why this sentiment?"
  },
  "entities": [
    { "text": "entity text", "type": "person | place | brand | organization | other" (can be in arabic too) }
  ],
  "commonMisreads": [
    { "misread": "example", "reason": "why misread happens" }
  ]
}

Rules:
- Output valid JSON only (no explanation outside JSON).
- Entities must be real Arabic or culturally relevant.
- Common misreads must be mistakes a non-dialect-aware AI would make.
    `;

    const result = await ai.generate(prompt);
    const raw = result.text.trim();

    // Extract JSON if wrapped in code fences
    const fenceMatch = raw.match(/```json([\s\S]*?)```/i);
    const jsonString = fenceMatch ? fenceMatch[1].trim() : raw;

    return JSON.parse(jsonString);
  }
);
