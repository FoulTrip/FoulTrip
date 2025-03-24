"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import LogoCarousel from "./StackCarrousel";
import { FaGithubAlt, FaDownload } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";

function BaseHeader() {
    const t = useTranslations("BaseHeader");
    const router = useRouter();
    const pathname = usePathname();

    // Función para descargar el CV según el idioma
    const handleDownloadCV = () => {
        // Detectar el idioma actual basado en la URL
        const isSpanish = pathname.includes('/es');

        // Seleccionar el archivo correcto según el idioma
        const cvFileName = isSpanish ? 'cv_david_vasquez_es.pdf' : 'cv_david_vasquez_en.pdf';
        const downloadName = isSpanish ? 'CV_David_Vasquez_ES.pdf' : 'CV_David_Vasquez_EN.pdf';

        // Crear un enlace para descargar el archivo
        const link = document.createElement('a');
        link.href = `/cvs/${cvFileName}`; // Ruta al archivo en la carpeta public
        link.download = downloadName; // Nombre del archivo a descargar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="min-h-dvh grid place-content-center dark:bg-black/90 w-[90%] ml-[5%] pt-32 pb-20">
            <div>
                <div className="grid place-content-center mb-2">
                    <Image
                        src={"https://avatars.githubusercontent.com/u/83887793?v=4"}
                        alt="icon"
                        width={250}
                        height={250}
                        className="drop-shadow-md rounded-full"
                    />
                </div>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        {t("headline").split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </span>
                </h1>

                <p className="text-sm font-thin text-center mt-8 mb-8 dark:text-white text-gray-600">
                    {t("description")}
                </p>

                <div className="grid place-content-center">
                    <div className="flex flex-row gap-4">
                        <div onClick={() => router.push("https://github.com/FoulTrip")} className="px-4 py-2 dark:bg-white bg-gray-600 rounded-full grid place-content-center border border-gray-300 hover:border-gray-400 cursor-pointer">
                            <div className="flex flex-row gap-2">
                                <div className="grid place-content-center">
                                    <FaGithubAlt className="drop-shadow-md text-white dark:text-gray-600" />
                                </div>
                                <p className="text-sm text-gray-50 dark:text-gray-600">{t("getInTouch")}</p>
                            </div>
                        </div>
                        <div
                            onClick={handleDownloadCV}
                            className="cursor-pointer px-4 py-2 border border-gray-300 rounded-full grid place-content-center hover:border-gray-400"
                        >
                            <div className="flex flex-row gap-2 items-center">
                                <FaDownload className="text-sm dark:text-white text-gray-700" />
                                <p className="text-sm dark:text-white text-gray-700">{t("downloadCV")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid place-content-center mt-10">
                    <LogoCarousel />
                </div>
            </div>
        </main>
    );
}

export default BaseHeader;