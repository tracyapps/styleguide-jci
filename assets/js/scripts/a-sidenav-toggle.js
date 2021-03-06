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