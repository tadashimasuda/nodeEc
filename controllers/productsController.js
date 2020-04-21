const db = require('../models/index');

exports.index = (req, res) => {
    db.products.findAll().then((results) => {
        console.log(results)
        res.render('products', { products: results });
      });
}

exports.show = (req, res) => {
    db.products.findByPk(req.params.id).then((results) => {
        res.render('product', { product: results });
      });
}