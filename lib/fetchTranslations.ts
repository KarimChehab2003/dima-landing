
const translationsMap: Record<string, string> = {
    en: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/en.json?alt=media&token=fd8f1b0f-f9a5-461c-a90e-59cb9db43076",
    ar: "https://firebasestorage.googleapis.com/v0/b/dima-landing.firebasestorage.app/o/ar.json?alt=media&token=e62d1735-fddb-4a02-9dc1-9c8ce191f8c8"
}

export const fetchTranslations = async (locale: string) => {
    const url = translationsMap[locale]

    const response = await fetch(url, { next: { revalidate: 86400 } });
    if (!response.ok) throw new Error(`Failed to fetch translations for locale: ${locale}`);

    return await response.json();
}