define(['marionette'], function (Marionette) {
  'use strict';

  return Marionette.CompositeView.extend({
    tagName : 'li',


    template: function (model) {
      return "subtitle: " + model.subtitle + " title: " + model.title + " nasz rand: " + model.rand ;
    },

    events: {
      click: 'alert'

    },


    alert: function () {
      alert(this.model.get('rand')) ;

    }


  });
});
