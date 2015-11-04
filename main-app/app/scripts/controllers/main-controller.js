(function(){
    'use strict';
    angular.module('Tombola.BingoClient')
        .controller('MainController', ['$scope', '$state', 'BingoApiService', 'UserData',
            function ($scope, $state, bingoApiService, userData) {

                $scope.logoutFunction = function() {
                    bingoApiService.makeLogoutRequest(userData.data.token);
                    $state.go('login');
                    console.log(userData);
                };

            }]);
})();