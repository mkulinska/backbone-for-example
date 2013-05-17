define(["underscore", "marionette", "text!tpl/details.html"],
      function (_, Marionette, template){
        'use strict';
        return Marionette.IemView.extend({

          template : _.template(template)


        });
      });
