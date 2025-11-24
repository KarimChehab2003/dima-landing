"use server";
import { analyzeDialectFlow } from "@/lib/flows/analyzeArabicDialect";

export async function analyzeDialect(text: string, dialect: string) {
    if (!text || !dialect) {
        throw new Error("Text and dialect are required");
    }

    try {
        const analysis = await analyzeDialectFlow({ text, dialect });
        return analysis;
    } catch (err) {
        console.error("Dialect analysis error:", err);
        throw new Error("AI analysis failed");
    }
}
