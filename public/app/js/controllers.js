
angular.module('myApp')

	.controller('loginController',function($scope,$sanitize,$location,Authenticate){
		$scope.login = function(){
			// $scope.flash = '';
			Authenticate.save({
				'email': $sanitize($scope.email),
				'password': $sanitize($scope.password)
			},function(response) { // success

				if( response.error == 0 ){
					$scope.flash = ''
					$location.path('/home');
				} else {
					$scope.flash = response.error.message;
				}

			},function(response){ // error
				$scope.flash = response.data.flash
			})
		}
	})

	.controller('signupController',function($scope,$sanitize,$location,User){
		$scope.signup = function(){
			// $scope.flash = '';
			User.save({
				'name': $sanitize($scope.name),
				'email': $sanitize($scope.email),
				'password': $sanitize($scope.password)
			},function() {
				$scope.flash = '';
				$location.path('/home');
			},function(response){
				$scope.flash = response.data.flash;
			})
		}
	})

	.controller('homeController',function($scope,$location,Authenticate){
		$scope.logout = function (){
			Authenticate.get({},function(){
				$location.path('/');
			})
		}
	})
