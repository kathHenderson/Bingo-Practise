(function () {
    'use strict';
    //TODO: Inject dependencies & unskip
    describe('Test the API wrapper service', function () {
        var apiBuildRequest;

        beforeEach(function () {
            module('Tombola.BingoClient', function ($provide) {
                $provide.value('BaseUrl', 'baseUrl/');
            });
            inject(function ($injector) {
                apiBuildRequest = $injector.get('ApiBuildRequest');
            });
        });

        it('The Api service responds with the correct build functionality', function () {
            var expectedRequest = {
                method: 'method', url: 'baseUrl/url', headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    'x-token': 'token'
                },
                data: {foo: 'blah'}
            };
            var request = apiBuildRequest.buildRequest('method', 'url', 'token', {'foo': 'blah'});
            request.should.deep.equal(expectedRequest);
        });

    });
})();