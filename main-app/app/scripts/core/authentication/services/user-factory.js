(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .factory('UserFactory', [function (){
            return {
                convertLoginResponse: function(response){
                    return {
                        token: response.payload.user.token,
                        userInformation: {
                            username: response.payload.user.username,
                            balance: response.payload.user.balance
                        }
                    };
                }
            };
        }]);
})();
