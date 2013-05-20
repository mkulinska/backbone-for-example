define(["underscore", "marionette", "views/list", "views/details", "text!tpl/composit_list.html", "vent"],
      function (_, Marionette, List, Details, template, vent){
        'use strict';
        return Marionette.Layout.extend({

          template : _.template(template),

          regions: {
            list: '#list',
            details: '#details'
          },

          initialize: function () {
            console.log('composit_list ready');
            vent.on('show:details', function (recordId) {
              this.recordId = recordId;
              this.trigger('showDetails', recordId);
            }, this);

          },

          detailsHandler: function () {
            if(typeof this.recordId !== "undefined") {
              this.showDetails(this.recordId);

              this.collection.once('reset', function () {
                this.showDetails(this.recordId);
              }, this);

            }

            this.on('showDetails', this.showDetails);

          },

          onRender: function () {
            this.list.show(new List({collection: this.collection}));
            this.detailsHandler();
          },

          showDetails: function (recordId) {
            var models = this.collection.where({id: parseInt(recordId)});
            if(models.length) {
              this.details.show(new Details({model: models[0]}));
            } else {
              console.log('no matching models');
            }
          },

          onClose: function () {
            console.log('unbind events from vent');
            vent.off('show:details');
            this.collection.off('reset');
          }

        });
      });
