<?php
/**
 * bringing in the user defined script dependancies.
 */

if ( have_rows( 'add_scripts', 'option' ) ) :
	while ( have_rows( 'add_scripts', 'option' ) ) : the_row();
		echo '<script type="text/javascript" src="' . esc_url( the_sub_field( 'script_url' ) ) . '"></script>';
	endwhile;
endif;