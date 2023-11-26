import { NextResponse } from "next/server";
import { Log } from "@/models/Log";

export async function GET() {
	const log = await Log.find();
	return NextResponse.json(log);
}
