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


var colors = require('colors');
var fs = require('fs');
var _ = require('lodash');


//initial setup read package.json file

module.exports = function (grunt) {
    grunt.registerTask("default", function () {
        var defaultConfig = {
            pkg: grunt.file.readJSON("package.json"),

        }
    });
}




