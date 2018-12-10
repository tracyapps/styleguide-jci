<?php
/**
 * ACF helper functions
 */

// change / add to the background choices here
$background_choices_available = array (
	'none' 		=> 'No background',
	'inverse' 	=> 'Inverse',
	'bright'	=> 'Bright background',
);

// settings on where the 'sections' are active throughout the site
$where_sections_are_active = array (
	array (
		array (
			'param' => 'post_type',
			'operator' => '==',
			'value' => 'page',
		),
	),
/*	add any additional post types here. 
	array (
		array (
			'param' => 'post_type',
			'operator' => '==',
			'value' => 'person',
		),
	),
*/
);

if( function_exists('acf_add_local_field_group') ):



endif;