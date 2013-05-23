define(["underscore", "marionette", "text!tpl/details.html"],
      function (_, Marionette, template){
        'use strict';
        return Marionette.ItemView.extend({

          template : _.template(template)


        });
      });
