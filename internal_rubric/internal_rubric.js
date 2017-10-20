var $ = jQuery.noConflict();

$(document).ready(function() {

	var width = $(document).width();

	$('.descriptor').equalHeights();

	if (width > 767) {
		$('h4.level').equalHeights();
	}

	$(window).resize(function() {

		$('.descriptor').css('height','auto');
		$('.descriptor').equalHeights();



		if (width > 767) {
			$('h4.level').css('height','auto');
			$('h4.level').equalHeights();
		} else {
			$('h4.level').css('height','auto');
		}

	});


	/*jQuery(function() {
	 	jQuery( ".criteria:not(h3)" ).selectable();
	});*/

	//for each element that is classed as 'pull-down', set its margin-top to the difference between its own height and the height of its parent
	$('.pull-down').each(function() {
		$(this).css('margin-top', $(this).parent().height()-$(this).height())
	});

});