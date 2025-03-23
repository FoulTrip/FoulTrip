import { Project, Repository } from "@/types/infoCV"
import CardRepo from "./CardRepos"
import Image from "next/image"
import ListStacks from "./listSkills"

function PreviewProject({ project }: { project: Project }) {
    return (
        <>
            <div className="flex flex-col gap-5">
                <Image
                    src={project.cover}
                    alt={project.name}
                    className="w-full h-[200px] object-cover rounded-md shadow-sm"
                    width={500}
                    height={500}
                />

                <p className="font-thin text-gray-600">{project.description}</p>

                <p className="text-base font-bold text-gray-600">Tecnologias</p>
                <ListStacks stacks={project.stack} />


                <p className="text-base font-bold text-gray-600">Repositorios</p>
                {project.repositories.map((repo: Repository) => <CardRepo repo={repo} key={repo.id} />)}

            </div>
        </>
    )
}

export default PreviewProject