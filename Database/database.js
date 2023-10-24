const mongoose = require("mongoose");
const connectionstring =
  "mongodb+srv://FazeTuruu:Mune0428@turuu.m8yrddy.mongodb.net/Shop";
exports.connectDatabase = async () => {
  try {
    await mongoose.connect(connectionstring);
  } catch (error) {
    console.log(error);
  }
};
