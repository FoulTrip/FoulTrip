"use client"

import BaseSideBarPage from "@/components/blog/SideBarBlog";
import { typeBlog } from "@/types/infoCV";
import { use } from "react"
import { GiCubes } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";

function TopicPage({ params }: { params: Promise<{ topic: typeBlog }> }) {
    const resolveParam = use(params);
    const topic = resolveParam.topic;

    return (
        <>
            <main className="px-[5%] pt-24">
                <BaseSideBarPage>
                    <div className="grid place-content-center w-full mt-10">
                        {topic == "web3" && <GiCubes size={80} />}
                        {topic == "development" && <LiaLaptopCodeSolid size={80} />}
                    </div>
                    <div className="min-h-dvh">
                        <h1 className="font-bold text-sm text-center mt-2">{topic.replace("w", "W")}</h1>
                        <p className="text-center text-sm font-thin">
                            {topic == "web3" && "Utilidad y contribucion de TripChain en la web 3.0"}
                        </p>
                    </div>
                </BaseSideBarPage>
            </main>
        </>
    )
}

export default TopicPage