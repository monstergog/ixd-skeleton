 var data = require('../public/data.json');

exports.view = function(request, response){
	response.render('add', data);
};