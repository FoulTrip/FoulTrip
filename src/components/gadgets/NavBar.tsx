"use client";

import { useDarkMode } from '@/context/DarkModeContext';
import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { HiSun, HiMoon, HiBars3, HiXMark, HiChevronDown, HiGlobeAlt } from 'react-icons/hi2';
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
        { href: '/#projects', label: t('projects') },
        { href: '/#experience', label: t('experience') },
        { href: '/#contact', label: t('contact') },
        { href: '/blog', label: "Blog" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${
            scrolled 
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-sm border-b border-gray-100 dark:border-gray-800' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Logo */}
                    <button 
                        onClick={() => router.push("/")} 
                        className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                        David Vasquez
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-center flex-1 max-w-md mx-8">
                        <div className="flex items-center space-x-1 bg-gray-50 dark:bg-gray-800/50 rounded-full p-1 backdrop-blur-sm">
                            {links.map(link => (
                                <a 
                                    key={link.href} 
                                    href={link.href} 
                                    className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Controls */}
                    <div className="flex items-center space-x-2">
                        
                        {/* Language Selector */}
                        <div className="relative" ref={langMenuRef}>
                            <button 
                                onClick={toggleLangMenu}
                                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                                aria-label="Selector de idioma"
                            >
                                <Image 
                                    src={currentLang === 'en' ? iconEnglish : iconSpain} 
                                    width={16} 
                                    height={16} 
                                    alt={currentLang === 'en' ? "English" : "Español"} 
                                    className="rounded-sm"
                                />
                                <span className="hidden sm:inline">{currentLang.toUpperCase()}</span>
                                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {/* Language Dropdown */}
                            {langMenuOpen && (
                                <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
                                    <button 
                                        onClick={() => changeLanguage('es')}
                                        className={`flex items-center w-full gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                                            currentLang === 'es' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
                                        }`}
                                    >
                                        <Image src={iconSpain} width={16} height={16} alt="Español" className="rounded-sm" />
                                        <span>Español</span>
                                    </button>
                                    <button 
                                        onClick={() => changeLanguage('en')}
                                        className={`flex items-center w-full gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                                            currentLang === 'en' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''
                                        }`}
                                    >
                                        <Image src={iconEnglish} width={16} height={16} alt="English" className="rounded-sm" />
                                        <span>English</span>
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        {/* Dark Mode Toggle */}
                        <button 
                            onClick={changeDarkMode} 
                            className="p-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                            aria-label={darkmode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                        >
                            {darkmode ? (
                                <HiSun className="w-4 h-4" />
                            ) : (
                                <HiMoon className="w-4 h-4" />
                            )}
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden p-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200" 
                            onClick={toggleMenu}
                            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {menuOpen ? (
                                <HiXMark className="w-5 h-5" />
                            ) : (
                                <HiBars3 className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800">
                    <div className="px-4 py-6 space-y-4">
                        {links.map(link => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={() => setMenuOpen(false)} 
                                className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                            >
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