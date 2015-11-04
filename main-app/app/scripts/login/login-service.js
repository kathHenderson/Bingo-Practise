(function () {
    'use strict';
    angular.module('Tombola.BingoClient.Login')
        .service('LoginService', ['$http', function($http){
            //var me = this;

                //function dataCall (data){
                //    var req = {
                //        method: 'POST',
                //        url: 'http://eutaveg-01.tombola.emea:30069/users/login',
                //        headers: {
                //            'Accept': 'application/json',
                //            'Content-Type': 'application/json'
                //        },
                //        data: data
                //    };
                //    return $http(req);
                //}

           // me.login = function(username, password){
           //     dataCall({username: username, password: password})
           //         .then(function(response){
           //             console.log(response);
           //         })
           //         .catch(function(response){
           //             console.log(response);
           //         });
           //};

            //var login = function (username, password){
            //    var deferred = $q.defer();
            //
            //    $http.post('http://eutaveg-01.tombola.emea:30069/users/login', {
            //        username: username,
            //        password: password
            //    }).then(function(result){
            //        userInfo = {
            //            accessToken: result.data.acesss_token,
            //            username: result.data.username
            //        };
            //        $window.sessionStorage.userInfo = JSON.stringify(userInfo);
            //        deferred.resolve(userInfo);
            //    }, function(error){
            //        deferred.reject(error);
            //    });
            //    return deferred.promise();
            //};
            //return{
            //    login: login
            //};
        }]);
})();