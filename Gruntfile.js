// Travis CI task.

module.exports = function(grunt) {

    grunt.initConfig({

        qunit: {
            all : {
                options: { 
                    timeout: 500000,
                    urls: [
                        "./test/coverage.html?coverage=true"
                    ]
                }
            }
        },

        coveralls: {
            options: {
                force: true
            },
            all: {
                src: './.coverage-results/core.lcov',
            }
        }
    });

    grunt.event.on('qunit.report', function(data) {
        // visualize results local: genhtml .coverage-results/core.lcov
        grunt.file.write('./.coverage-results/core.lcov', data);
    });

    // Load plugin
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-coveralls');

    // Task to run tests
    grunt.registerTask('travis', ['qunit']);
}