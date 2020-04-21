const db = require('../models/index');

exports.index = (req, res) => {
    db.products.findAll().then((results) => {
        console.log(results)
        res.render('products', { products: results });
      });
}