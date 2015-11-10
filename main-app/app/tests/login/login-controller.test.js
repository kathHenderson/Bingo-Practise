(function () {
    'use strict';
    describe('Main controller tester', function () {
        var $scope,
            $q,
            deferred,
            stateSpy,
            sandbox,
            makeLoginRequestStub,
            makeLogoutRequestStub,
            controller;

        beforeEach(function () {
            module('Tombola.BingoClient');
            inject(function ($rootScope, $controller, _$q_) {
                sandbox = sinon.sandbox.create();
                $scope = $rootScope.$new();
                $q = _$q_;
                deferred = _$q_.defer();
                stateSpy = sinon.sandbox.spy(mocks.fakeState, 'go');
                makeLoginRequestStub = sinon.sandbox.stub(mocks.bingoApiService, 'makeLoginRequest', function(){return deferred.promise;});
                makeLogoutRequestStub = sinon.sandbox.stub(mocks.bingoApiService, 'makeLogoutRequest', function(){return deferred.promise;});
                controller = $controller('LoginController', {
                    $scope: $scope,
                    $state: mocks.fakeState,
                    BingoApiService: mocks.bingoApiService
                });
            });
        });

        it('MakeLoginRequest should have been called at least once ', function(){
            $scope.login();
            deferred.resolve({payload:{user:{}}});
            $scope.$digest();
            makeLoginRequestStub.should.have.been.calledOnce;
            stateSpy.should.have.been.calledOnce;
        });

        it('MakeLogoutRequest should have been called at least once', function(){
           $scope.logoutFunction();
            deferred.resolve({payload:{user:{}}});
            $scope.$digest();
            makeLogoutRequestStub.should.have.been.calledOnce;
            stateSpy.should.have.been.calledOnce;

        });


        afterEach(function(){
            sandbox.restore();
        });
    });
})();