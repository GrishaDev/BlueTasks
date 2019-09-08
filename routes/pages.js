var express = require('express');
var router = express.Router();
var path = require('path');


const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];


router.get('/', (req, res, next)=> {
    // res.redirect('/');
    console.log(req.user);
    // res.sendFile('../client/BlueTasksNG/index.html');
    // console.log(path.join(__dirname,'../client/BlueTasksNG/index.html'));

    // res.sendFile(path.join(__dirname,'../client/BlueTasksNG/index.html'));
    // res.render(path.join(__dirname,'../client/index.html'));

    // if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    //     res.sendFile(path.resolve(`client/BlueTasksNG/${req.url}`));
    //   } else {
    //     res.sendFile(path.resolve('client/BlueTasksNG/index.html'));
    //   }


    // res.sendFile(path.resolve('client/BlueTasksNG/index.html'));
    // res.send(req.user);
});

module.exports = router;