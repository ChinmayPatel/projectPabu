angular.module("myApp",['ngResource','ngSanitize'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{templateUrl:'app/partials/login.html' })
    $routeProvider.when('/home',{templateUrl:'app/partials/home.html' })
    $routeProvider.when('/signup',{templateUrl:'app/partials/signup.html' })
    $routeProvider.otherwise({redirectTo:'/'})
}])
