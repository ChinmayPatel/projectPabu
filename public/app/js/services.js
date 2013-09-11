angular.module('myApp')

.factory('Authenticate', function($resource){
	return $resource("/service/authenticate/");
})

.factory('User', function($resource){
	return $resource("/service/user/");
})

