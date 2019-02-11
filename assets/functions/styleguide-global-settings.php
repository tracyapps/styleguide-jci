<?php
/**
 * creating the page for global styles to be added.
 */
if( function_exists('acf_add_options_page') ) {

	// add parent
	$parent = acf_add_options_page(array(
		'page_title' 	=> 'Global Styles',
		'menu_title' 	=> 'Global Styles',
		'redirect' 		=> true,
		'menu_slug'		=> 'global-styles',
		'position'		=> 23,
		'icon_url'		=> 'dashicons-admin-site'
	));


	// add sub page
	acf_add_options_sub_page(
		array(
		'page_title' 	=> 'Variables',
		'menu_title' 	=> 'Variables',
		'parent_slug' 	=> $parent['menu_slug'],
		'menu_slug'		=> 'global-variables',
			)
	);

	acf_add_options_sub_page(
		array(
			'page_title' 	=> 'Mixins',
			'menu_title' 	=> 'Mixins',
			'parent_slug' 	=> $parent['menu_slug'],
			'menu_slug'		=> 'global-mixins',
		)
	);

	acf_add_options_sub_page(
		array(
			'page_title' 	=> 'Base Styles',
			'menu_title' 	=> 'Base Styles',
			'parent_slug' 	=> $parent['menu_slug'],
			'menu_slug'		=> 'global-base-styles',
		)
	);

	// add parent
	$parent = acf_add_options_page(array(
		'page_title' 	=> 'Global Scripts',
		'menu_title' 	=> 'Global Scripts',
		'redirect' 		=> true,
		'menu_slug'		=> 'global-scripts',
		'position'		=> 23,
		'icon_url'		=> 'dashicons-media-code'
	));


	// add sub page
	acf_add_options_sub_page(
		array(
			'page_title' 	=> 'Dependencies',
			'menu_title' 	=> 'Dependencies',
			'parent_slug' 	=> $parent['menu_slug'],
			'menu_slug'		=> 'global-dependencies',
		)
	);

}