const { produk} = require('../models');

module.exports = {
    getProduk: (req, res, next) => {
        Product
          .findAll({
            attributes: ["nama_produk", "keterangan", "harga","jumlah"],
          })
          .then((result) => {
            if (result.length > 0) {
              res.status(200).json({  data: result });
            } else {
              res
                .status(402)
                .json({ message: "Product Not Found", data: result });
            }
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: "Failed Get All Product", err: err.message });
          });
      },
      createProduct: (req, res) => {
        Product_biodata
          .create({
            nama_produk: req.body.nama,
            keterangan: req.body.keterangan,
            harga: req.body.harga,
            jumlah : req.body.jumlah
          })
          .then((result) => {
            res.status(200).json({ message: "Berhasil ", result });
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: "Gagal", err: err.message });
          });
      },
      update_Product: (req, res) => {
        Product_biodata
          .update(
            {
                nama_produk: req.body.nama,
                keterangan: req.body.keterangan,
                harga: req.body.harga,
                jumlah : req.body.jumlah
            },
            {
              where: {
                id: req.params.id,
              },
            }
          )
          .then((result) => {
            if (result[0] === 0) {
              res.status(404).json({
                message: "Product " + req.params.id + " Not Found",
                result,
              });
            } else {
              res
                .status(200)
                .json({ message: "Valid ", result });
            }
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: "Failed ", err: err.message });
          });
      },
      deleteProduct: (req, res) => {
        Product_biodata
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((result) => {
            if (result === 0) {
              res.status(404).json({
                message: "Product dengan ID " + req.params.id + " Not Found",
                result,
              });
            } else {
              res
                .status(200)
                .json({ message: "Valid", result });
            }
          })
          .catch((err) => {
            res
              .status(500)
              .json({ message: "Failed ", err: err.message });
          });
      },
}
