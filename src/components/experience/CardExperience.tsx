import Image from "next/image";
import { Experience } from "./ListExperience";
import { MdWork } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";

function CardExperience({ experience }: { experience: Experience }) {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap-reverse justify-between gap-3">
                <div className="flex flex-row gap-3">
                    <div className="grid place-content-center">
                        <Image
                            src={experience.logo}
                            alt={experience.company}
                            width={35}
                            height={35}
                            className="sm:w-[40px] h-auto w-[35px] drop-shadow-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-start text-xl text-gray-600">{experience.position}</p>
                        <div className="flex flex-row gap-2 text-xs sm:text-sm">
                            <div className="grid place-content-center bg-gray-100 px-3 py-1 rounded-full">
                                <div className="flex flex-row gap-1">
                                    <div className="grid place-content-center">
                                        <MdWork className="text-gray-400 drop-shadow-md" />
                                    </div>
                                    <p className="text-xs text-gray-500">{experience.type}</p>
                                </div>
                            </div>
                            <div className="grid place-content-center bg-gray-100 px-3 py-1 rounded-full">
                                <div className="flex flex-row gap-1">
                                    <div className="grid place-content-center">
                                        <FaBuilding className="text-gray-400 drop-shadow-md" />
                                    </div>
                                    <p className="text-xs text-gray-500">{experience.company}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-[10px] grow text-end text-gray-600">{experience.initialDate} - {experience.endDate}</p>
            </div>

            <p className="font-thin">{experience.Description}</p>
        </div>
    )
}

export default CardExperience;