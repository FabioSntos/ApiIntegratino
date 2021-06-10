var express = require('express');
var router = express.Router();

/* POST criação de compra */
router.post('/', function (req, res, next) {
  res.send('running..');
});

/* Get  status de compra */
router.get('/:compra_id/status', function (req, res, next) {
  res.send('running status..');
});

module.exports = router;
