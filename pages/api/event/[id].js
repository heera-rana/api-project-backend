import dbConnect from "@/utils/dbConnect";
import { BallModel } from "@/models/ballSchema";

export default async function main(req, res) {
	const { id } = req.query;

	try {
		await dbConnect();
		console.log("successfully connected to Mongo");
		const ball = await BallModel.find();
		console.log(ball);
		return res.status(200).json(ball);
	} catch (error) {
		throw new Error(`Error fetching data for fixture ${id}:`, error);
	}
}
