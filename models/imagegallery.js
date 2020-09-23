var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new mongoose.Schema({
	name: { type: String, required: true },
	imgsrc: { type: String, required: true },
	thumbnail: { type: String, required: true },
	desc: String,
	tags: Array
});

module.exports = new mongoose.model('Image', imageSchema);