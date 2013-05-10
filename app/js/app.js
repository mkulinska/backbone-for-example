
define(["marionette", "views/list"],
       function ( Marionette, List) {

         "use strict";


	     var app = new Marionette.Application();

         app.addRegions({ "region_list": "#root"});

         app.addInitializer(function(){
           this.region_list.show(new List);
         });


	     return app;

       });
// 
