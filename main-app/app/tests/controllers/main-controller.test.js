(function () {
    'use strict';
    describe('GameCallsController tester', function () {
        var $scope,
            controller;

        beforeEach(function(){
            module('Tombola.BingoClient', function($provide){
                $provide.value('AuthenticationService', mocks.authenticationService);
                $provide.value('UserData', mocks.userData);
            });
            inject(function($rootScope, $controller){
                $scope = $rootScope.$new();
                controller=$controller('MainController', {
                    $scope: $scope
                });
            });
        });

        it('Controller sets the scope to the passed authenticationService', function(){
            $scope.authenticationService.should.equal(mocks.authenticationService);
        });

        it('Controller sets the scope to the passed userData', function(){
            $scope.userData.should.equal(mocks.userData);
        });

    });
})();