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
            $.post('/service/userCards', {
                name: $scope.card.name,
                response: response
            } )
                .then( function(response) {
                    console.log(response);
                });
        }
      ) 
    };
})

.controller( 'CardAccessController', function( $scope , CardAccess, UserCards , User  ) 
{
  User.get( function( data )
    {
      $scope.Userlist = data.data;
    });
  
  UserCards.get( function( data )
  {
    $scope.userCards = data.data;
  });
    //alert( $scope.userCards );


  $scope.submitCardAccess = function()
    {
      CardAccess.save(  
        {
          'receiver_email': $scope.cardaccess.receiver_email
          , 'amount': $scope.cardaccess.amount
          , 'period': $scope.cardaccess.period
          , 'credit_id': $scope.cardaccess.credit_id.id
        } , function( response )
        {
           $scope.alerts = [];
          if( response.error != 0 )
          {

            $scope.alerts.push(
                    { type: 'danger'
                    , msg : "Failed: " + response.error.message
                    });
          }
          else
          {  
            $scope.alerts.push(
                      { type: 'success'
                      , msg : "Access Granted to user"
                      });

          }
        }
      )
    };
})

.controller( 'ReportingController', function( $scope , $route ) 
{
  $scope.username = "Ron";

  $scope.chartData 
    = [
        {
            key: "Chinmay",
            y: 70.00
        },
        {
            key: "Jason",
            y: 20.00
        },
        {
            key: "Gamal",
            y: 90.00
        },
        {
            key: "Zad",
            y: 70.00
        },
        {
            key: "Nana",
            y: 40.00
        },
        {
            key: "Siez",
            y: 30.00
        },
        {
            key: "Ibs",
            y: 90.00
        }
      ];

     $scope.exampleData = [
       {
           "key": "Series 1",
             "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] , [ 1059624000000 , 11.341210982529] , [ 1062302400000 , 14.734820409020] , [ 1064894400000 , 12.387148007542] , [ 1067576400000 , 18.436471461827] , [ 1070168400000 , 19.830742266977] , [ 1072846800000 , 22.643205829887] , [ 1075525200000 , 26.743156781239] , [ 1078030800000 , 29.597478802228] , [ 1080709200000 , 30.831697585341] , [ 1083297600000 , 28.054068024708] , [ 1085976000000 , 29.294079423832] , [ 1088568000000 , 30.269264061274] , [ 1091246400000 , 24.934526898906] , [ 1093924800000 , 24.265982759406] , [ 1096516800000 , 27.217794897473] , [ 1099195200000 , 30.802601992077] , [ 1101790800000 , 36.331003758254] , [ 1104469200000 , 43.142498700060] , [ 1107147600000 , 40.558263931958] , [ 1109566800000 , 42.543622385800] , [ 1112245200000 , 41.683584710331] , [ 1114833600000 , 36.375367302328] , [ 1117512000000 , 40.719688980730] , [ 1120104000000 , 43.897963036919] , [ 1122782400000 , 49.797033975368] , [ 1125460800000 , 47.085993935989] , [ 1128052800000 , 46.601972859745] , [ 1130734800000 , 41.567784572762] , [ 1133326800000 , 47.296923737245] , [ 1136005200000 , 47.642969612080] , [ 1138683600000 , 50.781515820954] , [ 1141102800000 , 52.600229204305] , [ 1143781200000 , 55.599684490628] , [ 1146369600000 , 57.920388436633] , [ 1149048000000 , 53.503593218971] , [ 1151640000000 , 53.522973979964] , [ 1154318400000 , 49.846822298548] , [ 1156996800000 , 54.721341614650] , [ 1159588800000 , 58.186236223191] , [ 1162270800000 , 63.908065540997] , [ 1164862800000 , 69.767285129367] , [ 1167541200000 , 72.534013373592] , [ 1170219600000 , 77.991819436573] , [ 1172638800000 , 78.143584404990] , [ 1175313600000 , 83.702398665233] , [ 1177905600000 , 91.140859312418] , [ 1180584000000 , 98.590960607028] , [ 1183176000000 , 96.245634754228] , [ 1185854400000 , 92.326364432615] , [ 1188532800000 , 97.068765332230] , [ 1191124800000 , 105.81025556260] , [ 1193803200000 , 114.38348777791] , [ 1196398800000 , 103.59604949810] , [ 1199077200000 , 101.72488429307] , [ 1201755600000 , 89.840147735028] , [ 1204261200000 , 86.963597532664] , [ 1206936000000 , 84.075505208491] , [ 1209528000000 , 93.170105645831] , [ 1212206400000 , 103.62838083121] , [ 1214798400000 , 87.458241365091] , [ 1217476800000 , 85.808374141319] , [ 1220155200000 , 93.158054469193] , [ 1222747200000 , 65.973252382360] , [ 1225425600000 , 44.580686638224] , [ 1228021200000 , 36.418977140128] , [ 1230699600000 , 38.727678144761] , [ 1233378000000 , 36.692674173387] , [ 1235797200000 , 30.033022809480] , [ 1238472000000 , 36.707532162718] , [ 1241064000000 , 52.191457688389] , [ 1243742400000 , 56.357883979735] , [ 1246334400000 , 57.629002180305] , [ 1249012800000 , 66.650985790166] , [ 1251691200000 , 70.839243432186] , [ 1254283200000 , 78.731998491499] , [ 1256961600000 , 72.375528540349] , [ 1259557200000 , 81.738387881630] , [ 1262235600000 , 87.539792394232] , [ 1264914000000 , 84.320762662273] , [ 1267333200000 , 90.621278391889] , [ 1270008000000 , 102.47144881651] , [ 1272600000000 , 102.79320353429] , [ 1275278400000 , 90.529736050479] , [ 1277870400000 , 76.580859994531] , [ 1280548800000 , 86.548979376972] , [ 1283227200000 , 81.879653334089] , [ 1285819200000 , 101.72550015956] , [ 1288497600000 , 107.97964852260] , [ 1291093200000 , 106.16240630785] , [ 1293771600000 , 114.84268599533] , [ 1296450000000 , 121.60793322282] , [ 1298869200000 , 133.41437346605] , [ 1301544000000 , 125.46646042904] , [ 1304136000000 , 129.76784954301] , [ 1306814400000 , 128.15798861044] , [ 1309406400000 , 121.92388706072] , [ 1312084800000 , 116.70036100870] , [ 1314763200000 , 88.367701837033] , [ 1317355200000 , 59.159665765725] , [ 1320033600000 , 79.793568139753] , [ 1322629200000 , 75.903834028417] , [ 1325307600000 , 72.704218209157] , [ 1327986000000 , 84.936990804097] , [ 1330491600000 , 93.388148670744]]
     }
   ];

    $scope.xFunction = function(){
      return function(d) {
        return d.key;
      };
    }

    $scope.yFunction = function(){
      return function(d) {
          return d.y;
      };
    }

    $scope.descriptionFunction = function(){
      return function(d){
        return d.key;
        }
    }
  
    $scope.tooltipContent = function(){
      return function(key, x, obj) {
        return '<h3>' + key + '</h3>' +'<p> $' + x + '</p>' ;
    }
  }

})

.controller( 'ExampleCtrl', function ($scope){

     $scope.exampleData = [
       {
           "key": "Series 1",
             "values": [ [ 1025409600000 , 0] , [ 1028088000000 , -6.3382185140371] , [ 1030766400000 , -5.9507873460847] , [ 1033358400000 , -11.569146943813] , [ 1036040400000 , -5.4767332317425] , [ 1038632400000 , 0.50794682203014] , [ 1041310800000 , -5.5310285460542] , [ 1043989200000 , -5.7838296963382] , [ 1046408400000 , -7.3249341615649] , [ 1049086800000 , -6.7078630712489] , [ 1051675200000 , 0.44227126150934] , [ 1054353600000 , 7.2481659343222] , [ 1056945600000 , 9.2512381306992] , [ 1059624000000 , 11.341210982529] , [ 1062302400000 , 14.734820409020] , [ 1064894400000 , 12.387148007542] , [ 1067576400000 , 18.436471461827] , [ 1070168400000 , 19.830742266977] , [ 1072846800000 , 22.643205829887] , [ 1075525200000 , 26.743156781239] , [ 1078030800000 , 29.597478802228] , [ 1080709200000 , 30.831697585341] , [ 1083297600000 , 28.054068024708] , [ 1085976000000 , 29.294079423832] , [ 1088568000000 , 30.269264061274] , [ 1091246400000 , 24.934526898906] , [ 1093924800000 , 24.265982759406] , [ 1096516800000 , 27.217794897473] , [ 1099195200000 , 30.802601992077] , [ 1101790800000 , 36.331003758254] , [ 1104469200000 , 43.142498700060] , [ 1107147600000 , 40.558263931958] , [ 1109566800000 , 42.543622385800] , [ 1112245200000 , 41.683584710331] , [ 1114833600000 , 36.375367302328] , [ 1117512000000 , 40.719688980730] , [ 1120104000000 , 43.897963036919] , [ 1122782400000 , 49.797033975368] , [ 1125460800000 , 47.085993935989] , [ 1128052800000 , 46.601972859745] , [ 1130734800000 , 41.567784572762] , [ 1133326800000 , 47.296923737245] , [ 1136005200000 , 47.642969612080] , [ 1138683600000 , 50.781515820954] , [ 1141102800000 , 52.600229204305] , [ 1143781200000 , 55.599684490628] , [ 1146369600000 , 57.920388436633] , [ 1149048000000 , 53.503593218971] , [ 1151640000000 , 53.522973979964] , [ 1154318400000 , 49.846822298548] , [ 1156996800000 , 54.721341614650] , [ 1159588800000 , 58.186236223191] , [ 1162270800000 , 63.908065540997] , [ 1164862800000 , 69.767285129367] , [ 1167541200000 , 72.534013373592] , [ 1170219600000 , 77.991819436573] , [ 1172638800000 , 78.143584404990] , [ 1175313600000 , 83.702398665233] , [ 1177905600000 , 91.140859312418] , [ 1180584000000 , 98.590960607028] , [ 1183176000000 , 96.245634754228] , [ 1185854400000 , 92.326364432615] , [ 1188532800000 , 97.068765332230] , [ 1191124800000 , 105.81025556260] , [ 1193803200000 , 114.38348777791] , [ 1196398800000 , 103.59604949810] , [ 1199077200000 , 101.72488429307] , [ 1201755600000 , 89.840147735028] , [ 1204261200000 , 86.963597532664] , [ 1206936000000 , 84.075505208491] , [ 1209528000000 , 93.170105645831] , [ 1212206400000 , 103.62838083121] , [ 1214798400000 , 87.458241365091] , [ 1217476800000 , 85.808374141319] , [ 1220155200000 , 93.158054469193] , [ 1222747200000 , 65.973252382360] , [ 1225425600000 , 44.580686638224] , [ 1228021200000 , 36.418977140128] , [ 1230699600000 , 38.727678144761] , [ 1233378000000 , 36.692674173387] , [ 1235797200000 , 30.033022809480] , [ 1238472000000 , 36.707532162718] , [ 1241064000000 , 52.191457688389] , [ 1243742400000 , 56.357883979735] , [ 1246334400000 , 57.629002180305] , [ 1249012800000 , 66.650985790166] , [ 1251691200000 , 70.839243432186] , [ 1254283200000 , 78.731998491499] , [ 1256961600000 , 72.375528540349] , [ 1259557200000 , 81.738387881630] , [ 1262235600000 , 87.539792394232] , [ 1264914000000 , 84.320762662273] , [ 1267333200000 , 90.621278391889] , [ 1270008000000 , 102.47144881651] , [ 1272600000000 , 102.79320353429] , [ 1275278400000 , 90.529736050479] , [ 1277870400000 , 76.580859994531] , [ 1280548800000 , 86.548979376972] , [ 1283227200000 , 81.879653334089] , [ 1285819200000 , 101.72550015956] , [ 1288497600000 , 107.97964852260] , [ 1291093200000 , 106.16240630785] , [ 1293771600000 , 114.84268599533] , [ 1296450000000 , 121.60793322282] , [ 1298869200000 , 133.41437346605] , [ 1301544000000 , 125.46646042904] , [ 1304136000000 , 129.76784954301] , [ 1306814400000 , 128.15798861044] , [ 1309406400000 , 121.92388706072] , [ 1312084800000 , 116.70036100870] , [ 1314763200000 , 88.367701837033] , [ 1317355200000 , 59.159665765725] , [ 1320033600000 , 79.793568139753] , [ 1322629200000 , 75.903834028417] , [ 1325307600000 , 72.704218209157] , [ 1327986000000 , 84.936990804097] , [ 1330491600000 , 93.388148670744]]
     }
   ];
   $scope.configureXaxis = function(){
      return function(d){
        return d.key;
        }
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
})

.controller( 'transactionsController', function ( $scope , UserTransaction ) {
        UserTransaction.get( function( data )
        {
          $scope.data = data.data ;
          console.log ( $scope.data );
        } );
        $scope.gridOptions = {
            data: 'data',
            columnDefs: [
                {field:'id', visible: false, width: 0}
              , {field:'spender_name', displayName:'Spender Name' }
              , {field:'card_name', displayName:'Card Name' }
              , {field:'marchant_name', displayName:'Merchant Name'}
              , {field:'amount', displayName:'Amount',cellTemplate: 'partials/amountcolcell.html'}
              , {field:'notes', displayName: 'Notes'}
              , {field:'created_at', displayName:'Date Of Transaction'}
            ]
        };
    })
.controller( 'UsersListController', function( $scope ,  $resource , User ) 
{
  User.get( function( data )
  {
    $scope.Userlist = data.data;
  });
})

.controller( 'GrantAccesUserController', function( $scope , $routeParams, $resource ,CardAccess, UserCards , User  ) 
{
  User = $resource("/service/user/:id");
  User.get( { id:$routeParams.id } ,  function( data )
    {
      $scope.user_info = data.data;
    });
  
  UserCards.get( function( data )
  {
    $scope.userCards = data.data;
  });
    //alert( $scope.userCards );


  $scope.submitCardAccess = function()
    {
      CardAccess.save(  
        {
          'reciver_email':$scope.user_info.email
          , 'amount': $scope.cardaccess.amount
          , 'period': $scope.cardaccess.period
          , 'credit_id': $scope.cardaccess.credit_id.id
        }, function( response )
        {
           $scope.alerts = [];
          if( response.error != 0 )
          {

            $scope.alerts.push(
                    { type: 'danger'
                    , msg : "Failed: " + response.error.message
                    });
          }
          else
          {  
            $scope.alerts.push(
                      { type: 'success'
                      , msg : "Access Granted to user"
                      });

          }
        }
        )
    };
})
;
