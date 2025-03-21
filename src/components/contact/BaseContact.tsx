import Image from "next/image";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function BaseContact() {
    return (
        <main className="min-h-dvh w-[90%] ml-[5%] grid place-content-center">
            <div className="fex flex-col">
                <div className="grid place-content-center">
                    <Image
                        src={"https://avatars.githubusercontent.com/u/83887793?v=4"}
                        alt="Foto de perfil"
                        width={200}
                        height={200}
                        className="drop-shadow-md rounded-full"
                    />
                </div>
                <div className="mt-5 space-y-2">
                    <h2 className="text-2xl font-extrabold leading-none text-center tracking-tight text-gray-600 md:text-3xl dark:text-white">Contacto</h2>
                    <p className="text-center text-xs sm:text-sm font-thin">Buscame por cualquiera de estos canales de comunicacion y charlamos!</p>
                </div>

                <div className="grid place-content-center">
                    <div className="flex flex-row gap-3 mt-5">
                        <div className="grid place-content-center bg-blue-300 px-4 rounded-full py-2 hover:bg-blue-400 cursor-pointer">
                            <div className="flex flex-row gap-1">
                                <div className="grid place-content-center">
                                    <MdEmail className="text-white" size={20} />
                                </div>
                                <p className="text-white text-sm">E-mail</p>
                            </div>
                        </div>

                        <div className="grid place-content-center bg-blue-400 px-4 rounded-full py-2 hover:bg-blue-500 cursor-pointer">
                            <div className="flex flex-row gap-1">
                                <div className="grid place-content-center">
                                    <FaLinkedin className="text-white" size={20} />
                                </div>
                                <p className="text-white text-sm">Linkedin</p>
                            </div>
                        </div>

                        <div className="grid place-content-center bg-green-400 px-4 rounded-full py-2 hover:bg-green-500 cursor-pointer">
                            <div className="flex flex-row gap-1">
                                <div className="grid place-content-center">
                                    <FaWhatsapp className="text-white" size={20} />
                                </div>
                                <p className="text-white text-sm">WhatsApp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BaseContact;