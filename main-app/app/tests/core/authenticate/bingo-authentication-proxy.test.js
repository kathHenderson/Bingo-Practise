(function () {
    'use strict';
    describe('Test the API wrapper service', function () {
        var $httpBackend,
            $q,
            proxy,
            deferred,
            sandbox,
            userAuthenticationUpdaterSpy,
            bingoApiProxySpy;

        beforeEach(function () {
            module('Tombola.BingoClient', function($provide){
                $provide.value('UserAuthenticationUpdater', mocks.userAuthenticationUpdater);
                $provide.value('BingoApiProxy', mocks.bingoApiProxy);
            });
            inject(function ($injector) {
                sandbox = sinon.sandbox.create();
                $httpBackend = $injector.get('$httpBackend');
                $q = $injector.get('$q');
                proxy = $injector.get('BingoAuthenticationProxy');
            });
            deferred = $q.defer();
            mocks.bingoApiProxy.call = function(){
                return deferred.promise;
            };
            //userAuthenticationUpdaterSpy = sinon.sandbox.spy(mocks.userAuthenticationUpdater);
            bingoApiProxySpy = sinon.sandbox.spy(mocks.bingoApiProxy, 'call');
        });


        it('The Api service responds with the correct value in a login request', function () {

            var returnPromise = proxy.makeLoginRequest('username', 'password');
            bingoApiProxySpy.should.have.been.calledOnce;

        });

        afterEach(function () {
            sandbox.restore();
            mocks.bingoApiProxy.call = function(){};
        });
    });
})();