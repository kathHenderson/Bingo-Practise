(function () {
    'use strict';
    describe.skip('Test the API wrapper service', function () {
        var $httpBackend,
            proxy,
            auth,
            responseData = {"username": "drwho", "balance": 20000};

        beforeEach(function () {
            module('Tombola.BingoClient');
            inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                proxy = $injector.get('BingoAuthenticationProxy');
                auth = injector.get('UserAuthenticationUpdater');
            });
        });

        it('The Api service responds with the correct value in a login request', function () {
            $httpBackend
                .expectPOST('http://localhost:30069/users/login', {"username": "drwho", "password": "tardis123!"})
                .respond(responseData);
            var returnPromise = proxy.makeLoginRequest("drwho", "tardis123!");
            returnPromise.then(function (response) {
                response.should.deep.equal(responseData);
            });
            $httpBackend.flush();
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();