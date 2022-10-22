import HotelModel from "../Model/HotelModel.js";

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
