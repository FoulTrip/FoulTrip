"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import svg1 from "@/assets/stacks/React.svg";
import svg2 from "@/assets/stacks/docker.svg";
import svg3 from "@/assets/stacks/javascript.svg";
import svg4 from "@/assets/stacks/kubernetes.svg";
import svg5 from "@/assets/stacks/mongodb.svg";
import svg6 from "@/assets/stacks/nestjs.svg";
import svg7 from "@/assets/stacks/nextjs_icon_dark.svg";
import svg8 from "@/assets/stacks/nodejs.svg";
import svg9 from "@/assets/stacks/python.svg";
import svg10 from "@/assets/stacks/solidity.svg";
import svg11 from "@/assets/stacks/typescript.svg";
import svg12 from "@/assets/stacks/tailwindcss.svg";

const logos = [
  { src: svg1, name: "React", invertOnDark: false },
  { src: svg2, name: "Docker", invertOnDark: false },
  { src: svg3, name: "JavaScript", invertOnDark: false },
  { src: svg4, name: "Kubernetes", invertOnDark: false },
  { src: svg5, name: "MongoDB", invertOnDark: false },
  { src: svg6, name: "NestJS", invertOnDark: false },
  { src: svg7, name: "Next.js", invertOnDark: true },
  { src: svg8, name: "Node.js", invertOnDark: false },
  { src: svg9, name: "Python", invertOnDark: false },
  { src: svg10, name: "Solidity", invertOnDark: true },
  { src: svg11, name: "TypeScript", invertOnDark: false },
  { src: svg12, name: "Tailwind CSS", invertOnDark: false },
];

const LogoCarousel: React.FC = () => {
  const t = useTranslations("BaseHeader");
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current && trackRef.current) {
      // Clonamos la lista de logos y la añadimos al contenedor para lograr el efecto infinito.
      const clonedList = listRef.current.cloneNode(true) as HTMLUListElement;
      clonedList.setAttribute("aria-hidden", "true");
      trackRef.current.appendChild(clonedList);
    }
  }, []);

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        // Máscara de gradiente para ocultar los extremos y darle un acabado más pulido
        maskImage:
          "linear-gradient(to right, transparent 0, black 128px, black calc(100% - 200px), transparent 100%)",
      }}
    >
      <div className="text-center mb-6">
        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t("titleSkills")}</h2>
      </div>
      <div
        ref={trackRef}
        className="inline-flex flex-nowrap"
        style={{
          // Se aplica la animación al contenedor de las listas
          animation: "infinite-scroll 25s linear infinite",
        }}
      >
        <ul
          ref={listRef}
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={`Logo ${logo.name}`} width={80} height={80} className={`h-20 w-20${logo.invertOnDark ? " dark:invert" : ""}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoCarousel;
