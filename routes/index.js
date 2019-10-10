var express = require('express');
var router = express.Router();
let methods = require('../logic/methods.js');
let passport = require('passport');

methods = new methods();

// router.get('/home', (req, res, next)=> {
    
//     methods.home(req,res);
// });


router.get('/test', passport.authenticate('saml'),(req, res, next)=> {
    
    // passport.authenticate('saml', { failureRedirect: '/nothing', failureFlash: true }),
    // (req, res)=> {
    //     res.redirect('/nothing');
    // }
});

router.get('/data/:id', (req, res, next)=> {
    methods.showData(req,res);
});

router.get('/authdata', (req, res, next)=> {
    methods.authData(req,res);
});

router.post('/checkuser', (req, res, next)=> {
    methods.CheckUser(req,res);
});

router.post('/deletetask',(req,res)=>
{
    methods.deleteTask(req,res);
});




module.exports = router;
