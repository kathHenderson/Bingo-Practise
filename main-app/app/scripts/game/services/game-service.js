//TODO: this is nowhere near done, finish itttttttt
(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('BingoService',['$state', 'BingoAuthenticationProxy', 'UserData',
            function($state, bingoAuthenticationProxy, userData){
                var me = this,
                    clearAuthenticationDetails = function(){};
                me.token = '';

                me.isAuthenticated = function(){
                    return token !== '';
                };

                me.callNewGame = function(){
                    bingoAuthenticationProxy.getNextGame(userData.data.token)
                        .then(function (data){
                            userData.data = data.payload;
                            clearAuthenticationDetails();
                            $state.go('gameboard');
                        });
                };

                //TODO: Finish this portion of the coding; it's game implementation
                me.buyingtheTicket = function(){
                    bingoAuthenticationProxy.buyTicket(userData.data.token)
                        .then(function(data){
                            userData.data = data.payload;

                        });
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