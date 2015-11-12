(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('html/login.html', '<h2>Login</h2>' +
                '<form ng-controller="LoginController">' +
                    '<input type="username" ng-model="username" placeholder="Username">' +
                    '<input type="password" ng-model="password" placeholder="Password">' +
                    '<button type="button" ng-click="login()">Login</button>' +
                '</form>');
            $templateCache.put('html/lobby.html', '<h2>Welcome to the Bingo!</h2>' +
                '<br><button type="submit">New Game</button>' +
                '<button type="button" ng-click="logoutFunction()">Logout</button>');
        }
        ]);
})();