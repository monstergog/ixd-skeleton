var data = require('../public/data.json');

exports.view = function(req, res){
	
	var newData = [];
	var index;
	
	for (index=0; index < data.purchases.length; index++)
	{
		if (data.purchases[index].num != req.query.item) {
			if (index < req.query.item)
			{
				data.purchases[index].num = index+1;
				newData[index] = data.purchases[index];
			}
			else 
			{
				data.purchases[index].num = index;
				newData[index-1] = data.purchases[index];
			}
			console.log(newData);
		}
	}
	data.purchases = newData;
	
	// console.log(newData);
	
	//data.purchases.splice(0, data.purchases.length);
	res.render('history', data);
};