const mongoose = require("mongoose");
const Product = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Size: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  SPR: {
    type: Array,
    required: true,
  },
});
const productmodel = mongoose.model("Product", Product);
module.exports = productmodel;
