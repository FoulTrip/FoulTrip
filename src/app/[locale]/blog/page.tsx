import BaseSideBarPage from "@/components/blog/SideBarBlog"
import { ArticleDto } from "@/types/infoCV";
import { getMessages, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ locale: string }>;

async function BaseBlogPage({ params }: { params: Params }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages = await getMessages();
    const rawArticles = (messages.Articles as unknown as ArticleDto[]) || [];
    const articles: ArticleDto[] = Array.isArray(rawArticles) ? rawArticles : [];

    return (
        <main className="px-[5%] pt-24 dark:bg-black pb-20">
            <BaseSideBarPage>
                <div className="min-h-dvh border border-transparent sm:border-l sm:border-l-gray-300 sm:px-10">
                    {articles.length === 0 ? (
                        <div className="flex items-center justify-center min-h-[400px]">
                            <p className="text-gray-500 dark:text-gray-400">No articles found</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                            {articles.map(article => (
                                <div key={article.id} className="space-y-2">
                                    <Link href={`/${locale}/blog/${article.slug}`}>
                                        <Image
                                            src={article.cover}
                                            width={500}
                                            height={500}
                                            alt="cover"
                                            className="w-full h-[300px] object-cover rounded-md cursor-pointer"
                                        />
                                    </Link>
                                    <p className="text-sm font-light dark:text-gray-400">{article.type}</p>
                                    <Link
                                        href={`/${locale}/blog/${article.slug}`}
                                        className="block text-2xl font-bold hover:text-blue-400 dark:text-white cursor-pointer"
                                    >{article.title}</Link>
                                    <Link
                                        href={`/${locale}/blog/${article.slug}`}
                                        className="block font-thin cursor-pointer dark:text-gray-300"
                                    >{article.description}</Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </BaseSideBarPage>
        </main>
    )
}

export default BaseBlogPage
