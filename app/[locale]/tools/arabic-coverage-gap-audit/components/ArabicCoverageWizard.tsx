"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, Check, FileText, Globe, Sparkles, Download } from "lucide-react";
import jsPDF from "jspdf";
import { RawKeywordResult } from "@/types/content";

type Step = 1 | 2 | 3;

const countries = [
  "Saudi Arabia",
  "United Arab Emirates",
  "Egypt",
  "Jordan",
  "Lebanon",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman",
  "Iraq",
  "Palestine",
  "Morocco",
  "Algeria",
  "Tunisia",
  "Libya",
  "Sudan",
  "Yemen",
];

interface ExpandedKeyword {
  original: string;
  variations: string[];
  dialects: { country: string; term: string }[];
  misspellings: string[];
}

export const ArabicCoverageWizard = () => {
  const [step, setStep] = useState<Step>(1);
  const [keywords, setKeywords] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [results, setResults] = useState<ExpandedKeyword[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCountryToggle = (country: string) => {
    setSelectedCountries((prev) =>
      prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]
    );
  };

  const handleProcess = async () => {
    setIsProcessing(true);

    try {
      const keywordList = keywords
        .split("\n")
        .filter((k) => k.trim())
        .map((k) => k.trim());

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keywords: keywordList,
          countries: selectedCountries
        })
      })

      if (!response.ok) {
        if (response.status === 429) {
          console.log("too many requests")
        } else if (response.status === 402) {
          console.log("Please add credits")
        } else {
          console.log("analysis failed")
        }

        setIsProcessing(false);
        return;
      }

      const data = await response.json();

      if (data.results && Array.isArray(data.results)) {
        // Transform AI response to match our interface
        const transformedResults: ExpandedKeyword[] = (data.results as RawKeywordResult[]).map((item) => ({
          original: item.keyword,
          variations: item.variations || [],
          dialects: selectedCountries.map((country) => {
            const dialectObj = item.dialectTerms?.find((d) =>
              d.dialect?.toLowerCase().includes(country.toLowerCase())
            );
            const dialectTerm = dialectObj?.terms?.[0] || `${item.keyword} (${country})`;
            return { country, term: dialectTerm };
          }),
          misspellings: item.misspellings || [],
        }));


        setResults(transformedResults);
        setStep(3);
        console.log("analysis complete")
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error analyzing keywords:", error);
      console.log("error")
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setKeywords("");
    setSelectedCountries([]);
    setResults([]);
  };

  // const handleExportPDF = () => {
  //   const doc = new jsPDF();
  //   const pageWidth = doc.internal.pageSize.getWidth();
  //   const pageHeight = doc.internal.pageSize.getHeight();
  //   const margin = 20;
  //   let yPosition = margin;

  //   // Header with brand color
  //   doc.setFillColor(6, 182, 212); // cyan-500
  //   doc.rect(0, 0, pageWidth, 40, "F");
  //   doc.setTextColor(255, 255, 255);
  //   doc.setFontSize(24);
  //   doc.text("Arabic Coverage Analysis Report", pageWidth / 2, 25, { align: "center" });

  //   yPosition = 50;

  //   // Summary section
  //   doc.setTextColor(0, 0, 0);
  //   doc.setFontSize(16);
  //   doc.text("Coverage Summary", margin, yPosition);
  //   yPosition += 10;

  //   doc.setFontSize(11);
  //   doc.setTextColor(60, 60, 60);
  //   doc.text(`Total Keywords Expanded: ${results.length}`, margin, yPosition);
  //   yPosition += 7;
  //   doc.text(`Total Variations: ${results.reduce((acc, r) => acc + r.variations.length, 0)}`, margin, yPosition);
  //   yPosition += 7;
  //   doc.text(`Total Dialect Terms: ${results.reduce((acc, r) => acc + r.dialects.length, 0)}`, margin, yPosition);
  //   yPosition += 7;
  //   doc.text(`Total Misspellings: ${results.reduce((acc, r) => acc + r.misspellings.length, 0)}`, margin, yPosition);
  //   yPosition += 15;

  //   // Keywords details
  //   results.forEach((result, index) => {
  //     // Check if we need a new page
  //     if (yPosition > pageHeight - 60) {
  //       doc.addPage();
  //       yPosition = margin;
  //     }

  //     // Original keyword header
  //     doc.setFillColor(241, 245, 249); // slate-100
  //     doc.rect(margin - 5, yPosition - 5, pageWidth - 2 * margin + 10, 12, "F");
  //     doc.setTextColor(6, 182, 212); // cyan-500
  //     doc.setFontSize(14);
  //     doc.text(`${index + 1}. ${result.original}`, margin, yPosition + 3);
  //     yPosition += 15;

  //     // Variations
  //     doc.setTextColor(0, 0, 0);
  //     doc.setFontSize(11);
  //     doc.text("Variations:", margin, yPosition);
  //     yPosition += 7;
  //     doc.setFontSize(10);
  //     doc.setTextColor(60, 60, 60);
  //     const variationsText = result.variations.join(", ");
  //     const variationsLines = doc.splitTextToSize(variationsText, pageWidth - 2 * margin - 10);
  //     variationsLines.forEach((line: string) => {
  //       if (yPosition > pageHeight - 40) {
  //         doc.addPage();
  //         yPosition = margin;
  //       }
  //       doc.text(line, margin + 5, yPosition);
  //       yPosition += 5;
  //     });
  //     yPosition += 5;

  //     // Dialect Terms
  //     doc.setTextColor(0, 0, 0);
  //     doc.setFontSize(11);
  //     doc.text("Dialect Terms:", margin, yPosition);
  //     yPosition += 7;
  //     doc.setFontSize(10);
  //     doc.setTextColor(60, 60, 60);
  //     result.dialects.forEach((d) => {
  //       if (yPosition > pageHeight - 40) {
  //         doc.addPage();
  //         yPosition = margin;
  //       }
  //       doc.setTextColor(6, 182, 212); // cyan-500
  //       doc.text(`${d.country}:`, margin + 5, yPosition);
  //       doc.setTextColor(60, 60, 60);
  //       doc.text(d.term, margin + 40, yPosition);
  //       yPosition += 5;
  //     });
  //     yPosition += 5;

  //     // Misspellings
  //     doc.setTextColor(0, 0, 0);
  //     doc.setFontSize(11);
  //     doc.text("Common Misspellings:", margin, yPosition);
  //     yPosition += 7;
  //     doc.setFontSize(10);
  //     doc.setTextColor(60, 60, 60);
  //     const misspellingsText = result.misspellings.join(", ");
  //     const misspellingsLines = doc.splitTextToSize(misspellingsText, pageWidth - 2 * margin - 10);
  //     misspellingsLines.forEach((line: string) => {
  //       if (yPosition > pageHeight - 40) {
  //         doc.addPage();
  //         yPosition = margin;
  //       }
  //       doc.text(line, margin + 5, yPosition);
  //       yPosition += 5;
  //     });
  //     yPosition += 15;
  //   });

  //   // Footer on last page
  //   doc.setFontSize(9);
  //   doc.setTextColor(100, 100, 100);
  //   doc.text("Powered by dima - AI-powered media intelligence for MENA", pageWidth / 2, pageHeight - 15, { align: "center" });
  //   doc.setTextColor(6, 182, 212);
  //   doc.textWithLink("thedar.ai", pageWidth / 2, pageHeight - 10, { align: "center", url: "https://thedar.ai/" });

  //   // Save the PDF
  //   doc.save("arabic-coverage-analysis.pdf");

  //   console.log("export successful")
  // };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${step >= s
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
                }`}
            >
              {step > s ? <Check className="w-5 h-5" /> : s}
            </div>
            {s < 3 && (
              <div
                className={`w-16 h-1 mx-2 transition-colors ${step > s ? "bg-primary" : "bg-muted"
                  }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <Card className="p-8 shadow-lg border-border">
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Enter Your Keywords</h2>
              <p className="text-muted-foreground text-lg">
                Paste your current keyword taxonomy (one keyword per line)
              </p>
            </div>
            <Textarea
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Example:&#10;سوشيال ميديا&#10;تسويق رقمي&#10;إعلانات&#10;محتوى"
              className="min-h-[300px] text-lg font-mono resize-none"
              dir="rtl"
            />
            <div className="flex justify-end">
              <Button
                onClick={() => setStep(2)}
                disabled={!keywords.trim()}
                size="lg"
                className="gap-2"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Select Target Countries</h2>
              <p className="text-muted-foreground text-lg">
                Choose countries to map dialect variations and colloquialisms
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {countries.map((country) => (
                <label
                  key={country}
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedCountries.includes(country)
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                    }`}
                >
                  <Checkbox
                    checked={selectedCountries.includes(country)}
                    onCheckedChange={() => handleCountryToggle(country)}
                  />
                  <span className="font-medium text-foreground">{country}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between gap-4">
              <Button onClick={() => setStep(1)} variant="outline" size="lg" className="gap-2">
                <ArrowLeft className="w-5 h-5" />
                Back
              </Button>
              <Button
                onClick={handleProcess}
                disabled={selectedCountries.length === 0 || isProcessing}
                size="lg"
                className="gap-2"
              >
                {isProcessing ? (
                  <>Processing...</>
                ) : (
                  <>
                    Generate Results
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Expanded Arabic Queries</h2>
              <p className="text-muted-foreground text-lg">
                Your comprehensive keyword coverage report
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground text-lg">Coverage Summary</h3>
                <Badge variant="default" className="text-base px-4 py-2">
                  {results.length} Keywords Expanded
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-card rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">
                    {results.reduce((acc, r) => acc + r.variations.length, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Variations</div>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">
                    {results.reduce((acc, r) => acc + r.dialects.length, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Dialect Terms</div>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">
                    {results.reduce((acc, r) => acc + r.misspellings.length, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Misspellings</div>
                </div>
              </div>
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {results.map((result, idx) => (
                <Card key={idx} className="p-6 border-border">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h4 className="text-xl font-semibold text-foreground">{result.original}</h4>
                      <Badge className="bg-primary text-primary-foreground">Original</Badge>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                          Variations
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {result.variations.map((v, i) => (
                            <Badge key={i} variant="default">
                              {v}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                          Dialect Terms
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {result.dialects.map((d, i) => (
                            <Badge key={i} variant="outline">
                              {d.country}: {d.term}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                          Common Misspellings
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {result.misspellings.map((m, i) => (
                            <Badge key={i} variant="outline" className="bg-muted/50">
                              {m}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                No Missing Mentions Checklist
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  All dialect variations mapped across {selectedCountries.length} countries
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Common misspellings and colloquialisms identified
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Duplicate terms removed from expanded list
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  Ready for media monitoring implementation
                </li>
              </ul>
            </div>

            <div className="flex justify-end gap-4">
              <Button onClick={handleReset} variant="outline" size="lg">
                Start New Audit
              </Button>
              {/* <Button onClick={handleExportPDF} size="lg" className="gap-2">
                Export PDF
                <Download className="w-5 h-5" />
              </Button> */}
            </div>
          </div>
        )}
      </Card>

      {/* Dima Footer - Show after results */}
      {step === 3 && results.length > 0 && (
        <div className="mt-8 pt-8 border-t border-border text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            This tool is powered by <span className="font-semibold text-foreground">dima</span> —
            your AI-powered media intelligence platform for comprehensive Arabic-language monitoring across MENA.
          </p>
          <a
            href="https://thedar.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors"
          >
            Learn more about dima
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};
