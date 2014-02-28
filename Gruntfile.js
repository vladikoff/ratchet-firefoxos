module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      theme: {
        options: {
          loadPath: 'node_modules/ratchet/sass'
        },
        files: {
          'theme-firefoxos.css': ['theme-firefoxos.scss'],
          'platform-firefoxos.css': ['platform-firefoxos.scss']
        }
      }
    },

    watch: {
      theme: {
        files: [
         'Gruntfile.js',
         'theme-firefoxos.scss',
         'platform-firefoxos.scss'
        ],
        tasks: ['sass']
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          useAvailablePort: true,
          open: true,
          keepalive: true,
          base: '.'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['sass', 'connect']);
};
