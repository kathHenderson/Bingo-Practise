(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('UserAuthenticationUpdater', ['UserData', function (userData) {
            return function (response) {
                userData.update(response.payload.user.username, response.payload.user.balance);
                return response.payload.user.token;
            };
        }]);
})();
