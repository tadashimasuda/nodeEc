var express = require('express');
var router = express.Router();
const loginsControllers = require('../controllers/loginsController');

//loginpageへ
router.get('/',loginsControllers.index);

module.exports = router;