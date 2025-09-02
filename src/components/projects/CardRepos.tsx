import { Repository } from "@/types/infoCV";
import { FaGithub } from "react-icons/fa6";
import { GoRepo, GoRepoLocked } from "react-icons/go";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { TbSettings } from "react-icons/tb";
import { RiCheckboxCircleLine } from "react-icons/ri";

function CardRepo({ repo }: { repo: Repository }) {
    const statusConfig = {
        "Planeando": {
            bg: "bg-amber-50 dark:bg-amber-900/20",
            border: "border-amber-200 dark:border-amber-800",
            text: "text-amber-700 dark:text-amber-400",
            icon: LiaPencilRulerSolid
        },
        "En desarrollo": {
            bg: "bg-blue-50 dark:bg-blue-900/20",
            border: "border-blue-200 dark:border-blue-800",
            text: "text-blue-700 dark:text-blue-400",
            icon: TbSettings
        },
        "Funcionando": {
            bg: "bg-green-50 dark:bg-green-900/20",
            border: "border-green-200 dark:border-green-800",
            text: "text-green-700 dark:text-green-400",
            icon: RiCheckboxCircleLine
        }
    };

    const currentStatus = statusConfig[repo.status as keyof typeof statusConfig];
    const StatusIcon = currentStatus?.icon || TbSettings;

    return (
        <div className="group relative p-4 sm:p-5 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm transition-all duration-200">

            {/* Header Section */}
            <div className="flex items-start gap-4 mb-4">

                {/* Repository Icon */}
                <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex items-center justify-center">
                        {repo.isPrivate ? (
                            <GoRepoLocked className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        ) : (
                            <GoRepo className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        )}
                    </div>
                </div>

                {/* Repository Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight mb-1 truncate">
                                {repo.name}
                            </h3>
                            {repo.description && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {repo.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="flex items-center justify-between gap-3">

                {/* Status Badge */}
                {currentStatus && (
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${currentStatus.bg} ${currentStatus.border} ${currentStatus.text} border`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        <span>{repo.status}</span>
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {!repo.isPrivate && (
                        <a
                            href="#"
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-150"
                            title="Ver en GitHub"
                        >
                            <FaGithub className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            {/* Privacy indicator */}
            {repo.isPrivate && (
                <div className="absolute top-3 right-3">
                    <div className="w-2 h-2 rounded-full bg-amber-400 dark:bg-amber-500"></div>
                </div>
            )}

            {/* Hover indicator */}
            <div className="absolute inset-0 rounded-lg ring-1 ring-gray-900/5 dark:ring-gray-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
        </div>
    );
}

export default CardRepo;