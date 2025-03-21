"use client"

import React, { useState, useEffect } from 'react';

interface NavbarProps {
    initialTheme?: 'light' | 'dark';
    initialLanguage?: 'es' | 'en';
}

const Navbar: React.FC<NavbarProps> = ({
    initialTheme = 'light',
    initialLanguage = 'es'
}) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>(initialTheme);
    const [language, setLanguage] = useState<'es' | 'en'>(initialLanguage);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value as 'es' | 'en');
    };

    const navLinks = {
        es: [
            { href: '#about', label: 'Sobre mí' },
            { href: '#projects', label: 'Proyectos' },
            { href: '#skills', label: 'Habilidades' },
            { href: '#contact', label: 'Contacto' }
        ],
        en: [
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
            { href: '#skills', label: 'Skills' },
            { href: '#contact', label: 'Contact' }
        ]
    };

    const links = navLinks[language];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${scrolled
                    ? 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-md py-3 shadow-md'
                    : 'bg-transparent py-5'
                }`}
            style={{ position: 'fixed' }}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">
                    Portfolio
                </a>

                {/* Desktop Menu - Centered */}
                <div className="hidden md:flex items-center justify-center flex-1">
                    <div className="flex space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Controls */}
                <div className="flex items-center space-x-4">
                    {/* Language Selector */}
                    <div className="relative">
                        <select
                            value={language}
                            onChange={changeLanguage}
                            className="appearance-none bg-transparent border border-gray-300 dark:border-gray-700 rounded-md pl-8 pr-6 py-1 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="es">ES</option>
                            <option value="en">EN</option>
                        </select>
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            {language === 'es' ? (
                                <span role="img" aria-label="Español">🇪🇸</span>
                            ) : (
                                <span role="img" aria-label="English">🇬🇧</span>
                            )}
                        </div>
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                    >
                        {theme === 'light' ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                                onClick={() => setMenuOpen(false)}
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