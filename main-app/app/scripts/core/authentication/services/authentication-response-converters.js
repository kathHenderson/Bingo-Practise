(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('AuthenticationResponseConverter', [function (){
            return {
                convertLoginResponse: function(response){
                    return {
                        token: response.payload.user.token,
                        userInformation: {
                            username: response.payload.user.username,
                            balance: 9000 //TODO: balance - currently borked on server.
                        }
                    };
                }
            };
        }]);
})();
