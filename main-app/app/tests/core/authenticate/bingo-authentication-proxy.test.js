(function () {
    'use strict';
    describe('Test the API wrapper service', function () {
        var $httpBackend,
            proxy;

        beforeEach(function () {
            module('Tombola.BingoClient', function($provide){
                $provide.value(mocks.bingoApiProxy, 'call');
                $provide.value(mocks.userAuthenticationUpdater);
            });
            inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                proxy = $injector.get('BingoAuthenticationProxy');
            });
        });

        it('The Api service responds with the correct value in a login request', function () {
            $httpBackend
                .expectPOST('http://localhost:30069/users/login', {"username":"drwho", "password":"tardis123!"})
                .respond( {
                    "message": "LoginSuccess",
                    "payload": {
                        "user": {
                            "username": "drwho",
                            "balance": 20000,
                            "token": "response"
                        }
                    }
                });
            var returnPromise = proxy.makeLoginRequest("drwho", "tardis123!");
            returnPromise.then(function (response) {
                response.should.equal('response');
            });
            $httpBackend.flush();
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();