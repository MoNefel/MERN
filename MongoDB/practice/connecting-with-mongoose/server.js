import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/connectDB.js";

const app = express();

app.use(express.json(), cors());

dotenv.config();

dbConnect();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
