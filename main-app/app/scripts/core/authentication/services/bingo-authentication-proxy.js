(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('BingoAuthenticationProxy', ['$q', 'BingoApiProxy', 'UserAuthenticationUpdater', function
            ($q, bingoApiProxy, userAuthenticationUpdater) {
            var me = this;

            me.makeLoginRequest = function (username, password) {
                var deferred = $q.defer();
                var data = {"username": username, "password": password};
                bingoApiProxy.call('POST', '/users/login', '', data)
                    .then(function (response) {
                        var token = userAuthenticationUpdater(response);
                        deferred.resolve(token);
                    })
                    .catch(function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            };

            me.makeLogoutRequest = function (token) {
                return bingoApiProxy.call('POST', '/users/logout', token);
            };
        }]);
})();