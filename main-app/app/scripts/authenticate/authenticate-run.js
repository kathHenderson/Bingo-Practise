(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .run(['$rootScope', '$location', 'AuthenticationService', function($rootScope, $location, authenticationService){

            $rootScope.$on('$routeChangeStart', function(event){
               if(!authenticationService.isAuthenticated()){
                   $location.path('/login');
               }
            });
        }]);
})();