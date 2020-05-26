var express = require("express");
var Router = express();
const fs = require("fs");

Router.get("/", function (req, res) {
  fs.readFile("Products.txt", "utf8", function (err, data) {
    if (err) throw err;
    let arrdata = data.split("\n");
    let objectdata;
    let listSanPham = [];
    let count = 0;
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

      listSanPham.push(objectdata);
    });
    return res.status(200).send();
  });
});

module.exports = Router;
