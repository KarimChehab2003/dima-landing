import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Translation Map
const translationsMap: Record<string, string> = {
  en: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/en.json?alt=media&token=58c96586-410d-40d3-baba-b0931c58feb3",
  ar: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/ar.json?alt=media&token=ae5cb79b-1572-4981-92e1-64a1a8b9b288"
}

// Fetching translation files
export const fetchTranslations = async (locale: string) => {
  const url = translationsMap[locale]

  const response = await fetch(url, { next: { revalidate: 86400 } });
  if (!response.ok) throw new Error(`Failed to fetch translations for locale: ${locale}`);

  return await response.json();
}

// Function to calculate how long an item has been added
export function timeAgo(date: Date, locale: string = "en") {
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  const now = new Date();
  const secondsDiff = Math.floor((date.getTime() - now.getTime()) / 1000);

  const intervals: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, "second"],
    [60, "minute"],
    [24, "hour"],
    [7, "day"],
    [4, "week"],
    [12, "month"],
    [Number.POSITIVE_INFINITY, "year"]
  ];

  let duration = secondsDiff;
  for (const [unitSeconds, unit] of intervals) {
    if (Math.abs(duration) < unitSeconds) {
      const value = Math.round(duration);
      let formatted = rtf.format(value, unit);

      // Replacing kabl to munz
      if (locale.startsWith("ar") && value < 0) {
        formatted = formatted.replace("قبل", "منذ");
      }

      return formatted;
    }
    duration /= unitSeconds;
  }
}

// Function to format titles into slugs
export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, "-and-")   // Replace & with "and"
    .replace(/[^a-z0-9\s-]/g, "")  // Remove any other symbols
    .trim()
    .replace(/\s+/g, "-");  // Replace spaces with hyphens
}
