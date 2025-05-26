import { NextRequest, NextResponse } from "next/server";
import NotionService from "@/lib/NotionServer";

const notionService = new NotionService();

// TODO: 对接notion 卡住了。后续再练习
export async function GET(req: NextRequest) {
    const questions = await notionService.query();
    return NextResponse.json(questions);
} 