"use client"

import BaseSideBarPage from "@/components/blog/SideBarBlog";
import { use } from "react"

function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
    const resolveParam = use(params);
    const topic = resolveParam.topic;

    return (
        <>
            <main className="px-[5%] pt-24">
                <BaseSideBarPage>
                    <div className="min-h-dvh">
                        <h1>{topic}</h1>
                    </div>
                </BaseSideBarPage>
            </main>
        </>
    )
}

export default TopicPage