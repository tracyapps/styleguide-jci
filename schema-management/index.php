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
				<li class="breadcrumb-item" aria-current="page"><a>Schema Collection List</a></li>
			</ol>
		</nav>
		<header class="table-header grey-bg">
			<div id="top-tab-container" class="align-right">
				<a class="btn add-collection-button waves-effect"><i class="fal fa-folder-plus"></i> Add Collection</a>
			</div>
		</header>

		<div class="content-container standard-table" id="content-panel">
			
			<div id="grid_schemaCollectionList"></div>
			
		</div>
	<footer class="table-footer">
		<div id="pager_schemaCollectionList"></div>
	</footer>
</main>

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