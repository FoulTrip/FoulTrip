import Image from "next/image";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import headerIlustration from "@/assets/ilustration/Conversation-pana.svg";

function BaseContact() {
    return (
        <main className="min-h-dvh px-[5%] grid place-content-center dark:bg-black">
            <div className="fex flex-col">
                <div className="grid place-content-center">
                    <Image
                        src={headerIlustration}
                        alt="Foto de perfil"
                        width={430}
                        height={430}
                        className="drop-shadow-md"
                    />
                </div>
                <div className="mt-5 space-y-2">
                    <h2 className="text-2xl font-extrabold leading-none text-center tracking-tight text-gray-600 md:text-3xl dark:text-white">Contacto</h2>
                    <p className="text-center text-xs sm:text-sm font-thin dark:text-gray-400">Buscame por cualquiera de estos canales de comunicacion y charlamos!</p>
                </div>

                <div className="grid place-content-center">
                    <div className="flex flex-row gap-3 mt-5">
                        <div className="grid place-content-center bg-blue-300 px-4 rounded-full py-2 hover:bg-blue-400 cursor-pointer">
                            <div className="flex flex-row gap-1">
                                <div className="grid place-content-center">
                                    <MdEmail className="text-white" size={20} />
                                </div>
                                <p className="grid place-content-center text-white text-xs sm:text-sm">E-mail</p>
                            </div>
                        </div>

                        <div className="grid place-content-center bg-blue-400 px-4 rounded-full py-2 hover:bg-blue-500 cursor-pointer">
                            <div className="flex flex-row gap-1">
                                <div className="grid place-content-center">
                                    <FaLinkedin className="text-white" size={20} />
                                </div>
                                <p className="grid place-content-center text-white text-xs sm:text-sm">Linkedin</p>
                            </div>
                        </div>

                        <div className="grid place-content-center bg-green-400 px-4 rounded-full py-2 hover:bg-green-500 cursor-pointer">
                            <div className="flex flex-row gap-1">
                                <div className="grid place-content-center">
                                    <FaWhatsapp className="text-white" size={20} />
                                </div>
                                <p className="grid place-content-center text-white text-xs sm:text-sm">WhatsApp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BaseContact;