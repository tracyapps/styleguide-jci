<?php
/**
 * bringing in the user defined styles.
 */
$all_global_styles_output = scss_include_global();
$component_code = '';
if ( have_rows( 'design_section' ) ):
	while ( have_rows( 'design_section' ) ) : the_row();
		if ( get_row_layout() == 'live_example_styles' ) :
			$component_code .= get_sub_field( 'example_stylesheet' );
		endif;
	endwhile;
endif;


$to_compile = $all_global_styles_output . ' ' . $component_code;
//echo $to_compile;

require_once( get_template_directory() . '/assets/scssphp/scss.inc.php' );
use Leafo\ScssPhp\Compiler;
$scss = new Compiler();
$the_styles = $scss->compile($to_compile);
?>
<style>
<?php echo $the_styles ?>
</style>
