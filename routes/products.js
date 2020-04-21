var express = require('express');
var router = express.Router();
const productsControllers = require('../controllers/productsController');

router.get('/',productsControllers.index);

module.exports = router;