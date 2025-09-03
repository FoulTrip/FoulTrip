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
    SiHiveBlockchain,
    SiGo,
    SiCloudflare,
    SiTailwindcss
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

const stackConfig = {
    "React.js": {
        icon: SiReact,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        name: "React"
    },
    "typescript": {
        icon: SiTypescript,
        color: "text-blue-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        name: "TypeScript"
    },
    "Nextjs": {
        icon: SiNextdotjs,
        color: "text-gray-900 dark:text-gray-100",
        bg: "bg-gray-50 dark:bg-gray-800",
        border: "border-gray-200 dark:border-gray-700",
        name: "Next.js"
    },
    "Nest.js": {
        icon: SiNestjs,
        color: "text-red-600",
        bg: "bg-red-50 dark:bg-red-900/20",
        border: "border-red-200 dark:border-red-800",
        name: "NestJS"
    },
    "Docker": {
        icon: SiDocker,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        name: "Docker"
    },
    "Kubernetes": {
        icon: SiKubernetes,
        color: "text-blue-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        name: "Kubernetes"
    },
    "Google Cloud Plattform": {
        icon: SiGooglecloud,
        color: "text-yellow-600",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        border: "border-yellow-200 dark:border-yellow-800",
        name: "GCP"
    },
    "Vercel": {
        icon: SiVercel,
        color: "text-gray-900 dark:text-gray-100",
        bg: "bg-gray-50 dark:bg-gray-800",
        border: "border-gray-200 dark:border-gray-700",
        name: "Vercel"
    },
    "MongoDB": {
        icon: SiMongodb,
        color: "text-green-600",
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        name: "MongoDB"
    },
    "Prisma": {
        icon: SiPrisma,
        color: "text-gray-900 dark:text-gray-100",
        bg: "bg-gray-50 dark:bg-gray-800",
        border: "border-gray-200 dark:border-gray-700",
        name: "Prisma"
    },
    "Blockchain": {
        icon: SiHiveBlockchain,
        color: "text-purple-600",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        name: "Blockchain"
    },
    "Go": {
        icon: FaGolang,
        color: "text-blue-600",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        name: "Go"
    },
    "Cloudflare": {
        icon: SiCloudflare,
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        name: "Cloudflare"
    },
    "Tailwind CSS": {
        icon: SiTailwindcss,
        color: "text-cyan-500",
        bg: "bg-cyan-50 dark:bg-cyan-900/20",
        border: "border-cyan-200 dark:border-cyan-800",
        name: "Tailwind CSS"
    }
};

function ListStacks({ stacks }: { stacks: stackType[] }) {
    return (
        <div className="flex flex-wrap gap-3">
            {stacks.map((stack, index) => {
                const config = stackConfig[stack];

                if (!config) {
                    return (
                        <div
                            key={index}
                            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg"
                        >
                            <span>{stack}</span>
                        </div>
                    );
                }

                const IconComponent = config.icon;

                return (
                    <div
                        key={index}
                        className={`group inline-flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border transition-all duration-150 hover:scale-105 ${config.bg} ${config.border}`}
                        title={config.name}
                    >
                        <IconComponent className={`w-4 h-4 ${config.color}`} />
                        <span className={`${config.color} hidden sm:inline`}>
                            {config.name}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default ListStacks;