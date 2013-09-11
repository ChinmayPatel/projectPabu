<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Laravel4 AngularJS Authentication and security</title>

    <!-- CSS -->
    <link href="app/css/vendor/bs-responsive-2.css" rel="stylesheet">
    <link href="app/css/vendor/bs-theme.css" rel="stylesheet">
    <link href="app/css/vendor/bs-v3.css" rel="stylesheet">

    <!-- SCRIPTS -->
	<script src="app/lib/angular/angular.min.js"></script>
	<script src="app/lib/angular/angular-resource.min.js"></script>
	<script src="app/lib/angular/angular-sanitize.min.js"></script>
	<script src="app/js/app.js"></script>
	<script src="app/js/controllers.js"></script>
	<script src="app/js/directives.js"></script>
	<script src="app/js/filters.js"></script>
	<script src="app/js/services.js"></script>

</head>

<body ng-app="myApp">
	<div class="container" ng-view></div>
</body>
</html>