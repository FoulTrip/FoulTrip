import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    return {
      messages: (await import(`../texts/en.json`)).default
    };
  }

  return {
    messages: (await import(`../texts/${locale}.json`)).default
  };
});