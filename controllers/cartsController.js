const db = require('../models/index');
const products = require('../models/index').products;
const purchases = require('../models/index').purchases;
exports.index = (req, res) => {
    const filter = {
        include: [{
            model: db.products,
        }]
    }
    //user_id が一致するcart.rowを持ってくる かつ　リレーションで
    purchases.findAll(filter).then((results) => {
        console.log(results);
        res.render('cart/index', { purchases: results });
    });
}

exports.add = (req, res) => {
    //if文でamountに対する条件式を入れる。。数だけ＋する場合も想定する
    //amountは　purcheses.amount をデータ取得する(where(user_id,products_id))で履歴調査
    //.count()==0なら新規作成、.count()>0なら数字変更
    //まず、productsからidでデータ
    db.products.findOne({ where: { id: req.params.id } }).then((results) => {
        const params = {
            product_id: results.id,
            user_id: 1,//固定
            price: results.price,
            amount: 1,
        };
        //新規
        db.purchases.create(params).then((result) => {
            // if (result && product) {
            //   product.update({
            //     stock: product.stock - amount
            //   })
            // }
            res.render('product/' + req.params.id);
        });
        //データがない時 create()
        res.redirect('/product/' + req.params.id);
    });
}

exports.confirm = (req, res) => {
    console.log('confirm')
    //ユーザーの一致するカート取得（all）
    const filter = {
        include: [{
            model: db.products,
        }]
    }
    //後にuser_id　req.body.id
    //user_id が一致するcart.rowを持ってくる かつ　リレーションで
    purchases.findAll(filter).then((results) => {
        res.render('cart/confirm', { purchases: results });
    });
}

exports.finish = (req, res) => {
    //購入したか否かのカラムなし
    //db 対象のレコード削除
    //stockでものがあるのか　ー＞　stock数合わせ
    var userId = req.body.userId
    db.purchases.destroy({ where: { user_id: userId　} }).then((results) => {
        res.render('cart/finish');
    });
}

exports.delete = (req, res) => {
    db.purchases.destroy({ where: { id: req.params.id } }).then((results) => {
        res.redirect('/cart');
    });
}