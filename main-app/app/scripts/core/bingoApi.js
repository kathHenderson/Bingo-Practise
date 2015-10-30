(function () {
    'use strict';
    angular.module('Tombola.BingoServer')
        .service('BingoApiService', ['$http', '$q', function ($http, $q){
            var callGameService = function (action, data){
                var deferred = $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:30069/' + action,
                data,
                    {"withCredentials": "true"})
                    .then(function bingoapi(response){
                        deferred.resolve(response.data);
                    })
                    .catch(function (response){
                       deferred.reject(response.data);
                    });
                return deffered.promise;
            };

            return{
                loginRequest: function(username, password){
                    return callGameService('login', {'username': username, "password": password});
                }
            };
        }]);
})();