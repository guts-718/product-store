import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get;
app.get("/", (req, res) => {
  res.send("server is running");
});
app.listen(5000, () => {
  connectDB();
  console.log("server started at localhost 5000");
});
