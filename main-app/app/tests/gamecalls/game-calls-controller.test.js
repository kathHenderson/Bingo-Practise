(function () {
    'use strict';
    describe('Gamecalls Controller testing', function () {
        var $scope,
            $q,
            deferred,
            stateSpy,
            sandbox,
            getNextGameStub,
            controller;

        beforeEach(function () {
            module('Tombola.BingoClient');
            inject(function ($rootScope, $controller, _$q_) {
                sandbox = sinon.sandbox.create();
                $scope = $rootScope.$new();
                $q = _$q_;
                deferred = _$q_.defer();
                stateSpy = sinon.sandbox.spy(mocks.fakeState, 'go');
                getNextGameStub = sinon.sandbox.stub(mocks.bingoApiService, 'getNextGame', function(){return deferred.promise;});
                controller = $controller('GameCallsController', {
                    $scope: $scope,
                    $state: mocks.fakeState,
                    BingoApiService: mocks.bingoApiService
                });
            });
        });

        it('Getnextgame should have been called at least once ', function(){
            $scope.callNewGame();
            deferred.resolve({payload:{user:{}}});
            $scope.$digest();
            getNextGameStub.should.have.been.calledOnce;
            stateSpy.should.have.been.calledOnce;
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
})();