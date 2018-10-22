<?php include '../includes/header.php'; ?>
<?php include '../includes/sidenav.php'; ?>

<div class="top-section section-header light-grey">
	<div class="page-title">
		<div class="page-breadcrumbs">
			<i class="fas fa-th"></i> <a href="../">My Dashboard</a> <span class="seperator">></span> 
		</div>
		<h1><i class="fas fa-sitemap color_tools"></i> Schema Management</h1>
	</div>
	
</div>

<main class="page-main">
	
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb-list">
				<li class="breadcrumb-item"><a href="https://codepen.io/tapps/live/BqdpGr">Schema Collection List</a></li>
				<li class="breadcrumb-item"><a href="https://codepen.io/tapps/live/ePEjNL">Schema Collection: <strong>BRICK_0_4</strong></a></li>
				<li class="breadcrumb-item" aria-current="page"><a><span class="edit-or-view">Viewing</span> Schema: <strong>BRICK_0_4__Heating_Discharge_Air_Temparture_Proportional_Band</strong></a></li>
			</ol>
		</nav>
		<header class="table-header grey-bg">
			<div id="top-tab-container" class="with-side-tabs">
				<ul class="nav tabs" role="tablist">
					<li class="tab">
						<a class="nav-link json_view" data-toggle="tab" role="tab" aria-controls="JSON" aria-selected="false" href="#">JSON</a>
					</li>
					<li class="tab">
						<a class="nav-link active table_view" data-toggle="tab" role="tab" aria-controls="table" aria-selected="true" href="#">Table Format</a>
					</li>
				</ul>
				<div class="button-group">
				<a class="btn grey-button cancel-button hidden waves-effect">Cancel</a>
				<a class="btn blue-button edit-save-toggle edit-schema-button waves-effect"><i class="fal fa-pencil-alt"></i> <span class="edit-or-save">Edit</span> Schema</a>
			</div>
			</div>
			
		</header>

		<div class="content-container side-tab-table" id="content-panel">
			<div class="tab-side">
				<ul class="nav verticaltabs flex-column" id="table-tab-nav" role="tablist" aria-orientation="vertical">
					<li class="vtab">
						<a href="#schema" class="nav-link active" id="schema-tab" data-toggle="tab" role="tab" aria-selected="true">Schema <span></span></a>
					</li>
					<li class="vtab">
						<a href="#sysdata" class="nav-link" id="sysdata-tab" data-toggle="tab" role="tab" aria-selected="false">SysData <span></span></a>
						</li>
					<li class="vtab">
						<a href="#brickmetadata" class="nav-link" id="brickmetadata-tab" data-toggle="tab" role="tab" aria-selected="false">BrickMetaData <span></span></a>
						
					</li>
				</ul>
					
			</div>
			<div class="content-side content_table_view">
				<div class="content-container tab-content" id="content-panel">
					
					<div class="tab-pane active" id="schema">
						<div id="grid_schema_view_edit__schema" class="table-view view-container visible"></div>
						
						<div id="schema-json" class="json-view view-container">
							Schema json view will go here
						</div>
					</div>
					<div class="tab-pane" id="sysdata">
						<div id="grid_schema_view_edit__sysdata" class="table-view view-container visible"></div>
						<div id="sysdata-json" class="json-view view-container">
							json view will go here for SysData tab
						</div>
					</div>
					<div class="tab-pane" id="brickmetadata">
						<div id="grid_schema_view_edit__brickmetadata" class="table-view view-container visible"></div>
						<div class="json-view view-container" id="brickmetadata-json">
							and finally, the json view of the BrickMetaData tab will go here
						</div>
					</div>

				</div>
			</div>
		</div>
	<footer class="table-footer">
			<div class="current-version">
				<strong>Version 2</strong> - 12 aug 18
			</div>
			<div class="previous-versions">
				<a class="toggle-versions-drawer-button">
					<span class="btn waves-effect">
						<i class="fal fa-angle-double-left"></i>
					</span> 
					<span class="text-wrap">
						<span class="show-or-hide">Show</span> <wbr>Versions
					</span>	
				</a>
				<div class="versions-drawer">
					<ul>
						<li><span><a><strong>v1</strong> - 20 May 18</a></span></li>
						<li><span><a><strong>v1</strong> - 20 May 18</a></span></li>
						<li><span><a><strong>v1</strong> - 20 May 18</a></span></li>
						<li><span><a><strong>v1</strong> - 20 May 18</a></span></li>
					</ul>
				</div>
			</div>
		</footer>
</main>

<?php include '../includes/footer.php'; ?>