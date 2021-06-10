var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo');

/* POST criação de compra */
router.post('/', function (req, res, next) {
  res.send(cielo.compra(req.body));
});

/* Get  status de compra */
router.get('/:compra_id/status', function (req, res, next) {
  res.send('running status..');
});

module.exports = router;
