const express = require("express");
const mainrouter = express.Router();
const {
  test,
  addproduct,
  getproduct,
  createOrder,
  getOrders,
  Approve,
  Delete,
  deleteproduct,
} = require("../Controller/maincontroller");
mainrouter.get("/test", test);
mainrouter.post("/addproduct", addproduct);
mainrouter.get("/getproduct", getproduct);
mainrouter.post("/createorder", createOrder);
mainrouter.post("/getOrders", getOrders);
mainrouter.put("/approve", Approve);
mainrouter.put("/delete", Delete);

module.exports = mainrouter;
