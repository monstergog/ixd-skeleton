'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".formSubmit").click(function(event){
	  $('.searchMenu').hide();
	  $('.hidden').removeClass('hidden');
	  event.preventDefault();
	});
	
	$(".advanced").click(function(event){
		$('.hidden2').removeClass('hidden2');
		$('.advanced').hide();
		event.preventDefault();
	});
	
	$(".addList").click(addToList);
}

function addToList(){
	console.log("Added to List");
	
	var x = document.getElementById("myText").value;
	var newPurchase = {
		"item": document.getElementById("item").value,
		"cost": document.getElementById("cost").value,
		"wantNeed": document.getElementById("wantNeed").value,
		"note": document.getElementById("note").value
	}
	console.log(newPurchase);
	
	// saveDataToPublicFolder(purchase, function(err) {
		// if (err) {
			// res.status(404).send('Data Not Saved');
			// return;
		// }
		
		// res.send('Data Saved');
	// });
	
	// function savePersonToPublicFolder(data, callback) {
		// fs.writeFile('../data.json', JSON.stringify(data), callback);
	// }
	
	// $.ajax({
		// url: 'data',
		// type: 'GET',
		// dataType: 'json',
		// success: (data) => {
			// console.jog('ajax success');
		// }
	// });
	
}