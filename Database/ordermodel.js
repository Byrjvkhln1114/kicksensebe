const mongoose = require("mongoose");
const Order = new mongoose.Schema({
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
  createdAt: { type: Date, default: Date.now() },
  Phone: { type: String },
  Status: { type: Boolean, default: false },
});
const ordermodel = mongoose.model("Order", Order);
module.exports = ordermodel;
