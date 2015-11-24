(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('BingoApiProxy', ['$http', '$q', 'ApiBuildRequest', function ($http, $q, apiBuildRequest){
            var me = this;

            me.call = function (method, urlEndpoint, xToken, data){
                var deferred = $q.defer(),
                    request = apiBuildRequest.buildRequest(method, urlEndpoint, xToken, data);

                $http(request)
                    .then(function (response){
                        deferred.resolve(response.data);
                    })
                    .catch(function (response){
                        deferred.reject(response.data);
                    });
                return deferred.promise;
            };

        }]);
})();
