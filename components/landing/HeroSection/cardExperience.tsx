"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { TbCircleChevronDown, TbTarget } from "react-icons/tb";

interface Technology {
    type: string;
    tecs: string[];
}

interface Application {
    id: string;
    logo: string;
    titleTypeWork: string;
    typeWork: string;
    title: string;
    company: string;
    dateInit: string;
    textDateInit: string;
    dateEnd: string;
    textDateEnd: string;
    objectives: string[];
    technologies: Technology[];
    options: string[];
}

interface ExperienceProps {
    applicationKey: string;
}

interface OptionPropType {
    option: string | null,
    isOpen: boolean
}

function Experience({ applicationKey }: ExperienceProps) {
    const t = useTranslations("Landing");

    const [openOption, setOpenOption] = useState<OptionPropType>({ option: null, isOpen: false })

    const handleBackList = () => {
        setOpenOption({ option: null, isOpen: false })
    }

    const handleToggleOption = (option: string | null) => {
        setOpenOption((prevState) => {
            // Si la misma opción está abierta, ciérrala
            if (prevState.isOpen && prevState.option === option) {
                return { option: null, isOpen: false };
            }
            // Si otra opción está abierta o ninguna, abre la nueva opción
            return { option, isOpen: true };
        });
    };


    // Obtener los datos de la experiencia desde el JSON de traducción
    const application: Application = {
        id: t(`${applicationKey}.id`),
        logo: t(`${applicationKey}.logo`),
        titleTypeWork: t(`${applicationKey}.titleTypeWork`),
        typeWork: t(`${applicationKey}.typeWork`),
        title: t(`${applicationKey}.title`),
        company: t(`${applicationKey}.company`),
        dateInit: t(`${applicationKey}.dateInit`),
        textDateInit: t(`${applicationKey}.textDateInit`),
        dateEnd: t(`${applicationKey}.dateEnd`),
        textDateEnd: t(`${applicationKey}.textDateEnd`),
        objectives: [
            t(`${applicationKey}.objectives.0`),
            t(`${applicationKey}.objectives.1`),
            t(`${applicationKey}.objectives.2`)
        ],
        technologies: [
            {
                type: t(`${applicationKey}.technologies.0.type`),
                tecs: [t(`${applicationKey}.technologies.0.tecs.0`)]
            },
            {
                type: t(`${applicationKey}.technologies.1.type`),
                tecs: [t(`${applicationKey}.technologies.1.tecs.0`)]
            },
            {
                type: t(`${applicationKey}.technologies.2.type`),
                tecs: [t(`${applicationKey}.technologies.2.tecs.0`), t(`${applicationKey}.technologies.2.tecs.1`)]
            },
            {
                type: t(`${applicationKey}.technologies.3.type`),
                tecs: [t(`${applicationKey}.technologies.3.tecs.0`)]
            },
            {
                type: t(`${applicationKey}.technologies.4.type`),
                tecs: [t(`${applicationKey}.technologies.4.tecs.0`)]
            },
            {
                type: t(`${applicationKey}.technologies.5.type`),
                tecs: [t(`${applicationKey}.technologies.5.tecs.0`)]
            }
        ],
        options: [
            t(`${applicationKey}.options.0`),
            t(`${applicationKey}.options.1`),
            t(`${applicationKey}.options.2`)
        ]
    };

    return (
        <div className="flex flex-row gap-10 mt-8 rounded-md p-5">
            <div>
                <div className="flex flex-col">
                    <Image
                        src={application.logo}
                        alt={`Logo de ${application.company}`}
                        className="w-20 h-20 object-contain"
                        width={50}
                        height={50}
                    />
                    <div className="mt-3 flex gap-2 flex-col">
                        <div>
                            <h3 className="text-sm text-gray-600 font-semibold">{application.title}</h3>
                            <p className="text-lg font-thin">{application.company}</p>
                        </div>
                        <div>
                            <h3 className="text-sm text-gray-600 font-semibold">{application.titleTypeWork}</h3>
                            <p className="text-lg font-thin">{application.typeWork}</p>
                        </div>
                    </div>
                </div>
            </div>

            {openOption.isOpen && (
                <div className="flex flex-col">
                    
                    {/* Botón para regresar */}
                    <div className="flex justify-start">
                        <p
                            onClick={handleBackList}
                            className="cursor-pointer text-blue-500 underline"
                        >
                            Atrás
                        </p>
                    </div>

                    {/* Título de la opción seleccionada */}
                    <p className="text-xl font-semibold mb-4">{openOption.option}</p>

                    {/* Renderización condicional de contenido basado en la opción */}
                    {openOption.option === "Objetivos" || openOption.option === "objectives" ? (
                        <ul className="list-disc pl-6">
                            {application.objectives.map((obj, index) => (
                                <li key={index} className="mb-2">
                                    {obj}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay información disponible para esta opción.</p>
                    )}
                </div>
            )}


            {openOption.isOpen == false && (
                <>
                    <div className="flex-1 flex flex-col gap-5">
                        {application.options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleToggleOption(option)}
                                className="flex flex-row justify-between p-3 cursor-pointer shadow-md rounded-md"
                            >
                                <div className="flex justify-start">
                                    <div className="flex flex-row gap-2">
                                        <div className="grid place-content-center">
                                            <TbTarget className="text-gray-500" size={20} />
                                        </div>
                                        <p className="text-lg font-bold text-gray-500">{option}</p>
                                    </div>
                                </div>

                                <div className="grid place-content-center">
                                    <TbCircleChevronDown className="text-gray-600" size={20} />
                                </div>
                            </div>
                        ))}

                    </div>
                </>
            )}
        </div>
    );
}

export default Experience;
