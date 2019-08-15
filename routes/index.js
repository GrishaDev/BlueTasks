var express = require('express');
var router = express.Router();
let methods = require('../logic/methods.js');

methods = new methods();

router.get('/', (req, res, next)=> {
    methods.home(req,res);
});

router.get('/data/:id', (req, res, next)=> {
    methods.showData(req,res);
});

router.post('/checkuser', (req, res, next)=> {
    methods.CheckUser(req,res);
});

router.post('/deletetask',(req,res)=>
{
    methods.deleteTask(req,res);
});

module.exports = router;
