import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import ProductRouter from "./routes/product.routes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json()); // allows us to accept json data in request.body
app.use("/api/products", ProductRouter);
app.get("/", (req, res) => {
  res.send("server is running");
});
app.listen(PORT, () => {
  connectDB();
  console.log("server started at localhost 5000");
});
