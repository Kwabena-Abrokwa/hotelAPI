import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
	{
		hotelName: {
			type: String,
			require: true,
		},
		country: {
			type: String,
			require: true,
		},
		roomStatus: {
			type: Boolean,
			require: true,
		},
		roomDescription: {
			type: String,
			require: true,
		},
		roomImage: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("hotels", HotelSchema);
