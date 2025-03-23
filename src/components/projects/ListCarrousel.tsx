"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import CardProject from "./CardProject";
import { GoRepo } from "react-icons/go";
import { FiXCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import PreviewProject from "./previewProject";
import { Project } from "@/types/infoCV";

function ListCarrousel({ isClose }: { isClose: boolean }) {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [showAll, setShowAll] = useState(false);

    const [isExpandProject, setIsExpandProject] = useState<boolean>(false);
    // const [nameProject, setNameProject] = useState(null);

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
        <>
            <div className="flex flex-row justify-between mb-10">
                <h2
                    id="projects"
                    className="text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl dark:text-white grid place-content-center"
                >
                    Projectos
                </h2>
                {projectSelect && (
                    <div className="flex flex-row gap-2">
                        <div className="grid place-content-center">
                            <div className="flex flex-row gap-1 px-3 py-2 bg-gray-100 rounded-full">
                                <div className="grid place-content-center">
                                    <GoRepo className="text-xs drop-shadow-md text-gray-600" />
                                </div>
                                <p className="font-thin text-gray-600 text-xs pb-0.5 drop-shadow-md">{projectSelect.name}</p>
                            </div>
                        </div>

                        <div className="grid place-content-center">
                            <FiXCircle size={20} className="cursor-pointer text-red-600" onClick={handleCloseProject} />
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-6">
                {!projectSelect && !isExpandProject && visibleProjects && visibleProjects.map((project, index) => (
                    <CardProject
                        onSelect={handleExpandProject}
                        key={index}
                        project={project}
                    />
                ))}

                {projectSelect && isExpandProject && <PreviewProject project={projectSelect}  />}

                {!projectSelect && hasMoreProjects && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="self-center mt-2 px-4 py-2 text-sm font-medium text-gray-600 cursor-pointer"
                    >
                        {showAll ? "Ver menos" : "Ver más"}
                    </button>
                )}
            </div>
        </>
    )
}

export default ListCarrousel;