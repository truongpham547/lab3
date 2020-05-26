const express = require("express");
const app = express();
var indexRouter = require("./routes/index");

app.get("/", function (req, res) {
  res.status(200).send("Hello world!");
});
app.use(express.static("public"));

app.listen(8888 || 2222 || 1111, () => {
  console.log("server is running on port 8888");
});
