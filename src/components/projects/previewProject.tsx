import { Project, Repository } from "@/types/infoCV";
import CardRepo from "./CardRepos";
import Image from "next/image";
import ListStacks from "./listSkills";

function PreviewProject({ project }: { project: Project }) {
    return (
        <div className="space-y-8">

            {/* Project Cover */}
            <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800">
                <Image
                    src={project.cover}
                    alt={project.name}
                    className="w-full h-[200px] object-cover"
                    width={500}
                    height={500}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10 rounded-xl" />
            </div>

            {/* Project Description */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.largeDescription}
                </p>
            </div>

            {/* Technologies Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-blue-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Tecnologías
                    </h3>
                </div>
                <div className="pl-3">
                    <ListStacks stacks={project.stack} />
                </div>
            </div>

            {/* Repositories Section */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-6 bg-green-500 rounded-full" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        Repositorios
                    </h3>
                </div>

                <div className="grid gap-4 sm:gap-3">
                    {project.repositories.map((repo: Repository) => (
                        <CardRepo repo={repo} key={repo.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PreviewProject;