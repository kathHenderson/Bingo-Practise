(function () {
    'use strict';
        angular.module('Tombola.BingoClient')
            .service('AuthenticationService',['$state', 'BingoApiService', 'UserData',
                function($state, bingoApiService, userData){
                var me = this;
                    me.username = '';
                    me.password = '';

                me.login = function(){
                    bingoApiService.makeLoginRequest(me.username, me.password)
                        .then(function (data) {
                            userData.data = data.payload.user;
                            $state.go('lobby');
                            me.isAuthenticated = function(userData){
                                return userData.data.token;
                            };
                        });
                };

                me.logoutFunction = function() {
                    bingoApiService.makeLogoutRequest(userData.data.token);
                    $state.go('login');
                    console.log(userData);
                    me.isAuthenticated = function(userData){
                        return userData.data.token;
                    };
                };

                me.callNewGame = function(){
                    bingoApiService.getNextGame(userData.data.token)
                        .then(function (data){
                            userData.data = data.payload;
                            $state.go('gameboard');
                            console.log(userData);
                            me.isAuthenticated = function(userData){
                                return userData.data.token;
                            };
                        });
                };

    }]);
})();