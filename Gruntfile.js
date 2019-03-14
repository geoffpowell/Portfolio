module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      build: {
        files: {
          'build/css/style.css': 'assets/less/style.less',
          'build/css/normalize.css': 'assets/less/normalize.less',
          'build/css/fullpage.css': 'assets/less/fullpage.css',
          'build/css/overrides.css': 'assets/less/overrides.less',//
          'build/css/grid.css': 'assets/less/grid.less',//
          'build/css/base-styles.css': 'assets/less/base-styles.less',//
          'build/css/landing-and-header.css': 'assets/less/landing-and-header.less',//
          'build/css/portfolio.css': 'assets/less/portfolio.less',//
          'build/css/portfolio-details.css': 'assets/less/portfolio-details.less',//
          'build/css/resume.css': 'assets/less/resume.less',//
          'build/css/contact.css': 'assets/less/contact.less'//
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          //collapseWhitespace: true,
          //collapseInlineTagWhitespace: true,
          preserveLineBreaks: true,
        },
        files: {
        'build/index.html': 'assets/index.html'
        }
      }   
    },
    cssmin: {
      target: {
        files: {
          'build/css/style.min.css':'build/css/style.css'
        }
      }
    },
    uglify: {
      build: {
        files: {
          'build/js/app.min.js': 'assets/js/app.js'
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 3 versions'})
        ]
      },
      dist: {
        src: 'build/css/style.css'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: 'assets/less/*.less', //folders to watch
        tasks: ['buildcss', 'stylemin', 'autoprefix', 'stylemin']
      },
      html: {
        files: 'assets/index.html',
        tasks: ['buildhtml']
      },
      js: {
        files: 'assets/js/app.js',
        tasks: ['uglifyjs']
      }
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('buildcss', ['less:build']);
  grunt.registerTask('buildhtml', ['htmlmin']);
  grunt.registerTask('stylemin', ['cssmin']);
  grunt.registerTask('uglifyjs', ['uglify:build']);
  grunt.registerTask('autoprefix', ['postcss']);
};