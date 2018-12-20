(function($) {

	if ( $( 'body' ).hasClass( 'styleguide_specific') ) {
		$('.tabs').tabs();
	}

	$('.vtab').click( function() {
		event.preventDefault();
		$('.vtab .nav-link').removeClass('active');
		$(this).children('.nav-link').addClass('active');
		var visible_panel = $(this).children('a').attr('href');
		$('.tab-content .tab-pane').removeClass('active');
		$(visible_panel).addClass('active');
	});

})(jQuery);