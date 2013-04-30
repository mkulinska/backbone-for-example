

;(function (requirejs, require) {

	"use strict";

	requirejs.config({
	    shim: {
	        'backbone': {
	            //These script dependencies should be loaded before loading
	            //backbone.js
	            deps: ['underscore', 'jquery'],
	            //Once loaded, use the global 'Backbone' as the
	            //module value.
	            exports: 'Backbone'
	        },
	        'underscore': {
	            exports: '_'
	        },
	        'backbone.marionette': {
	            deps: ['backbone'],
	            exports: 'Backbone.Marionette'
	        }
	    }
	});

	require(["jquery", "app", "underscore", "backbone"], function($, app) {
	    // do something when everything is loaded
	    $(function() {
	        app.trigger("initialize:test");
	    });
	});

})(requirejs,require)
