<?php
/**
 *  Displays archive entries with featured image, tag/category (etc) and short excerpt
 */
?>


<main id="main" class="styleguide-main-column" role="main">
	<article id="post-<?php the_ID(); ?>" <?php post_class( '' ); ?> role="article">

		<header class="article-header">
			<h3 class="style-title title-link">
				<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
			</h3>
		</header> <!-- end article header -->

		<?php if ( is_post_type_archive( 'component' ) || 'post_type' == 'component' || is_category() ) { ?>
		<section class="component component-intro">
			<span class="styleguide_header"><h2>Introduction</h2></span>
			<?php the_field( 'intro' ); ?>

			<a class="btn btn-secondary btn-full btn-large" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">View page for <?php the_title(); ?></a>
		</section>
		<?php } else { ?>
			<?php the_excerpt(); ?>
			<a class="btn btn-secondary btn-full btn-large" href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">View page for <?php the_title(); ?></a>
		<?php } ?>
	</article> <!-- end article -->
</main>