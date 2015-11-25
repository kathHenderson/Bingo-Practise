(function () {
    'use strict';
    describe('Test the API wrapper service', function(){
        var $httpBackend,
            sandbox,
            apiBuildRequest,
            apiBuildRequestProxySpy;

        beforeEach(function(){
            module('Tombola.BingoClient', function($provide){
                $provide.value('ApiBuildRequest', mocks.apiBuildRequestProxy);
            });
            inject(function ($injector) {
                sandbox = sinon.sandbox.create();
                apiBuildRequestProxySpy = sinon.sandbox.spy(mocks.apiBuildRequestProxy, 'buildRequest');
                $httpBackend = $injector.get('$httpBackend');
                apiBuildRequest = $injector.get('ApiBuildRequest');
            });
        });

        it('The Api service responds with the correct build functionality', function(){
            var requestMock = mocks.apiBuildRequestProxy.buildRequest();
            sandbox.restore();
            var request = apiBuildRequest.buildRequest();
            request.should.deep.equal(requestMock);

        });

        afterEach(function(){
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
            sandbox.restore();
        });
    });
})();