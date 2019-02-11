<?php get_header(); ?>

	<div id="content">

		<div id="inner-content" class="row">

			<main id="main" class="main" role="main">

				<header>
					<?php start_the_archive_title( '<h1 class="page-title">', '</h1>', 'smaller'); ?>
				</header>

				<?php if ( have_posts() ) :
					echo '<section class="archive-list">';
					while ( have_posts() ) : the_post(); ?>

						<?php //if ( is_post_type_archive( 'component' ) || 'post_type' == 'component' || is_category() ) {
							get_template_part( 'parts/loop', 'archive-full' );
						//} else {
						//	get_template_part( 'parts/loop', 'archive-list' );
						//}
						?>

				<?php endwhile; ?>

					</section>

					<?php start_page_navi(); ?>

				<?php else : ?>

					<?php get_template_part( 'parts/content', 'missing' ); ?>

				<?php endif; ?>

			</main> <!-- end #main -->
			

		</div> <!-- end #inner-content -->

	</div> <!-- end #content -->

<?php get_footer(); ?>