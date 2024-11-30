"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { AiOutlineMenu } from "react-icons/ai"; // Asegúrate de instalar react-icons

type LenType = "es" | "en";

const NavBar = ({ currentLocale }: { currentLocale: LenType }) => {
    const router = useRouter();
    const t = useTranslations("navbar");
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLenguage = (language: LenType) => {
        if (language !== currentLocale) {
            router.push(`/${language}`);
        }
    };

    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-transparent">
            <h1 className="text-lg text-blue-600 font-bold">{t("name")}</h1>
            <div className="flex items-center">
                {/* Menú (escondido en móviles) */}
                <div className="hidden md:flex flex-row gap-4">
                    <p>{t("options.01")}</p>
                    <p>{t("options.02")}</p>
                    <p>{t("options.03")}</p>
                </div>

                {/* Selector de idioma */}
                <select
                    className="ml-4 p-1 border border-gray-300 rounded"
                    onChange={(e) => changeLenguage(e.target.value as LenType)}
                    value={currentLocale}
                >
                    <option value="en">{t("lenguages.en")}</option>
                    <option value="es">{t("lenguages.es")}</option>
                </select>

                {/* Icono de menú (visible en móviles) */}
                <button
                    className="block md:hidden ml-4"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <AiOutlineMenu size={24} />
                </button>
            </div>

            {/* Menú desplegable (móvil) */}
            {menuOpen && (
                <div className="absolute top-16 right-10 mt-2 bg-gray-200 shadow-md p-4 flex flex-col gap-2 rounded md:hidden">
                    <p className="hover:bg-gray-300 px-2 py-2 rounded text-gray-600">{t("options.01")}</p>
                    <p className="hover:bg-gray-300 px-2 py-2 rounded text-gray-600">{t("options.02")}</p>
                    <p className="hover:bg-gray-300 px-2 py-2 rounded text-gray-600">{t("options.03")}</p>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
