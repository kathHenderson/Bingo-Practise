(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('BingoService',['$state', 'BingoAuthenticationProxy', 'UserData',
            function($state, bingoAuthenticationProxy, userData){
                var me = this;

                me.token = '';

                me.isAuthenticated = function(){
                    return token !== '';
                };

                me.callNewGame = function(){
                    bingoApiService.getNextGame(userData.data.token)
                        .then(function (data){
                            userData.data = data.payload;
                            $state.go('gameboard');
                        });
                };

                me.buyingtheTicket = function(){
                   bingoApiService.buyTicket();
                };

                me.gameCallsCaller = function(){
                    bingoApiService.getGameCalls(userData.data.token)
                        .then(function(data){
                            userData.data = data.payload;
                            $state.go('gameboard');
                            me.isAuthenticated = function(userData){
                                return userData.data.token;
                            };
                        });
                };

            }]);
})();