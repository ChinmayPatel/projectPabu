<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" ng-app="projectPabuTestPage">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Pabu Test Page</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="description" content="Project Pabu Test Page">

    <link href="lib/css/bootstrap.css" rel="stylesheet"/>
    <link href="css/bootstrap-theme.css" rel="stylesheet"/>
    <link rel="stylesheet" href="lib/css/nv.d3.css"/>
    <link type="text/css" rel="stylesheet" href="lib/css/ng-grid.min.css" />

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="lib/js/angular.js"></script>
    <script src="lib/js/angular-resource.js"></script>
    <script src="lib/js/angular-sanitize.js"></script>
    <script type="text/javascript" src="lib/js/ng-grid-2.0.7.min.js"></script>
    <script src="lib/js/ui-bootstrap-tpls.js"></script>    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="lib/css/bootstrap.css" />
    <!-- Main Style -->
    <link rel="stylesheet" href="lib/css/style.css" />
    <!-- font-awesome -->
    <link rel="stylesheet" href="lib/css/font-awesome.css" />
    <!--[if IE 7]>
    <link rel="stylesheet" href="font-awesome/css/font-awesome-ie7.min.css">
    <![endif]-->

    <script type="text/javascript" src="https://www.simplify.com/commerce/v1/simplify.js"></script>

    <script src="js/app.js"></script>
    <script src="js/directives.js"></script>
    <script src="js/services.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/simplify_submit.js"></script>

    <script src="lib/js/d3.js"></script>
    <script src="lib/js/nv.d3.js"></script>
    <script src="lib/js/nvd3Directives.js"></script>

</head>

<body class="ng-cloak" ng-controller="MainCtrl">
    <div class="container">
        <div class="row">
            <div class="span4">
                <img class="logo" src="lib/img/spendalert-logo1.png" alt="SpendAlert logo" >
            </div>
            <!-- MENU
        ============================= -->
            <div class="span8">
                <nav class="nav-top">
                    <ul class="nav nav-pills top-menu">
                    <li class="active"><a href="#home">home</a></li>
                    <li><a href="#login">login</a></li>
                    <li><a href="#apitest">apiTest</a></li>
                    <li><a href="#paymentform">Paymnet Form</a></li>
                    <li><a href="#grantAccess">grantAccess</a></li>
                    <li><a href="#userslist">userslist</a></li>
                    <li><a href="#report">report</a></li>
                    <li><a href="#transactions">transactions</a></li>
                    </ul>
                </nav>
            </div>
        </div><!--/row-->
        </div>
    </header>
    <!--/slider-100-->

<div style="margin: 64px;">

    <div class="row-fluid">
        <div class="span">
            <div ng-view></div>
        </div>
    </div>

</div>
</body>

</html>