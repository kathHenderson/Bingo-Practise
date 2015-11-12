(function () {
    'use strict';
        angular.module('Tombola.BingoClient')
            .service('AuthenticationService',['$state', 'BingoApiService', 'UserData',
                function($state, bingoApiService, userData){
                var me = this;

                me.username = '';
                me.password = '';
                me.token = '';

                me.isAuthenticated = function(){
                    return token !== '';
                };

                me.login = function(){
                    bingoApiService.makeLoginRequest(me.username, me.password)
                        .then(function (data) {
                            me.token = data.payload.user.token;
                            userData.data = data.payload.user;
                            $state.go('lobby');
                        });
                };

                me.logoutFunction = function() {
                    bingoApiService.makeLogoutRequest(userData.data.token)
                        .then(function(data){
                            me.token = '';
                            userData.data = data.payload;
                            $state.go('login');
                        });
                };


                    //TODO: Move to different service
                me.callNewGame = function(){
                    bingoApiService.getNextGame(userData.data.token)
                        .then(function (data){
                            userData.data = data.payload;
                            $state.go('gameboard');
                        });
                };

                //me.buyingtheTicket = function(){
                //   bingoApiService.buyTicket();
                //};

                    //me.gameCallsCaller = function(){
                    //  bingoApiService.getGameCalls(userData.data.token)
                    //      .then(function(data){
                    //          userData.data = data.payload;
                    //          $state.go('gameboard');
                    //          me.isAuthenticated = function(userData){
                    //              return userData.data.token;
                    //          };
                    //      });
                    //};



    }]);
})();