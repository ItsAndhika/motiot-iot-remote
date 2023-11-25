import { NextResponse } from "next/server";

const sendLightValueToGET = (lightValue: string) => {};

export async function GET(request: Request) {
	const lightValue: string = await request.json();
	return NextResponse.json(lightValue);
}

export async function POST(request: Request) {
	const lightValue: string = await request.json();
	if (!lightValue) return NextResponse.json(200);
	return NextResponse.json(-200);
}
