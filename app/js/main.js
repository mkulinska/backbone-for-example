

;(function (requirejs, require) {

	"use strict";

	requirejs.config({
        paths : {
            underscore : 'libs/underscore',
            backbone   : 'libs/backbone',
            marionette : 'libs/backbone.marionette',
            jquery     : 'libs/jquery',
           // tpl        : 'lib/tpl'
        },
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
	        'marionette': {
	            deps: ['backbone'],
	            exports: 'Backbone.Marionette'
	        }
	    }
	});


  require(['app','backbone','router','controller'],function(app,Backbone,Router,Controller){

    app.start();

    //new Router({
    //  controller : Controller
    //});

    //Backbone.history.start();

  });

})(requirejs,require);
