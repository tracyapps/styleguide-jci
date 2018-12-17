(function($) {
	if (document.cookie.indexOf('collapsed_Nodes') >= 0) {
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
			var tag = $(this).parent( '.page_item_has_children' ).data('node');
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
	};

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
		adjustCookie();
	});

	/*
	if (document.cookie.indexOf('collapsed_Nodes') >= 0) {
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
			var tag = $(this).parent( '.page_item_has_children' ).data('node');
			tags.push(tag.replace('#', ''));
		});

		if (tags.length) {
			Cookies.set('collapsed_Nodes', tags.join('|'), {
				expires: 7,
				domain: 'azurewebsites.net',
				path: window.location.pathname
			});
		} else {
			Cookies.remove('collapsed_Nodes', {path: window.location.pathname});
		}
	};

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
		adjustCookie();


	});
	*/

})(jQuery);
(function($) {
	var searchTerm, panelContainerId;
	// Create a new contains that is case insensitive
	$.expr[':'].containsCaseInsensitive = function (n, i, m) {
		return jQuery(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};

	$('#accordion_search_bar').on('change keyup paste click', function () {
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