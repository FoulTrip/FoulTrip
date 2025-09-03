"use client"

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
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

    const t = useTranslations();
    
    useEffect(() => {
        try {
            const rawExperiences = t.raw("Experience");
            const experiencesData = Array.isArray(rawExperiences) ? rawExperiences : [];
            setExperiences(experiencesData);
        } catch (error) {
            console.error("Error loading experiences from translations:", error);
            setExperiences([]);
        }
    }, [t]);

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
                    {showAll ? t("Common.showLess") : t("Common.showMore")}
                </button>
            )}
        </div>
    )
}

export default ListExperience;