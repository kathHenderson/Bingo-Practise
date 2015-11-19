//(function () {
//    'use strict';
//    describe('Game routing tester', function () {
//        var $state,
//            spyonState,
//            $compile,
//            $rootScope,
//            directiveElement,
//            $httpBackend,
//            $templateCache,
//            sandbox;
//
//        beforeEach(function () {
//            module('Tombola.BingoClient');
//            sandbox = sinon.sandbox.create();
//            inject(function ($injector, _$state_, _$rootScope_, _$compile_, _$httpBackend_, _$templateCache_) {
//                $state = _$state_;
//                $compile = _$compile_;
//                $rootScope = _$rootScope_;
//                $httpBackend = _$httpBackend_;
//                $templateCache = _$templateCache_;
//            });
//            $templateCache.put('html/login.html', 'html/login.html');
//            $templateCache.put('html/lobby.html', 'html/lobby.html');
//            $templateCache.put('html/gameboard.html', 'html/gameboard.html');
//
//            spyonState = sinon.sandbox.spy(mocks.fakeState, 'go');
//            $rootScope.$digest();
//
//        });
//
//        it("Makes sure you can find login.html", function(){
//            $templateCache.get('html/login.html').should.be.equal('html/login.html');
//            $rootScope.$digest();
//        });
//
//        it("Makes sure you can find lobby.html", function(){
//            $templateCache.get('html/lobby.html').should.be.equal('html/lobby.html');
//            $rootScope.$digest();
//        });
//
//        it("Makes sure you can find gameboard.html", function(){
//            $templateCache.get('html/gameboard.html').should.be.equal('html/gameboard.html');
//            $rootScope.$digest();
//        });
//
//
//
//    });
//})();