(function () {
    'use strict';
    //TODO: Inject dependencies & unskip
    describe.skip('Test the user factory service', function () {
        var sandbox,
            convertGameResponseSpy,
            gameResponseConverter;

        beforeEach(function () {
            module('Tombola.BingoClient');
            inject(function ($injector) {
                gameResponseConverter = $injector.get('GameResponseConverter');
            });
            sandbox = sinon.sandbox.create();
            convertGameResponseSpy = sinon.sandbox.spy(gameResponseConverter, 'convertGameResponse');
        });

        it('Ensure service updates and returns correctly', function () {
            var response =  {
                "message": "LoginSuccess",
                "payload": {
                    "user": {
                        "username": "drwho",
                        "balance": 20000,
                        "token": "f36bb73b-83cc-4539-aac0-893914bc73ec"
                    }
                }
            };
            var token = gameResponseConverter.convertGameResponse(response);
            token.should.equal(token);
            convertGameResponseSpy.should.have.been.calledOnce.calledWithExactly(response);
        });

        afterEach(function () {
            sandbox.restore();
        });

    });
})();