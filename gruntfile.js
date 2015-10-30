(function () {
    'use strict';
    var copyTask = require('./.grunt/copy-task'),
        lessTask = require('./.grunt/less-task'),
        jsTask = require('./.grunt/js-task'),
        jsConcat = require('./.grunt/js-concat'),
        jsClean = require('./.grunt/js-clean'),
        jsWatch = require('./.grunt/js-watch'),
        karmaTask = require('./.grunt/karma-task.js');

    module.exports = function (grunt) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            copy: copyTask,
            lesslint: lessTask,
            less: lessTask,
            jshint: jsTask,
            concat: jsConcat,
            clean: jsClean,
            watch: jsWatch,
            karma: karmaTask
        });

        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-express-server');
        grunt.loadNpmTasks('grunt-karma');

        var port = 35001;
        grunt.registerTask('server', 'Start a custom web server', function () {
            var server = require('./server/serverfile.js');
            server.listen(port);
            grunt.log.writeln('Listening on port ' + port);
        });

        grunt.registerTask('test', ['jshint:checkKarma', 'jshint:checkMainJS', 'karma', 'watch:karmaWatch']);
        grunt.registerTask('lessFiles', ['lesslint', 'clean:css', 'less']);
        grunt.registerTask('jsFiles', ['jshint', 'clean:javascript', 'concat']);
        grunt.registerTask('htmlFiles', ['clean:html', 'copy:html']);
        grunt.registerTask('default', ['copy', 'lessFiles', 'jsFiles', 'server', 'watch']);
    }
})();