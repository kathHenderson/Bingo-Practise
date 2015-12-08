(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('BingoAuthenticationProxy', ['$q', 'BingoApiProxy', 'UserAuthenticationUpdater', function
            ($q, bingoApiProxy, userAuthenticationUpdater) {
            var me = this;

            me.makeLoginRequest = function (username, password) {
                var deferred = $q.defer(),
                    data = {"username": username, "password": password},
                    bingoCallPromise = bingoApiProxy.call('POST', '/users/login', '', data);
                    bingoCallPromise.then(function (response) {
                        //console.log('resolved*********');
                        var token = userAuthenticationUpdater(response);
                        deferred.resolve(token);
                    })
                    .catch(function (response) {
                        //console.log('caught*********');
                        deferred.reject(response);
                    });

                //console.log('returining*********');
                return deferred.promise;
            };

            me.makeLogoutRequest = function (token) {
                return bingoApiProxy.call('POST', '/users/logout', token);
            };
        }]);
})();