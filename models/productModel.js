import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  price: {
    type: Object,
  },
  description: {
    type: String,
  },
  discount: {
    type: String,
  },
  qnt:{
    type: Number,
  }
});

const Product = mongoose.model("product", productSchema);

export default Product;