module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      build: {
        files: {
          //'build/css/style.css': 'assets/less/style.less',
          'build/css/normalize.css': 'assets/less/normalize.less',
          'build/css/overrides.css': 'assets/less/overrides.less',
          'build/css/grid.css': 'assets/less/grid.less',
          'build/css/base-styles.css': 'assets/less/base-styles.less',
          'build/css/landing-and-header.css': 'assets/less/landing-and-header.less',
          'build/css/portfolio.css': 'assets/less/portfolio.less',
          'build/css/resume.css': 'assets/less/resume.less',
          'build/css/contact.css': 'assets/less/contact.less'
          //'build/css/animations.css': 'assets/less/animations.less'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'assets/less/*.less',
        tasks: ['buildcss']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('buildcss', ['less:build'])
};