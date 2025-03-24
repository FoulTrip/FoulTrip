import { Experiences } from "@/components/examples/experiences";
import { NextResponse } from "next/server"

export function GET() {
    try {
        return NextResponse.json({ success: true, data: Experiences })
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ success: false, error: error.message });
        }
    }
}