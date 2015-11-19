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

    proxy: {

    },

    userData: {

    },

    authenticationService: {
        login: function(){},
        logoutFunction: function(){},
        callNewGame: function(){}
    },

    authenticationResponseConverter: {
        convertLoginResponse: function(response){}
    },

    convertLoginResponse: {

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