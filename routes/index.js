var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function (req, res, next) {
  console.log('headers', req.headers)
  console.log('params', req.params)
  console.log('body', req.body)
  res.json({"success":true,token:"null"})
});
router.post('*', function (req, res, next) {
  console.log('headers', req.headers)
  console.log('params', req.params)
  console.log('body', req.body)
  res.json({"success":true,token:"null"})
});
router.put('*', function (req, res, next) {
  console.log('headers', req.headers)
  console.log('params', req.params)
  console.log('body', req.body)
  res.json({"success":true,token:"null"})
});
router.patch('*', function (req, res, next) {
  console.log('headers', req.headers)
  console.log('params', req.params)
  console.log('body', req.body)
  res.json({"success":true,token:"null"})
});
router.delete('*', function (req, res, next) {
  console.log('headers', req.headers)
  console.log('params', req.params)
  console.log('body', req.body)
  res.json({"success":true,token:"null"})
});
module.exports = router;
