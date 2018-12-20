<?php
function site_scripts() {
	global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way

	// Adding scripts file in the footer
	// fontawesome
	wp_enqueue_script( 'fontawesome-js', get_template_directory_uri() . '/fontawesome/@fortawesome/fontawesome-pro/js/all.js', array(), '', true );
	//  codemirror JS
	wp_enqueue_script( 'codemirror-js', get_template_directory_uri() . '/assets/js/vendor/codemirror/codemirror.js', array(), '', false );
	wp_enqueue_script( 'codemirror-mode-js', get_template_directory_uri() . '/assets/js/vendor/codemirror/mode/xml/xml.js', array(), '', false );
	wp_enqueue_script( 'codemirror-mode-css', get_template_directory_uri() . '/assets/js/vendor/codemirror/mode/css/css.js', array(), '', false );
	// materalize js
	wp_enqueue_script( 'materialize-js', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js', array(), '', true );
	// select 2
	wp_enqueue_script( 'select-2-js', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js', array( 'jquery' ), '', true);
	// bootstrap js
	wp_enqueue_script( 'bootstrap-js', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js', array( 'jquery' ), '', true );
	// toggle menu state js
	wp_enqueue_script( 'pagetree-toggle-cookies-js', 'https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js', array( 'jquery' ), '', true );
	// our theme stylesheet
	wp_enqueue_script( 'site-js', get_template_directory_uri() . '/assets/js/scripts.js', array( 'jquery' ), '', true );

	// Adding codemirror css
	wp_enqueue_style( 'codemirror-css', get_template_directory_uri() . '/assets/js/vendor/codemirror/lib/codemirror.css', array(), '', 'all' );
	// codemirror theme
	wp_enqueue_style( 'codemirror-theme', get_template_directory_uri() . '/assets/js/vendor/codemirror/theme/monokai.css', array(), '', 'all' );
	// materialize stylesheet
	//wp_enqueue_style( 'materalize-css', 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css', array(), '', 'all' );
	// Register main stylesheet
	wp_enqueue_style( 'site-css', get_template_directory_uri() . '/assets/css/style.css', array(), '', 'all' );
}

add_action( 'wp_enqueue_scripts', 'site_scripts', 999 );