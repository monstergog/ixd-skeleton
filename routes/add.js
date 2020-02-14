 var data = require("../data.json");

exports.view = function(request, response){   
	data.purchases.push({
		"item": request.query.item,
		"cost": request.query.cost,
		"wantNeed": request.query.wantNeed,
		"note": request.query.note
	});
	
	//var formData = JSON.stringify($("#myForm").serializeArray());
	
	response.render('add', data);
};