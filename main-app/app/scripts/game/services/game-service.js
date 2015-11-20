//TODO: this is nowhere near done, finish itttttttt
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
                    bingoAuthenticationProxy.getNextGame(userData.data.token)
                        .then(function (data){
                            userData.data = data.payload;
                            $state.go('gameboard');
                        });
                };

                me.buyingtheTicket = function(){
                    bingoAuthenticationProxy.buyTicket();
                };

                //me.gameCallsCaller = function(){
                //    bingoAuthenticationProxy.getGameCalls(userData.data.token)
                //        .then(function(data){
                //            userData.data = data.payload;
                //            $state.go('gameboard');
                //            me.isAuthenticated = function(userData){
                //                return userData.data.token;
                //            };
                //        });
                //};

            }]);
})();