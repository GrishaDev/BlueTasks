var express = require('express');
var router = express.Router();

router.get('/home', (req, res, next)=> {
    res.redirect('/');
});

module.exports = router;