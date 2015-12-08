(function () {
    'use strict';
    //TODO: REMOVE SKIP, TEST WORKING
    describe.skip('Test the API Bingo Proxy service', function(){
        var $httpBackend,
            sandbox,
            bingoApiProxy,
            apiBuildRequestProxySpy;

        beforeEach(function(){
            module('Tombola.BingoClient', function($provide){
               $provide.value('ApiBuildRequest', mocks.apiBuildRequestProxy);
            });
            inject(function ($injector) {
                sandbox = sinon.sandbox.create();
                apiBuildRequestProxySpy = sinon.sandbox.spy(mocks.apiBuildRequestProxy, 'buildRequest');
                $httpBackend = $injector.get('$httpBackend');
                bingoApiProxy = $injector.get('BingoApiProxy');
            });
        });

        it('The Api service responds with the correct build functionality', function(){
            var requestMock = mocks.apiBuildRequestProxy.buildRequest();
            sandbox.restore();
            $httpBackend
                .expectPOST(requestMock.url)
                .respond('response');
            var returnPromise = bingoApiProxy.call('POST', '/users/login', 'token', 'data');
            returnPromise.then(function(response){
                response.should.equal('response');
            });
            $httpBackend.flush();
            //TODO: expect the mock.apiBuildRequestProxy.buildRequest to be called.
            //mocks.apiBuildRequestProxy,buildRequest();
        });



        afterEach(function(){
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
            sandbox.restore();
        });
    });
})();