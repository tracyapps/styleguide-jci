</main> <!-- /.site-content-->

<footer class="site-footer" role="contentinfo">
	<div class="container">
		<div>&copy;2018 Johnson Controls</div>
		<nav role="navigation">
			<?php start_footer_links(); ?>
		</nav>
	</div> <!-- end #inner-footer -->
</footer> <!-- end .footer -->



<svg height="0" width="0" viewBox="0 0 0 0" aria-hidden="true">
	<filter id="inset-shadow">
		<!-- Shadow Offset -->
		<feOffset
			dx='0'
			dy='1'
		/>

		<!-- Shadow Blur -->
		<feGaussianBlur
			stdDeviation='1'
			result='offset-blur'
		/>

		<!-- Invert the drop shadow
			 to create an inner shadow -->
		<feComposite
			operator='out'
			in='SourceGraphic'
			in2='offset-blur'
			result='inverse'
		/>

		<!-- Color & Opacity -->
		<feFlood
			flood-color='black'
			flood-opacity='0.4'
			result='color'
		/>

		<!-- Clip color inside shadow -->
		<feComposite
			operator='in'
			in='color'
			in2='inverse'
			result='shadow'
		/>

		<!-- Put shadow over original object -->
		<feComposite
			operator='over'
			in='shadow'
			in2='SourceGraphic'
		/>
	</filter>
</svg>
<div class="hidden svg-icon-inject hide-this" aria-hidden="true">
	<?php include 'assets/svg/output/icons.svg'; ?>
</div>
<?php wp_footer(); ?>
</body>
</html> <!-- end page -->