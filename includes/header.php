<!DOCTYPE html>
<html class="dv">
	<head>
		<title>thePortal</title>
		<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,300i,500|Roboto:300,500"/>
		<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
		<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-layout/1.4.3/layout-default.css" />
		<link type="text/css" rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/slick.grid.css" />
		<link type="text/css" rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/select2.css" />
		<link type="text/css" rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/slick.pager.css" />
		<link type="text/css" rel="stylesheet" href="<?php echo "http://" . $_SERVER['SERVER_NAME']; ?>/dv/assets/css/styles.min.css"/>
	</head>
	<body>
		<header class="page-header navbar-fixed" role="menubar">

			<nav>
				<div class="nav-wrapper">
					<ul class="left">
						<li>
							<a href="#!" data-target="left-side-nav" class="sidenav-trigger show-on-large" id="show_hide_left_side_nav"><i class="far fa-list-ul"></i> <span>Open Side Nav</span></a>
							<a href="#!" data-target="left-side-nav" class="sidenav-close show-on-large" id="hide_side_nav"><i class="far fa-arrow-to-left"></i> <span>Minimize Side Nav</span></a>
						</li>
						<li><a href="#!" id="show_full_screen"><i class="far fa-expand"></i> <span>Full Screen</span></a></li>
					</ul>

					<ul class="right">
						<li class="search-area">

							<div class="search-closed">
								<a class="open-search-button"><i class="far fa-search"></i></a>
							</div>
							<div class="search-open">
								 <form>
									<div class="input-field">
										<input id="search" type="search" placeholder="What would you like to do today?" required>
										<i class="material-icons close-search-button">close</i>
									</div>
								</form>
							</div>
						</li>
						<li><a class="dropdown-trigger" href="#!" data-target="user_dropdown"> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/grumpycat-cutout.jpg" class="circle icon small-icon" />  Good Afternoon,  <strong>Henrietta</strong> <i class="fas fa-caret-down"></i></a>
							<ul id="user_dropdown" class="dropdown-content">
								<li><a href="#!">items that</a></li>
								<li><a href="#!">should go</a></li>
								<li class="divider"></li>
								<li><a href="#!">here</a></li>
								<li><a href="https://codepen.io/tapps/live/dqEdJq">A link to the <strong>DASHBOARD mockup</strong></a></li>
							</ul>
						</li>
						<li><a href="#"><i class="fal fa-question"></i></a></li>
						<li><a href="#"><i class="fal fa-cog"></i></a></li>
						<li><a href="#"><i class="fal fa-bell"></i></a></li>
					</ul>
				</div>
			</nav>

		</header>