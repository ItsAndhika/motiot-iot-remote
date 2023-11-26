import { NextResponse } from "next/server";
import { Log } from "@/models/Log";

export async function GET() {
	const newDocument = new Log({ status: "on", lightValue: 500 });
	await newDocument.save();
	const result = await Log.find({});
	return NextResponse.json(result);
}
