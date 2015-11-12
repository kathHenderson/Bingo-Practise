(function () {
    'use strict';
    angular.module('Tombola.BingoClient.BuyTicket')
        .controller('BuyTicketController', ['$scope', 'BingoApiService', '$state', 'UserData', 'AuthenticationService',
            function($scope, bingoApiService, $state, userData, authenticationService){
                $scope.authenticationService = authenticationService;
            }]);
})();