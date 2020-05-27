var express = require("express");
var Router = express();
const fs = require("fs");

Router.get("/", function (req, res) {
  try {
    fs.readFile("Products.txt", "utf8", function (err, data) {
      if (err) throw err;
      let arrdata = data.split("\n");
      let objectdata;
      let listSanPham = [];
      arrdata.forEach((element) => {
        let sanpham = element.split("|");
        if (!sanpham[0]) return res.status(200).send(listSanPham);
        objectdata = {
          IDSanPham: sanpham[0],
          TenSanPham: sanpham[1],
          Gia: sanpham[2],
          ThuongHieu: sanpham[3],
          SoLuong: sanpham[4],
          Mota: sanpham[5],
          Hinhanh: sanpham[6],
        };
        console.log(objectdata);
        listSanPham.push(objectdata);
      });
    });
  } catch (error) {
    return res.status(200).send(error);
  }
});

module.exports = Router;
