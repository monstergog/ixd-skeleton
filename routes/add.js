 var data = require("../data.json");

exports.view = function(request, response){   
	data.purchases.push({
		"item": ,
		"cost": ,
		"wantNeed": ,
		"note": 
	});
	
	response.render('add', data);
};