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

	$(document).ready(function() {
		$('.search-dropdown').select2();
	});

	$('.dropdown-trigger').dropdown();
	$('.collapsible').collapsible();
	$('#left-side-nav').styleguidemodifiedsidenav();

	$('#show_hide_left_side_nav').click( function() {
		$('#side_nav_example_for_styleguide_container').addClass('side_menu_open');
	});

	$('#hide_side_nav').click( function() {
		$('#side_nav_example_for_styleguide_container').removeClass('side_menu_open');
	});
})(jQuery);