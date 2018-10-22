jQuery(document).ready( function($) {

	/*grid using "muuri": https://haltu.github.io/muuri/
	var grid = new Muuri(".grid", {
		dragEnabled: true,
		fillGaps: true,
		layoutOnResize: true,
	});
	function setAsideHeight() {
		var mainGridHeight = $( '.grid' ).height();
		$( '.latest-activity' ).height( mainGridHeight );
	}
	setAsideHeight();

	$( window ).resize( function() {
		setAsideHeight();
	});
*/
	$('.open-search-button').click( function() {
		$('.search-open').addClass('visible');
		$('.search-closed').addClass('hidden');
	});
	$('.close-search-button').click( function() {
		$('.search-open').removeClass('visible');
		$('.search-closed').removeClass('hidden');
	});
	
	// using framework "Materialize" https://materializecss.com
 	$('.dropdown-trigger').dropdown();
	$('.collapsible').collapsible();
	$('.sidenav').modifiedsidenav();
	$('.tabs').tabs();
	$('.modal').modal();
	//$('.verticaltabs').tabs();
	
	$(".dropdown-trigger").click(function() {
		$(".item").removeClass("current");
		$(this)
			.closest(".item")
			.addClass("current");
	});

	$(".filter-options-container :checkbox").click(function(event) {
		// Check the target id for the filter to determine
		// the category to show or hide
		if (event.target.id == "filter_configuration") {
			// Hide all elements with the admin category
			var adminElements = [];
			// Add all admin elements, denoted by the
			// class category-administration to an array because the
			// grid.show and grid.hide take an argument type
			// of an array of elements.
			$(".category_configuration").each(function(i, element) {
				adminElements.push(element);
			});
			// Determine whether to show or hide elements based on
			// if the checkbox is currently checked or not.
			if (event.target.checked) {
				grid.show(adminElements);
				setAsideHeight();
			} else {
				grid.hide(adminElements);
				setAsideHeight();
			}
		}
		
		if (event.target.id == "filter_tools") {
			// Hide all elements with the admin category
			var dataManagementElements = [];
			// Add all admin elements, denoted by the
			// class category-administration to an array because the
			// grid.show and grid.hide take an argument type
			// of an array of elements.
			$(".category_tools").each(function(i, element) {
				dataManagementElements.push(element);
			});
			// Determine whether to show or hide elements based on
			// if the checkbox is currently checked or not.
			if (event.target.checked) {
				grid.show(dataManagementElements);
				setAsideHeight();
			} else {
				grid.hide(dataManagementElements);
				setAsideHeight();
			}
		}
		
		if (event.target.id == "filter_help_and_support") {
			// Hide all elements with the admin category
			var monitoringElements = [];
			// Add all admin elements, denoted by the
			// class category-administration to an array because the
			// grid.show and grid.hide take an argument type
			// of an array of elements.
			$(".category_help_and_support").each(function(i, element) {
				monitoringElements.push(element);
			});
			// Determine whether to show or hide elements based on
			// if the checkbox is currently checked or not.
			if (event.target.checked) {
				grid.show(monitoringElements);
				setAsideHeight();
			} else {
				grid.hide(monitoringElements);
				setAsideHeight();
			}
		}
		
		if (event.target.id == "filter_service_health") {
			// Hide all elements with the admin category
			var operationsElements = [];
			// Add all admin elements, denoted by the
			// class category-administration to an array because the
			// grid.show and grid.hide take an argument type
			// of an array of elements.
			$(".category_service_health").each(function(i, element) {
				operationsElements.push(element);
			});
			// Determine whether to show or hide elements based on
			// if the checkbox is currently checked or not.
			if (event.target.checked) {
				grid.show(operationsElements);
				setAsideHeight();
			} else {
				grid.hide(operationsElements);
				setAsideHeight();
			}
		}
		
		if (event.target.id == "filter_applications") {
			// Hide all elements with the admin category
			var helpAndSupportElements = [];
			// Add all admin elements, denoted by the
			// class category-administration to an array because the
			// grid.show and grid.hide take an argument type
			// of an array of elements.
			$(".category_applications").each(function(i, element) {
				helpAndSupportElements.push(element);
			});
			// Determine whether to show or hide elements based on
			// if the checkbox is currently checked or not.
			if (event.target.checked) {
				grid.show(helpAndSupportElements);
				setAsideHeight();
			} else {
				grid.hide(helpAndSupportElements);
				setAsideHeight();
			}
		}

	});


	$('.table-header a.json_view').click( function() {
		$('.table-view').removeClass('visible');
		$('.json-view').addClass('visible');
		$('.content-side').removeClass('content_table_view').addClass('content_json_view');
	});
	
	$('.table-header a.table_view').click( function() {
		$('.json-view').removeClass('visible');
		$('.table-view').addClass('visible');
		$('.content-side').removeClass('content_json_view').addClass('content_table_view');
	});
	
	$('.vtab').click( function() {
		event.preventDefault();
		$('.vtab .nav-link').removeClass('active');
		$(this).children('.nav-link').addClass('active');
		var visible_panel = $(this).children('a').attr('href');
		$('.tab-content .tab-pane').removeClass('active');
		$(visible_panel).addClass('active');
	});
	
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
	//	$( "td:not(.col-req) input" ).contents().unwrap();
		$(this).removeClass('save-schema-button').addClass('edit-schema-button');
		$( '#table-tab-nav a span' ).removeClass( 'has-changes' );
		$('.tab-pane').removeClass('edit-mode');
		grid_schema_view_edit__schema.setOptions({autoEdit:false,editable: false});
		grid_schema_view_edit__sysdata.setOptions({autoEdit:false,editable: false});
		grid_schema_view_edit__brickmetadata.setOptions({autoEdit:false,editable: false});
	});
	
	$('.table-header').on( 'click', 'a.edit-schema-button', function(e) {
		$('.tab-pane').addClass('edit-mode');
		$(this).removeClass('edit-schema-button').addClass('save-schema-button');
		grid_schema_view_edit__schema.setOptions({autoEdit:true,editable: true});
		grid_schema_view_edit__sysdata.setOptions({autoEdit:true,editable: true});
		grid_schema_view_edit__brickmetadata.setOptions({autoEdit:true,editable: true});
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
			grid_schema_view_edit__schema.setOptions({autoEdit:false,editable: false});
			grid_schema_view_edit__sysdata.setOptions({autoEdit:false,editable: false});
			grid_schema_view_edit__brickmetadata.setOptions({autoEdit:false,editable: false});
			$('.tab-pane').removeClass('edit-mode');
			$( '#table-tab-nav a span' ).removeClass( 'has-changes' );
		} else {
		}

	});
	
	$('.tab-pane').on( 'focusin', 'input', function(e) {
		$(this).closest( 'tr' ).addClass( 'active-row' );
	});
	$('.tab-pane').on( 'focusout', 'input', function(e) {
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
	
	
	$('.sidenav-overlay').click( function() {
		$('html.dv body').removeClass('side_menu_open');
	});
	
	$('#show_hide_left_side_nav').click( function() {
		$('html.dv body').toggleClass('side_menu_open');
	});
	
	$('.sidenav-overlay').click( function() {
		$('html.dv body').removeClass('side_menu_open');
	});

	// stylesheet specific
	var current_page_path = window.location.pathname;

	if ( current_page_path === '/dv/styleguide/') {
		$('.styleguide-sidenav .index').addClass( 'current_page' )
	}
	switch ( current_page_path ) {
		case '/dv/styleguide/fonts.php' :
			$('.styleguide-sidenav .fonts').addClass( 'current_page' )
			break;
		case '/dv/styleguide/colors.php' :
			$('.styleguide-sidenav .colors').addClass( 'current_page' )
			break;
		case '/dv/styleguide/buttons_tabs.php' :
			$('.styleguide-sidenav .buttons_tabs').addClass( 'current_page' )
			break;
		case '/dv/styleguide/table.php' :
			$('.styleguide-sidenav .table').addClass( 'current_page' )
			break;
		case '/dv/styleguide/table_complex.php' :
			$('.styleguide-sidenav .table_complex').addClass( 'current_page' )
			break;
		case '/dv/styleguide/navigation.php' :
			$('.styleguide-sidenav .navigation').addClass( 'current_page' )
			break;
		case '/dv/styleguide/code.php' :
			$('.styleguide-sidenav .code').addClass( 'current_page' )
			break;
	}
});