"use client"

import BaseSideBarPage from "@/components/blog/SideBarBlog"
import { ArticleDto } from "@/types/infoCV";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

function BaseBlogPage() {
    const [articles, setArticles] = useState<ArticleDto[] | null>(null);
    const router = useRouter();

    const redirContent = (slug: string) => router.push(`/blog/${slug}`);

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
                <div className="min-h-dvh border border-transparent sm:border-l sm:border-l-gray-300 sm:px-10">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                        {articles && articles.map(article => (
                            <div key={article.id} className="space-y-2">
                                <Image
                                    src={article.cover}
                                    width={500}
                                    height={500}
                                    alt="cover"
                                    className="w-full h-[300px] object-cover rounded-md"
                                    onClick={() => redirContent(article.slug)}
                                />
                                <p className="text-sm font-light">{article.type}</p>
                                <p
                                    className="text-2xl font-bold hover:text-blue-400 cursor-pointer"
                                    onClick={() => redirContent(article.slug)}
                                >{article.title}</p>
                                <p
                                    className="font-thin cursor-pointer"
                                    onClick={() => redirContent(article.slug)}
                                >{article.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </BaseSideBarPage>
        </main>
    )
}

export default BaseBlogPage