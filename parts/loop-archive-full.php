<?php
/**
 *  displays whole post in archive list (for components)
 */
?>


<main id="main" class="styleguide-main-column" role="main">
	<article id="post-<?php the_ID(); ?>" <?php post_class( '' ); ?> role="article">


			<h1 class="style-title">
				<span class="the_title"><?php the_title(); ?></span>
			</h1>

			<section class="component component-intro">
				<span class="styleguide_header"><h2>Introduction</h2></span>
				<?php the_field( 'intro', get_the_ID() ); ?>
			</section>
			<?php if ( have_rows( 'design_section', get_the_ID() ) ): ?>
				<section class="component component-design">
					<span class="styleguide_header"><h2>Design</h2></span>
					<?php while ( have_rows( 'design_section', get_the_ID() ) ) : the_row(); ?>
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
							<?php if ( have_rows( 'example', get_the_ID() ) ) : ?>
								<?php while ( have_rows( 'example', get_the_ID() ) ) : the_row(); ?>
									<?php if( get_sub_field( 'layout' ) == 'full' ){ ?>
										<div class="block-container">
											<div class="example-item">
												<span class="styleguide_header"><h3><?php the_sub_field( 'example_title_full', get_the_ID() ); ?></h3></span>
												<?php the_sub_field( 'example_full' ); ?>
											</div>
										</div>
									<?php } else { ?>
										<?php if ( have_rows( 'example_group', get_the_ID() ) ) : ?>
											<div class="grid-container">
												<?php while ( have_rows( 'example_group', get_the_ID() ) ) : the_row(); ?>
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
						<?php endif; ?>
					<?php endwhile; ?>
				</section>
			<?php endif; /* ********** end design section ********** */ ?>
			<?php if ( have_rows( 'code_section', get_the_ID() ) ): ?>
				<section class="component component-code">
					<span class="styleguide_header"><h2>Code</h2></span>
					<div id="tab_code" class="col s12">
						<?php while ( have_rows( 'code_section', get_the_ID() ) ) : the_row(); ?>
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



	</article> <!-- end article -->
</main>