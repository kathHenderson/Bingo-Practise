(function () {
    'use strict';
    angular.module('Tombola.BingoClient.GetCalls')
        .controller('GetCallsController', ['$scope', 'BingoApiService', '$state', 'UserData', 'AuthenticationService',
            function($scope, bingoApiService, $state, userData, authenticationService){

                $scope.authenticationService = authenticationService;

            }]);
})();