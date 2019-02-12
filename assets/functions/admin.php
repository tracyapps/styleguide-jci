<?php
// This file handles the admin area and functions - You can use this file to make changes to the dashboard.

/************* DASHBOARD WIDGETS *****************/
// Disable default dashboard widgets
function disable_default_dashboard_widgets() {
	// Remove_meta_box('dashboard_right_now', 'dashboard', 'core');    // Right Now Widget
	remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'core' ); // Comments Widget
	remove_meta_box( 'dashboard_incoming_links', 'dashboard', 'core' );  // Incoming Links Widget
	remove_meta_box( 'dashboard_plugins', 'dashboard', 'core' );         // Plugins Widget

	// Remove_meta_box('dashboard_quick_press', 'dashboard', 'core');  // Quick Press Widget
	remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'core' );   // Recent Drafts Widget
	remove_meta_box( 'dashboard_primary', 'dashboard', 'core' );         //
	remove_meta_box( 'dashboard_secondary', 'dashboard', 'core' );       //

	// Removing plugin dashboard boxes
	remove_meta_box( 'yoast_db_widget', 'dashboard', 'normal' );         // Yoast's SEO Plugin Widget

}

/*
For more information on creating Dashboard Widgets, view:
http://digwp.com/2010/10/customize-wordpress-dashboard/
*/

// Calling all custom dashboard widgets
function start_custom_dashboard_widgets() {
	wp_add_dashboard_widget( 'start_rss_dashboard_widget', __( 'Custom RSS Feed (Customize in admin.php)', 'start' ),
		'start_rss_dashboard_widget' );
	/*
	Be sure to drop any other created Dashboard Widgets
	in this function and they will all load.
	*/
}

// removing the dashboard widgets
add_action( 'admin_menu', 'disable_default_dashboard_widgets' );
// adding any custom widgets
//add_action( 'wp_dashboard_setup', 'start_custom_dashboard_widgets' );

/*
 * remove unused menu items in admin
 */

function start_remove_menus() {
	//remove_menu_page( 'index.php' );                  //Dashboard
	//remove_menu_page( 'jetpack' );                    //Jetpack*
	//remove_menu_page( 'edit.php' );                   //Posts
	remove_menu_page( 'upload.php' );                 //Media
	//remove_menu_page( 'edit.php?post_type=page' );    //Pages
	remove_menu_page( 'edit-comments.php' );          //Comments
	//remove_menu_page( 'themes.php' );                 //Appearance
	remove_menu_page( 'plugins.php' );                //Plugins
	//remove_menu_page( 'users.php' );                  //Users
	//remove_menu_page( 'tools.php' );                  //Tools
	//remove_menu_page( 'options-general.php' );        //Settings
}
add_action( 'admin_menu', 'start_remove_menus' );

/************* CUSTOMIZE ADMIN *******************/
// Custom Backend Footer
function start_custom_admin_footer() {
	_e( '<span id="footer-thankyou">Custom site developed by <a href="http://tapps.design" target="_blank">tracy apps</a></span>.', 'start' );
}

add_filter( 'admin_footer_text', 'start_custom_admin_footer' );
