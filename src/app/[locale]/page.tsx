"use client"

import BaseContact from "@/components/contact/BaseContact";
import BaseExperiences from "@/components/experience/BaseExperiences";
import BaseHeader from "@/components/header/BaseHeader";
import BaseProject from "@/components/projects/BaseProjects";
import { useDarkMode } from "@/context/DarkModeContext";

export default function Home() {
  const { darkmode } = useDarkMode();
  return (
    <>
      <div className={`${darkmode == true ? "bg-black" : "bg-transparent"}`}>
        <BaseHeader />
      </div>
      <BaseProject />
      <BaseExperiences />
      <BaseContact />
    </>
  );
}
