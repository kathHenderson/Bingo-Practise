'use strict';
var mocks = {
    fakeState: {
        go: function(){}
    },

    bingoAuthenticationProxy: {
        makeLoginRequest: function (){},
        callNewGame: function (){},
        makeLogoutRequest: function (){},
        getNextGame: function(){}
    },

    bingoApiProxy: {
        call: function(){}
    },

    userAuthenticationUpdater:  function (){},

    apiBuildRequestProxy: {
        buildRequest: function(){
            return {
                url: 'Foo',
                method: 'POST'
            };
        }
    },

    proxy: {

    },

    userData: {
        update: function(){},
        reset: function(){}
    },

    authenticationService: {
        login: function(){},
        logoutFunction: function(){},
        callNewGame: function(){}
    },


    callNewGame: {
        proxy: function(){}
    },

    logoutFunction: {
        proxy: function(){}
    },

    login: {
        proxy: function(){}
    },


    gameResponseConverter: {
        convertGameResponse: function(){
            return {
                token: 'token',
                userInformation: {
                    username: 'username',
                    balance: 20000
                }
            };
        }
    },

    makeLoginRequest: {
        bingoApiProxy: function(){
            return {
                username: 'drwho',
                password: 'tardis123!'
            }
        }
    }

};