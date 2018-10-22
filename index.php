<?php include 'includes/header.php'; ?>
<?php include 'includes/sidenav.php'; ?>

<div class="main-container">
	<main class="grid" role="grid">
		<header class="grid-header">
			<div class="tile-filter" role="group">
				<span>Show:</span>
				<div class="filter-options-container">
					<label for="filter_configuration">
					<input type="checkbox" checked="checked" id="filter_configuration" name="color_configuration" class="color_configuration filled-in control-field filter-field form-control" aria-checked="true" /> 
					<span>Configuration</span>
				</label>
					<label for="filter_tools">
						<input type="checkbox" checked="checked" id="filter_tools" name="color_tools" class="color_tools filled-in control-field filter-field form-control" aria-checked="true" />
						<span>Tools</span>
					</label>
					<label for="filter_help_and_support">
						<input type="checkbox" checked="checked" id="filter_help_and_support" name="color_help_and_support" class="color_help_and_support filled-in control-field filter-field form-control" aria-checked="true" />
						<span>Help &amp; Support</span>
					</label>
					<label for="filter_service_health">
						<input type="checkbox" checked="checked" id="filter_service_health" name="color_service_health" class="color_service_health filled-in control-field filter-field form-control" aria-checked="true" />
						<span>Service Health</span>
					</label>
					<label for="filter_applications">
						<input type="checkbox" checked="checked" id="filter_applications" name="color_applications" class="color_applications filled-in control-field filter-field form-control" aria-checked="true" />
						<span>Applications</span>
					</label>
					
				</div>

			</div>
		</header>

		<section class="item color_configuration category_configuration" data-color="color_configuration" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-user_management"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-user_management' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-fingerprint"></i>
					</div>
					<div class="text">
						Identity Management
					</div>
				</main>
			</div>
		</section>
		
		<section class="item color_configuration category_configuration" data-color="color_configuration" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-user_management"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-user_management' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-users"></i>
					</div>
					<div class="text">
						Group Management
					</div>
				</main>
			</div>
		</section>

		<section class="item color_configuration category_configuration" data-color="color_configuration" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-access_management"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-access_management' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-key"></i>
					</div>
					<div class="text">
						Security &amp; Access Management
					</div>
				</main>
			</div>
		</section>


		<section class="item color_tools category_tools item_asset_management" data-color="color_tools" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-asset_management"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-asset_management' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-tablet-android-alt"></i>
					</div>
					<div class="text">
						Asset Management
					</div>
				</main>
			</div>
		</section>
		
		<section class="item color_tools category_tools" data-color="color_tools" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-space_management"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-space_management' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-cubes"></i>
					</div>
					<div class="text">
						Space Management
					</div>
				</main>
			</div>
		</section>
		
		<section class="item color_tools category_tools" data-color="color_tools" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-professional_services"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-professional_services' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-file-chart-line"></i>
					</div>
					<div class="text">
						Professional Services
					</div>
				</main>
			</div>
		</section>

		<section class="item color_tools category_tools" data-color="color_tools" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-schema_management"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-schema_management' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-sitemap"></i>
					</div>
					<div class="text">
						Schema Management
					</div>
				</main>
			</div>
		</section>
		
		<section class="item color_tools category_tools" data-color="color_tools" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-space_explorer"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-space_explorer' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-map-marked"></i>
					</div>
					<div class="text">
						Space Explorer
					</div>
				</main>
			</div>
		</section>

		<section class="item color_tools category_tools" data-color="color_tools" role="gridcell" aria-disabled="true">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-timeseries_management"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-timeseries_management' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-stopwatch"></i>
					</div>
					<div class="text">
						Timeseries Management
					</div>
				</main>
			</div>
		</section>
		
		<section class="item color_tools category_tools disabled" data-color="color_tools" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-entity_relationship_importer"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-entity_relationship_importer' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-upload"></i>
					</div>
					<div class="text">
						Entity/Relationship Importer
					</div>
				</main>
			</div>
		</section>

		
		

		<section class="item color_help_and_support category_help_and_support" data-color="color_help_and_support" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-support_plans"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-support_plans' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-info-square"></i>
					</div>
					<div class="text">
						Support Plans
					</div>
				</main>
			</div>
		</section>
		
		<section class="item color_help_and_support category_help_and_support" data-color="color_help_and_support" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-learn_about_billing"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-learn_about_billing' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-money-bill"></i>
					</div>
					<div class="text">
						Learn About Billing
					</div>
				</main>
			</div>
		</section>

		
		<section class="item color_help_and_support category_help_and_support" data-color="color_help_and_support" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-documentation"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-documentation' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-book"></i>
					</div>
					<div class="text">
						Documentation
					</div>
				</main>
			</div>
		</section>
		

		<section class="item color_service_health category_service_health" data-color="color_service_health" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-nginx_log"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-nginx_log' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-file-code"></i>
					</div>
					<div class="text">
						Nginx Log
					</div>
				</main>
			</div>
		</section>

		<section class="item color_service_health category_service_health" data-color="color_service_health" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-audit_log"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-audit_log' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-file-invoice"></i>
					</div>
					<div class="text">
						Audit Log
					</div>
				</main>
			</div>
		</section>

		<section class="item color_service_health category_service_health" data-color="color_service_health" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-exception_log"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-exception_log' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-file-minus"></i>
					</div>
					<div class="text">
						Exception Log
					</div>
				</main>
			</div>
		</section>

		<section class="item color_service_health category_service_health" data-color="color_service_health" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-api_status"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-api_status' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-traffic-light-go"></i>
					</div>
					<div class="text">
						API Status
					</div>
				</main>
			</div>
		</section>

		<section class="item color_service_health category_service_health" data-color="color_service_health" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-weather_status"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-weather_status' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fal fa-sun"></i>
					</div>
					<div class="text">
						Weather Status
					</div>
				</main>
			</div>
		</section>
		
		<section class="item color_applications category_applications" data-color="color_applications" role="gridcell" aria-disabled="false">
			<div class="item-content">
				<header class="item-header">
					<div class="menu">
						<a class="dropdown-trigger" href="#" data-target="dropdown-weather_status"><i class="fal fa-ellipsis-v"></i> <span>Menu</span></a>
						<ul id='dropdown-weather_status' class='dropdown-content'>
							<li><a href="#!"><i class="fal fa-minus-circle"></i> Remove</a></li>
							<li class="divider" tabindex="-1"></li>
							<li><a href="#!"><i class="fal fa-tachometer-alt"></i> Move</a></li>
						</ul>
					</div>
				</header>
				<main class="item-main">
					<div class="icon">
						<i class="fab fa-app-store-ios"></i>
					</div>
					<div class="text">
						Assurance Services
					</div>
				</main>
			</div>
		</section>

		

	</main>
	<aside class="latest-activity">
		<h2>Latest Activity</h2>
		<ul class="timeline">
			<li class="color_configuration">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/grumpycat-cutout.jpg" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_tools">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/this-is-fine.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_applications">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/angry-unicorn.png" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_configuration">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/i.chzbgr.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_applications">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/interesting-1.jpg" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_service_health">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/i.chzbgr.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_tools">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/interesting-1.jpg" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_tools">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/this-is-fine.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_help_and_support">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/i.chzbgr.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_service_health">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/grumpycat-cutout.jpg" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_service_health">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/this-is-fine.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_configuration">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/i.chzbgr.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_tools">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/this-is-fine.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_applications">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/i.chzbgr.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_configuration">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/grumpycat-cutout.jpg" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_applications">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/this-is-fine.gif" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
			<li class="color_configuration">
				<div class="activity-content-container">
					<div class="icon-col">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/83206/grumpycat-cutout.jpg" class="circle icon small-icon" />
					</div>
					<div class="info-col">
						<span class="timestamp">Henrietta.Herrara | 5 minutes ago</span>
						<span class="action">New file created</span>
						<span class="action-detail">Some_Spreadsheet_name.xls</span>
					</div>
				</div>
			</li>
		</ul>
		<a href="#" class="btn link">Load More &raquo;</a>
	</aside>
</div>

<?php include 'includes/footer.php'; ?>