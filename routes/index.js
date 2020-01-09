var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function (req, res, next) {
  console.log('headers', req.headers)
  console.log('params', req.params)
  console.log('body', req.body)
  res.json('Received')
});
router.post('*', function (req, res, next) {
  console.log('headers', req.headers)
  console.log('params', req.params)
  console.log('body', req.body)
  res.json('Received')
});

module.exports = router;
