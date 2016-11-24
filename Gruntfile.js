'use strict';
module.exports = function(grunt) {
	
	//1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

	uglify: {
	build: {
		src: 'js/perfmatters.js',
		dest: 'js/permatters.min.js',
		src: 'views/js/main.js',
		dest: 'views/js/main.min.js',
		}
	},
	cssmin: {
    build:{
      src: 'views/css/style.css',
      dest:'views/css/style.min.css',
      src: 'views/css/bootstrap-grid.css',
      dest: 'views/css/bootstrap-grid.min.css',
      src:  'css/style.css',
      dest: 'css/style.min.css',
      src: 'css/print.css',
      dest:'css/print.min.css'
      }
	},
	imagemin: {
	build: {
		src: 'views/images/pizzeria.jpg',
		dest: 'views/images/pizzeria-min.jpg'
	 	}
	}
})

	// 2. Where we tell Grunt weplan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-ngrok');

	// 3. where we tell Grunt what to do when we type "grunt" into terminal,'cssmin'
	grunt.registerTask('default',['uglify']);
	grunt.registerTask('default',['cssmin']);
	grunt.registerTask('default',['imagemin']);
	grunt.registerTask('default',['ngrok']);
};