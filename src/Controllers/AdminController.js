import HotelModel from "../Model/HotelModel.js";

export const getHotel = async (req, res) => {
	try {
		const getAllHostel = await HotelModel.find();

		if (getAllHostel) {
			return res.status(200).json(getAllHostel);
		}
	} catch (error) {
		console.log("====================================");
		console.log(error);
		console.log("====================================");
		return res.status(200).json("Something went wrong");
	}
};

export const addHotel = async (req, res) => {
	try {
		const { hotelName, country, roomStatus, roomDescription, image } =
			req.body;

		const addNewHotel = new HotelModel(req.body);

		const addedHotel = await addNewHotel.save();

		if (addedHotel) {
			return res.status(200).json(req.body);
		}
	} catch (error) {
		console.log("====================================");
		console.log(error);
		console.log("====================================");
		return res.status(200).json("Something went wrong");
	}
};
