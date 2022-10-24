import express from "express";
import { addHotel, getHotel } from "../Controllers/AdminController.js";

const router = express.Router();

router.post("/createHotel", addHotel);

router.get("/getHotel", getHotel);

export default router;
