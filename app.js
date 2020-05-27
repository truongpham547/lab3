var express = require("express");
var indexRouter = require("./routes/index");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

module.exports = app;
