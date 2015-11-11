(function () {
    'use strict';
    describe('Authentication Service tester', function () {
        var $scope,
            $q,
            deferred,
            stateSpy,
            auth,
            sandbox,
            makeLoginRequestStub,
            makeLogoutRequestStub,
            getNextGameStub;

        beforeEach(function(){
                module('Tombola.BingoClient', function($provide){
                $provide.value('BingoApiService', mocks.bingoApiService);
            });

            inject(['$rootScope', '$q', 'AuthenticationService', function (_$rootScope_, _$q_, authenticationService) {
                $scope = _$rootScope_;
                auth = authenticationService;
                $q = _$q_;
                deferred = $q.defer();
                sandbox = sinon.sandbox.create();
                makeLoginRequestStub = sandbox.stub(mocks.bingoApiService,'makeLoginRequest', function(){return deferred.promise;});
                makeLogoutRequestStub = sandbox.stub(mocks.bingoApiService, 'makeLogoutRequest', function(){return deferred.promise;});
                getNextGameStub = sandbox.stub(mocks.bingoApiService, 'getNextGame', function(){return deferred.promise;});
            }]);
        });

        it('MakeLoginRequest should have been called at least once ', function(){
            auth.login();
            makeLoginRequestStub.should.have.been.calledOnce;
            deferred.resolve({payload:{user:{}}});
            $scope.$digest();
        });

        it('MakeLogoutRequest should have been called at least once', function(){
            auth.logoutFunction();
            deferred.resolve({payload:{user:{}}});
            $scope.$digest();
            makeLogoutRequestStub.should.have.been.calledOnce;
        });

        it('Getnextgame should have been called at least once ', function(){
            auth.callNewGame();
            deferred.resolve({payload:{user:{}}});
            $scope.$digest();
            getNextGameStub.should.have.been.calledOnce;
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
})();