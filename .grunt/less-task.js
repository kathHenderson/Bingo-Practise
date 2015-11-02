(function () {
    'use strict';
    module.exports = {
        lesslint: {
            expand: true,
            cwd: 'main-app/app/less/',
            src: '**/*.less',
            dest: '.build/main-app/app/css',
            ext: '.css',
            options: {
                csslint:{
                    'adjoining-classes': false,

                }
            }
        }
    };
})();