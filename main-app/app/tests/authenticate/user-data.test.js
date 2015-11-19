(function () {
    'use strict';

    describe.skip('Test base-url constants', function () {
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

        it('Username should be an empty string', function(){
            data.username.should.equal('');
        });

        it('Username update should be equal to username', function(){
            data.update('Foo Bar', 2);
            data.username.should.equal('Foo Bar');
        });

        it('Balance update should be equal to balance', function(){
            data.update('Foo Bar', null);
            data.balance.should.equal(0);
        });

    });
})();