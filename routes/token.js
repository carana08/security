var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

/* GET /token page. */
router.get('/', function(req, res, next) {
    const token = jwt.sign({ role: 'user' }, process.env.JWT_SECRET ,{ expiresIn: '1h' });
  
    res.render('ticket', {
      title: 'Your JWT Token',
      username: req.cookies['username'],
      token: token
    });
  });
  
module.exports = router;