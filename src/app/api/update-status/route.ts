import { NextResponse } from "next/server";
import { Log } from "@/models/Log";

export async function POST(request: Request) {
	const { status, lightValue } = await request.json();
	try {
		await Log.insertMany([{ status, lightValue }]);
		return NextResponse.json({ status, lightValue }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: `Error connecting to mongodb! ${error}` },
			{ status: 400 }
		);
	}
}
