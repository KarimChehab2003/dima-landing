import { ai } from "../genkit/config";

const countryDialects: Record<string, string> = {
    Egypt: "Egyptian Arabic",
    "Saudi Arabia": "Gulf/Saudi Arabic",
    UAE: "Gulf/Emirati Arabic",
    Kuwait: "Gulf/Kuwaiti Arabic",
    Jordan: "Levantine Arabic",
    Lebanon: "Levantine Arabic",
    Syria: "Levantine Arabic",
    Palestine: "Levantine Arabic",
    Morocco: "Maghrebi/Darija",
    Tunisia: "Maghrebi/Tunisian Arabic",
    Algeria: "Maghrebi/Algerian Arabic",
    Iraq: "Iraqi Arabic",
    Yemen: "Yemeni Arabic",
    Libya: "Libyan Arabic",
};

export const analyzeKeywordsFlow = ai.defineFlow(
    {
        name: "analyzeKeywordsFlow",
        metadata: {
            labels: {
                flow: "analyzeKeywordsFlow",
                feature: "arabic-coverage-gap"
            }
        }
    },
    async ({ keywords, countries }: { keywords: string[]; countries: string[] }) => {
        if (!Array.isArray(keywords) || keywords.length === 0) {
            throw new Error("Invalid keywords array");
        }

        if (!Array.isArray(countries) || countries.length === 0) {
            throw new Error("Invalid countries array");
        }

        const selectedDialects = countries
            .map((c) => countryDialects[c] || c)
            .join(", ");

        const prompt = `You are an expert in Arabic linguistics, dialects, and digital media monitoring. 
            Your task is to analyze Arabic keywords and generate comprehensive coverage for media monitoring tools.
            
            Keywords to analyze: ${keywords.join(", ")}
            Target dialects: ${selectedDialects}
            
            For each keyword, provide:
            1. **Dialect Variations**: How this keyword is written/spoken in each dialect (Egyptian, Gulf, Levantine, Maghrebi, Iraqi, Yemeni)
            2. **Common Misspellings**: 
               - Arabic keyboard typos (adjacent keys)
               - Hamza variations (أ، إ، آ، ء)
               - Ta marbuta vs Ha (ة vs ه)
               - Alef variations
               - Common phonetic misspellings
            3. **Colloquialisms**: How people actually search for this in informal contexts
            4. **Formal vs Informal**: Standard Arabic vs colloquial versions
            
            Return your response as a JSON array with this exact structure:
            [
              {
                "keyword": "original keyword",
                "variations": ["variation1", "variation2", ...],
                "dialectTerms": ["dialect term 1", "dialect term 2", ...],
                "misspellings": ["misspelling1", "misspelling2", ...]
              }
            ]
            
            Important:
            - Generate authentic, real Arabic variations (not transliterations)
            - Include at least 5-10 variations per keyword
            - Include at least 3-5 dialect-specific terms
            - Include at least 5-8 common misspellings
            - Deduplicate variations
            - Use proper Arabic script
            - Consider how people actually type on mobile keyboards`;

        const result = await ai.generate(prompt);
        const content = result.text.trim();

        let jsonString = content;

        const codeFenceMatch = content.match(/```json([\s\S]*?)```/i);
        if (codeFenceMatch) {
            jsonString = codeFenceMatch[1].trim();
        }

        return JSON.parse(jsonString);
    }
);
