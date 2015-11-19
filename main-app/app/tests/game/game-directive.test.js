(function () {
    'use strict';
    describe.skip('testing directive for bingoticket', function(){
        var directiveElement,
            element,
            $compile,
            $rootScope;

        beforeEach(function () {
            module('Tombola.BingoClient');

            inject(function (_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
            });
            directiveElement = '<bingo-ticket></bingo-ticket>';

        });

        it('Makes sure theres an element to find', function(){
            directiveElement = angular.element('<bingo-ticket></bingo-ticket>');
            var element = $compile(directiveElement)($rootScope);
            $rootScope.$digest;

            element[0].toString().should.equal('[object HTMLElement]');
        });


    });
})();