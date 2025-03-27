"use client"

import { ArticleDto } from "@/types/infoCV";
import axios from "axios";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react"
import { GoArrowLeft, GoRepo } from "react-icons/go";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

function ArticleContent({ params }: { params: Promise<{ slug: string }> }) {
    const resolveParam = use(params);
    const slug = resolveParam.slug;
    const router = useRouter();

    const [article, setArticle] = useState<(ArticleDto & { mdxSource?: MDXRemoteSerializeResult }) | null>(null);

    useEffect(() => {
        const getArticle = async () => {
            const res = await axios.get(`/api/blog/articles?slug=${slug}`);
            if (res.data.false) return;

            const articleData: ArticleDto = res.data.data;

            // Serialize the MDX content
            const mdxSource = await serialize(articleData.content);

            setArticle({
                ...articleData,
                mdxSource
            });
        }

        getArticle();
    }, [slug]);

    // Custom components for MDX (optional)
    const components = {
        h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
            <h1 className="text-3xl font-bold mb-4" {...props}>{children}</h1>
        ),
        h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
            <h2 className="text-2xl font-semibold mt-6 mb-3" {...props}>{children}</h2>
        ),
        p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
            <p className="mb-4 leading-relaxed" {...props}>{children}</p>
        ),
        strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
            <strong className="font-bold" {...props}>{children}</strong>
        ),
        ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
            <ul className="list-disc pl-5 mb-4" {...props}>{children}</ul>
        ),
        ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
            <ol className="list-decimal pl-5 mb-4" {...props}>{children}</ol>
        ),
        li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
            <li className="mb-2" {...props}>{children}</li>
        )
    };

    return (
        <>
            <main className="pt-32 min-h-dvh px-[5%] flex sm:flex-row flex-col gap-1 sm:h-[calc(100vh-128px)] overflow-hidden">
                <aside className="sm:w-[200px] px-10 sm:px-0 sticky top-0 sm:h-full overflow-y-auto">
                    <nav className="flex items-center gap-2 py-4">
                        <GoArrowLeft className="shrink-0" />
                        <span
                            className="text-sm whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                            onClick={() => router.push("/blog")}
                        >
                            Todos los articulos
                        </span>
                    </nav>

                    <div className="mt-5">
                        <p className="text-sm font-thin">Proyectos relacionados</p>
                        <div className="mt-4 flex flex-row overflow-x-auto gap-3 pb-4 no-scrollbar sm:overflow-x-visible sm:flex-col sm:gap-3">
                            {article?.proyects.map(proyect => (
                                <div
                                    key={proyect.name}
                                    className="
                flex-shrink-0 
                bg-gray-50 
                flex flex-row 
                items-center 
                justify-between 
                p-3 
                hover:bg-gray-100 
                rounded-md 
                border 
                border-transparent 
                hover:border-gray-300 
                cursor-pointer 
                transition-all 
                duration-200 
                ease-in-out
                whitespace-nowrap
                min-w-fit
                max-w-[300px]
                sm:min-w-full
                sm:max-w-none
                sm:relative
            "
                                >
                                    <div className="flex items-center gap-3 min-w-0 sm:w-full">
                                        <GoRepo className="text-gray-700 drop-shadow-md shrink-0" />
                                        <span className="text-sm font-medium truncate sm:max-w-[calc(100%-4rem)]">
                                            {proyect.name}
                                        </span>
                                    </div>
                                    <HiMiniArrowTopRightOnSquare className="ml-3 shrink-0 sm:absolute sm:right-3" />
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
                <article className="grow px-10 overflow-y-auto h-full">
                    <div className="max-w-prose mx-auto">
                        {/* <h1 className="text-2xl font-bold sm:text-5xl mb-4">
                            {article?.title}
                        </h1>
                        <p className="text-gray-600 mb-6">
                            {article?.description}
                        </p> */}
                        {article?.mdxSource && (
                            <div className="mt-6">
                                <MDXRemote {...article.mdxSource} components={components} />
                            </div>
                        )}
                    </div>
                </article>
            </main>
        </>
    )
}

export default ArticleContent