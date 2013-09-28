angular.module('projectPabuTestPage')
.factory( 'Authenticate', function($resource)
{
    return $resource("/service/authenticate/");
})

.factory( 'User', function($resource)
{
    return $resource("/service/user/");
})

.factory( 'MomoAPICall', function($http) 
{
    return {
         getDataOne : function() 
            { return $http.get(
                'http://ezadkielmarbella.apiary.io/getMomoTestData').then(
                function(result) 
                { return result.data.spendItems[0];
                })
            }
        , getDataTwo : function(callback) {
            $http.get('http://ezadkielmarbella.apiary.io/getMomoTestData')
            .success(callback);
            }
        , testHttpGetResult : function() 
            { return $http.get('http://ezadkielmarbella.apiary.io/getMomoTestData');
            }
        }
})

.factory( 'UserCards', function($resource)
{
    return $resource("/service/userCards/");
})

.factory( 'CardAccess', function($resource)
{
    return $resource("/service/CardAccess/");
});