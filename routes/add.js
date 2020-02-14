 var data = require("../data.json");

exports.view = function(request, response){   
	data.purchases.push({
		"item": "Filler Item"/*request.query.item*/,
		"cost": "Filler Cost"/*request.query.cost*/,
		"wantNeed": "Filler Want/Need"/*request.query.wantNeed*/,
		"note": "Filler Note"/*request.query.note*/
	});
	
	//var formData = JSON.stringify($("#myForm").serializeArray());
	
	response.render('add', data);
};