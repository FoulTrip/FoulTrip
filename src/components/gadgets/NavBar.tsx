"use client";

import { useDarkMode } from '@/context/DarkModeContext';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

interface NavbarProps {
    initialLanguage?: 'es' | 'en';
}

const Navbar: React.FC<NavbarProps> = ({ initialLanguage = 'es' }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { darkmode, changeDarkMode } = useDarkMode();
    const t = useTranslations('Navbar');
    const router = useRouter();
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    
    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.replace(`/${newLocale}`);
    };

    const links = [
        { href: '#about', label: t('about') },
        { href: '#projects', label: t('projects') },
        { href: '#skills', label: t('skills') },
        { href: '#contact', label: t('contact') }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-300 ${scrolled ? 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">Portfolio</a>

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
                    <select onChange={changeLanguage} className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-md pl-2 pr-6 py-1">
                        <option value="es">🇪🇸 ES</option>
                        <option value="en">🇬🇧 EN</option>
                    </select>
                    
                    <button onClick={changeDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
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
                    
                    <button className="md:hidden" onClick={toggleMenu}>
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
