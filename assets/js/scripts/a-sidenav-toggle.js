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