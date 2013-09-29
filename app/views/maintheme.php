<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en" ng-app="projectPabuTestPage">

<head>

    <!-- Basic Page Needs -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Pabu Test Page</title>
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- fav and touch icons 
    ======================================================================================-->
    <link rel="shortcut icon" href="images/favicon/favicon.ico">
    <link rel="apple-touch-icon" href="images/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-touch-icon-114x114.png">
  
	<!-- Start CSS Style 
    =======================================================================================-->
    <!-- Bootstrap -->
    <link rel="stylesheet" href="lib/css/bootstrap.css">
    <!-- Main Style -->
    <link rel="stylesheet" href="lib/css/style.css">
    <!-- font-awesome -->
    <link rel="stylesheet" href="lib/css/font-awesome.css">
    <!--[if IE 7]>
    <link rel="stylesheet" href="font-awesome/css/font-awesome-ie7.min.css">
    <![endif]-->

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
      <link href="css/ie.css" rel="stylesheet" />
    <![endif]-->

    <link rel="stylesheet" href="lib/css/nv.d3.css"/>
    <link type="text/css" rel="stylesheet" href="lib/css/ng-grid.min.css" />



    <!-- Start JS  
    =======================================================================================-->


    <!-- From Theme -->    
    <script src="lib/js/jquery.js"></script>
    <script src="lib/js/jquery.easing.1.3.js"></script>
    <script src="lib/js/bootstrap.js"></script>
    <script src="lib/js/mosaic.1.0.1.js"></script><!--hover effect-->
    <script src="lib/js/jquery.prettyPhoto.js"></script>
    <script src="lib/js/jquery.carouFredSel-6.1.0-packed.js"></script><!--horizontal slider-->
    <script src="lib/js/jflickrfeed.min.js"></script><!-- jQuery Flickr -->
    <script src="lib/js/jquery.masonry.min.js"></script><!-- jQuery Pinterest -->
    <script src="lib/js/custom.js"></script>

    <!-- From Code -->
    <script src="lib/js/angular.js"></script>
    <script src="lib/js/angular-resource.js"></script>
    <script src="lib/js/angular-sanitize.js"></script>
    <script src="lib/js/ui-bootstrap-tpls.js"></script>

    <script type="text/javascript" src="https://www.simplify.com/commerce/v1/simplify.js"></script>

    <script src="js/app.js"></script>
    <script src="js/directives.js"></script>
    <script src="js/services.js"></script>
    <script src="js/controllers.js"></script>
    <script src="js/simplify_submit.js"></script>

    <script src="lib/js/d3.js"></script>
    <script src="lib/js/nv.d3.js"></script>
    <script src="lib/js/nvd3Directives.js"></script>

    <script type="text/javascript" src="lib/js/ng-grid-2.0.7.min.js"></script>

</head>


<body class="ng-cloak" ng-controller="MainCtrl">

    <header>
    	<div class="container">
            <div class="row">
                <div class="span3">
                    <span class="logo"><img src="images/logoPicSA_001.png" alt="SpendAlert"></span>
                </div>
                <!-- MENU
                ============================= -->
                <div class="span9">
                    <nav class="nav-top">
                        <ul class="nav nav-pills top-menu">
                        <!--<li><a href="#home">Home</a></li>-->
                        <li><a href="#login">Login</a></li>
                        <!-- <li><a href="#apitest">apiTest</a></li> -->
                        <li><a href="#paymentform">Payment Form</a></li>
                        <li><a href="#grantAccess">Grant Card Access</a></li>
                        <li><a href="#userslist">Users List</a></li>
                        <li><a href="#report">Report</a></li>
                        <li><a href="#transactions">Transaction</a></li>
                        </ul>
                    </nav>
                </div>
            </div><!--/row-->
        </div>
    </header>    

    <div class="container" style="padding-top: 64px;">  
        <div class="row-fluid">
            <div class="span">
                <div ng-view></div>
            </div>
        </div>
    </div><!--/container-->
    
    
    <footer>
    	<div class="container">
            <div class="row">
                <!-- Links
                ============================= -->
                <div class="span4">
                    <div class="top-part">

                        <ul class="footer-links">
                            <li data-original-title=""><a href="index.html">Home</a></li>
                            <li data-original-title=""><a href="about_us.html">About us</a></li>
                            <li data-original-title=""><a href="blog_list.html">Blog</a></li>
                            <li data-original-title=""><a href="sitemap.html">Sitemap</a></li>
                            <li data-original-title=""><a href="contact_us.html">Contact us</a></li>
                        </ul>
                    </div>
                    <div class="socials">
                    	<span>Stay Connected</span>
                        <a href="#"><i class="icon-facebook-sign"></i></a>
                        <a href="#"><i class="icon-twitter-sign"></i></a>
                        <a href="#"><i class="icon-google-plus-sign"></i></a>
                        <a href="#"><i class="icon-linkedin-sign"></i></a>
                        <a href="#"><i class="icon-github-sign"></i></a>
                    </div>
                </div>
                <!-- TWITTER
                ============================= -->
                <div class="span4">
                	<div class="top-part">Twitter Feed</div>
                	<div class="tweet"><p class="loading">loading tweets...</p></div>
                </div>
                <!-- FLICKR
                ============================= -->
                <div class="span4">
                	<div class="top-part">Flickr Feed</div>
                	<ul class="basicuse thumbs"><li><a href="http://farm4.staticflickr.com/3647/3435384001_9ed9864bb4_b.jpg"><img src="http://farm4.staticflickr.com/3647/3435384001_9ed9864bb4_s.jpg" alt="DSC_0660"></a></li><li><a href="http://farm4.staticflickr.com/3311/3436188742_caaa28c689_b.jpg"><img src="http://farm4.staticflickr.com/3311/3436188742_caaa28c689_s.jpg" alt="DSC_0698"></a></li><li><a href="http://farm4.staticflickr.com/3371/3436188466_418a0d8a06_b.jpg"><img src="http://farm4.staticflickr.com/3371/3436188466_418a0d8a06_s.jpg" alt="DSC_0668"></a></li><li><a href="http://farm4.staticflickr.com/3397/3436188128_5e503cefcd_b.jpg"><img src="http://farm4.staticflickr.com/3397/3436188128_5e503cefcd_s.jpg" alt="DSC_0704"></a></li><li><a href="http://farm4.staticflickr.com/3300/3436187796_4d228a5bde_b.jpg"><img src="http://farm4.staticflickr.com/3300/3436187796_4d228a5bde_s.jpg" alt="DSC_0699"></a></li><li><a href="http://farm4.staticflickr.com/3386/3435382439_68b5e3742b_b.jpg"><img src="http://farm4.staticflickr.com/3386/3435382439_68b5e3742b_s.jpg" alt="DSC_0602"></a></li></ul>
                </div>
            </div>
        </div>
        
        <div class="bottom-area">
        	<div class="container">
            	<div class="row">
                	<div class="span6">
                    	Copyright © 2013 SpendAlert. All rights reserved.
                    </div>
                    <div class="span6 text-right">
                    	Socialize with us on Twitter, Facebook, Dribbble or Rss
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <script>
	// PINTEREST STYLE
	//-----------------------------------------------------------------------------
	jQuery(document).ready(function($) {
		
		$('#container').masonry({
			  itemSelector: '.pin',
			  isFitWidth: true
		});
	});
	</script>
