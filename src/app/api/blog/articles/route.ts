import Articles from "@/components/examples/Articles"
import { NextResponse } from "next/server"

export function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const slugArticle = url.searchParams.get('slug');

        if (Articles && Articles.length === 0) {
            return NextResponse.json({ success: true, message: "No hay articulos" })
        }

        if (slugArticle) {
            const Article = Articles.find(article => article.slug === slugArticle);

            if (!Article) {
                return NextResponse.json({
                    success: false,
                    message: "Artículo no encontrado"
                }, { status: 404 });
            }

            return NextResponse.json({
                success: true,
                data: Article
            });
        }

        return NextResponse.json({ success: true, data: Articles });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({
                success: false,
                error: error.message
            }, { status: 500 });
        }
    }
}