define(['underscore', 'marionette', 'text!tpl/list-item.html'], function (_, Marionette, template) {
  'use strict';

  return Marionette.CompositeView.extend({
    tagName : 'li',


    template: _.template(template),

    events: {
      click: 'showDetails'

    },

    showDetails: function () {
      document.location.hash = '/details/'+this.model.get('id');
    }


  });
});
