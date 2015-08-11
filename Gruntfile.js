// Travis CI task.

module.exports = function(grunt) {
  grunt.initConfig({
    qunit: {
      files: ['test/composite.html']
    }
  });

  // Load plugin
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Task to run tests
  grunt.registerTask('travis', ['qunit']);
}