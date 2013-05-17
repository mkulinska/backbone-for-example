define(["underscore", "marionette", "views/list", "views/details", "text!tpl/composit_list.html", "vent"],
      function (_, Marionette, List, Details, template, vent){
        'use strict';
        return Marionette.IemView.extend({

          template : _.template(template),

          regions: {
            list: '#list',
            details: '#details'
          },

          initialize: function () {
            this.list.show(new List({collection: this.collection}));
            vent.on('show:details', this.showDetails, this);
          },

          showDetails: function (recordId) {
            var model = this.collection.find({rand: recordId});
            this.details.show(new Details({model: model}));
          },

          onClose: function () {
            console.log('unbind events from vent');
            vent.off('show:details');
          }

        });
      });
