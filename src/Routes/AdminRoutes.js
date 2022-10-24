import express from "express";
import { addHotel } from "../Controllers/AdminController.js";

const router = express.Router();

router.post("/createHotel", addHotel);


router.get("/getHotel", addHotel);



export default router;
