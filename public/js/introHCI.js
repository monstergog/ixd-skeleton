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
		$('.searchMenu').slideUp('slow');
		$('.hidden2').slideDown('slow');
	  }
	  event.preventDefault();
	});
	
	$(".moveNext").click(function(event){
		event.preventDefault();
		$(".toFade").slideUp('slow');
		$('.hidden2').slideDown('slow');
	});
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