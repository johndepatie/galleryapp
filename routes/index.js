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

router.get('/tag=one', function(req, res, next) {
  Image.find( { tags:"one" }, function (err, imagegallery) {
    if (err) console.log(err)
    res.render('index', {
      title: 'Gallery',
      name: "one",
      imagegallery: imagegallery,
      tag: "one",
      count
    });
  });
});

module.exports = router;
