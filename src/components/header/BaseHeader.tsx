"use client"

import Image from "next/image";
import LogoCarousel from "./StackCarrousel";
import headerIlustration from "@/assets/ilustration/Code typing-pana.svg"

function BaseHeader() {
    return (
        <>
            <main className="min-h-dvh grid place-content-center w-[90%] ml-[5%] pt-10">
                <div>
                    <div className="grid place-content-center">
                        <Image
                            src={headerIlustration}
                            alt="icon"
                            width={300}
                            height={300}
                            className="drop-shadow-md"
                        />
                    </div>
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                            Construyendo negocios
                            <br />
                        </span>
                        impulsados por la innovación.
                    </h1>

                    <p className="text-sm font-thin text-center mt-8 mb-8 text-gray-600">Desarrollador Full Stack con experiencia en Next.js, React y TypeScript, especializado en crear aplicaciones web atractivas, funcionales y escalables. Experto en Python, MongoDB, MySQL y Prisma para soluciones backend robustas, y en desplegar proyectos en Vercel y Google Cloud. Apasionado por transformar ideas en productos innovadores, optimizando el rendimiento y la experiencia del usuario.</p>

                    <div className="grid place-content-center">
                        <div className="flex flex-row gap-4">
                            <div className="px-4 py-2 bg-gray-100 rounded-full grid place-content-center border border-gray-300 hover:border-gray-400">
                                <p className="text-sm text-gray-700">Get in touch</p>
                            </div>
                            <div className="px-4 py-2 border border-gray-300 rounded-full grid place-content-center hover:border-gray-400">
                                <p className="text-sm text-gray-700">Download CV</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid place-content-center mt-10">
                        <LogoCarousel />
                    </div>
                </div>
            </main>
        </>
    );
}

export default BaseHeader;