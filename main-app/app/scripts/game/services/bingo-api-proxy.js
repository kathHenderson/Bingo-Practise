(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('BingoApiProxy', ['$http', '$q', 'BaseUrl', function ($http, $q, baseUrl){
            var me = this,
                buildRequest = function(method, urlEndpoint, xToken, data){
                    var request = {
                        method: method,
                        url: baseUrl + urlEndpoint,
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json'
                        }
                    };

                    if(xToken){
                        request.headers['x-token'] = xToken;
                    }

                    if(data){
                       request.data = data;
                    }
                    return request;
                };

            me.call = function (method, urlEndpoint, xToken, data){
                var deferred = $q.defer(),
                    request = buildRequest(method, urlEndpoint, xToken, data);

                $http(request)
                    .then(function bingoapi(response){
                        deferred.resolve(response.data);
                    })
                    .catch(function (response){
                        deferred.reject(response.data);
                    });
                return deferred.promise;
            };

        }]);
})();
