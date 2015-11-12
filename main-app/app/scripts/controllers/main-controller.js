(function(){
    'use strict';
    angular.module('Tombola.BingoClient')
        .controller('MainController', ['$scope', '$state', 'UserData', 'AuthenticationService',
            function ($scope, $state, userData, authenticationService) {
                $scope.userData = userData;
                $scope.authenticationService = authenticationService;

            }]);
})();