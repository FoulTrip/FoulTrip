import topicJson from "@/components/jsons/topics.json";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(topicJson);
}
