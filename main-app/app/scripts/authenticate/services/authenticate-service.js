(function () {
    'use strict';
        angular.module('Tombola.BingoClient')
            .service('AuthenticationService',['$state', 'BingoAuthenticationProxy', 'UserData',
                function($state, bingoAuthenticationProxy, userData){
                var me = this,
                    clearAuthenticationDetails = function(){
                        me.username = '';
                        me.password = '';
                    };

                clearAuthenticationDetails();
                me.token = '';

                me.isAuthenticated = function(){
                    console.log('********');
                    return token !== '';
                };

                me.login = function(){
                    bingoAuthenticationProxy.makeLoginRequest(me.username, me.password)
                        .then(function (token) {
                            me.token = token;
                            clearAuthenticationDetails();
                            $state.go('lobby');
                        });
                };

                me.logoutFunction = function() {
                    bingoAuthenticationProxy.makeLogoutRequest(me.token)
                        .then(function(){
                            me.token = '';
                            userData.reset();
                            $state.go('login');
                        });
                };

    }]);
})();