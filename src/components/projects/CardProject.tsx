import Image from "next/image";
import { Project } from "@/types/infoCV";
import { LuBookText } from "react-icons/lu";
import { GoRepo } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi2";

function CardProject({
    project,
    onSelect
}: {
    project: Project,
    onSelect: (project: Project) => void;
}) {
    return (
        <div className="group relative p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md transition-all duration-300">

            <div className="flex flex-col lg:flex-row gap-6">

                {/* Project Image */}
                <div className="lg:w-1/3 flex-shrink-0">
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800">
                        <Image
                            src={project.cover}
                            alt={project.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10 rounded-lg" />
                    </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 flex flex-col justify-center space-y-4">

                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-2">
                                {project.name}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                                    {project.slug}
                                </span>
                            </div>
                        </div>

                        {/* Repository Count */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                            <GoRepo className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                {project.repositories.length}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 lg:line-clamp-none">
                        {project.description}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-2">
                        {project.uriDocs && (
                            <a
                                href={project.uriDocs}
                                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-150"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LuBookText className="w-4 h-4" />
                                <span>Documentación</span>
                            </a>
                        )}

                        <button
                            onClick={() => onSelect(project)}
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-150"
                        >
                            <span>Más información</span>
                            <HiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Hover indicator */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-gray-900/5 dark:ring-gray-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
    );
}

export default CardProject;