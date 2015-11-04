(function () {
    'use strict';
    angular.module('Tombola.BingoClient.Login')
        .controller('LoginController', ['$scope', 'BingoApiService', '$state', 'UserData',
            function($scope, bingoApiService, $state, userData){
            var proxy = bingoApiService;

            $scope.password = '';
            $scope.username = '';

            $scope.login = function(){
                proxy.makeLoginRequest($scope.username, $scope.password)
                    .then(function (data) {
                        userData.data = data.payload.user;
                        $state.go('lobby');
                        console.log(userData);
                    });
                 };

        }]);
})();