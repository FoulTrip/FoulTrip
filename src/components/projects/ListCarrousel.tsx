"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import CardProject from "./CardProject";

export interface Project {
    name: string
    slug: string
    description: string
    cover: string
    uriDocs: string
    uriGithub: string
}

function ListCarrousel() {
    const [projects, setProjects] = useState<Project[] | null>(null);
    const [showAll, setShowAll] = useState(false);

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
        <div className="flex flex-col gap-6">
            {visibleProjects && visibleProjects.map((project, index) => (
                <CardProject key={index} project={project} />
            ))}

            {hasMoreProjects && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="self-center mt-2 px-4 py-2 text-sm font-medium text-gray-600 cursor-pointer"
                >
                    {showAll ? "Ver menos" : "Ver más"}
                </button>
            )}
        </div>
    )
}

export default ListCarrousel;