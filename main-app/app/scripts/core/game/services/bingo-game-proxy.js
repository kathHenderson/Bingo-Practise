(function () {
    'use strict';
    angular.module('Tombola.BingoClient')
        .service('BingoGameProxy', ['$q', 'BingoApiProxy','GameResponseConverter', function
            ($q, bingoApiProxy, gameResponseConverter){
            var me = this;

            //TODO: Leave for now, sort out properly later
            me.getNextGame = function(token){
                return bingoApiProxy.call('GET','/game/next',token );
            };

            //TODO: Leave for now, sort out properly later
            me.buyTicket = function(token, balance, userId){
                var data = {'gameId': 1, 'userId': userId, 'balance': balance};
                return bingoApiProxy.call('POST', '/game/buyticket', token, data);
            };

            //TODO: Leave for now, sort out properly later
            //me.getGameCalls = function(gameId, userId, balance, callNumber){
            //    //TODO: this was refactored when commented - might be totally wrong...
            //    var data = {"gameId": gameId, "userId": userId, "balance": balance, "callNumber": callNumber};
            //    return bingoApiProxy.callGameService('POST', '/game/getcall', token, data);
            //};
        }]);
})();