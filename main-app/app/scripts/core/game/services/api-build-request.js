(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('ApiBuildRequest', ['BaseUrl', function (baseUrl) {
            var me = this;
            me.buildRequest = function (method, urlEndpoint, xToken, data) {
                var request = {
                    method: method,
                    url: baseUrl + urlEndpoint,
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json'
                    }
                };

                if (xToken) {
                    request.headers['x-token'] = xToken;
                }

                if (data) {
                    request.data = data;
                }
                return request;
            };

        }]);
})();