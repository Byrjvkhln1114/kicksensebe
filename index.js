const express = require("express");
const cors = require("cors");
const mainrouter = require("./Router/mainrouter");
const { connectDatabase } = require("./Database/database");
const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());
app.use(mainrouter);
const startServer = async () => {
  await connectDatabase();
  app.listen(port, () => {
    console.log(` Port ${port} der asjinaa `);
  });
};
startServer();
module.exports = app;
