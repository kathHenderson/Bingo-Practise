(function () {
    'use strict';
    describe('Test the API wrapper service', function(){
        var $httpBackend,
            sandbox,
            buildrequestspy,
            bingoApiProxy,
            baseUrl = '/http://localhost:30069',
            urlEndpoint = '/users/login',
            request = {method: method,
                        url: baseUrl + urlEndpoint,
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json'
                        }};

        beforeEach(function(){
            module('Tombola.BingoClient');
            inject(function ($injector) {
                sandbox = sinon.sandbox.create();
                buildrequestspy = sinon.sandbox.spy(mocks.bingoApiProxy, 'buildRequest');
                $httpBackend = $injector.get('$httpBackend');
                bingoApiProxy = $injector.get('BingoApiProxy');
            });
        });

        it('The Api service responds with the correct build functionality', function(){
            $httpBackend
                .expectPOST(request)
                .respond(request);
            var returnPromise = bingoApiProxy.buildRequest('POST', '/users/login', 'token', 'username');
            returnPromise.then(function(response){
                response.should.deep.equal(request);
            });
            $httpBackend.flush();
        });


        afterEach(function(){
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();