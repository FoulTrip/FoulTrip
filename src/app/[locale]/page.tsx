import BaseContact from "@/components/contact/BaseContact";
import BaseExperiences from "@/components/experience/BaseExperiences";
import Navbar from "@/components/gadgets/NavBar";
import BaseHeader from "@/components/header/BaseHeader";
import BaseProject from "@/components/projects/BaseProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <BaseHeader />
      <BaseProject />
      <BaseExperiences />
      <BaseContact />
    </>
  );
}
