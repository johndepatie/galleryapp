var express = require('express');
var Image = require('../models/imagegallery')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Image.find(function (err, imagegallery) {
    if (err) console.log(err)

    res.render('index', { title: 'Gallery', name: "projects", imagegallery: imagegallery, tag: "all"});
  });
});

router.get('/tag=one', function(req, res, next) {
  Image.find(function (err, imagegallery) {
    if (err) console.log(err)

    res.render('index', { title: 'Gallery', name: "one", imagegallery: imagegallery, tag: "one"});
  });
});

module.exports = router;
