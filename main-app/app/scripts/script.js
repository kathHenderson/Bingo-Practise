(function(){
    'use strict';
    angular.module('Tombola.BingoClient.Core', []);
    angular.module('Tombola.BingoClient.GameCalls', []);
    //angular.module('Tombola.BingoClient.GetCalls', []);
    angular.module('Tombola.BingoClient.Login', []);
    angular.module('Tombola.BingoClient.BuyTicket', []);
    angular.module('Tombola.BingoClient', ['Tombola.BingoClient.Core', 'Tombola.BingoClient.Login', 'ui.router',
                   'Tombola.BingoClient.GameCalls', 'Tombola.BingoClient.BuyTicket']);
})();