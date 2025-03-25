import { Projects } from "@/components/examples/jsonProjects";
import { NextResponse } from "next/server"

export function GET() {
    try {
        return NextResponse.json({ success: true, data: Projects })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, error: error.message });
        }
    }
}