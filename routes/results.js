var data = require('../public/data.json');

exports.view = function(req, res){
	var lastObj = {
		'obj': [{
		"num": data.purchases.length+1,
		"item": req.query.item,
		"cost": req.query.cost,
		"wantNeed": req.query.wantNeed,
		"date": req.query.date,
		"note": req.query.note,
		"vis":"yes"
		}]
	};
	
	data.purchases.push({
		"num": data.purchases.length+1,
		"item": req.query.item,
		"cost": req.query.cost,
		"wantNeed": req.query.wantNeed,
		"date": req.query.date,
		"note": req.query.note,
		"vis":"yes"
	});
	
	res.render('results', lastObj);
};