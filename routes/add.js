 var data = require("../data.json");

exports.view = function(request, response){
	response.render('add', data);
};