import { Repository } from "@/types/infoCV";
import { FaGithub } from "react-icons/fa6";
import { GoRepo, GoRepoLocked } from "react-icons/go";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { TbSettings } from "react-icons/tb";

function CardRepo({ repo }: { repo: Repository }) {
    return (
        <>
            <div className="flex flex-col-reverse gap-1 border border-gray-400 p-2 rounded-md">
                <div className="flex flex-row grow">
                    <div className="grid place-content-center p-3">
                        {repo.isPrivate
                            ? <GoRepoLocked
                                className="text-gray-600 drop-shadow-md dark:text-gray-100"
                                size={30} />
                            : <GoRepo
                                className="text-gray-600 drop-shadow-md dark:text-gray-100"
                                size={30} />
                        }
                    </div>
                    <div className="p-3">
                        <p className="text-lg text-gray-600 dark:text-gray-300 font-extrabold">{repo.name}</p>
                        <p className="text-xs text-gray-500">{repo.description}</p>
                    </div>
                </div>

                {repo.status == "Planeando" && (
                    <div className="flex justify-end">
                        <div className="rounded-md flex sm:flex-row gap-1 justify-between sm:justify-start sm:basis-[120px] w-full">
                            <div className="flex grow justify-end">
                                <div className="bg-pink-100 border w-full border-pink-200 rounded-md borderborder-blue-200 grid place-content-center px-3 py-1">
                                    <div className="flex flex-row gap-1">
                                        <div className="grid place-content-center">
                                            <LiaPencilRulerSolid className="text-sm drop-shadow-md text-pink-500" />
                                        </div>
                                        <p className="text-xs font-bold drop-shadow-md text-pink-400">{repo.status}</p>
                                    </div>
                                </div>
                            </div>
                            {!repo.isPrivate && (
                                <div>
                                    <div className="bg-gray-500 hover:bg-gray-600 cursor-pointer border border-gray-600 rounded-md borderborder-blue-200 grid place-content-center px-3 py-1">
                                        <div className="grid place-content-center">
                                            <FaGithub className="text-sm drop-shadow-md text-white" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {repo.status == "En desarrollo" && (
                    <div className="flex justify-end">
                        <div className="rounded-md flex sm:flex-row gap-1 justify-between sm:justify-start sm:basis-[120px] w-full">
                            <div className="rounded-md flex sm:flex-row gap-1 justify-between sm:justify-start">
                                <div className="flex grow justify-end">
                                    <div className="bg-blue-50 border w-full border-blue-300 rounded-md grid place-content-center px-3 py-1">
                                        <div className="flex flex-row gap-1">
                                            <div className="grid place-content-center">
                                                <TbSettings className="text-sm drop-shadow-md text-blue-400" />
                                            </div>
                                            <p className="text-xs font-bold drop-shadow-md text-blue-400">{repo.status}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!repo.isPrivate && (
                                <div>
                                    <div className="bg-gray-500 hover:bg-gray-600 cursor-pointer border border-gray-600 rounded-md borderborder-blue-200 grid place-content-center px-3 py-1">
                                        <div className="grid place-content-center">
                                            <FaGithub className="text-sm drop-shadow-md text-white" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {repo.status == "Funcionando" && (
                    <div className="flex justify-end">
                        <div className="rounded-md flex sm:flex-row gap-1 justify-between sm:justify-start sm:basis-[120px] w-full">
                            <div className="rounded-md flex sm:flex-row gap-1 justify-between sm:justify-start">
                                <div className="flex grow justify-end">
                                    <div className="bg-green-100 border w-full border-green-300 rounded-md grid place-content-center px-3 py-1">
                                        <div className="flex flex-row gap-1">
                                            <div className="grid place-content-center">
                                                <TbSettings className="text-sm drop-shadow-md text-green-400" />
                                            </div>
                                            <p className="text-xs font-bold drop-shadow-md text-green-500">{repo.status}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {!repo.isPrivate && (
                                <div>
                                    <div className="bg-gray-500 hover:bg-gray-600 cursor-pointer border border-gray-600 rounded-md borderborder-blue-200 grid place-content-center px-3 py-1">
                                        <div className="grid place-content-center">
                                            <FaGithub className="text-sm drop-shadow-md text-white" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default CardRepo;