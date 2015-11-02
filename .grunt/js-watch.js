(function () {
    'use strict';
    module.exports = {
        cssWatch: {
            files: ['main-app/app/less/*.less'],
            tasks: ['lessFiles']
        },
        jsWatch: {
            files: ['main-app/app/scripts/**/*.js'],
            tasks: ['jsFiles']
        },
        htmlWatch: {
            files: ['main-app/app/index.html', 'main-app/app/html/**/*.html'],
            tasks: ['htmlFiles']
        },
        karmaWatch: {
            files: ['karma.conf.js', 'main-app/app/tests/**/*.js'],
            tasks: ['karma']
        }
    };
})();