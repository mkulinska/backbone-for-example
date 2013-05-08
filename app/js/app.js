
define(["jquery", "underscore", "backbone","backbone.marionette", "views/list"],
       function ($, _, Backbone, marionette, List) {

         "use strict";


	     var app = new Backbone.Marionette.Application();

         app.addRegions({ "region_list": "#root"});

         app.addInitializer(function(){
           this.region_list.show(new List);
         });


	     return app;
       });