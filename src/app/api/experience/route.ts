import experienceJsons from "@/components/jsons/experience.json"
import { NextResponse } from "next/server"

export function GET() {
    try {
        return NextResponse.json({ success: true, data: experienceJsons })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, error: error.message });
        }
    }
}