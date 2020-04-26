var data = require('../public/data.json');

exports.view = function(req, res){
	var index;
	var NW = req.query.needWant;
	var TR = req.query.timeRange;
	var thisDate
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = yyyy + '-' + mm + '-' +	dd;
	var yesterday = new Date(yesterday).setDate(new Date (yesterday).getDate() - 1);
	var oneWeek = new Date(oneWeek).setDate(new Date (oneWeek).getDate() - 7);
	var oneMonth = new Date(oneMonth).setMonth(new Date (oneMonth).getMonth() - 1);
	var oneYear = new Date(oneYear).setFullYear(new Date (oneYear).getFullYear() - 1);
	
	for (index=0; index < data.purchases.length; index++)
	{
		data.purchases[index].vis = "no";
	}
	
	for (index=0; index < data.purchases.length; index++)
	{	
		if (NW == "null" && TR == "null")
		{
			data.purchases[index].vis = "yes";
		}
		else if (data.purchases[index].wantNeed == NW && TR == "null")
		{
			data.purchases[index].vis = "yes";
		}
		else if (NW == "null" && TR != "null")
		{
			thisDate = Date.parse(data.purchases[index].date);
			if (TR == "day")
			{
				if (new Date(thisDate).getTime() == new Date (today).getTime())
				{
					data.purchases[index].vis = "yes";
				}
			}
			else if (TR == "yesterday")
			{
				if (new Date (yesterday).getTime() > new Date(thisDate).getTime() > new Date (today).getTime())
				{
					data.purchases[index].vis = "yes";
				}
			}
			else if (TR == "week")
			{
				if (new Date (oneWeek).getTime() > new Date(thisDate).getTime() > new Date (today).getTime())
				{
					data.purchases[index].vis = "yes";
				}
			}
			else if (TR == "month")
			{
				if (new Date (oneMonth).getTime() > new Date(thisDate).getTime() > new Date (today).getTime())
				{
					data.purchases[index].vis = "yes";
				}
			}
			else if (TR == "year")
			{
				if (new Date (oneYear).getTime() > new Date(thisDate).getTime() > new Date (today).getTime())
				{
					data.purchases[index].vis = "yes";
				}
			}
		}
	}
	
	res.render('history', data);
};