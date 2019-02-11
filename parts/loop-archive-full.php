<?php
/**
 *  displays whole post in archive list (for components)
 */
?>

<main id="main" class="styleguide-main-column" role="main">
	<article id="post-<?php the_ID(); ?>" <?php post_class( '' ); ?> role="article">

		<?php get_template_part( 'parts/include-styles' );
		global $post;
		$section_slug = $post->post_name;
		?>

			<h1 class="style-title two-col">
				<span class="the_title"><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></span>
				<nav class="shortcut_links">
					<a href="#<?php esc_html_e( $section_slug ) ;?>-intro_section">Intro</a>
					<?php if ( have_rows( 'design_section' ) ): ?>
						<a href="#<?php esc_html_e( $section_slug ) ;?>-design_section">Design</a>
					<?php endif;?>
					<?php if ( have_rows( 'code_section' ) ): ?>
						<a href="#<?php esc_html_e( $section_slug ) ;?>-code_section">Code</a>
					<?php endif;?>
				</nav>
			</h1>

		<section class="component component-intro" id="<?php esc_html_e( $section_slug ) ;?>-intro_section">
			<span class="styleguide_header"><h2>Introduction</h2></span>
			<?php the_field( 'intro' ); ?>
		</section>
		<?php if ( have_rows( 'design_section' ) ): ?>
			<section class="component component-design" id="<?php esc_html_e( $section_slug ) ;?>-design_section">
				<span class="styleguide_header"><h2>Design</h2></span>
				<?php while ( have_rows( 'design_section' ) ) : the_row(); ?>
					<?php if ( get_row_layout() == 'text_block_section' ) : ?>
						<span class="styleguide_header"><h3><?php the_sub_field( 'section_title' ); ?></h3></span>
						<?php the_sub_field( 'section_content' ); ?>
					<?php elseif ( get_row_layout() == 'bulleted_list' ) : ?>
						<span class="styleguide_header"><h3><?php the_sub_field( 'section_title' ); ?></h3></span>
						<?php if ( have_rows( 'bullet_points' ) ) : ?>
							<ul>
								<?php while ( have_rows( 'bullet_points' ) ) : the_row(); ?>
									<li><?php the_sub_field( 'point' ); ?></li>
								<?php endwhile; ?>
							</ul>
						<?php else : ?>
							<?php // no rows found ?>
						<?php endif; ?>
					<?php elseif ( get_row_layout() == 'examples' ) : ?>
						<?php if ( have_rows( 'example' ) ) : ?>
							<?php while ( have_rows( 'example' ) ) : the_row(); ?>
								<?php if( get_sub_field( 'layout' ) == 'full' ){ ?>
									<div class="block-container">
										<div class="example-item">
											<span class="styleguide_header"><h3><?php the_sub_field( 'example_title_full' ); ?></h3></span>
											<?php the_sub_field( 'example_full' ); ?>
										</div>
									</div>
								<?php } else { ?>
									<?php if ( have_rows( 'example_group' ) ) : ?>
										<div class="grid-container">
											<?php while ( have_rows( 'example_group' ) ) : the_row(); ?>
												<div class="example-item">
													<span class="styleguide_header"><h3><?php the_sub_field( 'example_title_grid' ); ?></h3></span>
													<?php the_sub_field( 'example_grid' ); ?>
												</div>
											<?php endwhile; ?>
										</div>
									<?php endif; /*  end example grid */ ?>
								<?php } /*  end full or grid conditional */ ?>
							<?php endwhile; ?>
						<?php endif; ?>
					<?php elseif ( get_row_layout() == 'live_examples' ) : ?>
						<?php if ( have_rows( 'example' ) ) : ?>
							<?php while ( have_rows( 'example' ) ) : the_row(); ?>
								<?php if( get_sub_field( 'layout' ) == 'full' ){ ?>
									<div class="block-container">
										<div class="example-item">
											<span class="styleguide_header"><h3><?php the_sub_field( 'example_title_full' ); ?></h3></span>
											<?php the_sub_field( 'example_full_html' ); ?>
											<?php the_sub_field( 'example_full_scss' ); ?>
										</div>
									</div>
								<?php } else { ?>
									<?php if ( have_rows( 'example_group' ) ) : ?>
										<div class="grid-container">
											<?php while ( have_rows( 'example_group' ) ) : the_row(); ?>
												<div class="example-item">
													<span class="styleguide_header"><h3><?php the_sub_field( 'example_title_grid' ); ?></h3></span>
													<?php the_sub_field( 'example_grid_html' ); ?>
													<?php the_sub_field( 'example_grid_scss' ); ?>
												</div>
											<?php endwhile; ?>
										</div>
									<?php endif; /*  end example grid */ ?>
								<?php } ?>
							<?php endwhile; ?>
						<?php endif; ?>
					<?php endif; ?>
				<?php endwhile; ?>
			</section>
		<?php endif; /* ********** end design section ********** */ ?>
		<?php if ( have_rows( 'code_section' ) ): ?>
			<section class="component component-code" id="<?php esc_html_e( $section_slug ) ;?>-code_section">
				<span class="styleguide_header"><h2>Code</h2></span>
				<div id="tab_code" class="col s12">
					<?php while ( have_rows( 'code_section' ) ) : the_row(); ?>
						<?php if ( get_row_layout() == 'text_block_section' ) : ?>
							<span class="styleguide_header"><h3><?php the_sub_field( 'section_title' ); ?></h3></span>
							<?php the_sub_field( 'section_content' ); ?>
						<?php elseif ( get_row_layout() == 'code_block' ) : ?>
							<span class="styleguide_header"><h3><?php the_sub_field( 'section_title' ); ?></h3></span>
							<textarea class="codemirror" theme="monokai"><?php echo esc_html( get_sub_field( 'code' ) ); ?></textarea>
						<?php elseif ( get_row_layout() == 'style_code_block' ) : ?>
							<span class="styleguide_header"><h3><?php the_sub_field( 'section_title' ); ?></h3></span>
							<textarea class="codemirror_style" theme="monokai"><?php echo esc_html( get_sub_field( 'code' ) ); ?></textarea>
						<?php endif; ?>
					<?php endwhile; ?>
				</div>
			</section>
		<?php endif; /* ********** end code section ********** */ ?>

		<?php get_template_part( 'parts/include-scripts' ); ?>


	</article> <!-- end article -->
</main>