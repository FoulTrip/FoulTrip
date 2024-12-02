import Experience from "@/components/landing/Experience/Experience";
import HeroSection from "@/components/landing/HeroSection/Hero";
import NavBar from "@/components/NavBar";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();

  return (
    <>
      <main className="max-w-screen-lg mx-auto px-6 py-3">
        <NavBar currentLocale={locale as "es" | "en"} />
        <HeroSection  />
        <Experience />
      </main>
    </>
  );
}