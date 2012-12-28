require([
	// Libs
	'jquery',
	'underscore',
	'backbone',

	// Deps
	'hbs!templates/index'
], function ($, _, Backbone, Template) {

	var View = Backbone.View.extend({

		template: Template,

		render: function () {
			var content = this.template();
			this.setElement(Template);

			$('#content').append(this.$el);

			return this;
		}

	});



});