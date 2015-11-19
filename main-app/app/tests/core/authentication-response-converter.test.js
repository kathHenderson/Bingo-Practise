(function () {
    'use strict';
    describe('Test the authentication response converter service', function () {
        var auth;

        beforeEach(function () {
            module('Tombola.BingoClient');
            inject(function ($injector) {
                auth = $injector.get('UserFactory');
            });
        });

        it('Function should return the function', function () {
            auth.should.equal(auth);
        });

        it('ConvertLoginResponse should have username which is equal to response', function () {
            var response = {
                payload: {
                    user: {
                        token: 'bar',
                        username: 'baz',
                        balance: 'quux'
                    }
                }
            };
            var foo = auth.convertLoginResponse(response);
            console.log(foo);
            foo.should.equal({
                token: 'bar',
                userInformation: {
                    username: 'baz',
                    balance: 'quux'
                }});
        });




    });
})();