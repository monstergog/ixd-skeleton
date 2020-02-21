var data = require('../public/data.json');

exports.view = function(req, res){
	console.log(req.query.item);
	data.purchases.splice(req.query.item, 1);
	res.render('history', data);
};