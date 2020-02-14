/*
 * GET home page.
 */

exports.view = function(req, res){
	res.render('menu', {
	'projects': [
	  { 'name': 'Add Purchase',
		'id': 'project1'
	  },
	  { 'name': 'History',
		'id': 'project2'
	  },
	  {
		'name': 'Help',
		'id': 'project3'
	  }
	]  
	});
};