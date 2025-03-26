"use client"

import BaseSideBarPage from "@/components/blog/SideBarBlog"

function BaseBlogPage() {
    return (
        <main className="px-[5%] pt-24">
            <BaseSideBarPage>
                <div className="min-h-dvh">
                    <h1>Recientes</h1>
                </div>
            </BaseSideBarPage>
        </main>
    )
}

export default BaseBlogPage