"use client"

import BaseSideBarPage from "@/components/blog/SideBarBlog"
import { ArticleDto } from "@/types/infoCV";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react"

function BaseBlogPage() {
    const [articles, setArticles] = useState<ArticleDto[] | null>(null)

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("/api/blog/articles")
            if (res.data.success === false) {
                console.log(res.data.error);
                return;
            }
            const articles: ArticleDto[] = res.data.data;
            console.log(res)
            setArticles(articles);
        };

        getArticles()
    }, [])

    return (
        <main className="px-[5%] pt-24">
            <BaseSideBarPage>
                <div className="min-h-dvh">
                    <h1>Recientes</h1>

                    <div>
                        {articles && articles.map(article => (
                            <div key={article.id}>
                                <div>
                                    <Image src={article.cover} width={500} height={500} alt="" />
                                </div>
                                <p>{article.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </BaseSideBarPage>
        </main>
    )
}

export default BaseBlogPage