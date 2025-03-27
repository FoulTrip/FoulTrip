"use client"

import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react';
import blogg from "@/assets/ilustration/blog/blogs.png"

interface itemsProps {
    name: string
    link: string
    tag?: string
}

const menuItems: itemsProps[] = [
    { name: 'Recientes', link: '/blog' },
    { name: 'Development', link: '/blog/topic/development' },
    { name: 'Web3', link: '/blog/topic/web3' },
];

const SidebarBlog = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="w-72 p-4 pl-20 h-full sticky top-0 bg-white dark:bg-black">
            <div className='flex justify-start mb-4'>
                <Image
                    src={blogg}
                    alt={"blog"}
                    width={60}
                    height={60}
                    className='drop-shadow-md dark:invert dark:brightness-0 dark:contrast-200 dark:saturate-0'
                />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 border border-transparent border-b-gray-300 dark:border-b-gray-700 pb-8 text-sm font-thin">
                Cómo la programación, el blockchain y la tecnología están moldeando el futuro.
            </p>
            <nav>
                {menuItems.map((item, index) => (
                    <div
                        onClick={() => router.push(item.link)}
                        key={index}
                        className={`
                            py-3 px-4 cursor-pointer rounded-md transition-colors
                            ${pathname === item.link
                                ? 'bg-black dark:bg-white text-white dark:text-black'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}
                        `}
                    >
                        {item.name}
                    </div>
                ))}
            </nav>
        </div>
    );
};

interface BaseSideBarPageProps {
    children: React.ReactNode;
}

const BaseSideBarPage: React.FC<BaseSideBarPageProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' && window.innerWidth < 1024);
    const router = useRouter();
    const pathname = usePathname();

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 1024);
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className="flex min-h-screen bg-white dark:bg-black text-black dark:text-white">
            {!isMobile && <SidebarBlog />}

            <div className="flex-1 flex flex-col overflow-auto">
                {isMobile ? (
                    <header className="pt-6 px-4 shrink-0 bg-white dark:bg-black">
                        <div className="flex items-center mb-4">
                            <div className='flex justify-start mb-4'>
                                <Image
                                    src={blogg}
                                    alt={"blog"}
                                    width={60}
                                    height={60}
                                    className='drop-shadow-md dark:invert dark:brightness-0 dark:contrast-200 dark:saturate-0'
                                />
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 font-thin">
                            Cómo la programación, el blockchain y la tecnología están moldeando el futuro.
                        </p>
                        <div className="relative">
                            <div className="flex overflow-x-auto space-x-4 pb-2 no-scrollbar">
                                {menuItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            router.push(item.link)
                                        }}
                                        className={`
                                            flex-shrink-0 pb-2 
                                            ${pathname === item.link
                                                ? 'text-black dark:text-white font-semibold'
                                                : 'text-gray-500 dark:text-gray-400'}
                                        `}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white dark:from-black pointer-events-none"></div>
                        </div>
                    </header>
                ) : null}

                <main className="flex-1 overflow-hidden">
                    <div className="h-full overflow-y-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BaseSideBarPage;