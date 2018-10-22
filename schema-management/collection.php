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
				<li class="breadcrumb-item"><a href="index.php">Schema Collection List</a></li>
				<li class="breadcrumb-item" aria-current="page"><a>Schema Collection: <strong>BRICK_0_4</strong></a></li>
			</ol>
		</nav>
		<header class="table-header grey-bg">
			<div id="top-tab-container">
				<ul class="nav tabs" role="tablist">
					<li class="tab collectionDetailTab">
						<a class="nav-link schema_list_entity" data-toggle="tab" role="tab" aria-controls="Entity" aria-selected="true" href="#grid_schemaList_entity">Entity</a>
					</li>
					<li class="tab collectionDetailTab">
						<a class="nav-link schema_list_message" data-toggle="tab" role="tab" aria-controls="Message" aria-selected="false" href="#grid_schemaList_message">Message</a>
					</li>
					<li class="tab collectionDetailTab">
						<a class="nav-link schema_list_relationship" data-toggle="tab" role="tab" aria-controls="Relationship" aria-selected="true" href="#grid_schemaList_relationship">Relationship</a>
					</li>
					<li class="tab collectionDetailTab">
						<a class="nav-link schema_list_event" data-toggle="tab" role="tab" aria-controls="Event" aria-selected="false" href="#grid_schemaList_event">Event</a>
					</li>
				</ul>
			</div>
		</header>

		<div class="content-container standard-table" id="content-panel">
			
			<div id="grid_schemaList_entity"></div>
			<div id="grid_schemaList_message">message list is very similar to the entity list</div>
			<div id="grid_schemaList_relationship">relationship list</div>
			<div id="grid_schemaList_event">event list</div>
			
		</div>
	<footer class="table-footer">
		<div id="pager_schemaCollectionList"></div>
	</footer>
</main>

<div id="modal_schemaList" class="modal modal-fixed-footer">
		<div class="modal-header">
			<h3>Quick View: <strong>BRICK_0_4__Whatever_Was_Chosen</strong></h3>
		</div>
    <div class="modal-content">
			
			<h5>The quick preview of the selected row will go here</h5>
			<p>user will be able to navigate and view different versions directly from this modal (below)</p>
			<hr />
			<h6>The rest of this text is just placeholder to show where the modal scrolls</h6>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu nisi ac mi luctus lacinia eget nec dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum eu dolor vitae feugiat. Duis iaculis, arcu imperdiet gravida hendrerit, massa felis lobortis nibh, at finibus enim erat vitae orci. Suspendisse in diam condimentum, blandit purus id, tincidunt felis. Vestibulum a nunc quis eros pellentesque convallis. Nullam auctor, felis non facilisis imperdiet, ante urna luctus augue, ac accumsan libero sapien in ipsum. Curabitur porttitor, arcu ac aliquet elementum, erat arcu lacinia nulla, et rutrum orci tellus sit amet ligula. Aliquam eget metus ipsum. Cras non ultrices sem, id volutpat ex. Quisque maximus, massa ut viverra malesuada, massa sapien eleifend sapien, a dignissim eros elit non arcu. Suspendisse quis purus efficitur, sollicitudin ante a, porta est. Mauris non fringilla justo.</p>
			<p>Morbi vestibulum faucibus iaculis. Quisque id urna nec velit ullamcorper tincidunt non tempor mauris. Aliquam mi augue, gravida in luctus sed, vehicula eget nunc. Nulla in varius enim. Vestibulum ac enim bibendum, placerat nulla eget, aliquam urna. Duis lacinia sit amet sem at pellentesque. Sed rutrum purus sit amet nulla varius, id congue enim cursus. Praesent viverra arcu id lorem ultrices, at pharetra augue accumsan. Integer ultricies nisl est, vitae ullamcorper enim scelerisque in. Vivamus ornare odio at pretium pretium. Quisque tristique enim ante, quis interdum felis aliquet sed.</p>
			<p>Quisque non quam pulvinar, lacinia justo vitae, mattis quam. Nunc quis suscipit augue. Duis ut lorem dapibus, gravida metus sit amet, aliquet orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at nunc iaculis mauris posuere mollis a eu mi. Sed pretium ac nisi at maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
			<p>Aenean bibendum vel nunc eu accumsan. In fermentum faucibus ipsum, sed egestas dolor hendrerit nec. Sed lectus lectus, cursus nec nunc facilisis, dictum faucibus nibh. Nunc laoreet eros est, non eleifend mauris pellentesque vitae. Quisque porta consectetur elit ac pharetra. Sed sit amet felis risus. Praesent malesuada tristique dui, consequat pellentesque neque maximus id. Pellentesque vulputate sem ut mauris lobortis auctor. Suspendisse ut dignissim mi.</p>
			<p>Ut tristique a erat iaculis dictum. Etiam fermentum nulla vel mattis gravida. Morbi eu consequat metus. Proin est ipsum, porta eget tortor at, finibus pharetra lectus. Nullam id ipsum feugiat, fringilla libero sit amet, suscipit libero. Nulla mattis ipsum id aliquet pellentesque. Sed eu ultricies ipsum, vel egestas erat. Donec a condimentum purus. Nulla consectetur porta lectus eget tempus. Phasellus consequat magna dolor, a sodales nisl luctus ut. Curabitur faucibus nisl in elit vestibulum vestibulum.</p>
    </div>
    <div class="modal-footer">
			<div class="quick_view_versions">
				<a href="#!" class="btn link disabled">Latest: V3</a> | <a href="#!" class="btn link">V2</a> | <a href="#!" class="btn link">V1</a>
			</div>
       <a href="#!" class="modal-close waves-effect btn">Close Quick View</a>
    </div>
  </div>
<div id="modal_deleteNotes" class="modal modal-fixed-footer">
		<div class="modal-header">
			<h3>Delete</h3>
		</div>
    <div class="modal-content">
			
			<h5>Note:</h5>
			<p>clicking on delete, should open up some sort of an alert for the user to confirm or cancel deleting the row.</p>
    </div>
    <div class="modal-footer">
			<a href="#!" class="modal-close waves-effect btn">Cancel</a>
			<a href="#!" class="modal-close waves-effect btn">Confirm</a>
    </div>
  </div>

<?php include '../includes/footer.php'; ?>