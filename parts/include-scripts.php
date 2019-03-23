<?php
/**
 * bringing in the user defined script dependancies.
 */


// global scripts
if ( have_rows( 'add_scripts', 'option' ) ) :
	while ( have_rows( 'add_scripts', 'option' ) ) : the_row();
		echo '<script type="text/javascript" src="' . esc_url( the_sub_field( 'script_url' ) ) . '"></script>';
	endwhile;
endif;

// single component scripts
if ( have_rows( 'design_section' ) ):
	while ( have_rows( 'design_section' ) ) : the_row();
		if ( get_row_layout() == 'live_example_script' ) :
			echo '<script type="text/javascript">';
			the_sub_field( 'example_script' );
			echo '</script>';
		endif;
	endwhile;
endif;
