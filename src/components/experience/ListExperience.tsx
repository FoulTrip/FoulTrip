"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import CardExperience from "./CardExperience";

export interface Experience {
    position: string
    company: string
    logo: string
    type: string
    initialDate: string
    endDate: string
    Description: string
}

function ListExperience() {
    const [experiences, setExperiences] = useState<Experience[] | null>(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const getExperiences = async () => {
            const response = await axios.get("/api/experience");
            if (response.data.success === true) setExperiences(response.data.data);
        }

        getExperiences()
    }, []);

    // Determinar cuántos proyectos mostrar
    const visibleProjects = showAll ? experiences : experiences?.slice(0, 3);

    // Verificar si hay más de 3 proyectos
    const hasMoreProjects = experiences && experiences.length > 3;

    return (
        <div className="flex flex-col gap-10">
            {visibleProjects && visibleProjects.map((experience, index) => (
                <CardExperience key={index} experience={experience} />
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

export default ListExperience;