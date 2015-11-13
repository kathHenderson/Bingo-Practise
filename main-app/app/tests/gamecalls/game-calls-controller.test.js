(function () {
    'use strict';
    describe('GameCallsController tester', function () {
        var $scope,
            controller;

        beforeEach(function(){
            module('Tombola.BingoClient.GameCalls');
            module('Tombola.BingoClient');
            inject(function($rootScope, $controller){
                $scope = $rootScope.$new();

                controller=$controller('GameCallsController', {
                    $scope: $scope,
                    AuthenticationService: mocks.authenticationService
                });
            });
        });

        it('Controller sets the scope to the passed authenticationService', function(){
            $scope.authenticationService.should.equal(mocks.authenticationService);
        });

    });
})();