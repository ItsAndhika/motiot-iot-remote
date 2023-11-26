import mongoose from "mongoose";

export const Log = mongoose.model(
	"Motiot",
	new mongoose.Schema({
		status: String,
		lightValue: Number,
	})
);
