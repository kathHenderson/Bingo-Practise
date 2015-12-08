(function () {
    'use strict';
    module.exports={
        unit:{
            configFile: 'karma.conf.js',
            options:{
                files:[
                    'bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'main-app/app/scripts/script.js',
                    'main-app/app/scripts/game/**/*.js',
                    'main-app/app/scripts/lobby/**/*.js',
                    'main-app/app/scripts/routing/*.js',
                    'main-app/app/scripts/core/**/**/*.js',
                    'main-app/app/scripts/controllers/*.js',
                    'main-app/app/scripts/authenticate/**/*.js',
                    'main-app/app/scripts/game/directives/*.html',
                    'main-app/app/mocks/*.js',
                    'main-app/app/tests/**/*.js'
                ]
            }
        }
    };
})();