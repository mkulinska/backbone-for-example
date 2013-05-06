define(['backbone'],function(Backbone){
  'use strict';

  return Backbone.Model.extend({

    defaults: {
      title     : '',
      rand: 0
    },

    initialize : function() {
      this.attributes.rand = Math.random();
    }

  });
});