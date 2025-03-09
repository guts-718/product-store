import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    // not using await leads to error here...
    const allProducts = await Product.find({});
    res.status(200).json({ success: true, data: allProducts });
    console.log("products sent");
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "request to send products failed" });
    console.log("request failed");
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(201)
      .json({ success: true, message: "product deleted successfully" });
  } catch (error) {
    res.status(402).json({ success: false, message: "product not found" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    // const product=req.body;
    // await findByIdAndUpdate(id,product,{new:true});
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    Object.assign(product, req.body);
    await product.save();

    console.log(product);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("Unable to update:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  console.log(req.body.name);
  console.log(req.body.image);
  console.log(req.body.price);
  if (!product || !product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all the fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("error in creating product", error);
  }
};
