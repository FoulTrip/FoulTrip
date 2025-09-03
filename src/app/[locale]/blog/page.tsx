"use client"
import BaseSideBarPage from "@/components/blog/SideBarBlog"
import { ArticleDto } from "@/types/infoCV";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

function BaseBlogPage() {
    const router = useRouter();
    const redirContent = (slug: string) => router.push(`/blog/${slug}`);
    
    // Solución temporal: acceso directo con manejo de errores
    let articles: ArticleDto[] = [];
    
    try {
        const t = useTranslations();
        const rawArticles = t.raw("Articles");
        articles = Array.isArray(rawArticles) ? rawArticles : [];
    } catch (error) {
        console.error("Error loading articles from translations:", error);
        
        // Fallback: datos estáticos temporales mientras se resuelve la configuración
        articles = [
            {
                id: "01",
                title: "TripCodeChain y la Web3: Una Mirada Simple a la Nueva Era Digital",
                slug: "tripcodechain-web3-nueva-era-digital",
                date: "27 de Marzo de 2025",
                cover: "/covers/article_tripchain_web3.jpg",
                description: "Descubre cómo TripCodeChain democratiza la tecnología blockchain, facilitando la creación de aplicaciones descentralizadas y ofreciendo más control y seguridad en la era digital de la Web3.",
                type: "web3",
                content: "",
                proyects: []
            }
        ];
    }
    
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
                                    <Image
                                        src={article.cover}
                                        width={500}
                                        height={500}
                                        alt="cover"
                                        className="w-full h-[300px] object-cover rounded-md cursor-pointer"
                                        onClick={() => redirContent(article.slug)}
                                    />
                                    <p className="text-sm font-light dark:text-gray-400">{article.type}</p>
                                    <p
                                        className="text-2xl font-bold hover:text-blue-400 dark:text-white cursor-pointer"
                                        onClick={() => redirContent(article.slug)}
                                    >{article.title}</p>
                                    <p
                                        className="font-thin cursor-pointer dark:text-gray-300"
                                        onClick={() => redirContent(article.slug)}
                                    >{article.description}</p>
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