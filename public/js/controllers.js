angular.module('projectPabuTestPage')

.controller( 'LoginController', function( $scope, $sanitize, $location, Authenticate )
{
    $scope.login = function()
    {
      Authenticate.save(
        { 'email': $sanitize($scope.credentials.email)
        , 'password': $sanitize($scope.credentials.password)
        }
      , function(response)
        { // success
            $scope.alerts = [];
            if( response.error == 0 )
            {
                $location.path('/home');
            } 
            else
            {
                $scope.alerts.push(
                    { type: 'danger'
                    , msg : "Failed: " + response.error.message
                    });
            }
        }
      , function(response)
        { // error
                $scope.alerts.push({
                    type: 'danger',
                    msg : "Error: " + response.data.alert
                });
        })
    }

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
})

.controller( 'SignupController', function( $scope, $sanitize, $location, User )
{
    $scope.signup = function()
    {
        User.save(
          { 'email': $sanitize($scope.email)
          , 'password': $sanitize($scope.password)
          }
        , function()
          { // success
            $scope.flash = '';
            $location.path('/home');
          }
        , function(response)
          {
            $scope.error = response.data.error;
          })
    }
})

.controller( 'HomeController', function( $scope, $location, Authenticate )
{
    $scope.title = "Dashboard";
    $scope.oneAtATime = true;

    $scope.groups = [ { title: "Heading 1"
                      , content: "Heading 1 - body" }
                    , { title: "Heading 2"
                      , content: "Heading 2 - body" }
                    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() 
                     { var newItemNo = $scope.items.length + 1;
                       $scope.items.push('Item ' + newItemNo);
                     };

    $scope.logout = function()
                    { Authenticate.get({},function()
                        {
                         $location.path('/');
                        }
                      );
                    };
})

.controller('MainCtrl', function($scope) {})

.controller( 'MomoDemoCtrl', function( $scope, MomoAPICall )
{
    $scope.alerts = [ { type : 'danger'
                      , msg : 'Oh snap! Momo Alert.' }
                    , { type : 'success'
                      , msg : 'Well done! Momo Alert.'}
                    ];

    $scope.addMomoAlert = function() {
        MomoAPICall.getDataOne().then(function(data) {
                // this will execute when the
                // AJAX call completes.
                $scope.alerts.push({
                    type: 'success',
                    msg : "Another Momo alert! " + data.name
                });
            });
    };

    $scope.closeMomoAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});