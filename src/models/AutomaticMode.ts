import { Schema } from "mongoose";
import { db } from "@/lib/database";

const AutomaticModeSchema = new Schema({
	isAutomatic: Boolean,
});

export const AutomaticMode = db.model("automaticmode", AutomaticModeSchema);
