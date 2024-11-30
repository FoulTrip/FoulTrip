import { useTranslations } from "next-intl"
import Image from "next/image"
import { IoLogoGithub } from "react-icons/io";
import { TbChevronDown, TbFile } from "react-icons/tb";

function HeroSection() {
    const t = useTranslations("Landing")
    return (
        <>
            <div className="mt-14 md:mt-40 flex flex-wrap-reverse gap-2">
                <div className="basis-[400px] grow">
                    <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-blue-800">{t('HeroSection.PartText.name')}</h1>
                    <p className="font-thin mt-1 text-2xl text-gray-800">{t('HeroSection.PartText.profesion')}</p>

                    <p className="text-sm mt-6 mb-5 font-light text-gray-600">{t('HeroSection.PartText.resume')}</p>

                    <div className="mt-3 flex flex-row justify-start gap-3">
                        <button className="p-2 border border-blue-200 bg-blue-100 hover:bg-blue-200 hover:shadow-lg rounded-md">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-row">
                                    <div className="grid place-content-center">
                                        <TbFile className="text-blue-500" size={20} />
                                    </div>
                                    <p className="font-normal text-blue-600">{t('HeroSection.PartText.buttons.cv')}</p>
                                </div>
                                <div className="grid place-content-center">
                                    <TbChevronDown size={20} className="text-gray-400" />
                                </div>
                            </div>
                        </button>

                        <button className="p-2 border border-gray-500 bg-gray-500 hover:bg-gray-700 hover:shadow-lg rounded-md">
                            <div className="flex flex-row gap-1">
                                <div className="grid place-content-center">
                                    <IoLogoGithub className="text-gray-100" size={20} />
                                </div>
                                <p className="font-normal text-gray-100">{t('HeroSection.PartText.buttons.git')}</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="basis-[400px] grow flex justify-start md:flex md:justify-end">
                    <Image width={300} height={300} className="object-cover rounded-[50%]" src={"https://avatars.githubusercontent.com/u/83887793?v=4"} alt="avatar" />
                </div>
            </div>
        </>
    )
}

export default HeroSection