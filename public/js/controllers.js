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

.controller( 'PaymentFormController', function( $scope, $http )
{
  $scope.submitPayment = function()
    {
        SimplifyCommerce.generateToken({
            key: "sbpb_ODVhOWQ4NTAtMTNkOC00ZjQ3LWE0NjItNmQ1OTc2OGY1OWEz", // Sandbox
            card: {
                number: $scope.card.ccnumber, //$("#cc-number").val(),
                cvc: $scope.card.cvc, //$("#cc-cvc").val(),
                expMonth: $scope.card.expmonth ,//$("#cc-exp-month").val(),
                expYear: $scope.card.expyear //$("#cc-exp-year").val()
            }
        }, function ( response )
        {
          console.log(response);
            $.post('/service/userCards', response)
                .then( function(response) {
                    console.log(response);
                });
        }
      ) 
    };
})

.controller( 'CardAccessController', function( $scope , CardAccess, UserCards ) 
{
  UserCards.get( function( data )
  {
    $scope.userCards = data.data;
  });
    //alert( $scope.userCards );


  $scope.submitCardAccess = function()
    {
      CardAccess.save(  
        {
          'reciver_email': $scope.cardaccess.reciver_email
          , 'amount': $scope.cardaccess.amount
          , 'period': $scope.cardaccess.period
          , 'credit_id': $scope.cardaccess.credit_id.id
        }
        )
    };
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
})

.controller( 'transactionsController', function ( $scope ) {
        $scope.transactions = [
            {
                id: 1,
                date: '2013/09/27 12:05:23',
                amount: 'CAD 999.00',
                clientId: 1,
                clientName: 'Chinmay',
                merchantId: 1334,
                merchantName: 'Club XXX',
                notes: 'This was awesome',
                pictures: [
                    { thumb: '/pictures/thumb1.jpg', image: '/pictures/image1.jpg' },
                    { thumb: '/pictures/thumb2.jpg', image: '/pictures/image2.jpg' }
                ],
                tags: [
                    'club',
                    'entertainment'
                ]
            },
            {
                id: 2,
                date: '2013/09/27 12:22:05',
                amount: 'CAD 107.00',
                clientId: 1,
                clientName: 'Zad',
                merchantId: 988,
                merchantName: 'Subway',
                notes: 'Delicious',
                pictures: [
                    { thumb: '/pictures/thumb1.jpg', image: '/pictures/image1.jpg' },
                    { thumb: '/pictures/thumb2.jpg', image: '/pictures/image2.jpg' }
                ],
                tags: [
                    'food'                ]
            },
        ];
    })
;
