<?php
// Adds your styles to the WordPress editor
add_action( 'init', 'add_editor_styles' );
function add_editor_styles() {
	add_editor_style( get_template_directory_uri() . '/assets/css/style.min.css' );
}

function start_custom_admin_footer() {
	_e( '<span id="footer-thankyou">Custom site developed by <a href="http://tapps.design" target="_blank">tracy apps</a></span>.', 'start' );
}

add_filter( 'admin_footer_text', 'start_custom_admin_footer' );