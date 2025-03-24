import ListExperience from "./ListExperience";

function BaseExperiences() {
    return (
        <>
            <div className="min-h-dvh px-[5%] dark:bg-black">
                <h2 className="mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl dark:text-white">Experience</h2>
                <ListExperience />
            </div>
        </>
    )
}

export default BaseExperiences;