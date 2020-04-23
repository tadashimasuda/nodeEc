var express = require('express');
var router = express.Router();
const cartsControllers = require('../controllers/cartsController');

//購入決定
router.post('/finish',cartsControllers.finish);

//レジへ進む
router.post('/confirm',cartsControllers.confirm);

//カートページへ
router.get('/index',cartsControllers.index);

//商品詳細からカートに追加
router.post('/:id',cartsControllers.add);

//カートからの商品削除
router.delete('/delete/:id',cartsControllers.delete);



module.exports = router;