(function($) {

	$('.page_item_has_children').not('.current_page_ancestor, .current_page_item').each( function() {
		$('.children', this).addClass('hide');
		$('.children', this).slideUp(0);
		$(this).find('.open_close').addClass('closed');
	});

	if (document.cookie.indexOf('collapsed_Nodes') >= 0) {
		var getCollapsed = Cookies.get('collapsed_Nodes');
		var checkCollapsed = getCollapsed.split('|');
		var arrayLength = checkCollapsed.length;
		for (var i = 0; i < arrayLength; i++) {
			$('[data-node="#' + checkCollapsed[i] + '"] .children').addClass('hide');
			$('[data-node="#' + checkCollapsed[i] + '"] .open_close').addClass('closed');
		}
	}

	/*if (document.cookie.indexOf('collapsed_Nodes') >= 0) {
		var getCollapsed = Cookies.get('collapsed_Nodes');
		var checkCollapsed = getCollapsed.split('|');
		var arrayLength = checkCollapsed.length;
		for (var i = 0; i < arrayLength; i++) {
			$('[data-node="#' + checkCollapsed[i] + '"] .children').addClass('hide');
			$('[data-node="#' + checkCollapsed[i] + '"] .open_close').addClass('closed');
		}
	}
	var adjustCookie = function() {
		var tags = [];
		$('.page-tree .hide').each(function() {
			var tag = $(this).parent( '.page_item_has_children, .menu-item-has-children' ).data('node');
			tags.push(tag.replace('#', ''));
		});

		if (tags.length) {
			Cookies.set('collapsed_Nodes', tags.join('|'), {
				expires: 7,
				//domain: 'azurewebsites.net',
				path: window.location.pathname
			});
		} else {
			Cookies.remove('collapsed_Nodes', {path: window.location.pathname});
		}
	};*/

	$('.open_close').click(function() {
		if ($(this).parent().next('.children').is(':visible')) {
			$(this).parent().next('.children').slideUp(300);
			$(this).parent().next('.children').addClass('hide');
			$(this).addClass('closed');
		} else {
			$(this).parent().next('.children').slideDown(300);
			$(this).parent().next('.children').removeClass('hide');
			$(this).removeClass('closed');
		}
		//adjustCookie();
	});


	var thingsThatWereClosed = [];
	var updateTheList = function() {
		thingsThatWereClosed = [];
		$('.page-tree .hide').each(function() {
			var oneThingClosed = $(this).parent( '.page_item_has_children, .menu-item-has-children' ).data('node');
			thingsThatWereClosed.push( oneThingClosed.replace( '#', '' ) );
		});
	};
	updateTheList();
	$('#accordion_search_bar')
		.focus( function() {
			if( $(this).val() == '' ) {
				updateTheList();
			}
		})
		.on( 'change keyup paste', function() {
			$('.page_item_has_children').each( function() {
				$('.children', this).removeClass('hide');
				$('.children', this).slideDown(200);
				$(this).find('.open_close').removeClass('closed');
			});
		})
		.blur( function() {
		if( $(this).val() == '' ) {
			for (var i = 0; i < thingsThatWereClosed.length; i++) {
				$('[data-node="#' + thingsThatWereClosed[i] + '"] .children').addClass('hide');
				$('[data-node="#' + thingsThatWereClosed[i] + '"] .children').slideUp(200);
				$('[data-node="#' + thingsThatWereClosed[i] + '"] .open_close').addClass('closed');
			}
		}
	});

})(jQuery);
(function($) {
	var searchTerm, panelContainerId;
	// Create a new contains that is case insensitive
	$.expr[':'].containsCaseInsensitive = function (n, i, m) {
		return jQuery(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};

	$('#accordion_search_bar').on('change keyup paste click blur', function () {
		searchTerm = $(this).val();
		$('#accordion .page_item').each(function () {
			panelContainerId = '#' + $(this).attr('id');
			$(panelContainerId + ':not(:containsCaseInsensitive(' + searchTerm + '))').hide();
			$(panelContainerId + ':containsCaseInsensitive(' + searchTerm + ')').show();
		});
	});
})(jQuery);
function qsa(sel) {
	return Array.apply(null, document.querySelectorAll(sel));
}

qsa(".codemirror").forEach(function (editorEl) {

	CodeMirror.fromTextArea(editorEl, {
		lineNumbers: true,
		styleActiveLine: true,
		matchBrackets: true,
		theme: 'monokai',
		dragDrop: false,
		mode: "text/html",
	});
});

function qsa2(sel) {
	return Array.apply(null, document.querySelectorAll(sel));
}

qsa2(".codemirror_style").forEach(function (editorEl) {

	CodeMirror.fromTextArea(editorEl, {
		lineNumbers: true,
		styleActiveLine: true,
		matchBrackets: true,
		theme: 'monokai',
		dragDrop: false,
		mode: "text/x-scss",
	});
});
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

})(jQuery);
jQuery(document).ready( function($) {

	//pullquote
	$('span.pullquote.right').each(function(index) {
		var $parentParagraph = $(this).parent('p');
		$parentParagraph.css('position', 'relative');
		$(this).clone()
			.addClass('pulled-right')
			.prependTo($parentParagraph);
	});
	$('span.pullquote.left').each(function(index) {
		var $parentParagraph = $(this).parent('p');
		$parentParagraph.css('position', 'relative');
		$(this).clone()
			.addClass('pulled-left')
			.prependTo($parentParagraph);
	});
	
});
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