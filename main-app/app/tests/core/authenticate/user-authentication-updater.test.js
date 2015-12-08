(function () {
    'use strict';
    //TODO: Inject dependencies & unskip
    describe('Test the user factory service', function () {
        var sandbox,
            userDataSpy,
            userAuthenticationUpdater;

        beforeEach(function () {
            module('Tombola.BingoClient');
            module('Tombola.BingoClient', function($provide){
                $provide.value('UserData', mocks.userData);
            });
            inject(function ($injector) {
                userAuthenticationUpdater = $injector.get('UserAuthenticationUpdater');
            });

            sandbox = sinon.sandbox.create();
            userDataSpy = sinon.sandbox.spy(mocks.userData, 'update');
        });

        it('Ensure service updates and returns correctly', function () {
            var response = {
                payload: {
                    user: {
                        token: 'bar',
                        username: 'baz',
                        balance: 'quux'
                    }
                }
            };
            var token = userAuthenticationUpdater(response);
            token.should.equal(response.payload.user.token);
            userDataSpy.should.have.been.calledOnce.calledWithExactly(response.payload.user.username, response.payload.user.balance);
        });

        afterEach(function () {
            sandbox.restore();
        });

    });
})();