module.exports = function(grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner:   '/*******************************************************************************\n' +
              '*        File: bootstrap-rtl.css\n' +
              '*      Author: <%= pkg.author %>\n' +
              '*  Created on: <%= grunt.template.today("mmmm dd,yyyy") %>\n' +
              '*     Project: <%= pkg.name %>\n' +
              '*   Copyright: See the file "LICENSE" for the full license governing this code.\n' +
              '*******************************************************************************/\n\n',
    jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error("Bootstrap requires jQuery") }\n\n',

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    recess: {
      options: {
        compile: true,
        banner: '<%= banner %>'
      },
      rtl: {
        src: ['less/bootstrap-rtl.less'],
        dest: 'dist/css/<%= pkg.name %>.css'
      },
      min: {
        options: {
          compress: true
        },
        src: ['less/bootstrap-rtl.less'],
        dest: 'dist/css/<%= pkg.name %>.min.css'
      },/*
      theme: {
        src: ['less/theme.less'],
        dest: 'dist/css/<%= pkg.name %>-theme.css'
      },
      theme_min: {
        options: {
          compress: true
        },
        src: ['less/theme.less'],
        dest: 'dist/css/<%= pkg.name %>-theme.min.css'
      }*/

    },

    copy: {
      fonts: {
        expand: true,
        src: ["assets/fonts/*"],
        flatten: true,
        dest: 'dist/fonts/'
      },
      js: {
        expand: true,
        src: ["assets/js/*"],
        flatten: true,
        dest: 'dist/js/'
      },
      css: {
        expand: true,
        src: ["assets/css/*"],
        flatten: true,
        dest: 'dist/css/'
      }
    }

  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-recess');

  // CSS distribution task.
  grunt.registerTask('dist-css', ['recess']);

  // Assets distribution task.
  grunt.registerTask('dist-assets', ['copy']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-assets', 'dist-css']);

  // Default task.
  grunt.registerTask('default', ['dist']);

};
