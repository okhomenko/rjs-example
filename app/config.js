require.config({

	paths: {
		underscore: [
			'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.3/underscore-min',
			'../js/underscore'
		],
		jquery: [
			'//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min',
			'../js/jquery'
		],
		backbone: [
			'//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.9/backbone-min',
			'../js/backbone'
		],
		handlebars: '../js/handlebars.runtime',

		hbs: '../js/dev/hbs',
		json2: '../js/dev/hbs/json2',
		i18nprecompile: '../js/dev/hbs/i18nprecompile'
	},

	shim: {

		underscore: {
			exports: '_'
		},

		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},

		handlebars: {
			exports: 'Handlebars'
		},

		json2: {
			exports: 'JSON'
		}

	},

	hbs: {
    	disableI18n: true
    }
});

