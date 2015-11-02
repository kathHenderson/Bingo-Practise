(function () {
    'use strict';
    module.exports = {
        checkMainJS: {
            src: 'main-app/app/scripts/**/*.js'
        },
        checkGruntJS: {
            src: '.grunt/**/*.js'
        },
        checkKarma: {
            src: 'main-app/app/tests/**/*.js',
            options: {
                '-W030': true,
                "globals": {
                    'describe': false,
                    'it': false,
                    'before': false,
                    'beforeEach': false,
                    'after': false,
                    'afterEach': false
                }
            }
        },
        concatJS: {
            cwd: '',
            src: 'main-app/app/scripts/script.js',
            dest: '.build/main-app/app/scripts',
            expand: false
        }
    };
})();