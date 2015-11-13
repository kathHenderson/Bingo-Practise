(function () {
    'use strict';
    describe('Login controller tester', function () {
        var $scope,
            controller;

        beforeEach(function(){
           module('Tombola.BingoClient.Login');
           module('Tombola.BingoClient');
            inject(function($rootScope, $controller){
               $scope = $rootScope.$new();

                controller=$controller('LoginController', {
                    $scope: $scope,
                    AuthenticationService: mocks.authenticationService
                });
            });
        });

        it('Controller sets the scope to the passed authetnicationService', function(){
            $scope.authenticationService.should.equal(mocks.authenticationService);
        });

    });
})();