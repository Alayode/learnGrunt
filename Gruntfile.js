//example 1 Write to console
// module.exports = function(grunt){
//     grunt.registerTask("default", function() {
//         grunt.log.writeln("konnichiwa bitches!")
//     })
// }
//terminal will print the konnichiwa bitches! to the terminal


// Example 2 Passing in a parameter
// module.exports = function(grunt){

//     grunt.registerTask("default", function(name){
//         grunt.log.writeln("Hello " + name);
//     })

// }

// So if you passed grunt deafult: "some string"
// the terminal will return Hello some string


// Example 3 start your project with special instructions
// grunt.config.init
// module.exports = function(grunt){
//     grunt.initConfig(grunt.file.readJSON("config.json"))

//     grunt.registerTask("default", function(name){
//         grunt.log.writeln("Hello, " + grunt.config.get("person").firstName);
//     })
// }


// var colors = require('colors');
// var fs = require('fs');
// var _ = require('lodash');


// //initial setup read package.json file

// module.exports = function (grunt) {
//     grunt.registerTask("default", function () {
//         var defaultConfig = {
//             pkg: grunt.file.readJSON("package.json"),

//         }
//     });
// }




var colors = require('colors');
var fs = require('fs');
var _ = require('lodash');
// var forwardProxy = require('./lib/forward-proxy');
// var mergeExternalConfig = require('./lib/merge-external-config');

module.exports = function (grunt) {
    grunt.registerTask("default", function () {
        var defaultConfig = {
            pkg: grunt.file.readJSON("package.json"),

            //watch files
            watch: {
                gruntfile: {
                    files: 'Gruntfile.js',
                    tasks: ['jshint:gruntfile']

                },
                pageBuildFile: {
                    files: '**/<%= pagePath %>/<%= pageName %>-build-config.json',
                    tasks: ['jshint:pageBuildFile']
                },
                partsJsFiles: {
                    files: 'src/parts/**/*.js',
                    tasks: ['jshint:jsFiles', 'copy:parts']
                },
                servicesJsFiles: {
                    files: 'src/services/**/*.js',
                    tasks: ['jshint:jsFiles', 'copy:services']
                },
                pageJsFiles: {
                    files: 'src/pages/**/*.js',
                    tasks: ['jshint:jsFiles', 'copy:page']
                },
                pageAssets: {
                    files: ['src/pages/<%= pagePath %>/**', '!*.mustache'],
                    tasks: ['copy:page']
                },
                partsDirectiveTemplates: {
                    files: 'src/parts/**/*-template.html',
                    tasks: ['copy:parts']
                },
                pageMustacheFiles: {
                    files: ['<%= assemblePage.files %>', 'src/pages/<%= pagePath %>/**/*.mustache'],
                    tasks: ['assemblePage', 'mustache:page']
                },
                lessFiles: {
                    files: 'src/**/*.less',
                    tasks: ['createLessMain:dev', 'less:dev', 'cssmin:dev']
                },
                cssFiles: {
                    files: 'src/assets/css/*.css',
                    tasks: ['copy:assets']
                },
                jsonFiles: {
                    files: 'src/assets/json/*.json',
                    tasks: ['copy:assets']
                },
                readme: {
                    files: 'Readme.md',
                    tasks: ['gfm:readme']
                }
            }
        }
    });


    // grunt.option('defaultConfig', defaultConfig);
    // mergeExternalConfig(grunt);
    grunt.registerTask('test', ['karma:dev']);
    grunt.registerTask('readme', ['gfm:readme', 'connect:page', 'open:readme', 'watch:readme']);
    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('serve', ['connect:page:keepalive']);
    grunt.registerTask('devPage', 'Develop a specified page', [
        'jshint',
        'createLessMain:dev',
        'less:dev',
        'cssmin:dev',
        'assemblePage',
        'copy',
        'mustache:page',
        'replace',
        'connect:page',
        'open:page',
        'watch'
    ]);
    // grunt.loadTasks('lib/tasks');
    grunt.registerTask('default', function () {
        grunt.log.warn('This build system does not have a default task.');
        grunt.log.writeln('Did you mean to run one of these tasks?\n\n grunt add\n grunt dev\n grunt build');
        grunt.log.writeln('If not, run grunt --help to see other available tasks.');
        grunt.fatal();
    });

    //grunt load tasks 

  
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-copy');
    // grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-lint-inline');
    // grunt.loadNpmTasks('grunt-text-replace');
    // grunt.loadNpmTasks('grunt-karma');
    // grunt.loadNpmTasks('grunt-open');
    // grunt.loadNpmTasks('grunt-parallel');
    // grunt.loadNpmTasks('grunt-csssplit');
};