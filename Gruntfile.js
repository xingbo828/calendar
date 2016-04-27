module.exports = function(grunt) {
    'use strict';
    grunt.config.init({
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        './'
                    ]
                }
            }
        },
        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass'],
                options: {
                    interrupt: true,
                    debounceDelay: 1000,
                    livereload: true
                },
            },
            html: {
                files: 'modules/**/*.html',
                options: {
                    interrupt: true,
                    debounceDelay: 1000,
                    livereload: true
                },
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    './modules/**/*.html',
                    './main.css',
                    './modules/**/*.js',
                    './bootstrap.js'
                ]
            }
        },
        html2js: {
            options: {
                rename: function(moduleName) {
                    return moduleName.replace('../modules', 'modules');
                },
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            },
            main: {
                src: ['modules/**/*.html'],
                dest: 'templates.js'
            }
        },
        sass: {
            dev: {
                options: {
                    outputStyle: 'expanded'
                },
                files: [{
                    expand: true,
                    src: ['main.scss'],
                    ext: '.css'
                }]
            }
        }
    });

    // Load modules
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('serve', function(target) {
        grunt.task.run([
            'sass:dev',
            'html2js',
            // 'processhtml:dev',
            'connect:livereload',
            'watch'
        ]);
    });
}; // module.exports()
