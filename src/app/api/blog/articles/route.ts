import Articles from "@/components/examples/Articles"
import { NextResponse } from "next/server"

export function GET() {
    try {
        if (Articles && Articles.length == 0) {
            return NextResponse.json({ success: true, message: "No hay articulos" })
        }

        return NextResponse.json({ success: true, data: Articles });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, error: error.message });
        } 
    }
}