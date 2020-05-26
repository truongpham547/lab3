const express = require("express");
const app = express();
var indexRouter = require("./routes/index");
const port = 3000;

app.get("/", function (req, res) {
  res.status(200).send("Hello world!");
});
app.use(express.static("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
