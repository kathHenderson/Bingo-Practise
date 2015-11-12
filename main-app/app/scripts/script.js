(function(){
    'use strict';
    angular.module('Tombola.BingoClient.Core', []);
    angular.module('Tombola.BingoClient.Login', []);
    angular.module('Tombola.BingoClient', ['Tombola.BingoClient.Core', 'Tombola.BingoClient.Login', 'ui.router']);
})();