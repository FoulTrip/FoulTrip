import contentJson from "@/components/jsons/content_topic.json";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id } = await req.json();
  const Content: Topic[] = contentJson;
  const topic = Content.find((topic) => topic.id === id);

  try {
    if (topic) {
      return NextResponse.json({ success: true, data: topic });
    } else if (!topic) {
      throw new Error("Contenido no encontrado");
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error });
    }
  }
}