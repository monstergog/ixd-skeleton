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
	  if (errCheck() == true)
	  {
		$('.searchMenu').hide();
		$('.hidden').removeClass('hidden');
	  }
	  event.preventDefault();
	});
	
	$(".advanced").click(function(event){
		$('.hidden2').removeClass('hidden2');
		$('.advanced').hide();
		event.preventDefault();
	});

	$("#project2").click(("send", "event", 'history', 'click'));
}

function errCheck(){
	var item = document.getElementById("item").value;
	var cost = document.getElementById("cost").value;
	var wantNeed = document.getElementById("wantNeed").value;
	var note = document.getElementById("note").value;
	var date = document.getElementById("date").value;
	
	if (item === ""){alert("Please Submit an Item"); return false;}
	if (cost === ""){alert("Please Submit an Dollar Amount"); return false;}
	else if (cost < 1){alert("Please Submit a Whole Positive Dollar Amount"); return false;}
	if (wantNeed == 'null'){alert("Please Select Want or Need"); return false;}
	if (date == ""){alert("Please Submit a Date"); return false;}
	return true;
};

function filter()
{
	$.get("./data.json", callBackFn);
}

function callBackFn(result) {
	$('.toFilter').hide();
	console.log(result.purchases[0].date);
}