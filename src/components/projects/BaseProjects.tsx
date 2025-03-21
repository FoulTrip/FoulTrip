import ListCarrousel from "./ListCarrousel";

function BaseProject() {
    return (
        <>
            <main className="min-h-dvh w-[90%] ml-[5%] mb-20">
                <h2 className="mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl dark:text-white">Projectos</h2>
                <ListCarrousel />
            </main>
        </>
    )
}

export default BaseProject;