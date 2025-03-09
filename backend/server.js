import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import path from "path";
import ProductRouter from "./routes/product.routes.js";

const __dirname = path.resolve();
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json()); // allows us to accept json data in request.body
app.use("/api/products", ProductRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.get("/", (req, res) => {
  res.send("server is running");
});
app.listen(PORT, () => {
  connectDB();
  console.log("server started at localhost 5000");
});
