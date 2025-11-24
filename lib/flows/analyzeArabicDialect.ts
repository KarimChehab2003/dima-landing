// lib/flows/analyzeDialectFlow.ts
import { ai } from "../genkit/config";

export const analyzeDialectFlow = ai.defineFlow(
    "analyzeDialectFlow",
    async ({ text, dialect }: { text: string; dialect: string }) => {
        if (!text || !dialect) throw new Error("Text and dialect are required");

        const prompt = `
You are an expert in Arabic dialects, specifically ${dialect}.
Analyze the following text:

"${text}"

Return your result as JSON:
{
  "sentiment": {
    "label": "positive | negative | neutral",
    "confidence": number,
    "reasoning": "why this sentiment?"
  },
  "entities": [
    { "text": "entity text", "type": "person | place | brand | organization | other" }
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
