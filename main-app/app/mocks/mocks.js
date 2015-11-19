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