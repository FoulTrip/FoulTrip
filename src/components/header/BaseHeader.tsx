"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import LogoCarousel from "./StackCarrousel";
import { FaGithubAlt } from "react-icons/fa6";

function BaseHeader() {
    const t = useTranslations("BaseHeader");

    const handleGithubVisit = () => {
        window.open("https://github.com/FoulTrip", "_blank", "noopener,noreferrer");
    };

    return (
        <main className="min-h-dvh grid place-content-center dark:bg-black/90 w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid place-content-center mb-2">
                    <Image
                        src={"https://avatars.githubusercontent.com/u/83887793?v=4"}
                        alt="icon"
                        width={250}
                        height={250}
                        className="drop-shadow-md rounded-full w-48 h-48 sm:w-64 sm:h-64"
                    />
                </div>
                
                <h1 className="mb-4 text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center px-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        {t("headline").split("\n").map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-center mt-8 mb-8 dark:text-gray-300 text-gray-600 leading-relaxed max-w-4xl mx-auto px-4">
                    {t("description")}
                </p>

                <div className="grid place-content-center">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md sm:max-w-none">
                        <button 
                            onClick={handleGithubVisit}
                            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                        >
                            <FaGithubAlt className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>{t("getInTouch")}</span>
                        </button>
                    </div>
                </div>

                <div className="grid place-content-center mt-8 sm:mt-12 w-full">
                    <LogoCarousel />
                </div>
            </div>
        </main>
    );
}

export default BaseHeader;