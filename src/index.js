import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AdminRoutes from "./Routes/AdminRoutes.js";

const app = express();

//config env
dotenv.config();

app.get("/", (req, res) => {
	res.status(200).send("Hello Baaba, welcome to your server 🥰");
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api endpoints
app.use("/api/admin", AdminRoutes);

const PORT = 8083 || process.env.PORT;

app.listen(PORT, async () => {
	mongoose.connect(process.env.DATABASE).then(() => {
		console.log("====================================");
		console.log(`Server up and running at ${PORT}`);
		console.log("====================================");
	});
});
