import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Translation Map
const translationsMap: Record<string, string> = {
  en: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/en.json?alt=media&token=fb3f79d5-ba0f-411f-a95e-52c7159007b1",
  ar: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/ar.json?alt=media&token=4050276e-6416-4c72-b4f6-abe59b8fdf39"
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

  // Raw time differences
  const diffMs = now.getTime() - date.getTime();
  const seconds = Math.round(diffMs / 1000);
  const minutes = Math.round(diffMs / 60000);
  const hours = Math.round(diffMs / 3600000);
  const days = Math.round(diffMs / 86400000);

  // Calendar-correct months difference
  const months =
    (now.getFullYear() - date.getFullYear()) * 12 +
    (now.getMonth() - date.getMonth()) -
    (now.getDate() < date.getDate() ? 1 : 0);

  // Calendar-correct years difference
  const years =
    now.getFullYear() -
    date.getFullYear() -
    (now.getMonth() < date.getMonth() ||
      (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())
      ? 1
      : 0);

  // Choose accurate unit
  let value: number;
  let unit: Intl.RelativeTimeFormatUnit;

  if (Math.abs(seconds) < 60) {
    value = -seconds;
    unit = "second";
  } else if (Math.abs(minutes) < 60) {
    value = -minutes;
    unit = "minute";
  } else if (Math.abs(hours) < 24) {
    value = -hours;
    unit = "hour";
  } else if (Math.abs(days) < 30) {
    value = -days;
    unit = "day";
  } else if (Math.abs(months) < 12) {
    value = -months;
    unit = "month";
  } else {
    value = -years;
    unit = "year";
  }

  let formatted = rtf.format(value, unit);

  if (locale.startsWith("ar") && value < 0) {
    formatted = formatted.replace("قبل", "منذ");
  }

  return formatted;
}


// Function to format titles into slugs
export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/&/g, "-and-")   // Replaces & with "and"
    .replace(/[^a-z0-9\s-]/g, "")  // Removes any other symbols
    .trim()
    .replace(/\s+/g, "-");  // Replaces spaces with hyphens
}
