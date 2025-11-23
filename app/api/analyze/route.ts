import { analyzeKeywordsFlow } from "@/lib/flows/analyzeArabicKeywords";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const { keywords, countries } = await req.json();

        const result = await analyzeKeywordsFlow({ keywords, countries });

        return NextResponse.json({ results: result });
    } catch (err) {
        console.error("AI error:", err);
        return NextResponse.json(
            { error: "AI processing failed" },
            { status: 500 }
        );
    }
}
