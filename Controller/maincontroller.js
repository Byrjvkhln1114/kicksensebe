const Product = require("../Database/productmodel");
const Order = require("../Database/ordermodel");
exports.test = async (req, res) => {
  res.send("success");
};
exports.getproduct = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};
exports.addproduct = async (req, res) => {
  const { Name, Price, Size, Image, Prices, Sizes } = req.body;
  console.log(Image);
  console.log("a");
  await new Product({
    Name: Name,
    Price: Price,
    Size: Size,
    Image: Image,
    SPR: [Prices.split(" "), Sizes.split(" ")],
  }).save();
  res.send("success");
};
exports.createOrder = async (req, res) => {
  const { Name, Price, Size, Image, Phone } = req.body;
  await new Order({
    Name: Name,
    Price: Price,
    Size: Size,
    Image: Image,
    Phone: Phone,
  }).save();
  res.send("success");
};
exports.getOrders = async (req, res) => {
  const { Phone } = req.body;
  if (Phone == "96652141") {
    const a = await Order.find({});
    res.send(a);
  } else {
    const a = await Order.find({
      Phone: Phone,
    });
    res.send(a);
  }
};
exports.Approve = async (req, res) => {
  const { _id } = req.body;
  const a = await Order.findByIdAndUpdate(_id, {
    Status: true,
  });
  res.send(a);
};
exports.Delete = async (req, res) => {
  const { _id } = req.body;

  const a = await Order.findByIdAndDelete(_id);
  res.send(a);
};
