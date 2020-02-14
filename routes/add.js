 var data = require("../data.json");

exports.view = function(request, response){   
	data.purchases.push({
		"itme": request.query.item,
		"wantNeed": request.query.wantNeed,
		"note": request.query.note
		});
	
	console.log(request.query.item);
	console.log(request.query.wantNeed);
	console.log(request.query.note);
	response.render('add', data);
};