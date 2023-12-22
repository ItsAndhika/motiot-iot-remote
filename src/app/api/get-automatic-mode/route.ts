import { NextResponse } from "next/server";
import { AutomaticMode } from "@/models/AutomaticMode";

export async function GET() {
	try {
		const automaticModeData = await AutomaticMode.find().sort({ _id: 1 });
		return NextResponse.json(automaticModeData);
	} catch (error) {
		return NextResponse.json(
			{ message: "Failed to get the automatic mode data" },
			{ status: 400 }
		);
	}
}
