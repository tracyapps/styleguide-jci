(function($) {

	$('.edit-save-toggle').click( function() {
		$(this).toggleClass('blue-button');
		$(this).toggleClass('green-button');
		$('.cancel-button').toggleClass('hidden');
		$('.edit-save-toggle svg').toggleClass('fa-pencil-alt');
		$('.edit-save-toggle svg').toggleClass('fa-save');
		$('span.edit-or-view').text( function(i, text) {
			return text === "Viewing" ? "Editing" : "Viewing";
		});
		$('span.edit-or-save').text( function(i, text) {
			return text === "Edit" ? "Save" : "Edit";
		});
	});

	$('.table-header').on( 'click', 'a.save-schema-button', function(e) {
		var inputValue = $( "td:not(.col-req) input" ).val();
		$( "td:not(.col-req) input" ).contents().unwrap();
		$(this).removeClass('save-schema-button').addClass('edit-schema-button');
		$( '#table-tab-nav a span' ).removeClass( 'has-changes' );

	});

	$('.table-header').on( 'click', 'a.edit-schema-button', function(e) {
		$( "td:not(.col-req)" ).contents().wrap( function() {
			return "<input type='text' value='" + $( this ).text() + "' />";
		});
		$(this).removeClass('edit-schema-button').addClass('save-schema-button');
	});

	$('.cancel-button').click( function() {
		var result = window.confirm("Are you sure you want to cancel? Your changes will not be saved.");
		if ( result == true ){
			$(this).toggleClass('hidden');
			$('.edit-save-toggle').removeClass('save-schema-button').removeClass('green-button').addClass('edit-schema-button').addClass('blue-button');
			$('.edit-save-toggle svg').toggleClass('fa-pencil-alt');
			$('.edit-save-toggle svg').toggleClass('fa-save');
			$('span.edit-or-view').text( function(i, text) {
				return text === "Viewing" ? "Editing" : "Viewing";
			});
			$('span.edit-or-save').text( function(i, text) {
				return text === "Edit" ? "Save" : "Edit";
			});
			$( "td:not(.col-req) input" ).contents().unwrap();
			$( '#table-tab-nav a span' ).removeClass( 'has-changes' );
		} else {
		}

	});

	$('table').on( 'focusin', 'input', function(e) {
		$(this).closest( 'tr' ).addClass( 'active-row' );
	});
	$('table').on( 'focusout', 'input', function(e) {
		$(this).closest( 'tr' ).removeClass( 'active-row' );
		var tab_that_has_edits = $(this).closest( 'div.tab-pane' ).attr('id');
		$( '#table-tab-nav a#' + tab_that_has_edits + '-tab span' ).addClass( 'has-changes' );
	});

	$('.toggle-versions-drawer-button').click( function() {
		$(this).parent('.previous-versions').toggleClass('open');
		$('.previous-versions span.show-or-hide').text( function(i, text) {
			return text === "Show" ? "Hide" : "Show";
		});
	});

	$('#show_hide_left_side_nav').click( function() {
		$('html.dv body').toggleClass('side_menu_open');
	});

})(jQuery);