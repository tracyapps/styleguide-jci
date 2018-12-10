<?php
/**
 *  Displays Components in a grid
 */
?>



<article id="post-<?php the_ID(); ?>" <?php post_class( '' ); ?> role="article">

	<header class="component-header">
		<h3 class="title">
			<a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
		</h3>
	</header> <!-- end article header -->

	<section class="component-thumbnail">
		<a href="<?php the_permalink() ?>"><?php the_post_thumbnail( 'medium' ); ?></a>
	</section> <!-- end article section -->

</article> <!-- end article -->

	