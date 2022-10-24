import express from "express";
import { addHotel } from "../Controllers/AdminController.js";

const router = express.Router();

router.post("/createHotel", addHotel);


router.post("/createHotel", addHotel);

export default router;
