import Image from "next/image";
import { Project } from "./ListCarrousel";

function CardProject({ project }: { project: Project }) {
    return (
        <div className="flex flex-col md:flex-row border border-transparent border-b-gray-200 pb-10">
            {/* Imagen a la izquierda, más pequeña */}
            <div className="md:w-1/3 h-48 md:h-auto relative">
                <Image
                    src={project.cover}
                    alt={project.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Contenido a la derecha */}
            <div className="flex flex-col p-4 md:w-2/3 justify-center space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                <p className="text-xs font-medium text-gray-500">{project.slug}</p>
                <p className="text-sm text-gray-600 line-clamp-3 md:line-clamp-none">{project.description}</p>

                {/* Enlaces */}
                <div className="flex gap-3 pt-2">
                    {project.uriDocs && (
                        <a
                            href={project.uriDocs}
                            className="text-sm inline-flex items-center text-indigo-600 hover:text-indigo-800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Documentación</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    )}

                    {project.uriGithub && (
                        <a
                            href={project.uriGithub}
                            className="text-sm inline-flex items-center text-gray-600 hover:text-gray-900"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>GitHub</span>
                            <svg className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardProject;