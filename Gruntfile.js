module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
    ignore_warning: {
      options: {
        '-W030' : true
        },
      },
    files: ['Gruntfile.js', 'test/*.js', 'server.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
        } 
      }  
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false
        },
      src: ['spec/**/*.js']
      }
    },
    mocha_casperjs: {
      options: {
      }, 
      files: {
        src: ['test/*.js'] 
      }
    },
    express: {
      options:{},
      test: {
        options: {
          script: './server.js',
          node_env: 'test'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('default', ['express', 'mocha_casperjs']);

};
