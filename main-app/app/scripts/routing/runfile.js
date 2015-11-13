(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .run(['$templateCache', '$rootScope', '$location', 'AuthenticationService', function
            ($templateCache, $rootScope, $location, authenticationService) {
            $templateCache.put('html/login.html', '<h2>Login</h2>' +
                '<form ng-controller="MainController">' +
                    '<input type="username" ng-model="authenticationService.username" placeholder="Username">' +
                    '<input type="password" ng-model="authenticationService.password" placeholder="Password">' +
                    '<button type="button" ng-click="authenticationService.login()">Login</button>' +
                '</form>');

            $templateCache.put('html/lobby.html', '<h2>Welcome to the Bingo!</h2>' +
                '<h3>Countdown to next game:</h3>' +
                'number' +
                '<br><button type="button" ng-click="authenticationService.callNewGame()">New Game</button>' +
                '<button type="button" ng-click="authenticationService.logoutFunction()">Logout</button>');

            $templateCache.put('html/gameboard.html', '<h2>Number Being Called</h2>' +
                '<bingo-ticket></bingo-ticket>' +
                '<br><button type="button" ng-click="authenticationService.callNewGame()">New Game</button>' +
                '<button type="button" ng-click="authenticationService.logoutFunction()">Logout</button>');

            $rootScope.$on('$routeChangeStart', function(event){
                if(!authenticationService.isAuthenticated()){
                    $location.path('/login');
                }
            });
        }
        ]);
})();