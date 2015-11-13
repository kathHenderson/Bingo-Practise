'use strict';
var mocks = {
    fakeState: {
        go: function(){}
    },

    bingoApiService: {
        makeLoginRequest: function (){},
        callNewGame: function (){},
        makeLogoutRequest: function (){},
        getNextGame: function(){}
    },

    proxy: {

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