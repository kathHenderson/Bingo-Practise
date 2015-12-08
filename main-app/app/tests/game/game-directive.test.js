(function () {
    'use strict';
    describe('testing directive for bingoticket', function(){
        var directiveElement,
            sandbox,
            element,
            $compile,
            $rootScope;

        beforeEach(function () {
            module('Tombola.BingoClient');
            sandbox = sinon.sandbox.create();

            inject(['$compile', '$rootScope', function (_$compile_, _$rootScope_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_.$new();
            }]);
            var element = angular.element('<bingo-ticket></bingo-ticket>');
            directiveElement = $compile(element)($rootScope);
            $rootScope.$digest();
        });

        it.skip('Makes sure theres an element to find', function(){
            $rootScope.bingoApiProxy = {};

            console.log(directiveElement[0]);

            directiveElement[0].toString().should.equal('[object HTMLElement]');
            //directiveElement[0].className.should.equal('ng-scope');
            //directiveElement[0][0].className.should.equal('main-container');


            //var findElement = element.find('div');
            //findElement.className.should.equal('main-container');

        });

    });
})();