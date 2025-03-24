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
  svg1,
  svg2,
  svg3,
  svg4,
  svg5,
  svg6,
  svg7,
  svg8,
  svg9,
  svg10,
  svg11,
  svg12,
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
      <h2 className="text-center mb-4">{t("titleSkills")}</h2>
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
              <Image src={logo} alt={`Logo ${index + 1}`} width={80} height={80} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoCarousel;
