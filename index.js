const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mainrouter = require("./Router/mainrouter");
const { connectDatabase } = require("./Database/database");
const app = express();
const port = 8000;
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
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
