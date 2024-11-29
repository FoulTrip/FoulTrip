"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type LenType = "es" | "en";

const NavBar = ({ currentLocale }: { currentLocale: LenType }) => {
    const router = useRouter();
    const t = useTranslations("navbar");  // Cargar las traducciones para "navbar"

    const changeLenguage = (language: LenType) => {
        if (language !== currentLocale) {
            router.push(`/${language}`);
        }
    };

    return (
        <nav className="flex flex-row justify-between ">
            <h1>{t("name")}</h1> {/* Traducir el nombre en la navbar */}
            <div className="flex flex-row gap-2">
                <p>{t("options.01")}</p> {/* Traducir "Inicio" */}
                <p>{t("options.02")}</p> {/* Traducir "Experiencia" */}
                <p>{t("options.03")}</p> {/* Traducir "Proyectos" */}
            </div>
            <div>
                <select
                    onChange={(e) => changeLenguage(e.target.value as LenType)}
                    value={currentLocale}  // Establecer el valor actual del idioma en el select
                >
                    <option value="en">{t("lenguages.en")}</option> {/* Traducir "Inglés" */}
                    <option value="es">{t("lenguages.es")}</option> {/* Traducir "Español" */}
                </select>
            </div>
        </nav>
    );
};

export default NavBar;
