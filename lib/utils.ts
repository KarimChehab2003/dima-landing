import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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
