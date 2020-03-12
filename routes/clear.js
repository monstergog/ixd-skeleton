var data = require('../public/data.json');

exports.view = function(req, res){
	var newData = [];
	var index;
	data.purchases = newData;
	res.render('history', data);
};