
define(["jquery", "underscore", "backbone","backbone.marionette", "views/list"],
       function ($, _, Backbone, marionette, list) {

"use strict";


	var app = new Backbone.Marionette.Application();

  app.addRegions({ list: "#root"});

  app.addInitializer(function(){
    this.list.show(new list);
  });


	return app;
});