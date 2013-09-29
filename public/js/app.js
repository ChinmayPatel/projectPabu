angular.module( 'projectPabuTestPage'
              , [ 'ngResource'
                , 'ngSanitize'
                , 'ui.bootstrap'
                , 'nvd3ChartDirectives'
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
                .when( '/report', 
                     { templateUrl:'partials/reporting.html' }
                     )
                .when( '/grantAccess/:id', 
                     { templateUrl:'partials/grantaccess_with_user.html' }
                     )
                .when( '/grantAccess', 
                     { templateUrl:'partials/grantaccess.html' }
                     )
                .when( '/userslist', 
                     { templateUrl:'partials/userlist.html' }
                     )
                .when( '/transactions',
                    { templateUrl:'partials/transactions.html' }
                )
                .otherwise( { redirectTo:'/login' } )
            } 
          ]
        )
