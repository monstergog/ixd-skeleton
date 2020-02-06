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
	  $('.searchMenu').remove();
	  $('.hidden').removeClass('hidden');
	  //event.preventDefault();
	});
	
	$(".advanced").click(function(event){
		$('.hidden2').removeClass('hidden2');
		$('.advanced').remove();
		//event.preventDefault();
	});
}