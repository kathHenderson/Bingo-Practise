(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('BingoApiService', ['$http', '$q', function ($http, $q){
            var me = this;
            me.callGameService = function (req){
                var deferred = $q.defer();
                $http(req)
                    .then(function bingoapi(response){
                       deferred.resolve(response.data);
                    })
                    .catch(function (response){
                       deferred.reject(response.data);
                    });
                return deferred.promise;
            };
            me.makeLoginRequest = function (username, password){
                var req = {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/users/login',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json'
                    },
                    data: {"username": username, "password": password}
                };

                return me.callGameService(req);
            };
            me.makeLogoutRequest = function(token){
                var req = {
                    method: 'POST',
                    url: 'http://eutaveg-01.tombola.emea:30069/users/logout',
                    headers: {
                        'x-token': token,
                        'content-type': 'application/json'
                    }
                };
                return me.callGameService(req);
            };

            me.getNextGame = function(token){
                var req = {
                    method: 'GET',
                    url: 'http://eutaveg-01.tombola.emea:30069/game/next',
                    headers: {
                        'x-token': token,
                        'content-type': 'application.json'
                    }
                };
                return me.callGameService(req);
            };

        }]);
})();