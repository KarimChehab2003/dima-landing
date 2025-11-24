"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { analyzeDialect } from "@/app/actions/analyze-dialect/analyzeDialect";


type Dialect = "KSA" | "Egyptian" | "Levantine" | "Maghrebi" | "Gulf";

interface AnalysisResult {
  sentiment: {
    label: string;
    confidence: number;
    reasoning: string;
  };
  entities: Array<{
    text: string;
    type: string;
  }>;
  commonMisreads: Array<{
    misread: string;
    reason: string;
  }>;
}

export const DialectAnalyzer = () => {
  const [inputText, setInputText] = useState("");
  const [selectedDialect, setSelectedDialect] = useState<Dialect>("KSA");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const dialects: Dialect[] = ["KSA", "Egyptian", "Levantine", "Maghrebi", "Gulf"];

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    try {
      const data = await analyzeDialect(inputText, selectedDialect);
      console.log(data);
      setResult(data);
    } catch (error) {
      console.error('Analysis error:', error);
      setResult({
        sentiment: {
          label: 'neutral',
          confidence: 0,
          reasoning: `Error: ${error instanceof Error ? error.message : 'Failed to analyze text'}`
        },
        entities: [],
        commonMisreads: []
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSentimentColor = (sentiment: string) => {
    const lowerSentiment = sentiment.toLowerCase();
    if (lowerSentiment === "positive") return "bg-success text-success-foreground";
    if (lowerSentiment === "negative") return "bg-destructive text-destructive-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Input Section */}
      <Card className="p-6 shadow-lg border-2">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              Select Arabic Dialect
            </label>
            <div className="flex flex-wrap gap-2">
              {dialects.map((dialect) => (
                <Button
                  key={dialect}
                  variant={selectedDialect === dialect ? "default" : "outline"}
                  onClick={() => setSelectedDialect(dialect)}
                  className="transition-all px-4"

                >
                  {dialect}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              Paste Arabic Text
            </label>
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="أدخل النص العربي هنا للتحليل..."
              className="min-h-[150px] text-lg"
              dir="rtl"
            />
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing || !inputText.trim()}
            className="w-full sm:w-auto font-semibold"
            size="lg"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Text"}
          </Button>
        </div>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sentiment Analysis */}
          <Card className="p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-foreground">Sentiment Analysis</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Result:</span>
                <Badge className={getSentimentColor(result.sentiment.label) + " capitalize"}>
                  {result.sentiment.label}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Confidence Score</span>
                  <span className="font-bold text-primary">
                    {result.sentiment.confidence * 100}%
                  </span>
                </div>
                <Progress value={result.sentiment.confidence * 100} max={100} className="h-3" />
              </div>
              {result.sentiment.reasoning && (
                <p className="text-sm text-muted-foreground mt-2">
                  {result.sentiment.reasoning}
                </p>
              )}
            </div>
          </Card>

          {/* Entity Extraction */}
          <Card className="p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-foreground">Entity Extraction</h3>
            <div className="space-y-3">
              {result.entities.length > 0 ? (
                result.entities.map((entity, idx) => (
                  <div key={idx} className="p-3 bg-primary/50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">{entity.text}</span>
                      <Badge variant="outline">{entity.type}</Badge>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No entities detected</p>
              )}
            </div>
          </Card>
        </div>
      )}

      {/* Common Misreads */}
      {result && result.commonMisreads.length > 0 && (
        <Card className="p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-foreground">
            Common Misreads in {selectedDialect}
          </h3>
          <div className="space-y-4">
            {result.commonMisreads.map((misread, idx) => (
              <div
                key={idx}
                className="p-4 bg-muted/30 rounded-lg border"
              >
                <div className="mb-2">
                  <span className="text-xs font-semibold text-destructive block mb-1">
                    COMMON MISREAD
                  </span>
                  <p className="font-semibold text-foreground">{misread.misread}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-muted-foreground block mb-1">
                    WHY THIS HAPPENS
                  </span>
                  <p className="text-sm text-muted-foreground">{misread.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Dima Value Proposition - Shows after results */}
      {result && (
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              Ready for Production-Grade Arabic Intelligence?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              This demo shows what&apos;s possible with dialect-aware AI. dima delivers enterprise-ready Arabic NLP
              with multi-dialect support, custom model training, and seamless API integration for your business.
            </p>
            <a
              href="https://thedar.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
            >
              Learn More About dima
            </a>
          </div>
        </Card>
      )}

      {/* Info Section */}
      {!result && (
        <Card className="p-6 bg-primary/20 border-primary/20">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              Who Benefits from This Tool?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-semibold text-foreground">Insights & Research Leaders</p>
                  <p className="text-sm text-muted-foreground">
                    Validate accuracy and reduce campaign risk
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-semibold text-foreground">Media Monitoring Specialists</p>
                  <p className="text-sm text-muted-foreground">
                    Save time with accurate dialect interpretation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
