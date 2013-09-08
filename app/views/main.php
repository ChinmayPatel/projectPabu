<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" ng-app="projectMomoTestPage">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Project Momo Test Page</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<meta name="description" content="Project Momo Test Page">

<script src="js/vendor/angular.v1.0.8.js"></script>
<script src="js/vendor/ui-select2.js"></script> 
<script src="js/vendor/ui-bootstrap-tpls-v0.5.0.js"></script>
<script src="js/assets/app.js"></script>

<link href="css/vendor/bootstrap.v3.0.0.css" rel="stylesheet" />

</head>
<body class="ng-cloak" ng-controller="MainCtrl">

 <header class="navbar navbar-default navbar-fixed-top">
  <ul class="nav navbar-nav">
   <li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#"> Project Momo <b class="caret"></b>
    </a>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
     <li><a href="#">getMomoData</a></li>
    </ul>
   </li>
 </div>
 </header>

 <div style="margin: 64px;"></div>
 <div role="main">
  <section id="alert">
  <div class="page-header">
   <h1>Project Momo API</h1>
  </div>
  <div class="row-fluid">
   <div class="span">
    <div ng-controller="MomoDemoCtrl">
     <alert ng-repeat="alert in alerts" type="alert.type" close="closeMomoAlert($index)">{{alert.msg}}</alert>
     <button class='btn' ng-click="addMomoAlert()">Test API Momo Alert</button>
    </div>

   </div>
  </div>
  <hr>

  </section>
 </div>

</body>
</html>
