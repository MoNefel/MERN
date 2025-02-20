import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/connectDB.js";
import bookRouters from "./routes/bookRoutes.js";

const app = express();

app.use(express.json(), cors());

app.use("/api", bookRouters);

dotenv.config();

const port = process.env.PORT;

dbConnect();

app.listen(port, () =>
  console.log(`The server is running on the port ${port}`)
);
