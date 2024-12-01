import React from "react";
import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiGooglecloud,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPrisma,
  SiCloudinary,
  SiTypescript
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

interface Technology {
  type: string;
  tecs: string[];
}

type TechnologiesProps = {
  technologies: Technology[];
};

type TechnologyIconsType = {
  [key in "React" | "Next.js" | "Node.js" | "MongoDB" | "Docker" | "Google Cloud" |
  "HTML" | "CSS" | "JavaScript" | "Prisma" | "Vercel" | "Cloudinary" | "TypeScript"]: IconType;
};

const technologyIcons: TechnologyIconsType = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "MongoDB": SiMongodb,
  "Docker": SiDocker,
  "Google Cloud": SiGooglecloud,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "JavaScript": SiJavascript,
  "Prisma": SiPrisma,
  "Vercel": IoLogoVercel,
  "Cloudinary": SiCloudinary,
  "TypeScript": SiTypescript
};

const Technologies = ({ technologies }: TechnologiesProps) => {
  const getNormalizedTechName = (name: string): keyof TechnologyIconsType | null => {
    const specialCases: Record<string, keyof TechnologyIconsType> = {
      "typescript": "TypeScript",
      "docker": "Docker",
      "javascript": "JavaScript",
      "react": "React",
      "next.js": "Next.js",
      "node.js": "Node.js",
      "mongodb": "MongoDB",
      "google cloud": "Google Cloud",
      "html": "HTML",
      "css": "CSS",
      "prisma": "Prisma",
      "vercel": "Vercel",
      "cloudinary": "Cloudinary"
    };

    return specialCases[name.toLowerCase()] || null;
  };

  const uniqueTechnologies = Array.from(
    new Set(
      technologies
        .filter(tech => tech.tecs && tech.tecs.length > 0)
        .flatMap(tech => tech.tecs)
        .filter(tec => tec && tec.trim() !== "")
        .map(getNormalizedTechName)
        .filter((tec): tec is keyof TechnologyIconsType =>
          tec !== null && tec in technologyIcons
        )
    )
  );

  if (uniqueTechnologies.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
      {uniqueTechnologies.map((tec) => {
        const Icon = technologyIcons[tec];

        return (
          <div
            key={tec}
            className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md bg-white transition-shadow"
          >
            <div className="flex-shrink-0 text-blue-500">
              <Icon size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{tec}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;