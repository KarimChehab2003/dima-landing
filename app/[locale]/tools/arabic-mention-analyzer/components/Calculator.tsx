"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CONSTANTS = {
  TOOL_ACCURACY: {
    brandwatch: 0.35,
    talkwalker: 0.40,
    meltwater: 0.38,
    other: 0.30,
  },
  PLATFORM_MULTIPLIER: {
    twitter: 1.2,
    instagram: 1.0,
    facebook: 0.9,
    tiktok: 1.3,
    mixed: 1.1,
    other: 1.0,
  },
  SECTOR_RISK: {
    finance: 1.5,
    healthcare: 1.4,
    retail: 1.2,
    government: 1.6,
    other: 1.0
  }
}

interface CalculatorResults {
  missedMentions: number;
  sentimentSkew: number;
  riskAdjustedCost: number;
}

const Calculator = () => {
  const [platform, setPlatform] = useState("");
  const [arabicContent, setArabicContent] = useState("");
  const [currentTool, setCurrentTool] = useState("");
  const [sector, setSector] = useState("");
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    const arabicPercent = parseFloat(arabicContent) || 0;

    // Calculation logic based on tool accuracy and Arabic content
    const toolAccuracy = currentTool === "brandwatch" ? CONSTANTS.TOOL_ACCURACY.brandwatch :
      currentTool === "talkwalker" ? CONSTANTS.TOOL_ACCURACY.talkwalker :
        currentTool === "meltwater" ? CONSTANTS.TOOL_ACCURACY.meltwater : CONSTANTS.TOOL_ACCURACY.other;

    const platformMultiplier = platform === "twitter" ? CONSTANTS.PLATFORM_MULTIPLIER.twitter :
      platform === "instagram" ? CONSTANTS.PLATFORM_MULTIPLIER.instagram :
        platform === "facebook" ? CONSTANTS.PLATFORM_MULTIPLIER.facebook :
          platform === "tiktok" ? CONSTANTS.PLATFORM_MULTIPLIER.tiktok :
            platform === "mixed" ? CONSTANTS.PLATFORM_MULTIPLIER.mixed : CONSTANTS.PLATFORM_MULTIPLIER.other;

    const sectorRisk = sector === "finance" ? CONSTANTS.SECTOR_RISK.finance :
      sector === "healthcare" ? CONSTANTS.SECTOR_RISK.healthcare :
        sector === "retail" ? CONSTANTS.SECTOR_RISK.retail :
          sector === "government" ? CONSTANTS.SECTOR_RISK.government : CONSTANTS.SECTOR_RISK.other;

    const missedMentions = Math.round((arabicPercent / 100) * (1 - toolAccuracy) * 10000 * platformMultiplier);
    const sentimentSkew = Math.round((1 - toolAccuracy) * 100 * 0.7);
    const riskAdjustedCost = Math.round(missedMentions * sectorRisk * 0.5);

    setResults({
      missedMentions,
      sentimentSkew,
      riskAdjustedCost,
    });
  };

  const handleReset = () => {
    setPlatform("");
    setArabicContent("");
    setCurrentTool("");
    setSector("");
    setResults(null);
  };

  console.log(results)

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Lost Mentions & Missed Sentiment Calculator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estimate how many Arabic posts are being missed or misclassified with current tooling
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 bg-card border-2 flex">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">Calculator Inputs</h2>
            <p className="text-sm text-muted-foreground">Enter your current monitoring setup</p>
          </div>

          <form className="space-y-5 flex-1 flex flex-col justify-center" onSubmit={calculateResults}>
            <div className="space-y-2">
              <Label htmlFor="platform" className="text-base font-medium">
                Platform Mix
              </Label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger id="platform" className="h-12 w-full">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="twitter">Twitter/X</SelectItem>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="mixed">Mixed Platforms</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="arabic-content" className="text-base font-medium">
                % Arabic Content
              </Label>
              <Input
                id="arabic-content"
                type="number"
                placeholder="e.g., 65"
                value={arabicContent}
                onChange={(e) => setArabicContent(e.target.value)}
                className="h-12"
                min="0"
                max="100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="current-tool" className="text-base font-medium">
                Current Tool(s)
              </Label>
              <Select value={currentTool} onValueChange={setCurrentTool}>
                <SelectTrigger id="current-tool" className="h-12 w-full">
                  <SelectValue placeholder="Select tool" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brandwatch">Brandwatch</SelectItem>
                  <SelectItem value="talkwalker">Talkwalker</SelectItem>
                  <SelectItem value="meltwater">Meltwater</SelectItem>
                  {/* <SelectItem value="sprinklr">Sprinklr</SelectItem> */}
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sector" className="text-base font-medium">
                Sector
              </Label>
              <Select value={sector} onValueChange={setSector}>
                <SelectTrigger id="sector" className="h-12 w-full">
                  <SelectValue placeholder="Select sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="government">Government</SelectItem>
                  {/* <SelectItem value="technology">Technology</SelectItem> */}
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                disabled={!platform || !arabicContent || !currentTool || !sector}
                className="flex-1 h-12 text-base font-semibold bg-primary! p-2"
                type="submit"
              >
                Calculate Impact
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="h-12 px-6 font-normal"
                type="reset"
              >
                Reset
              </Button>
            </div>
          </form>
        </Card>

        <div className="space-y-4">
          <div className="space-y-2 mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Results</h2>
            <p className="text-sm text-muted-foreground">
              {results ? "Your coverage gap analysis" : "Fill in the inputs to see results"}
            </p>
          </div>

          {results ? (
            <div className="space-y-4">
              {/* Missed Mentions */}
              <Card className="p-6 bg-linear-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Missed Mentions (Monthly)
                  </p>
                  <p className="text-5xl font-bold text-primary">
                    {results.missedMentions.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Arabic posts not captured by your current tools
                  </p>
                </div>
              </Card>

              {/* Sentiment Skew */}
              <Card className="p-6 bg-linear-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Sentiment Skew
                  </p>
                  <p className="text-5xl font-bold text-primary">
                    {results.sentimentSkew}%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Potential inaccuracy in sentiment analysis
                  </p>
                </div>
              </Card>

              {/* Risk-adjusted Cost */}
              <Card className="p-6 bg-linear-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/20">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Risk-Adjusted Cost
                  </p>
                  <p className="text-5xl font-bold text-destructive">
                    ${results.riskAdjustedCost.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Estimated monthly cost of coverage gaps
                  </p>
                </div>
              </Card>

              <div className="mt-6 p-4 rounded-lg bg-primary/10">
                <p className="text-sm text-foreground font-medium">
                  💡 <span className="font-semibold">Business Impact:</span> With{" "}
                  {arabicContent}% Arabic content, you're potentially missing critical
                  insights that could affect brand reputation and customer engagement.
                </p>
              </div>
            </div>
          ) : (
            <Card className="p-12 flex items-center justify-center border-2 border-dashed min-h-[400px]">
              <div className="text-center space-y-3">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <svg
                    className="w-10 h-10 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-muted-foreground text-lg font-medium">
                  Enter your details to calculate
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>

      <Card className="p-6 bg-muted/30">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Who benefits from this analysis?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-1">
              <p className="font-semibold text-primary">CMOs</p>
              <p className="text-muted-foreground">
                Understand the true scope of brand conversation in Arabic markets
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-primary">Heads of Insights</p>
              <p className="text-muted-foreground">
                Quantify data quality gaps and justify tool improvements
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-primary">Agency MDs</p>
              <p className="text-muted-foreground">
                Demonstrate ROI of specialized Arabic monitoring solutions
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-linear-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Close Your Arabic Coverage Gap with dima
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            dima is the Middle East's leading Arabic-first social listening and analytics platform.
            We deliver 95%+ accuracy in Arabic sentiment analysis and capture insights other tools miss.
          </p>
          <a
            href="https://thedar.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Learn More About dima
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;
