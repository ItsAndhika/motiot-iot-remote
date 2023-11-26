import mongoose from "mongoose";

// async function connectToDb() {
// try {
export const db = mongoose.createConnection(process.env.MONGODB_URI as string, {
	dbName: "motiot",
});
// } catch (error) {
// 	console.error(`Failed to connect to mongodb ${error}`);
// }
// }

// connectToDb();
