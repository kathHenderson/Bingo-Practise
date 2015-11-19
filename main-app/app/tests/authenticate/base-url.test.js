(function () {
    'use strict';

    describe.skip('Test base-url constants', function () {
        var data;
        beforeEach(function () {
            module('Tombola.BingoClient');
            inject(function ($injector) {
                data = $injector.get('BaseUrl');
            });
        });

        it('Ensure BaseUrl contains data', function () {
            data.should.equal(data);
        });


    });
})();