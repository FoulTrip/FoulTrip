import Image from "next/image";
import { Project } from "@/types/infoCV";
import { LuBookText } from "react-icons/lu";
import { GoRepo } from "react-icons/go";

function CardProject({
    project,
    onSelect
}: {
    project: Project,
    onSelect: (project: Project) => void;
}) {
    return (
        <div
            className="flex flex-col md:flex-row border border-transparent border-b-gray-200 pb-10"
        >
            {/* Imagen a la izquierda, más pequeña */}
            <div className="md:w-1/3 h-48 md:h-auto relative">
                <Image
                    src={project.cover}
                    alt={project.name}
                    fill
                    className="object-cover rounded-md shadow-sm"
                />
            </div>

            {/* Contenido a la derecha */}
            <div className="flex flex-col p-4 md:w-2/3 justify-center space-y-3">
                <div className="flex flex-row justify-between">
                    <h2 className="text-2xl font-extrabold text-gray-700 dark:text-gray-100">{project.name}</h2>
                    <div className="grid place-content-center">
                        <div className="flex flex-row gap-1 px-3 py-1 rounded-full">
                            <div className="grid place-content-center">
                                <GoRepo className="drop-shadow-md text-gray-500 dark:text-gray-100" />
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-100 drop-shadow-md">{project.repositories.length}</p>
                        </div>
                    </div>
                </div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{project.slug}</p>
                <p className="text-sm text-gray-600 dark:text-gray-500 line-clamp-3 md:line-clamp-none">{project.description}</p>

                {/* Enlaces */}
                <div className="flex gap-3 pt-2">
                    {project.uriDocs && (
                        <a
                            href={project.uriDocs}
                            className="text-sm inline-flex items-center gap-1 text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-50"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="grid place-content-center">
                                <LuBookText className="text-indigo-600" />
                            </div>
                            <span>Documentación</span>
                        </a>
                    )}

                    <p
                        onClick={() => onSelect(project)}
                        className="text-sm inline-flex items-center text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-50 gap-1 cursor-pointer"
                        rel="noopener noreferrer"
                    >
                        <div className="grid place-content-center">
                            <GoRepo />
                        </div>
                        <span>Mas informacion</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardProject;