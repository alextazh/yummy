var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('store-front', { title: 'Интернет-магазин Нямушка' });
  
});

module.exports = router;
