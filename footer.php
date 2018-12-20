</main> <!-- /.site-content-->

<footer class="site-footer" role="contentinfo">
	<div class="container">
		<div>&copy;2018 Johnson Controls</div>
		<nav role="navigation">
			<?php start_footer_links(); ?>
		</nav>
	</div> <!-- end #inner-footer -->
</footer> <!-- end .footer -->

<script>
	jQuery(document).ready(function($) {

		$(window).load(function(){
			$('#preloader').fadeOut('slow',function(){$(this).remove();});
		});

	});
</script>
<?php wp_footer(); ?>
</body>
</html> <!-- end page -->