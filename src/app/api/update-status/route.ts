import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri: string = process.env.MONGODB_URI as string;

export async function POST(request: Request) {
	const { status, lightValue } = await request.json();
	const client: MongoClient = new MongoClient(uri);
	try {
		await client.connect();
		console.log("Connected to mongodb");
		const database = client.db("motiot");
		const collection = database.collection("lamp-status-log");
		await collection.insertOne({ status, lightValue });

		const result = await collection.find({}).toArray();
		console.log(result);
		return NextResponse.json({ status, lightValue }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Error connecting to mongodb!" },
			{ status: 500 }
		);
	} finally {
		await client.close();
		console.log(`Mongodb connection closed!`);
	}
}
