var express = require('express');
var Image = require('../models/imagegallery')
var router = express.Router();

var count = [
  Image.count(),
  Image.countDocuments( {tags:"one"} ),
  Image.find( {tags:"two"} ).size(),
  Image.find( {tags:"three"} ),
  Image.find( {tags:"test"} ),
  Image.find( {tags:"a"} ),
  Image.find( {tags:"b"} ),
  Image.find( {tags:"c"} )
]

/* GET home page. */
router.get('/', function(req, res, next) {
  Image.find(function (err, imagegallery) {
    if (err) console.log(err)

    res.render('index', {
      title: 'Gallery',
      name: "projects",
      imagegallery: imagegallery,
      tag: "all",
      count
    });
  });
});

router.get('/tag=forest', function(req, res, next) {
  Image.find( { tags:"forest" }, function (err, imagegallery) {
    if (err) console.log(err)
    res.render('index', {
      title: 'Gallery',
      name: "projects",
      imagegallery: imagegallery,
      tag: "forest",
      count
    });
  });
});

router.get('/tag=mountain', function(req, res, next) {
  Image.find( { tags:"mountain" }, function (err, imagegallery) {
    if (err) console.log(err)
    res.render('index', {
      title: 'Gallery',
      name: "projects",
      imagegallery: imagegallery,
      tag: "mountain",
      count
    });
  });
});

router.get('/tag=ocean', function(req, res, next) {
  Image.find( { tags:"water" }, function (err, imagegallery) {
    if (err) console.log(err)
    res.render('index', {
      title: 'Gallery',
      name: "projects",
      imagegallery: imagegallery,
      tag: "water",
      count
    });
  });
});

router.get('/tag=wildlife', function(req, res, next) {
  Image.find( { tags:"wildlife" }, function (err, imagegallery) {
    if (err) console.log(err)
    res.render('index', {
      title: 'Gallery',
      name: "projects",
      imagegallery: imagegallery,
      tag: "wildlife",
      count
    });
  });
});

router.get('/tag=tech', function(req, res, next) {
  Image.find( { tags:"tech" }, function (err, imagegallery) {
    if (err) console.log(err)
    res.render('index', {
      title: 'Gallery',
      name: "projects",
      imagegallery: imagegallery,
      tag: "tech",
      count
    });
  });
});

router.get('/tag=city', function(req, res, next) {
  Image.find( { tags:"city" }, function (err, imagegallery) {
    if (err) console.log(err)
    res.render('index', {
      title: 'Gallery',
      name: "projects",
      imagegallery: imagegallery,
      tag: "city",
      count
    });
  });
});

router.get('/tag=road', function(req, res, next) {
  Image.find( { tags:"road" }, function (err, imagegallery) {
    if (err) console.log(err)
    res.render('index', {
      title: 'Gallery',
      name: "projects",
      imagegallery: imagegallery,
      tag: "road",
      count
    });
  });
});

module.exports = router;
