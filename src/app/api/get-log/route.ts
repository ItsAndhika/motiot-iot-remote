import { NextResponse } from "next/server";
import { Log } from "@/models/Log";

export async function GET() {
	const log = await Log.find().sort({ _id: -1 }).limit(1);
	return NextResponse.json(log);
}
