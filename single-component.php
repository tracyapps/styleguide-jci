<?php get_header(); ?>

	<div id="content">

		<div id="inner-content" class="row">

			<main id="main" class="main-column" role="main">

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>


				<ul class="tabs">
					<li class="tab"><a href="#tab_introduction">Introduction</a></li>
					<?php if ( have_rows( 'design_section' ) ): ?>
						<li class="tab"><a href="#tab_design">Design</a></li>
					<?php endif; ?>
					<?php if ( have_rows( 'code_section' ) ): ?>
						<li class="tab"><a href="#tab_code">Code</a></li>
					<?php endif; ?>
				</ul>
				<section id="tab_content" class="tabs-content">
					<div id="tab_introduction" class="col s12">
						<?php
						//$content = get_field( 'intro' );
						//echo Parsedown::instance()->text($content);
						the_field( 'intro' );
						?>
					</div>
					<?php if ( have_rows( 'design_section' ) ): ?>
						<div id="tab_design" class="col s12">
							<?php while ( have_rows( 'design_section' ) ) : the_row(); ?>
								<?php if ( get_row_layout() == 'text_block_section' ) : ?>
									<?php the_sub_field( 'section_title' ); ?>
									<?php the_sub_field( 'section_content' ); ?>
								<?php elseif ( get_row_layout() == 'bulleted_list' ) : ?>
									<?php the_sub_field( 'section_title' ); ?>
									<?php if ( have_rows( 'bullet_points' ) ) : ?>
									<ul class="guideline-list">
										<?php while ( have_rows( 'bullet_points' ) ) : the_row(); ?>
											<li>
												<?php the_sub_field( 'point' ); ?>
											</li>
										<?php endwhile; ?>
									</ul>
									<?php else : ?>
										<?php // no rows found ?>
									<?php endif; ?>
								<?php elseif ( get_row_layout() == 'examples' ) : ?>
									<?php if ( have_rows( 'example' ) ) : ?>
									<section class="example-container">
										<?php while ( have_rows( 'example' ) ) : the_row(); ?>
											<div class="card <?php the_sub_field( 'size' ); ?>">
												<div class="text-container">
													<h6><?php the_sub_field( 'example_title' ); ?></h6>
													<span><?php the_sub_field( 'example_description' ); ?></span>
												</div>
												<?php if ( get_sub_field( 'example_image' ) ) { ?>
													<div class="image-container">
														<a href="<?php the_sub_field( 'example_image' ); ?>"><img src="<?php the_sub_field( 'example_image' ); ?>" /></a>
													</div>
												<?php } ?>
											</div>
										<?php endwhile; ?>
									</section>
									<?php endif; ?>
								<?php endif; ?>
							<?php endwhile; ?>
						</div>
					<?php endif; ?>
					<?php if ( have_rows( 'code_section' ) ): ?>
						<div id="tab_code" class="col s12">
							<?php while ( have_rows( 'code_section' ) ) : the_row(); ?>
								<?php if ( get_row_layout() == 'text_block_section' ) : ?>
									<?php the_sub_field( 'section_title' ); ?>
									<?php the_sub_field( 'section_content' ); ?>
								<?php elseif ( get_row_layout() == 'code_block' ) : ?>
									<?php the_sub_field( 'section_title' ); ?>
									<textarea class="codemirror" theme="monokai"><?php echo esc_html( get_sub_field( 'code' ) ); ?></textarea>
								<?php elseif ( get_row_layout() == 'style_code_block' ) : ?>
									<?php the_sub_field( 'section_title' ); ?>
									<textarea class="codemirror_style" theme="monokai"><?php echo esc_html( get_sub_field( 'code' ) ); ?></textarea>
								<?php endif; ?>
							<?php endwhile; ?>
						</div>
					<?php endif; ?>
				</section> <!-- / tab_content -->

				<?php endwhile;
				else : ?>

					<?php get_template_part( 'parts/content', 'missing' ); ?>

				<?php endif; ?>

			</main> <!-- end #main -->

		</div> <!-- end #inner-content -->

	</div> <!-- end #content -->

<?php get_footer(); ?>