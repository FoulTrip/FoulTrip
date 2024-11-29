import Experience from "@/components/landing/HeroSection/Experience";
import HeroSection from "@/components/landing/HeroSection/Hero";
import NavBar from "@/components/NavBar"

export default function Home({ params }: { params: { locale: string } }) {
  // Asegúrate de que `params.locale` sea un valor válido de LenType
  const currentLocale = params.locale as "es" | "en"; // Asegúrate de que es "es" o "en"

  return (
    <>
      <main className="max-w-screen-lg mx-auto px-6 py-3">
        <NavBar currentLocale={currentLocale} />
        <HeroSection />
        <Experience />
      </main>

    </>
  );
}
