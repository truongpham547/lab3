var express = require("express");
var Router = express();

Router.get("/", function (req, res) {
  res.status(200).send("Hello world!");
});
Router.use("/bai1", require("./bai1.router.js"));
Router.use("/bai2", require("./bai2.router.js"));
module.exports = Router;
