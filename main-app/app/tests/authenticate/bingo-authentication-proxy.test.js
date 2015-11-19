//(function () {
//    'use strict';
//    describe('Test the API wrapper service', function(){
//        var $httpBackend,
//            gameApiProxy;
//
//        beforeEach(function(){
//            module('Tombola.BingoClient');
//            inject(function ($injector) {
//                $httpBackend = $injector.get('$httpBackend');
//                proxy = $injector.get('BingoAuthenticationProxy');
//            });
//        });
//
//        it('MakeLoginRequest responds with correct stuff', function(){
//            $httpBackend
//                .expectPOST('http://localhost:30069', {'POST', '/users/login', '', data })
//                .respond(response);
//            var returnPromise = gameApiProxy.makeNewGame('random', 'pre-trained');
//            returnPromise.then(function(response){
//                response.should.deep.equal(responseData);
//            });
//            $httpBackend.flush();
//        });
//
//        afterEach(function(){
//            $httpBackend.verifyNoOutstandingExpectation();
//            $httpBackend.verifyNoOutstandingRequest();
//        });
//    });
//})();