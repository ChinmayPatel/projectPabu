angular.module( 'projectPabuTestPage'
              , [ 'ngResource'
                , 'ngSanitize'
                , 'ui.bootstrap'
                ]
              )

.config( [ '$routeProvider'
       , function( $routeProvider )
           {
                $routeProvider
                .when( '/login'
                     , { templateUrl: 'partials/login.html' }
                     , { controller: 'LoginController' }
                     )
                .when( '/home'
                     , { templateUrl:'partials/home.html' }
                     )
                .when( '/signup'
                     , { templateUrl:'partials/signup.html' }
                     )
                .when( '/apitest', 
                     { templateUrl:'partials/apitest.html' }
                     )
                .when( '/paymentform', 
                     { templateUrl:'partials/paymentform.html' }
                     )
                .otherwise( { redirectTo:'/login' } )
            } 
          ]
        )
