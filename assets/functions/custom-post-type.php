<?php
/* start Custom Post Type Example
This page walks you through creating 
a custom post type and taxonomies. You
can edit this one or copy the following code 
to create another one. 

*/

// let's create the function for the custom type
function start_custom_post_types() {
	
	/**
	 * CPT: Component
	 */

	$labels = array(
		'name'                => _x( 'Components', 'Post Type General Name', 'start' ),
		'singular_name'       => _x( 'Component', 'Post Type Singular Name', 'start' ),
		'menu_name'           => __( 'Components', 'start' ),
		'parent_item_colon'   => __( '', 'start' ),
		'all_items'           => __( 'All components', 'start' ),
		'view_item'           => __( 'View', 'start' ),
		'add_new_item'        => __( 'Add new component', 'start' ),
		'add_new'             => __( 'Add new component', 'start' ),
		'edit_item'           => __( 'Edit component', 'start' ),
		'update_item'         => __( 'Update component', 'start' ),
		'search_items'        => __( 'Search all components', 'start' ),
		'not_found'           => __( 'No components found', 'start' ),
		'not_found_in_trash'  => __( 'No components found in trash', 'start' ),
	);
	$args = array(
		'label'               => __( 'component', 'start' ),
		'description'         => __( 'Components', 'start' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'revisions', 'thumbnail','page-attributes' ),
		'hierarchical'        => true,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'show_in_rest'		  => false,
		'menu_position'       => 7,
		'menu_icon'           => 'dashicons-welcome-widgets-menus',
		//'rewrite'             => array( 'slug' => 'components' ),
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'page',
	);

	// NEVER USE 'action' HERE, IT'S A RESERVED WORD
	register_post_type( 'component', $args );


	/**
	 * CPT: API doc
	 */

	$labels = array(
		'name'                => _x( 'API Documents', 'Post Type General Name', 'start' ),
		'singular_name'       => _x( 'API Doc', 'Post Type Singular Name', 'start' ),
		'menu_name'           => __( 'API Documents', 'start' ),
		'parent_item_colon'   => __( '', 'start' ),
		'all_items'           => __( 'All API docs', 'start' ),
		'view_item'           => __( 'View API doc', 'start' ),
		'add_new_item'        => __( 'Add new API doc', 'start' ),
		'add_new'             => __( 'Add new API doc', 'start' ),
		'edit_item'           => __( 'Edit API doc', 'start' ),
		'update_item'         => __( 'Update API doc', 'start' ),
		'search_items'        => __( 'Search all API docs', 'start' ),
		'not_found'           => __( 'No API docs found', 'start' ),
		'not_found_in_trash'  => __( 'No API docs found in trash', 'start' ),
	);
	$args = array(
		'label'               => __( 'api_doc', 'start' ),
		'description'         => __( 'API Documents', 'start' ),
		'labels'              => $labels,
		'supports'            => array( 'title', 'editor', 'revisions', 'thumbnail','page-attributes' ),
		'hierarchical'        => true,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'show_in_rest'		  => true,
		'rest_base'           => 'api_doc',
		'menu_position'       => 7,
		'menu_icon'           => 'dashicons-hammer',
		'rewrite'             => array( 'slug' => 'api' ),
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'page',
	);

	// NEVER USE 'action' HERE, IT'S A RESERVED WORD
	register_post_type( 'api_doc', $args );

	/* this adds your post categories to your custom post type(s) */
	register_taxonomy_for_object_type( 'category', 'component' );
	/* this adds your post tags to your custom post type(s) */
	// register_taxonomy_for_object_type( 'post_tag', 'portfolio' );

}

// adding the function to the Wordpress init
add_action( 'init', 'start_custom_post_types' );


/**
 * custom Tax: project_type (hierarchical)
 */

register_taxonomy( 'theme',
	array( 'component' ),
	/* if you change the name of register_post_type( 'custom_type', then you have to change this */
	array(
		'hierarchical' => true,
		/* if this is false, it acts like tags */
		'labels' => array(
			'name' => __( 'Theme', 'start' ),
			'singular_name' => __( 'Theme', 'start' ),
			'search_items' => __( 'Search', 'start' ),
			'all_items' => __( 'All Themes', 'start' ),
			'parent_item' => __( 'Parent Theme', 'start' ),
			'parent_item_colon' => __( 'Parent Theme:', 'start' ),
			'edit_item' => __( 'Edit Theme', 'start' ),
			'update_item' => __( 'Update Theme', 'start' ),
			'add_new_item' => __( 'Add New Theme', 'start' ),
			'new_item_name' => __( 'New Theme', 'start' )
		),
		'show_admin_column' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => array( 'slug' => 'theme' ),
	)
);


/**
 * custom Tax: endpoint (hierarchical)
 */

register_taxonomy( 'endpoint',
	array( 'api_doc' ),
	/* if you change the name of register_post_type( 'custom_type', then you have to change this */
	array(
		'hierarchical' => true,
		/* if this is false, it acts like tags */
		'labels' => array(
			'name' => __( 'Endpoint', 'start' ),
			'singular_name' => __( 'Endpoint', 'start' ),
			'search_items' => __( 'Search', 'start' ),
			'all_items' => __( 'All Endpoints', 'start' ),
			'parent_item' => __( 'Parent Endpoint', 'start' ),
			'parent_item_colon' => __( 'Parent Endpoint:', 'start' ),
			'edit_item' => __( 'Edit Endpoint', 'start' ),
			'update_item' => __( 'Update Endpoint', 'start' ),
			'add_new_item' => __( 'Add New Endpoint', 'start' ),
			'new_item_name' => __( 'New Endpoint', 'start' )
		),
		'show_admin_column' => true,
		'show_ui' => true,
		'query_var' => true,
		'rewrite' => array( 'slug' => 'endpoint' ),
	)
);

/**
 * Modify the post edit screen's title field placeholder
 */
function start_change_component_post_type_title_text( $title ) {
	$screen = get_current_screen();

	if ( 'component' === $screen->post_type ) {
		$title = 'Enter component name';
	}

	return $title;
}
add_filter( 'enter_title_here', 'start_change_component_post_type_title_text' );

function start_show_cpt_archives( $query )
{
	if ( is_category() || is_tag() && empty( $query->query_vars[ 'suppress_filters' ] ) ) {
		$query->set( 'post_type', array(
			'post', 'nav_menu_item', 'component'
		) );
		return $query;
	}
}

add_filter( 'pre_get_posts', 'start_show_cpt_archives' );


/*
 * for git sync. adding CPT "api docs" and draft (if needed)
 */
add_filter('start_gitsync_allowed_post_types', function ($supported_post_types) {
	return array_merge($supported_post_types, array(
		// add your custom post types here
		'api_doc'
	));
});

add_filter('start_gitsync_allowed_post_statuses', function ($supported_post_statuses) {
	return array_merge($supported_post_statuses, array(
		// additional statuses available: https://codex.wordpress.org/Post_Status
		'draft'
	));
});