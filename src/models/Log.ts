import mongoose, { Schema } from "mongoose";
import { db } from "@/lib/database";

const logSchema = new Schema({
	status: String,
	lightValue: Number,
});

// mongoose.models = {};

export const Log = db.model("log", logSchema);
