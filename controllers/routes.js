var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    burger.all(function (burger_data) {
        // console.log(burger_data);
        res.render('index', { burger_data });
    });
});

router.get('/burgers/update/:id', function (req, res) {
    var condition = req.params.id;//'id = ' + req.params.id;
    console.log(condition);

    burger.updateOne(condition, function (result) {
        console.log(result);
        res.redirect('/');
    });
});

router.post('/burgers/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        res.redirect('/');
    });
});

module.exports = router;