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
(function () {
	$('.standard-table').on( 'click', '.schemaList_entity_link', function( e ) {
		window.location = 'schema.php';
	});

	$('.standard-table').on( 'click', '.schemaCollection_link', function( e ) {
		window.location = 'collection.php';
	});
})(jQuery);

/**
 **
 **  start slickgrid stuff
 **
 **/
// *** grid resizing
var DATAGRID_MIN_HEIGHT = 180;
var DATAGRID_MIN_WIDTH = 300;
var DATAGRID_BOTTOM_PADDING = 80;
/** Attach an auto resize trigger on the datagrid, if that is enable then it will resize itself to the available space
 * Options: we could also provide a % factor to resize on each height/width independently
 */
function attachAutoResizeDataGrid(grid, gridId, gridContainerId) {
	var gridDomElm = $('#' + gridId);
	if (!gridDomElm || typeof gridDomElm.offset() === "undefined") {
		// if we can't find the grid to resize, return without attaching anything
		return null;
	}
	//-- 1st resize the datagrid size on first load (because the onResize is not triggered on first page load)
	resizeToFitBrowserWindow(grid, gridId, gridContainerId);
	//-- 2nd attach a trigger on the Window DOM element, so that it happens also when resizing after first load
	$(window).on("resize", function () {
		// for some yet unknown reason, calling the resize twice removes any stuttering/flickering when changing the height and makes it much smoother
		resizeToFitBrowserWindow(grid, gridId, gridContainerId);
		resizeToFitBrowserWindow(grid, gridId, gridContainerId);
	});
	// in a SPA (Single Page App) environment you SHOULD also call the destroyAutoResize()
}
/* destroy the resizer when user leaves the page */
function destroyAutoResize() {
	$(window).trigger('resize').off('resize');
}
/**
 * Private function, calculate the datagrid new height/width from the available space, also consider that a % factor might be applied to calculation
 * object gridOptions
 */
function calculateGridNewDimensions(gridId, gridContainerId) {
	var availableHeight = $(window).height() - $('#' + gridId).offset().top - DATAGRID_BOTTOM_PADDING;
	var availableWidth = $('#' + gridContainerId).width();
	var newHeight = availableHeight;
	var newWidth = availableWidth;
	// we want to keep a minimum datagrid size, apply these minimum if required
	if (newHeight < DATAGRID_MIN_HEIGHT) {
		newHeight = DATAGRID_MIN_HEIGHT;
	}
	if (newWidth < DATAGRID_MIN_WIDTH) {
		newWidth = DATAGRID_MIN_WIDTH;
	}
	return {
		height: newHeight,
		width: newWidth
	};
}
/** resize the datagrid to fit the browser height & width */
function resizeToFitBrowserWindow(grid, gridId, gridContainerId) {
	// calculate new available sizes but with minimum height of 220px
	var newSizes = calculateGridNewDimensions(gridId, gridContainerId);
	if (newSizes) {
		// apply these new height/width to the datagrid
		$('#' + gridId).height(newSizes.height);
		$('#' + gridId).width(newSizes.width);
		// resize the slickgrid canvas on all browser except some IE versions
		// exclude all IE below IE11
		if (new RegExp('MSIE [6-8]').exec(navigator.userAgent) === null && grid) {
			grid.resizeCanvas();
		}
	}
}

// *** end grid resizing functions
function pad5(number) {
	var newNumber = number;
	if( number.toString().length === 1 ) {
		newNumber = '0000' + number;
	}
	if ( number.toString().length === 2 ) {
		newNumber = '000' + number;
	}
	if ( number.toString().length === 3 ) {
		newNumber = '00' + number;
	}
	if ( number.toString().length === 4 ) {
		newNumber = '0' + number;
	}
	return newNumber;
}

var dropdownOptions_type = {
	'string':		'String',
	'object':		'Object',
	'array':		'Array',
	'number':		'Number',
	'boolean':	'Boolean',
}

function PopulateSelect(select, dataSource, addBlank) {
	var index, len, newOption;
	if (addBlank) { select.appendChild(new Option('', '')); }
	$.each(dataSource, function (value, text) {
		newOption = new Option(text, value);
		select.appendChild(newOption);
	});
};
function Select2Editor(args) {
	var $input;
	var defaultValue;
	var scope = this;
	var calendarOpen = false;
	this.keyCaptureList = [ Slick.keyCode.UP, Slick.keyCode.DOWN, Slick.keyCode.ENTER ];
	this.init = function () {
		$input = $('<select></select>');
		$input.width(args.container.clientWidth + 3);
		PopulateSelect($input[0], args.column.dataSource, true);
		$input.appendTo(args.container);
		$input.focus().select();

		$input.select2({
			placeholder: '-',
			allowClear: true
		});
	};
	this.destroy = function () {
		$input.select2('destroy');
		$input.remove();
	};
	this.show = function () {
	};
	this.hide = function () {
		$input.select2('results_hide');
	};
	this.position = function (position) {
	};
	this.focus = function () {
		$input.select2('input_focus');
	};
	this.loadValue = function (item) {
		defaultValue = item[args.column.field];
		$input.val(defaultValue);
		$input[0].defaultValue = defaultValue;
		$input.trigger("change.select2");
	};
	this.serializeValue = function () {
		return $input.val();
	};
	this.applyValue = function (item, state) {
		item[args.column.field] = state;
	};
	this.isValueChanged = function () {
		return (!($input.val() == "" && defaultValue == null)) && ($input.val() != defaultValue);
	};
	this.validate = function () {
		return {
			valid: true,
			msg: null
		};
	};
	this.init();
}
function Select2Formatter(row, cell, value, columnDef, dataContext) {
	return columnDef.dataSource[value] || '-';
}

function HTMLFormatter_delete(row, cell, value, columnDef, dataContext) {
	return "<a class='action_delete modal-trigger' href='#modal_deleteNotes'><i class='fal fa-trash-alt'></i></a>";
}

function HTMLFormatter_quickView(row, cell, value, columnDef, dataContext) {
	return "<a class='quick_view modal-trigger' href='#modal_schemaList'><i class='fal fa-eye'></i></a>";
}

function CustomCheckmarkFormatter(row, cell, value, columnDef, dataContext) {
	return value ? "<i class='fas fa-check-square'></i>" : "";
}

function pickRandomProperty(obj) {
	var result;
	var count = 0;
	for (var prop in obj)
		if (Math.random() < 1/++count)
			result = prop;
	return result;
}

/*****************************
 **
 ** start slickgrid tables
 **
 ****************************/

/**
 ** --- schema management pages --
 **/

// ---- schema grid 01: schema collection list
function grid_schemaCollectionList__comparer(a, b) {
	var x = a[grid_schemaCollectionList__sortcol], y = b[grid_schemaCollectionList__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

var grid_schemaCollectionList__dataView;
var grid_schemaCollectionList;
var grid_schemaCollectionList__columns = [
	{
		id: "schemaCollection_name",
		name: "Collection Name",
		field: "schemaCollection_name",
		minWidth: 100,
		resizable: true,
		sortable: true,
		cssClass: "schemaCollection_link",
	},
	{
		id: "schemaCollection_entity",
		name: "Entities",
		field: "schemaCollection_entity",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
	{
		id: "schemaCollection_message",
		name: "Messages",
		field: "schemaCollection_message",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
	{
		id: "schemaCollection_relationship",
		name: "Relationships",
		field: "schemaCollection_relationship",
		minWidth: 50,
		resizable: true,
		sortable: true,

	},
	{
		id: "schemaCollection_event",
		name: "Events",
		field: "schemaCollection_event",
		minWidth: 30,
		resizable: true,
		sortable: true,
	},
	{
		id: "schemaCollection_actionRow",
		name: " ",
		field: "schemaCollection_actionRow",
		minWidth: 30,
		width: 40,
		resizable: true,
		sortable: false,
		formatter: HTMLFormatter_delete,
		cssClass: "action_row",
	},
];
var grid_schemaCollectionList__data = [];
var grid_schemaCollectionList__sortcol = "schemaCollection_name";
var grid_schemaCollectionList__sortdir = 1;


function grid_schemaCollectionList__loadData(count) {
	grid_schemaCollectionList__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_schemaCollectionList__data[i] = {});
		d["id"] = "id_schema_collect_" + i;
		d["schemaCollection_name"] = "col_ID_" + pad5(i);
		d["schemaCollection_entity"] = Math.round(Math.random() * 650 );
		d["schemaCollection_message"] = Math.round(Math.random() * 100 );
		d["schemaCollection_relationship"] = Math.round(Math.random() * 25 );
		d["schemaCollection_event"] = Math.round(Math.random() * 41 );
		d["schemaCollection_actionRow"] = HTMLFormatter_delete;
	}
	grid_schemaCollectionList__dataView.setItems(grid_schemaCollectionList__data);
}
$(function () {
	var grid_schemaCollectionList__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 32,
		enableColumnReorder: true,
		autoEdit:false,
		editable: false,
	};

	grid_schemaCollectionList__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_schemaCollectionList = new Slick.Grid(
		"#grid_schemaCollectionList",
		grid_schemaCollectionList__dataView,
		grid_schemaCollectionList__columns,
		grid_schemaCollectionList__options
	);
	attachAutoResizeDataGrid(grid_schemaCollectionList, "grid_schemaCollectionList", "content-panel");
	var pager = new Slick.Controls.Pager(grid_schemaCollectionList__dataView, grid_schemaCollectionList, $("#pager_schemaCollectionList"));
	// ---- paging
	grid_schemaCollectionList__dataView.onPagingInfoChanged.subscribe(function (e, pagingInfo) {
		var isLastPage = pagingInfo.pageNum == pagingInfo.totalPages - 1;
		var enableAddRow = isLastPage || pagingInfo.pageSize == 0;
		var options = grid_schemaCollectionList.getOptions();
		if (options.enableAddRow != enableAddRow) {
			grid_schemaCollectionList.setOptions({enableAddRow: enableAddRow});
		}
	});
	grid_schemaCollectionList.getCanvasNode().focus();
	grid_schemaCollectionList.onSort.subscribe(function (e, args) {
		grid_schemaCollectionList__sortdir = args.sortAsc ? 1 : -1;
		grid_schemaCollectionList__sortcol = args.sortCol.field;

		grid_schemaCollectionList__dataView.sort(grid_schemaCollectionList__comparer, args.sortAsc);
	});
	grid_schemaCollectionList__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_schemaCollectionList.updateRowCount();
		grid_schemaCollectionList.render();
	});
	grid_schemaCollectionList__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_schemaCollectionList.invalidateRows(args.rows);
		grid_schemaCollectionList.render();
	});
	grid_schemaCollectionList__dataView.onPagingInfoChanged.subscribe(function (e, pagingInfo) {
		var isLastPage = pagingInfo.pageNum == pagingInfo.totalPages - 1;
		var enableAddRow = isLastPage || pagingInfo.pageSize == 0;
		var options = grid_schemaCollectionList.getOptions();
		if (options.enableAddRow != enableAddRow) {
			grid_schemaCollectionList.setOptions({enableAddRow: enableAddRow});
		}
	});



	grid_schemaCollectionList__dataView.beginUpdate();
	grid_schemaCollectionList__loadData(42);
	grid_schemaCollectionList__dataView.endUpdate();

	grid_schemaCollectionList__dataView.setPagingOptions({ pageSize: 25 });
});




// ---- schema grid 02.1: schema list -- entity
function grid_schemaList_entity__comparer(a, b) {
	var x = a[grid_schemaList_entity__sortcol], y = b[grid_schemaList_entity__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

var grid_schemaList_entity__dataView;
var grid_schemaList_entity;
var grid_schemaList_entity__columns = [
	{
		id: "schemaList_entity_type",
		name: "Entity Type",
		field: "schemaList_entity_type",
		minWidth: 100,
		resizable: true,
		sortable: true,
		cssClass: "schemaList_entity_link",
	},
	{
		id: "schemaList_entity_lastModified_date",
		name: "Last Modified Date",
		field: "schemaList_entity_lastModified_date",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
	{
		id: "schemaList_entity_lastModified_by",
		name: "Last Modified By",
		field: "schemaList_entity_lastModified_by",
		minWidth: 50,
		resizable: true,
		sortable: true,
	},
	{
		id: "schemaList_entity_version",
		name: "Schema Version",
		field: "schemaList_entity_version",
		minWidth: 20,
		width: 45,
		resizable: true,
		sortable: true,
	},
	{
		id: "schemaList_status",
		name: "Status",
		field: "schemaList_status",
		minWidth: 20,
		width: 30,
		resizable: true,
		sortable: false,
		//formatter: HTMLFormatter_delete,
		//	cssClass: "action_row_status",
	},
	{
		id: "schemaList_actionRow_quickView",
		name: " ",
		field: "schemaList_actionRow_quickView",
		//	minWidth: 10,
		width: 55,
		resizable: false,
		sortable: false,
		formatter: HTMLFormatter_quickView,
		cssClass: "action_row quick_view",
	},
	{
		id: "schemaList_actionRow_delete",
		name: " ",
		field: "schemaList_actionRow_delete",
		//minWidth: 10,
		width: 55,
		resizable: false,
		sortable: false,
		formatter: HTMLFormatter_delete,
		cssClass: "action_row delete",
	},
];
var grid_schemaList_entity__data = [];
var grid_schemaList_entity__sortcol = "schemaList_entity_type";
var grid_schemaList_entity__sortdir = 1;

function grid_schemaList_entity__loadData(count) {
	var randombrickpart_one = ["Hot_Water", "High_Tempature", "Gas", "Heating", "Filter", "Building", "Exhaust_Fan", "Point", "Cooling", "Chilled_Water", "Battery", "Air_Flow", "Alarm", "Tempature", "Supply_Air", "Security_Camera"];
	var randombrickpart_two = ["_Setpoint", "_Sensor", "_Command", "_Differential_Speed", "_Status", "_On_Off", "_Ouput", "_Current_Output", "_Differential_Sensor", "_Reset_Setpoint", "_Damper_Position", "_Differential_Pressure_Setpoint", "_Tempature", "_Command", "_Alarm", "_Tempature_Sensor", "", ""];
	var randomdate_year = ["2018", "2018", "2017", "2018", "2016", "2018", "2015"];
	var randomdate_month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	var randomdate_day = ["01", "03", "04", "06", "09", "10", "22", "11", "12", "15", "18", "19", "21", "23", "28", "20", "25", "24"];
	grid_schemaList_entity__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_schemaList_entity__data[i] = {});
		d["id"] = "id_schema_entity_" + i;
		d["schemaList_entity_type"] = "BRICK_0_4__" + randombrickpart_one[ Math.floor( Math.random() * 16 ) ] + randombrickpart_two[ Math.floor( Math.random() * 18 ) ];
		d["schemaList_entity_lastModified_date"] = randomdate_year[ Math.floor( Math.random() * 7 ) ]
			+ '.'
			+ randomdate_month[ Math.floor( Math.random() * 12 ) ]
			+ '.'
			+ randomdate_day[ Math.floor( Math.random() * 18 ) ]
			+ ' T'
			+ Math.round(Math.random() * 24 )
			+ ':'
			+ Math.round(Math.random() * 60 )
			+ ':'
			+ Math.round(Math.random() * 60 );
		d["schemaList_entity_lastModified_by"] = "test.user_0" + Math.round(Math.random() * 5 );
		d["schemaList_entity_version"] = Math.round(Math.random() * 4 ) + 1;
		d["schemaList_status"] = Math.round(Math.random() * 4 );
		d["schemaList_actionRow_quickView"] = HTMLFormatter_quickView;
		d["schemaList_actionRow_delete"] = HTMLFormatter_delete;
	}
	grid_schemaList_entity__dataView.setItems(grid_schemaList_entity__data);
}

$(function () {
	var grid_schemaList_entity__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 32,
		enableColumnReorder: true,
		autoEdit:false,
		editable: false,
	};

	grid_schemaList_entity__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_schemaList_entity = new Slick.Grid(
		"#grid_schemaList_entity",
		grid_schemaList_entity__dataView,
		grid_schemaList_entity__columns,
		grid_schemaList_entity__options
	);
	attachAutoResizeDataGrid(grid_schemaList_entity, "grid_schemaList_entity", "content-panel");
	var pager = new Slick.Controls.Pager(grid_schemaList_entity__dataView, grid_schemaList_entity, $("#pager_schemaCollectionList"));
	// ---- paging
	grid_schemaList_entity__dataView.onPagingInfoChanged.subscribe(function (e, pagingInfo) {
		var isLastPage = pagingInfo.pageNum == pagingInfo.totalPages - 1;
		var enableAddRow = isLastPage || pagingInfo.pageSize == 0;
		var options = grid_schemaList_entity.getOptions();
		if (options.enableAddRow != enableAddRow) {
			grid_schemaList_entity.setOptions({enableAddRow: enableAddRow});
		}
	});
	grid_schemaList_entity.getCanvasNode().focus();
	grid_schemaList_entity.onSort.subscribe(function (e, args) {
		grid_schemaList_entity__sortdir = args.sortAsc ? 1 : -1;
		grid_schemaList_entity__sortcol = args.sortCol.field;

		grid_schemaList_entity__dataView.sort(grid_schemaList_entity__comparer, args.sortAsc);
	});
	grid_schemaList_entity__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_schemaList_entity.updateRowCount();
		grid_schemaList_entity.render();
	});
	grid_schemaList_entity__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_schemaList_entity.invalidateRows(args.rows);
		grid_schemaList_entity.render();
	});
	grid_schemaList_entity__dataView.onPagingInfoChanged.subscribe(function (e, pagingInfo) {
		var isLastPage = pagingInfo.pageNum == pagingInfo.totalPages - 1;
		var enableAddRow = isLastPage || pagingInfo.pageSize == 0;
		var options = grid_schemaList_entity.getOptions();
		if (options.enableAddRow != enableAddRow) {
			grid_schemaList_entity.setOptions({enableAddRow: enableAddRow});
		}
	});



	grid_schemaList_entity__dataView.beginUpdate();
	grid_schemaList_entity__loadData(242);
	grid_schemaList_entity__dataView.endUpdate();

	grid_schemaList_entity__dataView.setPagingOptions({ pageSize: 50 });
});



// ---- schema grid 03.1: schema
function grid_schema_view_edit__schema__comparer(a, b) {
	var x = a[grid_schema_view_edit__schema__sortcol], y = b[grid_schema_view_edit__schema__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

var grid_schema_view_edit__schema__dataView;
var grid_schema_view_edit__schema;
var grid_schema_view_edit__schema__columns = [
	{
		id: "schema_name",
		name: "Name",
		field: "schema_name",
		minWidth: 100,
		resizable: true,
		sortable: true,
		editor: Slick.Editors.Text
	},
	{
		id: "schema_description",
		name: "Description",
		field: "schema_description",
		minWidth: 100,
		resizable: true,
		sortable: true,
		editor: Slick.Editors.Text
	},
	{
		id: "schema_default",
		name: "Default",
		field: "schema_default",
		minWidth: 100,
		resizable: true,
		sortable: true,
		editor: Slick.Editors.Text
	},
	{
		id: "schema_type",
		name: "Type",
		field: "schema_type",
		minWidth: 50,
		resizable: true,
		sortable: true,
		formatter: Select2Formatter,
		editor: Select2Editor,
		dataSource: dropdownOptions_type,
	},
	{
		id: "schema_req",
		name: "Req?",
		field: "schema_req",
		minWidth: 30,
		resizable: true,
		sortable: true,
		formatter: CustomCheckmarkFormatter,
		editor: Slick.Editors.Checkbox
	},
];
var grid_schema_view_edit__schema__data = [];
var grid_schema_view_edit__schema__sortcol = "schema_name";
var grid_schema_view_edit__schema__sortdir = 1;


function grid_schema_view_edit__schema__loadData(count) {
	grid_schema_view_edit__schema__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_schema_view_edit__schema__data[i] = {});
		d["id"] = "id_schema_s_" + i;
		d["schema_name"] = "col_ID_" + pad5(i);
		d["schema_description"] = Math.round(Math.random() * 1905 );
		d["schema_default"] = Math.round(Math.random() * 1905 );
		d["schema_type"] = pickRandomProperty(dropdownOptions_type);;
		d["schema_req"] = (i % 5 == 0);;
	}
	grid_schema_view_edit__schema__dataView.setItems(grid_schema_view_edit__schema__data);
}
$(function () {
	var grid_schema_view_edit__schema__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 32,
		enableColumnReorder: true,
		autoEdit:false,
		editable: false,
	};
	grid_schema_view_edit__schema__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_schema_view_edit__schema = new Slick.Grid(
		"#grid_schema_view_edit__schema",
		grid_schema_view_edit__schema__dataView,
		grid_schema_view_edit__schema__columns,
		grid_schema_view_edit__schema__options
	);
	attachAutoResizeDataGrid(grid_schema_view_edit__schema, "grid_schema_view_edit__schema", "content-panel");

	grid_schema_view_edit__schema.getCanvasNode().focus();
	grid_schema_view_edit__schema.onSort.subscribe(function (e, args) {
		grid_schema_view_edit__schema__sortdir = args.sortAsc ? 1 : -1;
		grid_schema_view_edit__schema__sortcol = args.sortCol.field;

		grid_schema_view_edit__schema__dataView.sort(grid_schema_view_edit__schema__comparer, args.sortAsc);
	});
	grid_schema_view_edit__schema__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_schema_view_edit__schema.updateRowCount();
		grid_schema_view_edit__schema.render();
	});
	grid_schema_view_edit__schema__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_schema_view_edit__schema.invalidateRows(args.rows);
		grid_schema_view_edit__schema.render();
	});

	grid_schema_view_edit__schema__dataView.beginUpdate();
	grid_schema_view_edit__schema__loadData(93);
	grid_schema_view_edit__schema__dataView.endUpdate();
});



// ---- schema grid 03.2: sysdata
function grid_schema_view_edit__sysdata__comparer(a, b) {
	var x = a[grid_schema_view_edit__sysdata__sortcol], y = b[grid_schema_view_edit__sysdata__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

var grid_schema_view_edit__sysdata__dataView;
var grid_schema_view_edit__sysdata;
var grid_schema_view_edit__sysdata__columns = [
	{
		id: "sysdata_key",
		name: "Name",
		field: "sysdata_key",
		minWidth: 100,
		resizable: true,
		sortable: true,
		editor: Slick.Editors.Text,
	},
	{
		id: "sysdata_value",
		name: "Description",
		field: "sysdata_value",
		minWidth: 100,
		resizable: true,
		sortable: true,
		editor: Slick.Editors.Text,
	},
];
var grid_schema_view_edit__sysdata__data = [];
var grid_schema_view_edit__sysdata__sortcol = "sysdata_key";
var grid_schema_view_edit__sysdata__sortdir = 2;


function grid_schema_view_edit__sysdata__loadData(count) {
	grid_schema_view_edit__sysdata__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_schema_view_edit__sysdata__data[i] = {});
		d["id"] = "id_schema_sd_" + i;
		d["sysdata_key"] = "key_" + pad5(i);
		d["sysdata_value"] = "value"
	}
	grid_schema_view_edit__sysdata__dataView.setItems(grid_schema_view_edit__sysdata__data);
}
$(function () {
	var grid_schema_view_edit__sysdata__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 32,
		enableColumnReorder: true,
		autoEdit:false,
		editable: false,
	};
	grid_schema_view_edit__sysdata__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_schema_view_edit__sysdata = new Slick.Grid(
		"#grid_schema_view_edit__sysdata",
		grid_schema_view_edit__sysdata__dataView,
		grid_schema_view_edit__sysdata__columns,
		grid_schema_view_edit__sysdata__options
	);
	attachAutoResizeDataGrid(grid_schema_view_edit__sysdata, "grid_schema_view_edit__sysdata", "content-panel");

	grid_schema_view_edit__sysdata.getCanvasNode().focus();
	grid_schema_view_edit__sysdata.onSort.subscribe(function (e, args) {
		grid_schema_view_edit__sysdata__sortdir = args.sortAsc ? 1 : -1;
		grid_schema_view_edit__sysdata__sortcol = args.sortCol.field;

		grid_schema_view_edit__sysdata__dataView.sort(grid_schema_view_edit__sysdata__comparer, args.sortAsc);
	});
	grid_schema_view_edit__sysdata__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_schema_view_edit__sysdata.updateRowCount();
		grid_schema_view_edit__sysdata.render();
	});
	grid_schema_view_edit__sysdata__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_schema_view_edit__sysdata.invalidateRows(args.rows);
		grid_schema_view_edit__sysdata.render();
	});

	grid_schema_view_edit__sysdata__dataView.beginUpdate();
	grid_schema_view_edit__sysdata__loadData(35);
	grid_schema_view_edit__sysdata__dataView.endUpdate();
});


// ---- schema grid 03.3: brick meta data
function grid_schema_view_edit__brickmetadata__comparer(a, b) {
	var x = a[grid_schema_view_edit__brickmetadata__sortcol], y = b[grid_schema_view_edit__brickmetadata__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

var grid_schema_view_edit__brickmetadata__dataView;
var grid_schema_view_edit__brickmetadata;
var grid_schema_view_edit__brickmetadata__columns = [
	{
		id: "brickmeta_key",
		name: "Name",
		field: "brickmeta_key",
		minWidth: 100,
		resizable: true,
		sortable: true,
		editor: Slick.Editors.Text,
	},
	{
		id: "brickmeta_value",
		name: "Description",
		field: "brickmeta_value",
		minWidth: 100,
		resizable: true,
		sortable: true,
		editor: Slick.Editors.Text,
	},
];
var grid_schema_view_edit__brickmetadata__data = [];
var grid_schema_view_edit__brickmetadata__sortcol = "brickmeta_key";
var grid_schema_view_edit__brickmetadata__sortdir = 3;


function grid_schema_view_edit__brickmetadata__loadData(count) {
	grid_schema_view_edit__brickmetadata__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_schema_view_edit__brickmetadata__data[i] = {});
		d["id"] = "id_schema_sd_" + i;
		d["brickmeta_key"] = "key_" + pad5(i);
		d["brickmeta_value"] = "value"
	}
	grid_schema_view_edit__brickmetadata__dataView.setItems(grid_schema_view_edit__brickmetadata__data);
}
$(function () {
	var grid_schema_view_edit__brickmetadata__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 32,
		enableColumnReorder: true,
		autoEdit:false,
		editable: false,
	};
	grid_schema_view_edit__brickmetadata__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_schema_view_edit__brickmetadata = new Slick.Grid(
		"#grid_schema_view_edit__brickmetadata",
		grid_schema_view_edit__brickmetadata__dataView,
		grid_schema_view_edit__brickmetadata__columns,
		grid_schema_view_edit__brickmetadata__options
	);
	attachAutoResizeDataGrid(grid_schema_view_edit__brickmetadata, "grid_schema_view_edit__brickmetadata", "content-panel");

	grid_schema_view_edit__brickmetadata.getCanvasNode().focus();
	grid_schema_view_edit__brickmetadata.onSort.subscribe(function (e, args) {
		grid_schema_view_edit__brickmetadata__sortdir = args.sortAsc ? 1 : -1;
		grid_schema_view_edit__brickmetadata__sortcol = args.sortCol.field;

		grid_schema_view_edit__brickmetadata__dataView.sort(grid_schema_view_edit__brickmetadata__comparer, args.sortAsc);
	});
	grid_schema_view_edit__brickmetadata__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_schema_view_edit__brickmetadata.updateRowCount();
		grid_schema_view_edit__brickmetadata.render();
	});
	grid_schema_view_edit__brickmetadata__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_schema_view_edit__brickmetadata.invalidateRows(args.rows);
		grid_schema_view_edit__brickmetadata.render();
	});

	grid_schema_view_edit__brickmetadata__dataView.beginUpdate();
	grid_schema_view_edit__brickmetadata__loadData(12);
	grid_schema_view_edit__brickmetadata__dataView.endUpdate();
});

(function() {
	$('#top-tab-container .button-group').on( 'click', '.edit-schema-button', function(e) {
		grid_schema_view_edit__schema.setOptions({autoEdit:true,editable: true});
		grid_schema_view_edit__sysdata.setOptions({autoEdit:true,editable: true});
		grid_schema_view_edit__brickmetadata.setOptions({autoEdit:true,editable: true});
	});
	$('#top-tab-container .button-group').on( 'click', '.save-schema-button', function(e) {
		grid_schema_view_edit__schema.setOptions({autoEdit:false,editable: false});
		grid_schema_view_edit__sysdata.setOptions({autoEdit:false,editable: false});
		grid_schema_view_edit__brickmetadata.setOptions({autoEdit:false,editable: false});
	});
})(jQuery);


/**
 ** --- asset management pages ---
 **/



// ---- grid 01: asset collection list
function grid_assetCollectionList__comparer(a, b) {
	var x = a[grid_assetCollectionList__sortcol], y = b[grid_assetCollectionList__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

var grid_assetCollectionList__dataView;
var grid_assetCollectionList;
var grid_assetCollectionList__columns = [
	{
		id: "collectionID",
		name: "Collection ID",
		field: "collectionID",
		minWidth: 100,
		resizable: true,
		sortable: true,
		cssClass: "collection_link",
	},
	{
		id: "collectionName",
		name: "Collection Name",
		field: "collectionName",
		minWidth: 100,
		resizable: true,
		sortable: true,
		cssClass: "collection_link",
	},
	{
		id: "collection_numAssets",
		name: "Assets",
		field: "collection_numAssets",
		minWidth: 50,
		resizable: true,
		sortable: true,
	},
	{
		id: "collection_numSpaces",
		name: "Spaces",
		field: "collection_numSpaces",
		minWidth: 50,
		resizable: true,
		sortable: true,
	},
	{
		id: "collection_numEntities",
		name: "Total Entity Count",
		field: "collection_numEntities",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
	{
		id: "collection_numRelationships",
		name: "Total Relationship Count",
		field: "collection_numRelationships",
		minWidth: 110,
		resizable: true,
		sortable: true,
	},
];
var grid_assetCollectionList__data = [];
var grid_assetCollectionList__sortcol = "collectionID";
var grid_assetCollectionList__sortdir = 1;


function grid_assetCollectionList__loadData(count) {
	grid_assetCollectionList__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_assetCollectionList__data[i] = {});
		d["id"] = "id_" + i;
		d["collectionID"] = "JCI_" + pad5(i);
		d["collectionName"] = "JCI_Test_Collection_" + (i+1);
		d["collection_numAssets"] = Math.round(Math.random() * 905 );
		d["collection_numSpaces"] = Math.round(Math.random() * 80 );
		d["collection_numEntities"] = Math.round(Math.random() * 1905 );
		d["collection_numRelationships"] = Math.round(Math.random() * 590 );
	}
	grid_assetCollectionList__dataView.setItems(grid_assetCollectionList__data);
}
$(function () {
	var grid_assetCollectionList__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 29,
		enableColumnReorder: true,
	};
	grid_assetCollectionList__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_assetCollectionList = new Slick.Grid(
		"#grid_assetCollectionList",
		grid_assetCollectionList__dataView,
		grid_assetCollectionList__columns,
		grid_assetCollectionList__options
	);
	attachAutoResizeDataGrid(grid_assetCollectionList, "grid_assetCollectionList", "content-panel");

	grid_assetCollectionList.getCanvasNode().focus();
	grid_assetCollectionList.onSort.subscribe(function (e, args) {
		grid_assetCollectionList__sortdir = args.sortAsc ? 1 : -1;
		grid_assetCollectionList__sortcol = args.sortCol.field;

		grid_assetCollectionList__dataView.sort(grid_assetCollectionList__comparer, args.sortAsc);
	});
	grid_assetCollectionList__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_assetCollectionList.updateRowCount();
		grid_assetCollectionList.render();
	});
	grid_assetCollectionList__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_assetCollectionList.invalidateRows(args.rows);
		grid_assetCollectionList.render();
	});

	grid_assetCollectionList__dataView.beginUpdate();
	grid_assetCollectionList__loadData(2);
	grid_assetCollectionList__dataView.endUpdate();
});



// ---- asset grid 02.1: collection detail--assets
function grid_assetCollectionList_collectionAssetsTab__comparer(a, b) {
	var x = a[grid_assetCollectionList_collectionAssetsTab__sortcol], y = b[grid_assetCollectionList_collectionAssetsTab__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

var grid_assetCollectionList_collectionAssetsTab__dataView;
var grid_assetCollectionList_collectionAssetsTab;
var grid_assetCollectionList_collectionAssetsTab__columns = [
	{
		id: "assets_assetType",
		name: "Asset Type",
		field: "assets_assetType",
		minWidth: 100,
		resizable: true,
		sortable: true,
		cssClass: "assetType_link",
	},
	{
		id: "assets_numAssets",
		name: "Number of Assets",
		field: "assets_numAssets",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
];
var grid_assetCollectionList_collectionAssetsTab__data = [];
var grid_assetCollectionList_collectionAssetsTab__sortcol = "assets_assetType";
var grid_assetCollectionList_collectionAssetsTab__sortdir = 1;


function grid_assetCollectionList_collectionAssetsTab__loadData(count) {
	grid_assetCollectionList_collectionAssetsTab__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_assetCollectionList_collectionAssetsTab__data[i] = {});
		d["id"] = "id_a_as_" + i;
		d["assets_assetType"] = "col_ID_" + pad5(i);
		d["assets_numAssets"] = Math.round(Math.random() * 1905 );
	}
	grid_assetCollectionList_collectionAssetsTab__dataView.setItems(grid_assetCollectionList_collectionAssetsTab__data);
}
$(function () {
	var grid_assetCollectionList_collectionAssetsTab__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 32,
		enableColumnReorder: true,
	};
	grid_assetCollectionList_collectionAssetsTab__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_assetCollectionList_collectionAssetsTab = new Slick.Grid(
		"#grid_assetCollectionList_collectionAssetsTab",
		grid_assetCollectionList_collectionAssetsTab__dataView,
		grid_assetCollectionList_collectionAssetsTab__columns,
		grid_assetCollectionList_collectionAssetsTab__options
	);
	attachAutoResizeDataGrid(grid_assetCollectionList_collectionAssetsTab, "grid_assetCollectionList_collectionAssetsTab", "content-panel");

	grid_assetCollectionList_collectionAssetsTab.getCanvasNode().focus();
	grid_assetCollectionList_collectionAssetsTab.onSort.subscribe(function (e, args) {
		grid_assetCollectionList_collectionAssetsTab__sortdir = args.sortAsc ? 1 : -1;
		grid_assetCollectionList_collectionAssetsTab__sortcol = args.sortCol.field;

		grid_assetCollectionList_collectionAssetsTab__dataView.sort(grid_assetCollectionList_collectionAssetsTab__comparer, args.sortAsc);
	});
	grid_assetCollectionList_collectionAssetsTab__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_assetCollectionList_collectionAssetsTab.updateRowCount();
		grid_assetCollectionList_collectionAssetsTab.render();
	});
	grid_assetCollectionList_collectionAssetsTab__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_assetCollectionList_collectionAssetsTab.invalidateRows(args.rows);
		grid_assetCollectionList_collectionAssetsTab.render();
	});

	grid_assetCollectionList_collectionAssetsTab__dataView.beginUpdate();
	grid_assetCollectionList_collectionAssetsTab__loadData(93);
	grid_assetCollectionList_collectionAssetsTab__dataView.endUpdate();
});


// ---- asset grid 02.2: collection detail--relationships
function grid_assetCollectionList_collectionRelationshipsTab__comparer(a, b) {
	var x = a[grid_assetCollectionList_collectionRelationshipsTab__sortcol], y = b[grid_assetCollectionList_collectionRelationshipsTab__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

var grid_assetCollectionList_collectionRelationshipsTab__dataView;
var grid_assetCollectionList_collectionRelationshipsTab;
var grid_assetCollectionList_collectionRelationshipsTab__columns = [
	{
		id: "assets_relationshipType",
		name: "Relationship Type",
		field: "assets_relationshipType",
		minWidth: 100,
		resizable: true,
		sortable: true,
		cssClass: "relationshipType_link",
	},
	{
		id: "assets_numRelationships",
		name: "Number of Relationships",
		field: "assets_numRelationships",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
];
var grid_assetCollectionList_collectionRelationshipsTab__data = [];
var grid_assetCollectionList_collectionRelationshipsTab__sortcol = "assets_relationshipType";
var grid_assetCollectionList_collectionRelationshipsTab__sortdir = 2;


function grid_assetCollectionList_collectionRelationshipsTab__loadData(count) {
	grid_assetCollectionList_collectionRelationshipsTab__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_assetCollectionList_collectionRelationshipsTab__data[i] = {});
		d["id"] = "id_a_rel_" + i;
		d["assets_relationshipType"] = "col_ID_" + pad5(i);
		d["assets_numRelationships"] = Math.round(Math.random() * 21905 );
	}
	grid_assetCollectionList_collectionRelationshipsTab__dataView.setItems(grid_assetCollectionList_collectionRelationshipsTab__data);
}
$(function () {
	var grid_assetCollectionList_collectionRelationshipsTab__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 29,
		enableColumnReorder: true,
	};
	grid_assetCollectionList_collectionRelationshipsTab__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_assetCollectionList_collectionRelationshipsTab = new Slick.Grid(
		"#grid_assetCollectionList_collectionRelationshipsTab",
		grid_assetCollectionList_collectionRelationshipsTab__dataView,
		grid_assetCollectionList_collectionRelationshipsTab__columns,
		grid_assetCollectionList_collectionRelationshipsTab__options
	);
	attachAutoResizeDataGrid(grid_assetCollectionList_collectionRelationshipsTab, "grid_assetCollectionList_collectionRelationshipsTab", "content-panel");

	grid_assetCollectionList_collectionRelationshipsTab.getCanvasNode().focus();
	grid_assetCollectionList_collectionRelationshipsTab.onSort.subscribe(function (e, args) {
		grid_assetCollectionList_collectionRelationshipsTab__sortdir = args.sortAsc ? 1 : -1;
		grid_assetCollectionList_collectionRelationshipsTab__sortcol = args.sortCol.field;

		grid_assetCollectionList_collectionRelationshipsTab__dataView.sort(grid_assetCollectionList_collectionRelationshipsTab__comparer, args.sortAsc);
	});
	grid_assetCollectionList_collectionRelationshipsTab__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_assetCollectionList_collectionRelationshipsTab.updateRowCount();
		grid_assetCollectionList_collectionRelationshipsTab.render();
	});
	grid_assetCollectionList_collectionRelationshipsTab__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_assetCollectionList_collectionRelationshipsTab.invalidateRows(args.rows);
		grid_assetCollectionList_collectionRelationshipsTab.render();
	});

	grid_assetCollectionList_collectionRelationshipsTab__dataView.beginUpdate();
	grid_assetCollectionList_collectionRelationshipsTab__loadData(3);
	grid_assetCollectionList_collectionRelationshipsTab__dataView.endUpdate();
});


// ---- asset grid 03.1: asset list
function grid_assetCollectionList_collectionAssetsTab_assetDetail__comparer(a, b) {
	var x = a[grid_assetCollectionList_collectionAssetsTab_assetDetail__sortcol], y = b[grid_assetCollectionList_collectionAssetsTab_assetDetail__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}
var grid_assetCollectionList_collectionAssetsTab_assetDetail__dataView;
var grid_assetCollectionList_collectionAssetsTab_assetDetail;
var grid_assetCollectionList_collectionAssetsTab_assetDetail__columns = [
	{
		id: "assetID",
		name: "Asset ID",
		field: "assetID",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
	{
		id: "assetName",
		name: "Asset Name",
		field: "assetName",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
	{
		id: "asset_assetType",
		name: "Asset Type",
		field: "asset_assetType",
		minWidth: 50,
		resizable: true,
		sortable: true,
	},
	{
		id: "asset_lastModifiedDate",
		name: "Last Modified Date",
		field: "asset_lastModifiedDate",
		minWidth: 50,
		resizable: true,
		sortable: true,
	},
	{
		id: "asset_lastModifiedBy",
		name: "Last Modified By",
		field: "asset_lastModifiedBy",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
	{
		id: "asset_numRelationships",
		name: "Relationships",
		field: "asset_numRelationships",
		minWidth: 110,
		resizable: true,
		sortable: true,
	},
];
var grid_assetCollectionList_collectionAssetsTab_assetDetail__data = [];
var grid_assetCollectionList_collectionAssetsTab_assetDetail__sortcol = "assetID";
var grid_assetCollectionList_collectionAssetsTab_assetDetail__sortdir = 1;


function grid_assetCollectionList_collectionAssetsTab_assetDetail__loadData(count) {
	var randomchar_one = ["a", "b", "c", "d", "e", "f", "g", "h", "1", "2", "3", "4", "i", "j", "k"];
	var randomchar_two = ["a", "b", "c", "d", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	var randomchar_three = ["a", "b", "i", "j", "k", "l", "m", "n", "o", "p", "z", "q", "w", "1"];
	var randomchar_four = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	var randomnamepart_one = ["GAS", "DIFF", "SYSTEM", "ALARM", "UNIT", "FAN", "SYSTEM", "GAS", "POWER", "SYS01", "SYS02", "ALARM", "POWER", "SYS01", "SYS03", "DHW"];
	var randomnamepart_two = ["CMD", "CMD", "STS", "PIPE-T", "DIFF-T", "T", "REQ", "CODE", "MODE", "CODE", "S", "RESET", "CODE", "MODE", "T", "LO"];
	var randomdate_year = ["2018", "2018", "2017", "2018", "2016", "2018", "2015"];
	var randomdate_month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	var randomdate_day = ["01", "03", "04", "06", "09", "10", "22", "11", "12", "15", "18", "19", "21", "23", "28", "20", "25", "24"];

	grid_assetCollectionList_collectionAssetsTab_assetDetail__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_assetCollectionList_collectionAssetsTab_assetDetail__data[i] = {});
		d["id"] = "id_asset_" + i;
		d["assetID"] = randomchar_one[ Math.floor( Math.random() * 1 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 1 ) ]
			+ randomchar_two[ Math.floor( Math.random() * 4 ) ]
			+ randomchar_three[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_two[ Math.floor( Math.random() * 14 ) ]
			+ Math.round(Math.random() * 20 )
			+ '-'
			+ randomchar_three[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_two[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_three[ Math.floor( Math.random() * 14 ) ]
			+ Math.round(Math.random() * 20 )
			+ randomchar_one[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 1 ) ]
			+ '-'
			+ randomchar_two[ Math.floor( Math.random() * 4 ) ]
			+ randomchar_two[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 15 ) ]
			+ Math.round(Math.random() * 70 )
			+ randomchar_three[ Math.floor( Math.random() * 14 ) ];
		d["assetName"] = randomnamepart_one[ Math.floor( Math.random() * 16 ) ]
			+ '-'
			+ randomnamepart_two[ Math.floor( Math.random() * 16 ) ];
		d["asset_assetType"] = "BRICK_0_4_Point";
		d["asset_lastModifiedDate"] = randomdate_year[ Math.floor( Math.random() * 7 ) ]
			+ '.'
			+ randomdate_month[ Math.floor( Math.random() * 12 ) ]
			+ '.'
			+ randomdate_day[ Math.floor( Math.random() * 18 ) ]
			+ ' T'
			+ Math.round(Math.random() * 24 )
			+ ':'
			+ Math.round(Math.random() * 60 )
			+ ':'
			+ Math.round(Math.random() * 60 );
		d["asset_lastModifiedBy"] = "test.user_0" + Math.round(Math.random() * 5 );
		d["asset_numRelationships"] = Math.round(Math.random() * 3 );
	}
	grid_assetCollectionList_collectionAssetsTab_assetDetail__dataView.setItems(grid_assetCollectionList_collectionAssetsTab_assetDetail__data);
}
$(function () {
	var grid_assetCollectionList_collectionAssetsTab_assetDetail__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 29,
		enableColumnReorder: true,
	};
	grid_assetCollectionList_collectionAssetsTab_assetDetail__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_assetCollectionList_collectionAssetsTab_assetDetail = new Slick.Grid(
		"#grid_assetCollectionList_collectionAssetsTab_assetDetail",
		grid_assetCollectionList_collectionAssetsTab_assetDetail__dataView,
		grid_assetCollectionList_collectionAssetsTab_assetDetail__columns,
		grid_assetCollectionList_collectionAssetsTab_assetDetail__options
	);
	attachAutoResizeDataGrid(grid_assetCollectionList_collectionAssetsTab_assetDetail, "grid_assetCollectionList_collectionAssetsTab_assetDetail", "content-panel");

	grid_assetCollectionList_collectionAssetsTab_assetDetail.getCanvasNode().focus();
	grid_assetCollectionList_collectionAssetsTab_assetDetail.onSort.subscribe(function (e, args) {
		grid_assetCollectionList_collectionAssetsTab_assetDetail__sortdir = args.sortAsc ? 1 : -1;
		grid_assetCollectionList_collectionAssetsTab_assetDetail__sortcol = args.sortCol.field;

		grid_assetCollectionList_collectionAssetsTab_assetDetail__dataView.sort(grid_assetCollectionList_collectionAssetsTab_assetDetail__comparer, args.sortAsc);
	});
	grid_assetCollectionList_collectionAssetsTab_assetDetail__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_assetCollectionList_collectionAssetsTab_assetDetail.updateRowCount();
		grid_assetCollectionList_collectionAssetsTab_assetDetail.render();
	});
	grid_assetCollectionList_collectionAssetsTab_assetDetail__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_assetCollectionList_collectionAssetsTab_assetDetail.invalidateRows(args.rows);
		grid_assetCollectionList_collectionAssetsTab_assetDetail.render();
	});

	grid_assetCollectionList_collectionAssetsTab_assetDetail__dataView.beginUpdate();
	grid_assetCollectionList_collectionAssetsTab_assetDetail__loadData(30);
	grid_assetCollectionList_collectionAssetsTab_assetDetail__dataView.endUpdate();
});


// ---- asset grid 03.2: relationship list
function grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__comparer(a, b) {
	var x = a[grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__sortcol], y = b[grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__sortcol];
	return (x == y ? 0 : (x > y ? 1 : -1));
}

var grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__dataView;
var grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail;
var grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__columns = [
	{
		id: "relationshipID",
		name: "Relationship ID",
		field: "relationshipID",
		minWidth: 60,
		resizable: true,
		sortable: true,
	},
	{
		id: "relationshipName",
		name: "Relationship Name",
		field: "relationshipName",
		minWidth: 60,
		resizable: true,
		sortable: true,
	},
	{
		id: "relationshipType",
		name: "Relationship Type",
		field: "relationshipType",
		minWidth: 50,
		resizable: true,
		sortable: true,
	},
	{
		id: "relationship_BrickRelName",
		name: "Brick-Relationship Name",
		field: "relationship_BrickRelName",
		minWidth: 50,
		resizable: true,
		sortable: true,
	},
	{
		id: "relationship_srcEntityID",
		name: "Source Entity ID",
		field: "relationship_srcEntityID",
		minWidth: 60,
		resizable: true,
		sortable: true,
	},
	{
		id: "relationship_destEntityID",
		name: "Destination Entity ID",
		field: "relationship_destEntityID",
		minWidth: 50,
		resizable: true,
		sortable: true,
	},
	{
		id: "relationship_lastModifiedDate",
		name: "Last Modified Date",
		field: "relationship_lastModifiedDate",
		minWidth: 50,
		resizable: true,
		sortable: true,
	},
	{
		id: "relationship_lastModifiedBy",
		name: "Last Modified By",
		field: "relationship_lastModifiedBy",
		minWidth: 100,
		resizable: true,
		sortable: true,
	},
];
var grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__data = [];
var grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__sortcol = "relationshipID";
var grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__sortdir = 1;


function grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__loadData(count) {
	var randomchar_one = ["5", "0", "3", "1", "a", "2", "0", "8", "1", "2", "3", "4", "e", "6", "b"];
	var randomchar_two = ["x", "0", "c", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	var randomchar_three = ["a", "b", "i", "j", "k", "l", "m", "n", "o", "p", "z", "q", "w", "1"];
	var randomchar_four = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

	var randomchar_five = ["a", "b", "c", "d", "e", "f", "g", "h", "1", "2", "3", "4", "i", "j", "k"];
	var randomchar_six = ["a", "b", "c", "d", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	var randomchar_seven = ["a", "b", "i", "j", "k", "l", "m", "n", "o", "p", "z", "q", "w", "1"];
	var randomchar_eight = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

	var randomdate_year = ["2018", "2018", "2017", "2018", "2016", "2018", "2015"];
	var randomdate_month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
	var randomdate_day = ["01", "03", "04", "06", "09", "10", "22", "11", "12", "15", "18", "19", "21", "23", "28", "20", "25", "24"];
	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__data = [];
	for (var i = 0; i < count; i++) {
		var d = (grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__data[i] = {});
		d["id"] = "id_rel_" + i;
		d["relationshipID"] = randomchar_one[ Math.floor( Math.random() * 1 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 1 ) ]
			+ randomchar_two[ Math.floor( Math.random() * 4 ) ]
			+ randomchar_three[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_two[ Math.floor( Math.random() * 14 ) ]
			+ Math.round(Math.random() * 20 )
			+ '-'
			+ randomchar_three[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_two[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_three[ Math.floor( Math.random() * 14 ) ]
			+ Math.round(Math.random() * 20 )
			+ randomchar_one[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 1 ) ]
			+ '-'
			+ randomchar_two[ Math.floor( Math.random() * 4 ) ]
			+ randomchar_two[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_one[ Math.floor( Math.random() * 15 ) ]
			+ Math.round(Math.random() * 70 )
			+ randomchar_three[ Math.floor( Math.random() * 14 ) ];
		d["relationshipName"] = "equipment.AQ-NAE-04.BACnet IP1.F5-FCU-23_IECOR2BM00001:AQ-NAE-04/BACnet_IP1.F5-FCU-23.BI-20";
		d["relationshipType"] = 'BRICK_0_4__hasPoint_Equipment_Point';
		d["relationship_BrickRelName"] = "hasPoint";
		d["relationship_srcEntityID"] = randomchar_five[ Math.floor( Math.random() * 1 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 1 ) ]
			+ randomchar_six[ Math.floor( Math.random() * 4 ) ]
			+ randomchar_seven[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_six[ Math.floor( Math.random() * 14 ) ]
			+ Math.round(Math.random() * 20 )
			+ '-'
			+ randomchar_seven[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_six[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_seven[ Math.floor( Math.random() * 14 ) ]
			+ Math.round(Math.random() * 20 )
			+ randomchar_five[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 1 ) ]
			+ '-'
			+ randomchar_six[ Math.floor( Math.random() * 4 ) ]
			+ randomchar_six[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 15 ) ]
			+ Math.round(Math.random() * 70 )
			+ randomchar_seven[ Math.floor( Math.random() * 14 ) ];
		d["relationship_destEntityID"] = randomchar_five[ Math.floor( Math.random() * 1 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 1 ) ]
			+ randomchar_six[ Math.floor( Math.random() * 4 ) ]
			+ randomchar_seven[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_six[ Math.floor( Math.random() * 14 ) ]
			+ Math.round(Math.random() * 20 )
			+ '-'
			+ randomchar_seven[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_six[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_seven[ Math.floor( Math.random() * 14 ) ]
			+ Math.round(Math.random() * 20 )
			+ randomchar_five[ Math.floor( Math.random() * 15 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 1 ) ]
			+ '-'
			+ randomchar_six[ Math.floor( Math.random() * 4 ) ]
			+ randomchar_six[ Math.floor( Math.random() * 14 ) ]
			+ randomchar_five[ Math.floor( Math.random() * 15 ) ]
			+ Math.round(Math.random() * 70 )
			+ randomchar_seven[ Math.floor( Math.random() * 14 ) ];
		d["relationship_lastModifiedDate"] = randomdate_year[ Math.floor( Math.random() * 7 ) ]
			+ '.'
			+ randomdate_month[ Math.floor( Math.random() * 12 ) ]
			+ '.'
			+ randomdate_day[ Math.floor( Math.random() * 18 ) ]
			+ ' T'
			+ Math.round(Math.random() * 24 )
			+ ':'
			+ Math.round(Math.random() * 60 )
			+ ':'
			+ Math.round(Math.random() * 60 );
		d["relationship_lastModifiedBy"] = "test.user_0" + Math.round(Math.random() * 5 );
	}
	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__dataView.setItems(grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__data);
}
$(function () {
	var grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__options = {
		forceFitColumns: true,
		syncColumnCellResize: true,
		topPanelHeight: 60,
		rowHeight: 29,
		enableColumnReorder: true,
	};
	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__dataView = new Slick.Data.DataView({
		inlineFilters: true,
	});
	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail = new Slick.Grid(
		"#grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail",
		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__dataView,
		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__columns,
		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__options
	);
	attachAutoResizeDataGrid(grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail, "grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail", "content-panel");

	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail.getCanvasNode().focus();
	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail.onSort.subscribe(function (e, args) {
		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__sortdir = args.sortAsc ? 1 : -1;
		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__sortcol = args.sortCol.field;

		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__dataView.sort(grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__comparer, args.sortAsc);
	});
	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__dataView.onRowCountChanged.subscribe(function (e, args) {
		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail.updateRowCount();
		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail.render();
	});
	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__dataView.onRowsChanged.subscribe(function (e, args) {
		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail.invalidateRows(args.rows);
		grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail.render();
	});

	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__dataView.beginUpdate();
	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__loadData(30);
	grid_assetCollectionList_collectionRelationshipsTab_relationshipDetail__dataView.endUpdate();
});