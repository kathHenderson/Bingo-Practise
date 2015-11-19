(function () {
    'use strict';

    describe('Test base-url constants', function () {
        var data;
        beforeEach(function () {
            module('Tombola.BingoClient');
            inject(function ($injector) {
                data = $injector.get('UserData');
            });
        });

        it('Ensure BaseUrl contains data', function () {
            data.should.equal(data);
        });

        it('Balance should be 0', function(){
           data.balance.should.equal(0);
        });

        it('Username updates correctly', function(){
            data.update('Foo Bar', 2);
            data.username.should.equal('Foo Bar');
            data.balance.should.equal(2);
        });

        it('Reset functionality works', function(){
            data.update('Foo', 2);
            data.reset();
            data.username.should.equal('');
            data.balance.should.equal(0);
        });

    });
})();