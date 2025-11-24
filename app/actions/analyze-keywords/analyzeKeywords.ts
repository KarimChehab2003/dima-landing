// app/server/actions/analyzeKeywords.ts
"use server";

import { analyzeKeywordsFlow } from "@/lib/flows/analyzeArabicKeywords";

export async function analyzeKeywords(keywords: string[], countries: string[]) {
    try {
        const result = await analyzeKeywordsFlow({ keywords, countries });
        return result;
    } catch (err) {
        console.error("AI error:", err);
        throw new Error("AI processing failed");
    }
}
