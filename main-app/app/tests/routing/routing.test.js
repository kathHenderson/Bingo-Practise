//(function () {
//    'use strict';
//    describe('Game routing tester', function () {
//        var $state,
//            spyonState,
//            $rootscope,
//            $httpBackend,
//            $templateCache,
//            sandbox;
//
//        beforeEach(function () {
//            module('Tombola.BingoClient');
//            sandbox = sinon.sandbox.create();
//            inject(function ($injector, _$state_, _$rootScope_, _$httpBackend_, _$templateCache_) {
//                $state = _$state_;
//                $rootscope = _$rootScope_;
//                $httpBackend = _$httpBackend_;
//                $templateCache = _$templateCache_;
//            });
//            $templateCache.put('html/login.html', 'html/login.html');
//            $templateCache.put('html/lobby.html', 'html/lobby.html');
//            $templateCache.put('html/gameboard.html', 'html/gameboard.html');
//
//            spyonState = sinon.sandbox.spy(mocks.fakeState, 'go');
//            $rootscope.$digest();
//
//        });
//
//        it('Make sure the default state is login', function () {
//            var state = $state.get('login');
//            should.exist(state);
//            state.url.should.equal('/login');
//            //state.controller.should.equal('LoginController');
//            state.templateProvider($templateCache).should.equal($templateCache.get('html/login.html'));
//        });
//
//        it('Make sure the lobby is equal to lobby', function () {
//            var state = $state.get('lobby');
//            should.exist(state);
//            state.url.should.equal('/lobby');
//            //state.controller.should.equal('MainController');
//            state.templateProvider($templateCache).should.equal($templateCache.get('html/lobby.html'));
//        });
//
//        it('Make sure the gameboard is equal to gameboard', function () {
//            var state = $state.get('gameboard');
//            should.exist(state);
//            state.url.should.equal('/gameboard');
//            //state.controller.should.equal('GameCallsController');
//            state.templateProvider($templateCache).should.equal($templateCache.get('html/gameboard.html'));
//        });
//
//
//        afterEach(function(){
//            sandbox.restore();
//            spyonState.restore();
//            $httpBackend.verifyNoOutstandingExpectation();
//            $httpBackend.verifyNoOutstandingRequest();
//        });
//
//    });
//})();