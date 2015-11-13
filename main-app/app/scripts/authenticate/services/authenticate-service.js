(function () {
    'use strict';
        angular.module('Tombola.BingoClient')
            .service('AuthenticationService',['$state', 'BingoAuthenticationProxy', 'UserData',
                function($state, bingoAuthenticationProxy, userData){
                var me = this;

                me.username = '';
                me.password = '';
                me.token = '';

                me.isAuthenticated = function(){
                    return token !== '';
                };

                me.login = function(){
                    bingoAuthenticationProxy.makeLoginRequest(me.username, me.password)
                        .then(function (authenticationInformation) {
                            //TODO: clear username and password values.
                            me.token = authenticationInformation.token;
                            userData.update(authenticationInformation.userInformation.username, authenticationInformation.userInformation.balance);
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