(function () {
    'use strict';
    describe('Test the API wrapper service', function(){
        var $httpBackend,
            proxy,
            loginBody = {"username": 'drwho', "password": 'tardis123!'};

        beforeEach(function(){
            module('Tombola.BingoClient');
            inject(function ($injector) {
                $httpBackend = $injector.get('$httpBackend');
                proxy = $injector.get('BingoApiService');
            });
        });


        it('The Api service responds with the correct value for login', function(){
            $httpBackend
                .expectPOST('http://eutaveg-01.tombola.emea:30069/users/login', loginBody)
                .respond(function(){
                    return [200, {"message": "Success"}];
                });
            proxy.makeLoginRequest('drwho', 'tardis123!')
            .then(function(data){
                data.should.deep.equal({"message": "Success"});
            });
            $httpBackend.flush();
        });

        it('The Api service responds with the correct value for logout', function(){
            $httpBackend
                .expectPOST('http://eutaveg-01.tombola.emea:30069/users/logout')
                .respond(function(){
                    return [200, {"message": "Success"}];
                });
            proxy.makeLogoutRequest('f36bb73b-83cc-4539-aac0-893914bc73ec')
                .then(function(data){
                    data.should.deep.equal({"message": "Success"});
                });
            $httpBackend.flush();
        });

        it('The Api service responds with the correct value for getnextgame', function(){
            $httpBackend
                .expectGET('http://eutaveg-01.tombola.emea:30069/game/next')
                .respond(function(){
                    return [200, {"message": "Success"}];
                });
            proxy.getNextGame('f36bb73b-83cc-4539-aac0-893914bc73ec')
                .then(function(data){
                    data.should.deep.equal({"message": "Success"});
                });
            $httpBackend.flush();
        });


        afterEach(function(){
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
})();