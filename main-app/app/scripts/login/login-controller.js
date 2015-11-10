(function () {
    'use strict';
    angular.module('Tombola.BingoClient.Login')
        .controller('LoginController', ['$scope', 'BingoApiService', '$state', 'UserData', 'AuthenticationService',
            function($scope, bingoApiService, $state, userData, authenticationService){

                $scope.authenticationService = authenticationService;

        }]);
})();