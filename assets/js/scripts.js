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