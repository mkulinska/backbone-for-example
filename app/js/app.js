"use strict";

define(["jquery", "underscore", "backbone","backbone.marionette"], function ($, _, Backbone) {


	var app = new Backbone.Marionette.Application();

	app.start = function () {
		$("#root").html("działa");
	};

	return app;
});