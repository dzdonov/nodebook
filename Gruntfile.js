module.exports	=	function(grunt)	{

		grunt.loadNpmTasks('grunt-contrib-jshint');

		grunt.initConfig({
				jshint:	{
						all:	['Gruntfile.js',	'server.js',
                   'index.js', 'requestHandlers.js']
				}
				
		});
		grunt.registerTask('default','jshint');
};
