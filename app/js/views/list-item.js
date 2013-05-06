define(['backbone.marionette'], function (Marionette) {
  'use strict';

  return Marionette.CompositeView.extend({
    tagName : 'li',

    template: function (model) {
      return "nasz rand: " + model.rand ;
    }

  });
});