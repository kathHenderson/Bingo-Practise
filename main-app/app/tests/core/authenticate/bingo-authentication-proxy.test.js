(function () {
    'use strict';
    describe.skip('Test the API wrapper service', function () {
        var $httpBackend,
            $q,
            rootScope,
            bingoAuthenticationProxy,
            deferred,
            sandbox,
            userAuthenticationUpdaterSpy,
            bingoApiProxyStub;

        beforeEach(function () {
            module('Tombola.BingoClient', function ($provide) {
                $provide.value('UserAuthenticationUpdater', mocks.userAuthenticationUpdater);
                $provide.value('BingoApiProxy', mocks.bingoApiProxy);
            });
            inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                $q = $injector.get('$q');
                rootScope = $injector.get('$rootScope');
                bingoAuthenticationProxy = $injector.get('BingoAuthenticationProxy');
            });

            sandbox = sinon.sandbox.create();



            userAuthenticationUpdaterSpy = sandbox.spy(mocks, 'userAuthenticationUpdater');
            bingoApiProxyStub = sandbox.stub(mocks.bingoApiProxy, 'call', function (){
                return deferred.promise;
            });

        });


        it('The Api service responds with the correct value in a login request', function () {

            deferred = $q.defer();
            //deferred.promise.foo ='hiya';
            //TODO: *****************************************


            var returnPromise = bingoAuthenticationProxy.makeLoginRequest('username', 'password');
            returnPromise.then(function(){
                console.log('wrapper promise resolved*********');
            });
            bingoApiProxyStub.should.have.been.calledOnce.calledWithExactly('POST', '/users/login', '',
                {"username": 'username', "password": 'password'});
            deferred.resolve('response');
            rootScope.$digest();
            userAuthenticationUpdaterSpy.should.have.been.calledOnce;

        });

        afterEach(function () {
            sandbox.restore();
            mocks.bingoApiProxy.call = function () {
            };
        });
    });
})();