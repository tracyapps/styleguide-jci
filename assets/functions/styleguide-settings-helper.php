<?php
/**
 * helper functions for user defined style display
 */



function scss_include_global() {
	if ( have_rows( 's_global_vars', 'option' ) ) :
		$global_vars[] = '';
		while ( have_rows( 's_global_vars', 'option' ) ) : the_row();
			$global_vars[] .=  get_sub_field( 's_var_section' );
		endwhile;
		$global_vars_combined = implode( '', $global_vars );
	else :
	endif;
	if ( have_rows( 's_global_mixins', 'option' ) ) :
		$global_mixins[] = '';
		while ( have_rows( 's_global_mixins', 'option' ) ) : the_row();
			$global_mixins[] .=  get_sub_field( 's_mixin_section' );
		endwhile;
		$global_mixins_combined = implode( '', $global_mixins );
	else :
	endif;
	if ( have_rows( 's_global_base_styles', 'option' ) ) :
		$global_base_styles[] = '';
		while ( have_rows( 's_global_base_styles', 'option' ) ) : the_row();
			$global_base_styles[] .=  get_sub_field( 's_style_section' );
		endwhile;
		$global_base_styles_combined = implode( '', $global_base_styles );
	else :
	endif;

	$all_global_styles = $global_vars_combined . ' ' . $global_mixins_combined . ' ' . $global_base_styles_combined;

	return $all_global_styles;
}



function scss_compile_this( $content = 'null' ) {

}