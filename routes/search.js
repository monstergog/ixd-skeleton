
/*
 * GET home page.
 */

exports.view = function(req, res){
	res.render('search', {
	'projects': [
	  { 'name': 'Location',
		'id': 'project1'
	  },
	  { 'name': 'Craving',
		'id': 'project2',
		'option1': 'Fast Food',
		'option2': 'Chinese',
		'option3': 'Pizza',
		'option4': 'Japanese',
		'option5': 'Pasta'
	  },
	  { 'name': 'Budget',
		'id': 'project3',
		'option1': '$',
		'option2': '$$',
		'option3': '$$$'
	  },
	  	  { 'name': 'Results',
		'id': 'project3'
	  }
	]  
	});
};