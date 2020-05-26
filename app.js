const express = require("express");
const app = express();
var indexRouter = require("./routes/index");

app.get("/", function (req, res) {
  res.status(200).send("Hello world!");
});
app.use(express.static("public"));

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
