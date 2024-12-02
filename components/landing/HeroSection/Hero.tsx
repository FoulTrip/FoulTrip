"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowRoundDown, IoLogoGithub } from "react-icons/io";
import { TbChevronDown } from "react-icons/tb";

function HeroSection() {
    const t = useTranslations("Landing")
    const router = useRouter()

    const [openModalCv, setOpenModalCv] = useState<boolean>(false);
    const [isLoadingCvEnglish, setIsLoadingCvEnglish] = useState<boolean>(false);
    const [isLoadingCvSpanish, setIsLoadingCvSpanish] = useState<boolean>(false);

    const downloadCv = (index: number) => {
        const cvs: Record<number, string> = {
            0: '/cvs/cvEnglish.pdf',
            1: '/cvs/cvSpanish.pdf'
        };

        try {
            const isEnglish = index === 0;
            const setLoading = isEnglish ? setIsLoadingCvEnglish : setIsLoadingCvSpanish;
            setLoading(true);

            const link = document.createElement('a');
            link.href = cvs[index];
            link.download = `cv${isEnglish ? 'English' : 'Spanish'}_david-vasquez-mahecha.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setLoading(false);
        } catch (error) {
            console.error(error);
            // También deberías resetear el estado de carga en caso de error
            const setLoading = index === 0 ? setIsLoadingCvEnglish : setIsLoadingCvSpanish;
            setLoading(false);
        }
    };



    return (
        <>
            <div className="mt-14 md:mt-40 flex flex-wrap-reverse gap-5">
                <div className="basis-[400px] grow">
                    <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-blue-800">{t('HeroSection.PartText.name')}</h1>
                    <p className="font-thin mt-1 text-1xl text-gray-800">{t('HeroSection.PartText.profesion')}</p>

                    <p className="text-sm mt-6 mb-5 font-light text-gray-600">{t('HeroSection.PartText.resume')}</p>

                    <div className="mt-3 flex flex-row justify-start gap-3">
                        <button
                            className="p-2 border border-blue-200 bg-blue-100 hover:bg-blue-200 hover:shadow-lg rounded-md"
                            onClick={() => setOpenModalCv(!openModalCv)}
                        >
                            <div className="flex flex-row gap-6">
                                <div className="flex flex-row">
                                    {/* <div className="grid place-content-center">
                                        <TbFile className="text-blue-500" size={20} />
                                    </div> */}
                                    <p className="font-normal grid place-content-center pt-1 text-blue-600">{t('HeroSection.PartText.buttons.cv')}</p>
                                </div>
                                <div className="grid place-content-center">
                                    <TbChevronDown size={20} className="text-gray-400" />
                                </div>
                            </div>
                        </button>

                        {openModalCv && (
                            <div className="absolute w-[180px] top-[700px] md:top-[515px] md:left-[270px] mt-2 bg-gray-200 shadow-md p-2 flex flex-col gap-2 rounded">
                                <div
                                    className="hover:bg-gray-300 px-2 py-2 rounded text-gray-600 flex flex-row justify-between cursor-pointer"
                                    onClick={() => downloadCv(0)}
                                >
                                    <p className="hover:bg-gray-300 rounded text-gray-600">{isLoadingCvSpanish ? 'Descargando...' : `${t('HeroSection.cvs.cvEnTitle')}`}</p>

                                    <div className="grid place-content-center">
                                        <IoIosArrowRoundDown size={20} className="text-gray-600" />
                                    </div>
                                </div>

                                <div
                                    className="hover:bg-gray-300 px-2 py-2 rounded text-gray-600 flex flex-row justify-between cursor-pointer"
                                    onClick={() => downloadCv(1)}
                                >
                                    <p className="hover:bg-gray-300 rounded text-gray-600">{isLoadingCvEnglish ? 'Descargando...' : `${t('HeroSection.cvs.cvEsTitle')}`}</p>
                                    <div className="grid place-content-center">
                                        <IoIosArrowRoundDown size={20} className="text-gray-600" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <button
                            className="p-2 border border-gray-500 bg-gray-500 hover:bg-gray-700 hover:shadow-lg rounded-md"
                            onClick={() => router.push("https://github.com/FoulTrip")}
                        >
                            <div className="flex flex-row gap-1">
                                <div className="grid place-content-center">
                                    <IoLogoGithub className="text-gray-100" size={20} />
                                </div>
                                <p className="font-normal text-gray-100">{t('HeroSection.PartText.buttons.git')}</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]">
                    <Image
                        width={300} // Valor máximo (lo ajustaremos con CSS)
                        height={300} // Valor máximo (lo ajustaremos con CSS)
                        className="object-cover rounded-[50%] w-full h-full"
                        src={"https://avatars.githubusercontent.com/u/83887793?v=4"}
                        alt="avatar"
                    />
                </div>

            </div>
        </>
    )
}

export default HeroSection