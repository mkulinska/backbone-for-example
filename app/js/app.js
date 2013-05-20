
define(["marionette", "views/composit_list", "collections/list", "views/preloader", "vent", "views/addRecord"],
       function ( Marionette, CompositeList, Collection, Preloader, vent, AddRecord) {

         "use strict";


	     var app = new Marionette.Application();
         var collection = new Collection();

         collection.fetch();

         app.addRegions({ "region_list": "#root"});

         vent.on("show:main show:details", function () {
           if(!(app.region_list.currentView instanceof CompositeList)) {
             app.region_list.show(new CompositeList({collection: collection}));
           }
           console.log('too late');
         });

         vent.on("show:addRecord", function () {
           app.region_list.show(new AddRecord({collection: collection}));
         });


	     return app;

       });
//
