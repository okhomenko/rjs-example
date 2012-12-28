({

	appDir: 'app/',
	baseUrl: './',
	dir: 'build/',

	optimize: 'none',

	mainConfigFile: 'app/config.js',
	stubModules: ['hbs'],

	paths: {
		jquery: 'empty:',
		underscore: '../js/underscore',
		backbone: 'empty:',
		handlebars: '../js/dev/Handlebars'
	},



	modules: [{
		name: 'main',
		exclude: ['underscore', 'handlebars', 'json2', 'i18nprecompile']
	}, {
		name: 'coupons',
		exclude: ['underscore', 'handlebars', 'json2', 'i18nprecompile']
	}]
})

