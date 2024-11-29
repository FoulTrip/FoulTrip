import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ['en', 'es'];

export default getRequestConfig(async ({ requestLocale }) => {
    const resolvedLocale = await requestLocale;
    console.log(resolvedLocale)

    if (!resolvedLocale || !locales.includes(resolvedLocale)) notFound();

    return {
        messages: (await import(`./texts/${resolvedLocale}.json`)).default
    };
});
