(function () {
    'use strict';
    angular.module('Tombola.BingoClient.GameCalls')
        .controller('GameCallsController', ['$scope', 'BingoApiService', '$state', 'UserData', 'AuthenticationService',
            function($scope, bingoApiService, $state, userData, authenticationService){

                $scope.authenticationService = authenticationService;

            }]);
})();