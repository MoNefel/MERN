import express from "express";
import dbConnect from "./config/mongooseConfig.js";
import cors from "cors";
import dotenv from "dotenv";
import albumRoutes from "./routes/albumRoute.js";

const app = express();

app.use(express.json(), cors({ origin: "http://localhost:5173" }));

app.use("/api", albumRoutes);

dotenv.config();

const port = process.env.PORT;

dbConnect();

//this needs to be below the other code blocks
app.listen(port, () =>
  console.log(`The server is running on the port ${port}`)
);
