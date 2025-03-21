import ListExperience from "./ListExperience";

function BaseExperiences() {
    return (
        <>
            <div className="min-h-dvh w-[90%] ml-[5%]">
                <h2 className="mb-10 text-2xl font-extrabold leading-none tracking-tight text-gray-600 md:text-3xl dark:text-white">Experience</h2>
                <ListExperience />
            </div>
        </>
    )
}

export default BaseExperiences;