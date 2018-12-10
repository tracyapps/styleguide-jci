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