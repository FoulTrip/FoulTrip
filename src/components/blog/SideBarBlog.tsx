"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
    // { name: 'Biz Tech', link: '/blog/topic/biz-tech' },
    // { name: 'Trends', link: '/blog/topic/trends' },
];

const SidebarBlog = () => {
    const router = useRouter();

    return (
        <div className="w-72 p-4 pl-20 h-full sticky top-0">
            <div className='flex justify-start mb-4'>
                <Image src={blogg} alt={"blog"} width={60} height={60} className='drop-shadow-md' />
            </div>
            <p className="text-gray-600 mb-6 border border-transparent border-b-gray-300 pb-8 text-sm">
                Cómo la programación, el blockchain y la tecnología están moldeando el futuro.
            </p>
            <nav>
                {menuItems.map((item, index) => (
                    <div
                        onClick={() => router.push(item.link)}
                        key={index}
                        className="py-3 px-4 hover:bg-gray-100 cursor-pointer rounded-md transition-colors"
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
    const [activeItem, setActiveItem] = useState<string>('Más recientes');
    const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' && window.innerWidth < 1024);
    const router = useRouter();

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
        <div className="flex min-h-screen">
            {!isMobile && <SidebarBlog />}

            <div className="flex-1 flex flex-col overflow-auto">
                {isMobile ? (
                    <header className="pt-6 px-4 shrink-0">
                        <div className="flex items-center mb-4">
                            <div className='flex justify-start mb-4'>
                                <Image src={blogg} alt={"blog"} width={60} height={60} className='drop-shadow-md' />
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Cómo la programación, el blockchain y la tecnología están moldeando el futuro.
                        </p>
                        <div className="relative">
                            <div className="flex overflow-x-auto space-x-4 pb-2 no-scrollbar">
                                {menuItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setActiveItem(item.name)
                                            router.push(item.link)
                                        }}
                                        className={`
                      flex-shrink-0 pb-2 
                      ${activeItem === item.name
                                                ? 'border-b-2 border-black font-semibold'
                                                : 'text-gray-500'}
                    `}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white pointer-events-none"></div>
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