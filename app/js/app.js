
define(["marionette", "views/list", "collections/list", "views/preloader", "vent", "views/addRecord"],
       function ( Marionette, List, Collection, Preloader, vent, AddRecord) {

         "use strict";


	     var app = new Marionette.Application();
         var collection = new Collection();

         app.addRegions({ "region_list": "#root"});

         app.addInitializer(function(){
           app.region_list.show(new Preloader);
         });

         vent.on("show:main", function () {

           app.region_list.show(new Preloader);

           collection.fetch()

           collection.on("reset", function () {
             app.region_list.show(new List({collection: collection}));
           });

         });

         vent.on("show:addRecord", function () {
           app.region_list.show(new AddRecord);
         });


	     return app;

       });
//
