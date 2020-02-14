var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	
	// Object.keys(data).forEach(function(data) {
		// data[cost] = data[cost].reduce(function (a,b) {
			// return (+a) + (+b);
	
	res.render('history', data);
};