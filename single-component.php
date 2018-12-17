<?php get_header(); ?>

	<div id="content">

		<section id="inner-content" class="row">

			<main id="main" class="styleguide-main-column" role="main">

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

				<?php echo do_shortcode('[ez-toc]') ?>

					<section class="component component-intro">
						<h2>Introduction</h2>
						<?php the_field( 'intro' ); ?>
					</section>
					<?php if ( have_rows( 'design_section' ) ): ?>
						<section class="component component-design">
							<h2>Design</h2>
							<?php while ( have_rows( 'design_section' ) ) : the_row(); ?>
								<?php if ( get_row_layout() == 'text_block_section' ) : ?>
									<h3><?php the_sub_field( 'section_title' ); ?></h3>
									<?php the_sub_field( 'section_content' ); ?>
								<?php elseif ( get_row_layout() == 'bulleted_list' ) : ?>
									<h3><?php the_sub_field( 'section_title' ); ?></h3>
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
												<h3><?php the_sub_field( 'example_title_full' ); ?></h3>
												<?php the_sub_field( 'example_full' ); ?>
											<?php } else { ?>
												<?php if ( have_rows( 'example_group' ) ) : ?>
													<?php while ( have_rows( 'example_group' ) ) : the_row(); ?>
														<h3><?php the_sub_field( 'example_title_grid' ); ?></h3>
														<?php the_sub_field( 'example_grid' ); ?>
													<?php endwhile; ?>
												<?php endif; /*  end example grid */ ?>
											<?php } /*  end full or grid conditional */ ?>
										<?php endwhile; ?>
									<?php endif; ?>
								<?php endif; ?>
							<?php endwhile; ?>
						</section>
					<?php endif; /* ********** end design section ********** */ ?>
					<?php if ( have_rows( 'code_section' ) ): ?>
						<section class="component component-code">
							<h2>Code</h2>
							<div id="tab_code" class="col s12">
								<?php while ( have_rows( 'code_section' ) ) : the_row(); ?>
									<?php if ( get_row_layout() == 'text_block_section' ) : ?>
										<h3><?php the_sub_field( 'section_title' ); ?></h3>
										<?php the_sub_field( 'section_content' ); ?>
									<?php elseif ( get_row_layout() == 'code_block' ) : ?>
										<h3><?php the_sub_field( 'section_title' ); ?></h3>
										<textarea class="codemirror" theme="monokai"><?php echo esc_html( get_sub_field( 'code' ) ); ?></textarea>
									<?php elseif ( get_row_layout() == 'style_code_block' ) : ?>
										<h3><?php the_sub_field( 'section_title' ); ?></h3>
										<textarea class="codemirror_style" theme="monokai"><?php echo esc_html( get_sub_field( 'code' ) ); ?></textarea>
									<?php endif; ?>
								<?php endwhile; ?>
							</div>
						</section>
					<?php endif; /* ********** end code section ********** */ ?>


				<?php endwhile; // end if there is anything
				else : ?>

					<?php get_template_part( 'parts/content', 'missing' ); ?>

				<?php endif; ?>

			</main> <!-- end #main -->

		</div> <!-- end #inner-content -->

	</div> <!-- end #content -->

<?php get_footer(); ?>