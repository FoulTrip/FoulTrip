import { stackType } from "@/types/infoCV";
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNestjs,
    SiDocker,
    SiKubernetes,
    SiGooglecloud,
    SiVercel,
    SiMongodb,
    SiPrisma,
    SiHiveBlockchain
} from "react-icons/si";

const stackIcons = {
    "React.js": <SiReact size={30} className="text-blue-500 drop-shadow-md" />,
    "typescript": <SiTypescript size={30} className="text-blue-600 drop-shadow-md" />,
    "Nextjs": <SiNextdotjs size={30} className="text-black drop-shadow-md dark:text-gray-50" />,
    "Nest.js": <SiNestjs size={30} className="text-red-600 drop-shadow-md" />,
    "Docker": <SiDocker size={30} className="text-blue-400 drop-shadow-md" />,
    "Kubernetes": <SiKubernetes size={30} className="text-blue-600 drop-shadow-md" />,
    "Google Cloud Plattform": <SiGooglecloud size={30} className="text-yellow-500 drop-shadow-md" />,
    "Vercel": <SiVercel size={30} className="text-black drop-shadow-md dark:text-gray-50" />,
    "MongoDB": <SiMongodb size={30} className="text-green-600 drop-shadow-md" />,
    "Prisma": <SiPrisma size={30} className="text-black drop-shadow-md dark:text-gray-50" />,
    "Blockchain": <SiHiveBlockchain size={30} className="text-gray-700 drop-shadow-md" />
};

function ListStacks({ stacks }: { stacks: stackType[] }) {
    return (
        <div className="flex flex-row gap-1 sm:gap-3">
            {stacks.map((stack, index) => (
                <div className="grid place-content-center" key={index}>
                    {stackIcons[stack]}
                </div>
            ))}
        </div>
    );
}

export default ListStacks;