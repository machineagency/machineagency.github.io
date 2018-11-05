module.exports = function(grunt) {

  grunt.initConfig({

    postcss: {
      options: {
        map: true,
        processors: [
          require('lost')
        ]
      },
      dist: {
        src: 'src/style-pre.css',
        dest: 'src/style.css'
      }
    },

    autoprefixer: {
      single_file: {
        src: 'stc/style.css',
        dest: 'src/style.css'
      }
    },

    watch: {
      files: ['src/style-pre.css'],
      tasks: ['postcss', 'autoprefixer']
    }

  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
