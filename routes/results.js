var data = require('../data.json');

exports.view = function(req, res){
	var lastObj = {
		'obj': [{
		"item": req.query.item,
		"cost": req.query.cost,
		"wantNeed": req.query.wantNeed,
		"note": req.query.note
		}]
	};
	
	data.purchases.push({
		"item": req.query.item,
		"cost": req.query.cost,
		"wantNeed": req.query.wantNeed,
		"note": req.query.note
	});
	
	res.render('results', lastObj);
};