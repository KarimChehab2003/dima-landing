import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Translation Map
const translationsMap: Record<string, string> = {
  en: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/en.json?alt=media&token=33ccfc9a-ed07-44da-880a-d9d8ed69bded",
  ar: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/ar.json?alt=media&token=321ae59b-0326-499b-a20a-335a296de511"
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
      return rtf.format(Math.round(duration), unit);
    }
    duration /= unitSeconds;
  }
}
