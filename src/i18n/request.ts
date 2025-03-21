import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    return {
      locale: 'en',
      messages: (await import(`../texts/en.json`)).default
    };
  }
  return {
    locale,
    messages: (await import(`../texts/${locale}.json`)).default
  };
});