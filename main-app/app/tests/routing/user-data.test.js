(function () {
    'use strict';

    describe('Test game-constants', function () {
        var data;
        beforeEach(function () {
            module('Tombola.BingoClient');
            inject(function ($injector) {
                data = $injector.get('UserData');
            });
        });
        it('Ensure UserData contains data', function () {
            data.should.equal(data);
        });


    });
})();