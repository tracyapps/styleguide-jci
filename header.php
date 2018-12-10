<!doctype html>
<html class="no-js styleguide" <?php language_attributes(); ?>>
<head>
	<meta charset="utf-8">
	<!-- Force IE to use the latest rendering engine available -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- Mobile Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<?php wp_head(); ?>

</head>

<body <?php body_class( 'styleguide_specific' ); ?>>
<header class="page-header" role="menubar">

	<nav>
		<div class="nav-wrapper">
			<ul class="left">
				<li>Styleguide: <strong><?php start_get_the_archive_title(); ?></strong></li>
			</ul>

			<ul class="right">
				<li><a>Digital Vault</a></li>
			</ul>
		</div>
	</nav>

</header>

<?php
if ( 'api_doc' == get_post_type() ) {
	get_template_part( 'parts/template', 'documentation-sidenav-tree' );
} else {
	get_template_part( 'parts/template', 'sidenav' );
}
 ?>
<main class="site-content">
