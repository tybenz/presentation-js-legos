/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 expandtab: */
var path = require( 'path' ),
    sys = require('sys'),
    exec = require('child_process').exec;

module.exports = function ( grunt ) {
    grunt.initConfig({
        init: {},
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: [ '*.scss' ],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        shell: {
            init_bourbon: {
                command: 'bundle install && cd sass && bourbon install'
            }
        }
    });

    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-shell' );

    grunt.registerTask( 'default', [ 'watch' ] );
};
