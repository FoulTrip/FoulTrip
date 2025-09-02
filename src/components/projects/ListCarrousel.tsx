"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import CardProject from "./CardProject";
import { GoRepo } from "react-icons/go";
import { HiXMark } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import PreviewProject from "./previewProject";
import { Project } from "@/types/infoCV";

function ListCarrousel({ isClose }: { isClose: boolean }) {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [isExpandProject, setIsExpandProject] = useState<boolean>(false);
    const router = useRouter();
    const [projectSelect, setProjectSelect] = useState<Project | null>(null);

    const handleExpandProject = (project: Project) => {
        setIsExpandProject(true)
        setProjectSelect(project);
        router.push("#projects");
    }

    const handleCloseProject = () => {
        setIsExpandProject(false)
        setProjectSelect(null);
    }

    useEffect(() => {
        const close = () => {
            setProjectSelect(null)
        }
        if (isClose == true) close;
    }, [isClose])

    useEffect(() => {
        const getProjects = async () => {
            const response = await axios.get("/api/projects");
            if (response.data.success === true) setProjects(response.data.data);
        }
        getProjects()
    }, []);

    // Determinar cuántos proyectos mostrar
    const visibleProjects = showAll ? projects : projects?.slice(0, 3);

    // Verificar si hay más de 3 proyectos
    const hasMoreProjects = projects && projects.length > 3;

    return (
        <div className="space-y-8">

            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {projectSelect && (
                        <button
                            onClick={handleCloseProject}
                            className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-150"
                            title="Volver a proyectos"
                        >
                            <HiChevronLeft className="w-4 h-4" />
                        </button>
                    )}

                    <h2
                        id="projects"
                        className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100"
                    >
                        Proyectos
                    </h2>
                </div>

                {/* Project Info Badge */}
                {projectSelect && (
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                            <GoRepo className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {projectSelect.name}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="space-y-6">

                {/* Project List */}
                {!projectSelect && !isExpandProject && visibleProjects && (
                    <>
                        <div className="grid gap-6">
                            {visibleProjects.map((project, index) => (
                                <CardProject
                                    onSelect={handleExpandProject}
                                    key={project.id || index}
                                    project={project}
                                />
                            ))}
                        </div>

                        {/* Show More/Less Button */}
                        {hasMoreProjects && (
                            <div className="flex justify-center pt-4">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-150"
                                >
                                    {showAll ? "Ver menos" : `Ver más (${projects.length - 3})`}
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Project Preview */}
                {projectSelect && isExpandProject && (
                    <div className="animate-in slide-in-from-right-4 duration-300">
                        <PreviewProject project={projectSelect} />
                    </div>
                )}

                {/* Loading State */}
                {!projects && (
                    <div className="grid gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse">
                                <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                    <div className="lg:w-1/3 aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg" />
                                    <div className="lg:w-2/3 space-y-4">
                                        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
                                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
                                            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListCarrousel;