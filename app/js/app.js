
define(["marionette", "views/list", "collections/list", "views/preloader"],
       function ( Marionette, List, Collection, Preloader) {

         "use strict";


	     var app = new Marionette.Application();
         var collection = new Collection();

         app.addRegions({ "region_list": "#root"});

         app.addInitializer(function(){
           app.region_list.show(new Preloader);
           collection.fetch()
         });

         collection.on("reset", function () {
           app.region_list.show(new List({collection: collection}));
         });


	     return app;

       });
//
