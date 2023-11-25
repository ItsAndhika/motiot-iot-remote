import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const lightValue: string = await request.json();
	if (!lightValue)
		return NextResponse.json({ message: "Light value required!" });
	return NextResponse.json(lightValue);
}

export async function POST(request: Request) {
	const lightValue: string = await request.json();
	if (!lightValue)
		return NextResponse.json({ message: "Light value required!" });
	return NextResponse.json(lightValue);
}
