
const translationsMap: Record<string, string> = {
    en: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/en.json?alt=media&token=33ccfc9a-ed07-44da-880a-d9d8ed69bded",
    ar: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/ar.json?alt=media&token=321ae59b-0326-499b-a20a-335a296de511"
}

export const fetchTranslations = async (locale: string) => {
    const url = translationsMap[locale]

    const response = await fetch(url, { next: { revalidate: 86400 } });
    if (!response.ok) throw new Error(`Failed to fetch translations for locale: ${locale}`);

    return await response.json();
}