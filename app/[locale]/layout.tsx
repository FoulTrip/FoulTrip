import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const GaretBook = localFont({
  src: "../fonts/Garet-Book.otf",
  variable: "--font-garet-book",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "David Vasquez",
  description: "Development by FoulTrip",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${GaretBook.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}