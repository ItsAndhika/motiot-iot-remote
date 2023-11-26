import mongoose from "mongoose";

async function connectToDb() {
	try {
		await mongoose.connect(process.env.MONGODB_URI as string);
	} catch (error) {
		console.error(`Failed to connect to mongodb ${error}`);
	}
}

connectToDb();
