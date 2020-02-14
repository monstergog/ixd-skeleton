var data = require('../data.json');

exports.view = function(req, res){
	var getLastEntry = "500";
	console.log(getLastEntry);
	res.render('results', data);
};