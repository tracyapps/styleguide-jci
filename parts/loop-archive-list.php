<?php
/**
 *  Displays archive entries with featured image, tag/category (etc) and short excerpt
 */
?>


<main id="main" class="styleguide-main-column" role="main">
	<article id="post-<?php the_ID(); ?>" <?php post_class( '' ); ?> role="article">

		<header class="article-header">
			<h3 class="style-title title-link two-col">
				<a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
				<span class="btn btn-small btn-secondary"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">View page &raquo;</a></span>
			</h3>
		</header> <!-- end article header -->

		<?php if ( is_post_type_archive( 'component' ) || 'post_type' == 'component' || is_category() ) { ?>
			<section class="component component-intro">
				<div class="padding">
					<span class="styleguide_header"><h2>Introduction</h2> </span>
					<?php the_field( 'intro' ); ?>
				</div>
			</section>
		<?php } else { ?>
			<section class="component component-intro">
				<div class="padding">
					<?php the_excerpt(); ?>
				</div>
			</section>
		<?php } ?>
	</article> <!-- end article -->
</main>