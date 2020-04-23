var express = require('express');
var router = express.Router();
const cartsControllers = require('../controllers/cartsController');

//カートページへ
router.get('/index',cartsControllers.index);

//商品詳細からカートに追加
router.post('/:id',cartsControllers.add);

module.exports = router;