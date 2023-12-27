import mongoose from "mongoose";

const ballLocationSchema = new mongoose.Schema({
	_id: String,
	ball: Number,
}, {collection: "ball"});

export const BallLocationModel =
	mongoose.models.BallLocation ||
	mongoose.model("BallLocation", ballLocationSchema);
