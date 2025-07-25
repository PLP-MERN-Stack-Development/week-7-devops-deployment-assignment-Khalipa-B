import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/api/bugs", (req, res) => {
  res.json([{ id: 1, title: "Example bug" }]);
});

app.get("/health", (req, res) => res.send("OK"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
