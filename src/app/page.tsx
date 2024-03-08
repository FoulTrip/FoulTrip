import HeroinSection from "@/components/HeroinSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Navbar from "@/components/navbar/NavBar";
import DocsSection from "@/components/docsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroinSection />
      <AboutSection />
      <ProjectsSection />
      <DocsSection />
    </>
  );
}
