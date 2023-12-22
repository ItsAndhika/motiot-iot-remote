import { NextResponse } from "next/server";
import { AutomaticMode } from "@/models/AutomaticMode";

export async function POST(request: Request) {
	const { isAutomatic } = await request.json();

	try {
		const currentAutomaticModeData = await AutomaticMode.find().sort({
			_id: 1,
		});
		await AutomaticMode.updateOne(
			{ _id: currentAutomaticModeData[0].id },
			{
				$set: {
					isAutomatic: isAutomatic,
				},
			}
		);
		return NextResponse.json({ isAutomatic }, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ message: "Failed to insert the data" },
			{ status: 400 }
		);
	}
}
