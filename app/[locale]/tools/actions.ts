"use server";
import { analyzeDialectFlow } from "@/lib/flows/analyzeArabicDialect";
import { analyzeKeywordsFlow } from "@/lib/flows/analyzeArabicKeywords";

// Arabic Dialect
export async function analyzeDialect(text: string, dialect: string, language: "en" | "ar") {
    if (!text || !dialect || !language) {
        throw new Error("Text, dialect and language are required");
    }

    try {
        const analysis = await analyzeDialectFlow({ text, dialect, language });
        return analysis;
    } catch (err) {
        console.error("Dialect analysis error:", err);
        throw new Error("AI analysis failed");
    }
}

// Arabic coverage
export async function analyzeKeywords(keywords: string[], countries: string[]) {
    try {
        const result = await analyzeKeywordsFlow({ keywords, countries });
        return result;
    } catch (err) {
        console.error("AI error:", err);
        throw new Error("AI processing failed");
    }
}
