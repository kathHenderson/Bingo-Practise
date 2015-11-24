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
        buildRequest: function(){}

    },

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
    }

};