var express = require('express');
var router = express.Router();

var cookieParser = require('cookie-parser');
router.use(cookieParser());

var jwt = require('jsonwebtoken');

/* GET /token page. */
router.get('/', async function(req, res, next) {
    const username = req.cookies['username'];
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET ,{ expiresIn: '1h' });
  
    res.render('ticket', {
      title: 'Your JWT Token',
      username: req.cookies['username'],
      token: token
    });
  });
  
module.exports = router;