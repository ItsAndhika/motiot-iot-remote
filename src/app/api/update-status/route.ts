import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { status, lightValue } = await request.json();
	console.log(`Received status : ${status}, lightValue : ${lightValue}`);
	return NextResponse.json({ status, lightValue }, { status: 200 });
}
