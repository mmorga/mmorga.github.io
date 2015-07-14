module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
      dist: {
        options: {
          csspath: '_site/css',
          htmlroot: '_site',
          ignoreSheets : [/fonts.googleapis/],
          report: 'min' // optional: include to report savings
        },
        files: {
          '_site/css/main.clean.css': ['_site/**/*.html']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-uncss');

  // Default task(s).
  grunt.registerTask('default', ['uncss']);
};
