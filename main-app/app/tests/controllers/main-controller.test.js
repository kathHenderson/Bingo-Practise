(function () {
    'use strict';
    describe.skip('GameCallsController tester', function () {
        var $scope,
            controller;

        beforeEach(function(){
            module('Tombola.BingoClient');
            inject(function($rootScope, $controller){
                $scope = $rootScope.$new();

                controller=$controller('MainController', {
                    $scope: $scope,
                    AuthenticationService: mocks.authenticationService,
                    UserData: mocks.userData
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