import express from "express";
const router = express.Router();
import Product from "../models/product.model.js";
import {
  deleteProduct,
  getProducts,
  createProduct,
  updateProduct,
} from "../controller/product.controller.js";

router.post("/", createProduct);

router.delete("/:id", deleteProduct);
router.get("/", getProducts);

router.put("/:id", updateProduct);

export default router;
