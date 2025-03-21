"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface DarkModeContextType {
    darkmode: boolean;
    changeDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export function DarkModeProvider({ children }: { children: ReactNode }) {
    // Estado con valor inicial fallback para SSR
    const [darkmode, setDarkmode] = useState(false);
    // Estado para controlar si el componente está listo
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Código que solo se ejecuta en el cliente
        const isDark = localStorage.getItem("theme") === "dark" ||
            (!localStorage.getItem("theme") &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        setDarkmode(isDark);

        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        setIsInitialized(true);
    }, []);

    const changeDarkMode = () => {
        const newDarkMode = !darkmode;
        setDarkmode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

        console.log("Tema cambiado:", newDarkMode ? "oscuro" : "claro");
    };

    return (
        <DarkModeContext.Provider value={{ darkmode, changeDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
}