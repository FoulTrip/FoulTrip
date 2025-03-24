"use client";

import { useDarkMode } from '@/context/DarkModeContext';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import iconSpain from "@/assets/ilustration/espana.png";
import iconEnglish from "@/assets/ilustration/reino-unido.png";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("es");
    const { darkmode, changeDarkMode } = useDarkMode();
    const t = useTranslations('Navbar');
    const router = useRouter();
    const pathname = usePathname();
    const langMenuRef = useRef<HTMLDivElement>(null);
    
    // Detectar el idioma actual basado en la URL al cargar
    useEffect(() => {
        if (pathname) {
            const urlLang = pathname.split('/')[1];
            if (urlLang === 'en' || urlLang === 'es') {
                setCurrentLang(urlLang);
            }
        }
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        
        // Cerrar el menú de idiomas cuando se hace clic fuera
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setLangMenuOpen(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleLangMenu = () => setLangMenuOpen(!langMenuOpen);
    
    const changeLanguage = (lang: string) => {
        setCurrentLang(lang);
        setLangMenuOpen(false);
        router.replace(`/${lang}`);
    };

    const links = [
        { href: '#projects', label: t('projects') },
        { href: '#skills', label: t('skills') },
        { href: '#contact', label: t('contact') },
        { href: '/blog', label: "Blog" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'bg-white/70 dark:bg-black/50 backdrop-blur-md py-3' : 'dark:bg-gray-900/100 bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">David Vasquez</a>

                <div className="hidden md:flex items-center justify-center flex-1">
                    <div className="flex space-x-8">
                        {links.map(link => (
                            <a key={link.href} href={link.href} className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    {/* Custom language selector dropdown */}
                    <div className="relative" ref={langMenuRef}>
                        <button 
                            onClick={toggleLangMenu}
                            className="flex items-center space-x-2 bg-transparent border border-gray-300 dark:border-gray-700 rounded-md px-3 py-1 text-gray-800 dark:text-gray-200"
                            aria-label="Selector de idioma"
                        >
                            <Image 
                                src={currentLang === 'en' ? iconEnglish : iconSpain} 
                                width={20} 
                                height={20} 
                                alt={currentLang === 'en' ? "English" : "Español"} 
                            />
                            <span>{currentLang.toUpperCase()}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {/* Dropdown menu */}
                        {langMenuOpen && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10">
                                <button 
                                    onClick={() => changeLanguage('es')}
                                    className={`flex items-center w-full space-x-2 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${currentLang === 'es' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                >
                                    <Image src={iconSpain} width={20} height={20} alt="Español" />
                                    <span className="text-gray-800 dark:text-gray-200">ES</span>
                                </button>
                                <button 
                                    onClick={() => changeLanguage('en')}
                                    className={`flex items-center w-full space-x-2 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${currentLang === 'en' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                >
                                    <Image src={iconEnglish} width={20} height={20} alt="English" />
                                    <span className="text-gray-800 dark:text-gray-200">EN</span>
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <button 
                        onClick={changeDarkMode} 
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200"
                        aria-label={darkmode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                    >
                        {!darkmode ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )}
                    </button>
                    
                    <button 
                        className="md:hidden text-gray-800 dark:text-gray-200" 
                        onClick={toggleMenu}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4">
                    <div className="flex flex-col space-y-4">
                        {links.map(link => (
                            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-200">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;