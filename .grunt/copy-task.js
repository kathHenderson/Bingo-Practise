(function () {
    'use strict';
    module.exports = {
        mainappimages: {
            cwd: '',
            src: ['main-app/app/images/**/*.*'],
            dest: '.build/',
            expand: true
        },
        mainappsounds: {
            cwd: '',
            src: ['main-app/app/sounds/**/*.*'],
            dest: '.build/',
            expand: true
        },
        html: {
            cwd: '',
            src: ['main-app/app/partials/**/*.html', 'main-app/app/index.html'],
            dest: '.build/',
            expand: true
        },
        bower: {
            cwd: '',
            src: ['bower_components/**/*.*'],
            dest: '.build/main-app/app/thirdparty',
            expand: true
        }

    };
})();