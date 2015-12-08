(function() {
    'use strict';
    angular.module('Tombola.BingoClient')
        .value('UserData', {
            username: '',
            balance: 0,
            update:function(username, balance){
                this.username = username;
                this.balance = balance ? balance : 0;
            },
            reset: function(){
                this.username = '';
                this.balance = 0;
            }
        });
})();