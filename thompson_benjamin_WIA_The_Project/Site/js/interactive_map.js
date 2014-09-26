// JavaScript Document
// Written by Chris Converse
// for Lynda.com

$(document).ready(function() {
// begin Ready

	//...................................................
	// When the form changes
	$('#mapForm').change(function() {
	
		var selectedCounties = $('#mapForm option:selected').val();
		if (selectedCounties == 'ALL'){
			$('a.dot').slideDown(1000);
		}else{
			$('a.dot[counties = "'+selectedCounties+'"]').slideDown(1000);
			$('a.dot[counties != "'+selectedCounties+'"]').slideUp(1000);
		}
		
	});
	
	//...................................................
	// When a dot is clicked
	$('a.dot').click(function(){

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var city = '.city_detail#' + $(this).attr('city');
		var htmlCode = $(city).html();

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .city_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});

// end Ready
});