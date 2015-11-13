(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('BingoAuthenticationProxy', ['$q', 'BingoApiProxy','AuthenticationResponseConverter', function
            ($q, bingoApiProxy, authenticationResponseConverter){
            var me = this;

            me.makeLoginRequest = function (username, password){
                var deferred = $q.defer();
                var data = {"username": username, "password": password};
                bingoApiProxy.call('POST', '/users/login', '', data)
                    .then(function(response){
                        var authenticationInformation = authenticationResponseConverter.convertLoginResponse(response);
                        deferred.resolve(authenticationInformation);
                    })
                    .catch(function(response){
                        deferred.reject(response);
                    });

                return deferred.promise;
            };

            me.makeLogoutRequest = function(token){
                return bingoApiProxy.call('POST', '/users/logout', token);
            };
        }]);
})();