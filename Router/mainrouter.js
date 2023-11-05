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
mainrouter.put("/Approve", Approve);
mainrouter.put("/Delete", Delete);
mainrouter.put("/deleteproduct", deleteproduct);
module.exports = mainrouter;
