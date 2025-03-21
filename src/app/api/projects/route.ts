import projectsJsons from "@/components/jsons/projects.json"
import { NextResponse } from "next/server"

export function GET() {
    try {
        return NextResponse.json({ success: true, data: projectsJsons })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, error: error.message });
        }
    }
}