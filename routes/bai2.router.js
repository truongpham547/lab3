var express = require("express");
var Router = express();
const fs = require("fs");
var dateFormat = require("dateformat");

Router.post("/", function (req, res, next) {
  try {
    data = req.body;
    content =
      data.name +
      "|" +
      data.mail +
      "|" +
      data.phone +
      "|" +
      data.message +
      "|" +
      dateFormat(Date.now(), "dd/mm/yyyy h:MM:ss TT") +
      "\n";
    console.log(content);
    fs.appendFile("Users.txt", content, "utf8", function (err) {
      if (err) {
        return res.status(200).send("error");
        throw err;
      } else return res.status(200).send("success");
    });
  } catch (error) {
    return res.status(200).send(error);
  }
});

module.exports = Router;
