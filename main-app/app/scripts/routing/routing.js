(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/login");
            $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'LoginController',
                    templateProvider: function($templateCache){
                        return $templateCache.get('html/login.html');
                    }
                })
                .state('lobby', {
                    url: '/lobby',
                    controller: 'MainController',
                    templateProvider: function($templateCache){
                        return $templateCache.get('html/lobby.html');
                    }
                });
        });
})();