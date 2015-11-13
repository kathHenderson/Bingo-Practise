(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('GameResponseConverter', [function (){
            return {
                convertGameResponse: function(response){
                    return {
                        token: response.payload.user.token,
                        userInformation: {
                            username: response.payload.user.username,
                            balance: 9000
                        }
                    };
                }
            };
        }]);
})();
