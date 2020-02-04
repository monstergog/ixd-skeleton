
/*
 * GET home page.
 */

exports.view = function(req, res){
	res.render('index', {
	'projects': [
	  { 'name': 'Search',
		'id': 'project1'
	  },
	  { 'name': 'History',
		'id': 'project2'
	  },
	  {
		'name': 'Help',
		'id': 'project3'
	  },
	  { 'name': 'Logout',
		'id': 'project4'
	  }
	]  
	});
};