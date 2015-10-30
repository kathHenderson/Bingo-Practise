(function () {
    'use strict';
    angular.module('Tombola.BingoServer.Login')
        .service('Login', ['BingoApiService',
        function(bingoApiProxy) {
            var me = this;

            me.loginAction = function(){
                bingoApiProxy.userLogin(enteredUsername.username);
            };
        }]);
})();