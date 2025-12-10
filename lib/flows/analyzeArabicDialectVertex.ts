import { generativeModel } from '../vertex/ai';

export async function analyzeDialectVertex({
    text,
    dialect,
    language,
}: { text: string; dialect: string; language: 'en' | 'ar' }) {
    if (!text || !dialect || !language) {
        throw new Error('Text, dialect and language are required');
    }

    const languageInstruction =
        language === 'ar'
            ? 'Return your result in JSON. Keep all JSON keys in English, but translate all text content (like "reasoning", "misread", and entity text) into Arabic (Saudi dialect).'
            : 'Return your result in JSON. Keep all text in English.';

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

    const response = await generativeModel.generateContent({
        contents: [
            {
                role: 'user',
                parts: [{ text: prompt }],
            },
        ],

        labels: {
            service_name: 'dima-landing',
            function_name: 'Analyze Arabic Dialect Flow',
            feature: 'arabic-dialect-analysis',
        },
    });

    // Getting raw text from each part
    const raw =
        response.response?.candidates?.[0]?.content?.parts
            ?.map((p) => p.text ?? '')
            .join(' ')
            .trim() ?? '';

    // Match ```json ... ``` and extract the content
    const codeFenceMatch = raw.match(/```json\s*([\s\S]*?)\s*```/);
    const jsonString = codeFenceMatch ? codeFenceMatch[1].trim() : raw;

    return JSON.parse(jsonString);
}
